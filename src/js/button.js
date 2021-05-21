import UIComponent from './uIComponent';
import * as Dom from './utils/dom';
import extend from './utils/extend';
import IconT from './icont';

/**
 *
 * @type {{iconHoverName: null, handler: null, size: null, data: {}, hiddenLabel: string, iconName: null, animatedClick: boolean, handlerTimoutDelay: number, iconSize: null, disabled: boolean, label: boolean, tagName: string}}
 */
const Defaults = {
    /**
     * @type {String}
     */
    tagName: 'button',

    /**
     * @type {function}
     */
    handler: null,

    /**
     * @type {number}
     */
    handlerTimoutDelay: 500,

    /**
     * @type {String}
     */
    label: false,

    /**
     * @type {String}
     */
    hiddenLabel: '',

    /**
     * @type {boolean}
     */
    disabled: false,


    /**
     * @type {String|null}
     */
    size: null,
    /**
     * @type {String|null}
     */
    iconName: null,

    /**
     * @type {String|null}
     */
    iconHoverName: null,

    /**
     * @type {String|null}
     */
    iconSize: null,

    /**
     * @type {Boolean}
     */
    animatedClick: true,

    /**
     * @type {Object}
     */
    data: {}

};

/**
 *
 */
export default class Button extends UIComponent {


    /**
     * @type {Element}
     */
    #element;

    /**
     * @type {Defaults}
     */
    #options = Defaults;

    /**
     * @type {IconT}
     */
    #icon = null;

    /**
     * @param {Defaults} options
     */
    constructor(options) {
        super();
        if (options && typeof options === 'object') {
            this.#options = extend({}, Defaults, options)
        }

    }

    /**
     * @return {Element}
     */
    render() {
        let el = this.#element;
        if (el instanceof Element) {
            return el;
        }

        const
            options = this.options,
            content = [];

        if (options.iconName) {
            const i = this.icon;
            content.push(i.render());
            i.icon = options.iconName;
            i.size = options.iconSize;
        }

        if (options.label) {
            content.push(Dom.createEl('p', {}, {}, options.label));
        }

        if (options.hiddenLabel) {
            content.push(this.createEl('p', {className: 'button-hidden'}, {}, options.hiddenLabel));
        }

        if (options.animatedClick) {
            const drop = Dom.createEl('p', {className: 'drop'});
            drop.addEventListener('animationend', function () {
                Dom.removeClass(this, 'animate');
            });
            content.push(drop);
        }

        el = this.#element = this.createEl(options.tagName, {className: Button.#buildClassName(options)}, {}, content);

        this.disabled = options.disabled;
        this.#addHandlers(el, options);

        return el
    }

    /**
     *
     * @param {Defaults} options
     * @return {Array}
     */
    static #buildClassName(options) {
        let result = ['button'];

        if (options.size) {
            result.push('size-' + options.size);
        }

        if (options.hiddenLabel) {
            result.push('has-hidden');
        }

        return result;
    }

    /**
     * @param {Boolean} value
     */
    set disabled(value) {

        const options = this.options;
        if (value !== options.disabled) {
            if (options.tagName.toLowerCase() === 'button') {
                this.#element.disabled = value;
            } else {
                Dom.toggleClass(this.#element, 'disabled');
            }
            options.disabled = value;
        }
    }

    /**
     * @return {Defaults}
     */
    get options() {
        return this.#options;
    }

    /**
     * @return {Element}
     */
    get element() {
        return this.render();
    }

    /**
     *
     * @return {IconT}
     */
    get icon() {
        let icon = this.#icon;
        if (icon instanceof IconT) {
            return icon;
        }
        return this.#icon = new IconT();
    }

    /**
     * @param element
     * @param options
     */
    #addHandlers(element, options) {

        element.addEventListener('click', (event) => {

            if (options.disabled) {
                event.stopImmediatePropagation();
                return false;
            }
            if (options.animatedClick) {
                Button.#animatedClick(element);
            }
        });

        if (typeof options.handler === 'function') {
            if (options.handlerTimoutDelay > 0) {
                element.addEventListener('click', (event) => {
                    setTimeout(() => options.handler.call(this, event), options.handlerTimoutDelay);
                });
            } else {
                element.addEventListener('click', options.handler.bind(this));
            }
        }

        if (options.iconHoverName) {
            element.addEventListener('mouseenter', () => {
                if (options.disabled === false) {
                    this.icon.icon = options.iconHoverName;
                }
            });
            element.addEventListener('mouseleave', () => {
                this.icon.icon = options.iconName
            });
        }

    }


    /**
     * @param element
     */
    static #animatedClick(element) {

        const drop = Dom.$('.drop', element);
        if (drop) {

            const rect = Dom.getBoundingClientRect(element),
                x = event.pageX - rect.width / 2 - rect.left - window.scrollX,
                y = event.pageY - rect.height / 2 - rect.top - window.scrollY;

            drop.style.top = y + 'px';
            drop.style.left = x + 'px';

            Dom.addClass(drop, 'animate');
        }
    }


}

Button.Defaults = Defaults;


