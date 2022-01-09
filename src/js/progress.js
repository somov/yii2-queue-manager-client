import * as Dom from './utils/dom';
import extend from './utils/extend';
import UIComponent from './uIComponent';

/**
 *
 */
export default class Progress extends UIComponent {

    /**
     *
     * @type {string}
     */
    label = '';

    /**
     *
     * @type {string}

     */
    className = Progress.getClassName('progress');

    /**
     *
     * @type {string|null}
     */
    size = null;

    /**
     *
     * @type {ProgressBar[]}
     */
    #bars = [];

    barOptions = {};

    /**
     *
     * @type {Element|HTMLElement}
     */
    #labelEl = null;

    /**
     * @type {Element|HTMLElement}
     */
    #el = null;

    /**
     * @type {boolean}
     */
    isShowGradient = true;

    /**
     * @type {string|null}
     */
    static $classPrefix = null;


    /**
     * @param {Object} options
     */
    constructor(...options) {
        super();
        extend(this, ...options);
    }

    /**
     *
     * @return {Element}
     */
    render() {
        let el = this.#el;
        if (el instanceof HTMLElement) {
            return el;
        }

        let className = this.className;

        if (this.size) {
            className += ' ' + Progress.getClassName('size-' + this.size);
        }

        if (this.isShowGradient === false) {
            className += ' ' + Progress.getClassName('no-gradient');
        }

        el = Dom.createEl('div', {className: className}, {},
            Dom.createEl('div', {className: Progress.getClassName('progress-items')})
        );

        return this.#el = el;
    }

    /**
     *
     * @return {HTMLElement|Element}
     */
    #getLabelEl() {
        let el = this.#labelEl;
        if (el instanceof Element) {
            return el;
        }
        this.#labelEl = el = Dom.createEl('span', {className: Progress.getClassName('progress-label')}, {})
        this.#el.append(el);

        return el;
    }

    /**
     * @param {number|number[]} value
     */
    setProgress(value) {

        const bars = this.#bars,
            el = this.#el;

        value = (false === Array.isArray(value)) ? [value] : value;

        value.forEach((value, index) => {
            value = parseInt(value);
            if (bars[index] instanceof ProgressBar) {
                bars[index].progress = value;
            } else {
                bars[index] = new ProgressBar(this.barOptions, {
                    progress: value
                });
                el.querySelector('.' + Progress.getClassName('progress-items')).append(
                    Dom.createEl('div', {
                        className: Progress.getClassName('progress-item'),
                    }, {}, bars[index].render())
                );
            }
        });

        const classThoCheck = Progress.getClassName('more-than-three');
        if (Dom.hasClass(el, classThoCheck) === false && value.length > 3) {
            Dom.addClass(el, classThoCheck);
        }

    }

    /**
     * @param label
     */
    setLabel(label) {
        if (label) {
            this.#getLabelEl().innerHTML = label;
        }
    }

}


/**
 *
 */
export class ProgressBar {

    /**
     * @type {boolean|HTMLElement}
     */
    #element = false;

    /**
     *
     * @type {string}
     */
    className = 'progress-bar';

    /**
     *
     * @type {number}
     */
    #progress = 0;

    /**
     * @type {string|boolean}
     */
    labelText = '';

    /**
     * @type {number}
     */
    min = 0;

    /**
     *
     * @type {number}
     */
    max = 100;


    /**
     * @param {Object} options
     */
    constructor(...options) {
        extend(this, ...options);
    }

    /**
     * @return {Element}
     */
    render() {
        let el = this.#element;
        if (el) {
            return el
        }
        /**
         * @type {Array|String}
         */
        let content = [];

        if (this.labelText === false) {
            content.push(Dom.createEl('span', {className: 'sr-only', css: {width: 0}}, {}, this.label));
        } else {
            content = this.label
        }

        this.#element = el = Dom.createEl('div', {
            className: Progress.getClassName(this.className)
        }, {
            role: "progressbar",
            'aria-valuenow': this.progress,
            'aria-valuemin': this.min,
            'aria-valuemax': this.max
        }, content);

        return el;
    }

    /**
     * @return {string}
     */
    get label() {
        const label = (this.labelText) ? this.labelText : '';
        return `${this.progress}% ${label}`
    }

    /**
     * @return {number}
     */
    get progress() {
        return this.#progress;
    }

    /**
     * @param {number} value
     */
    set progress(value) {
        this.#progress = value;
        const element = this.render();

        element.setAttribute('aria-valuenow', value);
        if (element.childNodes.length > 0) {
            element.childNodes[0].textContent = this.label;
        } else {
            element.textContent = this.label;
        }
        element.style.width = `${value}%`

    }
}