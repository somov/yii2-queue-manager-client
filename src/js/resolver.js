import {str as CRC32} from 'crc-32';
import Manager from './manager';
import extend from './utils/extend';
import * as Obj from './utils/obj';
import StatusesList from "./statusesList";
import TaskAbstract from "./taskAbstract";

const EMPTY_MESSAGE = '__EMPTY__';

const Defaults = {
    method: 'post',
    delayTime: 1000,
    params: {}
};

/**
 * Resolve task information
 */
export default class Resolver {

    /**
     * @type {Resolver[]}
     * @private
     */
    static #cache = [];

    /**
     * @type {Manager[]}
     */
    static #commonManagers = [];

    /**
     * @type {Manager[]}
     */
    #managers = [];

    /**
     * @type {{}}
     */
    #options;

    /**
     *
     * @type {number}
     */
    #numberRequests = -1;

    /**
     * @param {Object} options
     */
    constructor(options) {
        const opt =  this.#options = extend({}, Defaults, options);
        if (opt.params && Obj.isPlain(opt.params)) {
            opt.params = Object.entries(opt.params).map(([key, value]) => `${key}=${value}`);
        }

    }

    /**
     * @param {function} onStart
     * @param {function} onEnd
     */
    resolve(onStart, onEnd) {
        if (this.isRunning === false) {
            const managers = this.#getManagers();

            this.#numberRequests = 0;

            managers.forEach((manager) => onStart(manager));
            this.#request(0).catch(function (error) {
                if (error !== EMPTY_MESSAGE) {
                    console.error(error);
                }
            }).then(() => {
                const number = this.#numberRequests;
                managers.forEach((manager) => onEnd(manager, number));
                this.#numberRequests = -1;
                return number;
            })
        }
    }

    /**
     * @return {Promise}
     */
    #request(timeOut = this.options.delayTime) {
        return this.#createRequest(timeOut).then((response) => {
            if (response.ok === false) {
                throw  Error(`${response.status} - ${response.statusText}' `)
            }
            return response.json().then((raw) => {
                if (raw.length > 0) {
                    raw.forEach((item) => {
                        this.findTasks(item.id).forEach((task) => {
                                task.manager._updateTask(task, item)
                            }
                        );
                    });
                    Resolver.#updateCommonManagers(raw, this);
                }
                return this.#request();
            });

        });
    }

    /**
     * @param {Object[]} response
     * @param resolver
     */
    static #updateCommonManagers(response, resolver) {
        Resolver.#commonManagers.forEach(manager => {
            response.forEach(item => {
                    let task = manager.findTask(item.id);
                    if (task === null && StatusesList.is(StatusesList.SET_COMPLETE, item.status) === false ) {
                        item.common = true;
                        manager.addTasks([item.id], false);
                        task = manager.findTask(item.id);
                        manager._updateTask(task, item);
                        task.initiatorManager = resolver.tasks.find(value => value.id === item.id)?.manager;
                    }
                    if (task instanceof TaskAbstract && task.common) {
                        manager._updateTask(task, item);
                    }
                //}
            })
        })
    }

    /**
     * @param {Number} timeOut
     * @return {Promise<Response | never>}
     */
    #createRequest(timeOut) {
        return new Promise((resolve, reject) => {
            const tasks = this.tasksId;
            if (tasks.length === 0) {
                reject(EMPTY_MESSAGE);
            } else {
                setTimeout(() => resolve(tasks), timeOut)
            }
        }).then((tasks) => {
            ++this.#numberRequests;

            let body = tasks.map((item) => `t[]=${item}`),
                params = this.options.params;

            if (Array.isArray(params) && params.length > 0) {
                body = body.concat(params);
            }

            return fetch(this.options.url, extend({}, this.options, {
                    method: 'post',
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded"
                    },
                    body: encodeURI(body.join('&'))
                })
            );
        });
    }

    /**
     * @return {TaskAbstract[]}
     */
    get tasks() {
        let tasks = [];
        this.#managers.forEach(function (manager) {
            manager.getTasks().forEach(function (task) {
                if (task.common === false) {
                    tasks.push(task);
                }
            });
        });
        return tasks;
    }


    /**
     * @return {Number[]}
     */
    get tasksId() {
        return this.tasks.map((task) => task.id).filter((value, index, array) => {
            return array.indexOf(value === index);
        });
    }

    /**
     *
     * @param id
     * @return {TaskAbstract|boolean}
     */
    findTasks(id) {
        return this.tasks.filter((task) => task.id === id);
    }

    /**
     * @return {Object}
     */
    get options() {
        return this.#options
    }

    /**
     * @return {boolean}
     */
    get isRunning() {
        return this.#numberRequests > -1;
    }

    /**
     * @return {Manager[]}
     */
    #getManagers(common = false) {
        if (common === false) {
            return this.#managers;
        }
        return this.#managers.filter(function (manager) {
            return manager.options.common === true;
        })
    }


    /**
     * @param {Manager} manager
     * @return {Resolver}
     */
    static factory(manager) {
        const
            options = manager.options.resolver,
            hash = CRC32(options.url),
            cache = Resolver.#cache,
            commonManagers = Resolver.#commonManagers;

        const resolver = cache[hash] = (cache[hash] instanceof Resolver) ? cache[hash] : new Resolver(options),
            managers = resolver.#getManagers();

        if (managers.indexOf(manager) === -1) {
            managers.push(manager);

            if (manager.options.common) {
                commonManagers.push(manager);
            }

            manager.ownerElement.addEventListener(Manager.Events.destroy, function (event) {
                let index = managers.indexOf(event.manager);
                if (index > -1) {
                    commonManagers.forEach(function (manager) {
                        manager.getTasks().filter(value => value.initiatorManager === managers[index]).forEach(function (task) {
                            manager.removeTask(task);
                        })
                    });
                    managers.splice(index, 1);
                }
                index = commonManagers.findIndex(value => value === event.manager);
                if (index > -1) {
                    commonManagers.splice(index, 1);
                }
            });
        }

        return resolver;
    }

}