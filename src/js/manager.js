import UIComponent from './uIComponent';
import Resolver from './resolver';
import Events from './eventsList';
import Statuses from './statusesList';
import ManagerEvent from './managerEvent';
import TaskAbstract from "./taskAbstract";
import Task from './task';
import Icon from './icont';
import Button from './button';
import ButtonsGroup from './buttonsGroup';

import extend from './utils/extend';
import * as Dom from './utils/dom';
import animateEl, {fadeIn} from './utils/animate';


const Defaults = {
    common: false,
    title: '<h3>Backgrounds tasks</h3>',
    theme: {'-1': "default"},
    renderOnEmpty: true,
    taskClass: Task,
    emptyText: 'Tasks not provided yet',
    taskOptions: {},
    tasks: [],
    statusText: {},
    hideAnimation: {
        name: 'fadeOut',
        duration: 1000,
        timing: 'linear',
        delay: 0
    },
    showAnimation: {
        name: 'fadeIn',
        duration: 1000,
        timing: 'linear',
        delay: 0
    },
    tasksAnimation: {
        hide: {},
        show: {}
    },
    resolver: {
        url: 'queue-reader'
    }
};


Defaults.tasksAnimation.hide[Statuses.DONE] = extend({}, Defaults.hideAnimation, {delay: 5000});
Defaults.tasksAnimation.hide[Statuses.ERROR] = extend({}, Defaults.hideAnimation, {delay: 20000});
Defaults.tasksAnimation.show[Statuses.EXEC] = extend({}, Defaults.showAnimation, {duration: 500});
Defaults.tasksAnimation.show[Statuses.WAIT] = extend({}, Defaults.showAnimation, {duration: 500});

Defaults.tasksAnimation.hide[Statuses.ERROR] = false; //not remove Task element from dom

Defaults.statusText[Statuses.DONE] = 'Complete';
Defaults.statusText[Statuses.ERROR] = 'Complete with errors';
Defaults.statusText[Statuses.EXEC] = 'Processing';
Defaults.statusText[Statuses.WAIT] = 'Awaiting';


/**
 *
 */
class Manager extends UIComponent {

    /**
     * @type {Resolver}
     * @private
     */
    #resolver = null;

    #elements = {
        /**
         * @type {Element}
         */
        owner: null,

        /**
         * @type {Element}
         */
        wrapper: null,

        /**
         * @type {Element}
         */
        wrapperTasks: null,

