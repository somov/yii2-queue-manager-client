import Statuses from './statusesList';
import * as Dom from './utils/dom';
import StatusesList from './statusesList';
import UIComponent from './uIComponent';

/**
 *@interface
 */
export default class TaskAbstract extends UIComponent {

    /**
     * @type {Manager}
     */
    #manager = null;

    /**
     * @type {number}
     */
    id;

    /**
     * @type {boolean}
     */
    common = false;

    /**
     * @type {Manager}
     */
    initiatorManager;

    /**
     * @type {number}
     */
    progress = 0;

    /**
     * @type {string}
     */
    text = '';

    /**
     * @type {string}
     */
    title = '';

    /**
     * @type {number}
     */
    status = Statuses.INIT;

    /**
     * @type {Element}
     */
    #element = null;
    /**
     * @type {{init: null, hide: null, show: null, refresh: null, render: null, remove: null}}
     */
    callbacks = {
        init: null,
        render: null,
        show: null,
        refresh: null,
        hide: null,
        remove: null
    };

    /**
     * @type {Object|null}
     */
    result = null;


    /**
     * @param {number|string} id
     * @param {Manager} manager
     */
    constructor(id, manager) {
        super();
        this.id = parseInt(id);
        this.#manager = manager;
        setTimeout(() => this.callCallback('init'), 50);
    }

    /**
     * @param {string} type
     * @param {Array} params
     */
    callCallback(type, params = []) {
        if (this.common) {
            return;
        }
        if (typeof this.callbacks[type] === 'function') {
            this.callbacks[type].apply(this, params);
        }
    }

    /**
     * @private
     * @return {Element}
     */
    #render() {
        if (this.#element) {
            return this.#element;
        }

        const element = this.#element = this.createEl('div', {
                className: 'wrapper',
            }, {
                'data-task-id': this.id
            }),

            elTask = this.createEl('div', {className: this._buildCssClass()});
        this._renderChild(elTask);
        this.callCallback('render', [elTask, element]);
        element.append(elTask);

        return element;
    }

    /**
     * @return {Element}
     */
    get el() {
        return this.#element;
    }

    /**
     * Render child instances
     * @protected
     */
    _renderChild(elWrapper) {

    }

    // noinspection JSMethodCanBeStatic
    /**
     * @return {Array}
     * @protected
     */
    _buildCssClass() {
        return ['task-item']
    }


    /**
     * @return {Object}
     */
    static #cssList = function () {

        if (this._cssList) {
            return this._cssList;
        }
        this._cssList = {};

        for (let statusesListKey in StatusesList) {
            if (typeof StatusesList[statusesListKey] === 'number') {
                this._cssList[StatusesList[statusesListKey]] = UIComponent.getClassName('status-' + statusesListKey.toLowerCase())
            }
        }
        return this._cssList;
    };


    cssClassSwitch() {

        const element = this.#render();
        let cssClass, searchClass;

        if (typeof this.manager.options.theme === 'object') {
            let theme = this.manager.options.theme[this.status] || false;
            if (theme) {
                cssClass = TaskAbstract.getClassName('theme-' + theme);
                searchClass = TaskAbstract.getClassName('theme');
                Dom.switchClass(element, cssClass, searchClass);
            }
        }
        cssClass = TaskAbstract.#cssList()[this.status];
        searchClass = TaskAbstract.getClassName('status');
        Dom.switchClass(element, cssClass, searchClass);

    }

    /**
     *
     * @param {Object} response
     * @param {Object} elements
     */
    refresh(response, elements = null) {
        this.#render();
        if (elements) {
            this._refreshElements(elements, response);
        }
        this.callCallback('refresh', [response, elements]);
    }

    /**
     *
     * @param property
     * @return {number}
     */
    getProgressTotal(property = 'progress') {
        let value = 0;

        if (this.hasOwnProperty(property)) {
            value = this[property];
            if (typeof value === 'object' && value.length) {
                value = Math.round(value.reduce((a, c) => a + c) / value.length, 0);
            }
        }
        return value;
    }

    /**
     *
     * @param elements
     * @param oldTask
     * @protected
     */
    _refreshElements(elements, oldTask) {
        const optionsParts = this.options.parts;

        Object.keys(elements).forEach((elementName) => {
            let property = optionsParts[elementName],
                method = 'refreshBasicProperty';

            if (typeof property === 'string') {
                if (property.indexOf('.') > 0) {
                    let [m, p] = property.split('.');
                    method = m + p[0].toUpperCase() + p.slice(1);
                    property = p;
                }

                const value = (typeof this[property] !== "undefined") ? this[property] : null,
                    oldValue = (typeof oldTask[property] !== "undefined") ? oldTask[property] : null;

                if (value !== oldValue) {
                    method = '_' + method;

                    if (typeof this[method] === "function") {
                        this[method].call(this, elements[elementName], value, property);
                    }
                }
            }
        });
    }


    // noinspection JSMethodCanBeStatic
    /**
     *
     * @param {Element} element
     * @param {string|number|Array} value
     * @param {string} property
     * @protected
     */
    _refreshBasicProperty(element, value, property) {

        if (Array.isArray(value)) {
            const className = TaskAbstract.getClassName('list-' + property);
            let elList = Dom.$('ul.' + className, element);

            if (elList === null) {
                elList = this.createEl('ul', {className: className});
                element.append(elList);
            }
            value.forEach(function (value, index) {
                let elLi = Dom.$(`li:nth-child(${index + 1})`, elList);
                if (elLi === null) {
                    elList.append(Dom.createEl('li', {}, {}, value));
                } else if (elLi.innerText !== value) {
                    elLi.innerText = value;
                }
            })

        } else {
            element.innerHTML = value;
        }
    }

    /**
     * @return {Manager}
     */
    get manager() {
        return this.#manager;
    }

    /**
     * @return {Element}
     */
    get element() {
        return this.#element;
    }

    /**
     * @return {Defaults.taskOptions|{}}
     */
    get options() {
        return this.manager.options.taskOptions;
    }

    /**
     * @return {string}
     */
    get statusText() {
        return this.manager.options.statusText[this.status] || '';
    }

    /**
     *
     * @return {string}
     */
    getTitle() {
        return '';
    }

    /**
     *
     */
    toString() {
        return this.statusText + " " + this.getTitle();
    }


}