        /**
         * @type {Element}
         */
        emptyText: null
    };

    /**
     * @type {TaskAbstract[]}
     */
    #tasks = [];

    /**
     * @type {Object}
     */
    #options = {};

    /**
     * @param options
     */
    constructor(options) {
        super();

        this.#elements.owner = UIComponent.removeOptionsPtoperty('element', options);
        let opt = extend({}, Manager.Defaults, options);
        this.#options = extend({}, {
            taskOptions: opt.taskClass.Defualts
        }, opt);

        this.#resolver = Resolver.factory(this);

        this.render();

        if (options.tasks && typeof options.tasks.length !== "undefined") {
            this.addTasks(options.tasks);
        }

        //check later added tasks,
        setTimeout(() => {
            if (this.getTasks().length === 0) {
                this.#toggleEmptyText('show');
            }
        }, 200);

        this.trigger(Events.ready, {bubbles: true});

    }

    /**
     * Destructor of manager instance
     */
    destroy() {
        this.trigger(Events.destroy, {bubbles: true});
        this.#tasks = [];
        this.ownerElement.remove();
    }

    /**
     * @return {Object}
     */
    get options() {
        return this.#options;
    }

    /**
     * @param {string} type
     * @param {Object} props
     * @param {Object|null} detail
     * @return {boolean}
     */
    trigger(type, props = {}, detail) {

        if (typeof detail == "object") {
            props.detail = {};
            for (const [key, value] of Object.entries(detail)) {
                props.detail[key] = value;
            }
        }
        return this.ownerElement.dispatchEvent(new ManagerEvent(this, type, props));
    }

    /**
     * @return {boolean}
     */
    render() {
        const tasks = this.getTasks(Statuses.SET_VISIBLE);

        if (tasks.length === 0 && this.options.renderOnEmpty === false) {
            return false;
        }

        const elements = this.#elements;

        if (elements.wrapper === null) {
            const options = this.options;

            elements.wrapper = elements.owner.appendChild(this.createEl('div', {className: 'wrapper'}));

            if (elements.wrapper.childNodes.length === 0) {
                if (options.title && this.options.title.length > 0) {
                    elements.wrapper.appendChild(this.createEl('div', {
                        innerHTML: this.options.title,
                        className: 'title'
                    }))
                }

                elements.wrapperTasks = elements.wrapper.appendChild(
                    this.createEl('div', {className: 'tasks'})
                );

                if (options.emptyText.length > 0) {
                    elements.emptyText = elements.wrapper.appendChild(elements.emptyText = this.createEl('div', {
                            className: 'empty-wrapper',
                            style: {
                                display: 'none'
                            }
                        }, {}, [
                            this.createEl('span', {className: 'empty-text', textContent: options.emptyText})
                        ]
                        )
                    );
                }
            }

            if (typeof options.theme === 'string') {
                Dom.switchClass(elements.wrapper, Manager.getClassName('theme-' + options.theme), Manager.getClassName('theme'));
            }

        }

        tasks.forEach((task) => task.refresh());

        return true;
    }


    /**
     *
     * @param {string} type
     * @return {Promise}
     */
    #toggleEmptyText(type) {
        const el = this.#elements.emptyText,
            visible = Dom.isVisible(el);

        if (Dom.isEl(el)) {
            if ((visible && type === 'hide') || (visible === false && type === 'show')) {
                return animateEl(el, this.options[type + 'Animation'])
            }

            el.style.display = (type === 'show') ? 'block' : 'none';

        }
        return Promise.resolve(el);
    }

    /**
     *
     * @param {Object[]}tasks
     * @param {boolean} resolve
     */
    addTasks(tasks, resolve = true) {
        if (Array.isArray(tasks) === false) {
            throw new Error('Not valid call. Argument tasks is not array type ');
        }

        this.#taskFactory(tasks);
        this.#tasks = this.#tasks.concat(tasks);

        tasks.forEach((task) => this.trigger(Events.newTask, {bubbles: true}, {task: task}));

        this.#toggleEmptyText('hide').then(() => {
            if (resolve) {
                this.resolver.resolve((manager) => {
                        if (manager.getTasks().length > 0) {
                            manager.trigger(Events.fetchStart, {bubbles: true})
                        }
                    },
                    (manager, numberRequests) => {
                        manager.trigger(Events.fetchEnd, {bubbles: true}, {requests: numberRequests})
                    });
            }
        })

    }

    /**
     * @param {TaskAbstract} task
     * @param {Object} response
     * @private
     */
    _updateTask(task, response) {

        if (task.progress !== response.progress || task.status !== response.status
            || task.text !== response.text || task.title !== response.title) {
            const isStatusChange = task.status !== response.status,
                oldData = extend({}, task);
            task = extend(task, response);
            task.refresh(oldData);

            if (isStatusChange) {

                task.cssClassSwitch();

                this.trigger(Events.statusChange, {bubbles: true}, {
                    task: task,
                    oldStatus: oldData.status
                });

                if (Statuses.is(Statuses.SET_VISIBLE, task.status)) {
                    if (task.element.parentNode === null) {
                        const element = task.element;
                        element.style.display = 'none';
                        this.wrapperTasksElement.append(element);
                        animateEl(element, this.#taskAnimation(task, 'show'));
                    }
                }

                if (Statuses.is(Statuses.SET_COMPLETE, task.status)) {
                    this.removeTask(task);
                }
            }
        }
    }

    /**
     *
     * @param {TaskAbstract|number} task Task instance or task id
     * @return {Boolean}
     */
    removeTask(task) {

        if (typeof task === 'number') {
            task = this.findTask(task);
        }

        if (task instanceof TaskAbstract) {
            const id = this.getTasks().findIndex((t) => t.id === task.id);
            if (id > -1) {
                this.#tasks.splice(id, 1);

                this.trigger(Events.taskRemoved, {bubbles: true}, {
                    task: task
                });

                if (task.element.parentNode instanceof Element) {
                    this.#removeEl(task.element, this.#taskAnimation(task)).then((el) => {
                        this.trigger(Events.taskElementRemoved, {bubbles: true}, {
                            task: task,
                            element: el
                        });
                        if (this.#tasks.length === 0) {
                            this.#toggleEmptyText('show');
                        }
                    });
                }
                return true;
            }
        }
        return false;
    }

    /**
     * @param {TaskAbstract} task
     * @param {string} type
     * @return {Object}
     */
    #taskAnimation(task, type = 'hide') {
        const options = this.options;
        if (typeof options.tasksAnimation[type][task.status] !== "undefined") {
            return options.tasksAnimation[type][task.status];
        } else {
            return options[type + 'Animation'];
        }
    }


    /**
     * @param {number[]|menubar} statusFilter
     * @return {TaskAbstract[]}
     */
    getTasks(statusFilter) {

        let tasks = this.#tasks;

        if (statusFilter) {
            if (typeof statusFilter === 'number') {
                statusFilter = [statusFilter];
            }
            return tasks.filter(function (task) {
                if (statusFilter.indexOf(task.status) > -1) {
                    return task;
                }
            })
        }

        return tasks;
    }


    /**
     * @param id
     * @return {TaskAbstract|null}
     */
    findTask(id) {
        const task = this.getTasks().find((t) => t.id === id);
        if (task instanceof TaskAbstract) {
            return task;
        }
        return null;
    }

    /**
     * @param {Object[]|number[]} tasks
     */
    #taskFactory(tasks) {
        const TaskClass = this.options.taskClass;
        tasks.forEach((item, index) => {
            if (item instanceof TaskAbstract) {
                return;
            }
            if (typeof item === 'object' && typeof item.id !== undefined ) {
                const id = item.id;
                delete  item.id;
                tasks[index] = extend(new TaskClass(id, this), item);
            } else if (Number.parseInt(item) > 0) {
                tasks[index] = new TaskClass(item, this)
            } else {
                console.log('Delete not valid task item', item);
                tasks.splice(index, 1);
            }
        });
    }

    /**
     * @param {Element} el
     * @param {Object|false}animation
     * @return {Promise}
     */
    #removeEl(el, animation = this.options.hideAnimation) {

        if (animation !== false) {
            return animateEl(el, animation).then((el) => {
                el.remove();
                return el;
            });
        } else {
            return Promise.resolve(false)
        }
    }


    /**
     * @return {Element}
     */
    get ownerElement() {
        return this.#elements.owner;
    }

    /**
     * @return {Element}
     */
    get wrapperElement() {
        return this.#elements.wrapper;
    }

    /**
     * @return {Element}
     */
    get wrapperTasksElement() {
        return this.#elements.wrapperTasks;
    }


    /**
     * @return {Resolver}
     */
    get resolver() {
        return this.#resolver
    }


}

UIComponent.classPrefix = 'qmc-';

Manager.TaskAbstract = TaskAbstract;
Manager.Button = Button;
Manager.ButtonsGroup = ButtonsGroup;
Manager.Icon = Icon;

Manager.Defaults = Defaults;
Manager.Events = Events;
Manager.Statuses = Statuses;


export default Manager;