import UIComponent from './uIComponent';
import * as Dom from './utils/dom';


/**
 *
 */
export default class IconT extends UIComponent{


    /**
     * @type {Element}
     */
    #element;

    /**
     *
     * @type {boolean|string}
     */
    #icon = false;

    /**
     * @type {boolean|string}
     */
    #size = false;

    /**
     * @param {boolean|string} icon
     * @param {boolean|string} size
     */
    constructor(icon = false, size = false) {
        super();
        this.#icon = icon;
        this.#size = size;
    }

    /**
     * @return {Element}
     */
    render() {
        let el = this.#element;
        if (el instanceof Element) {
            return el;
        }

        return this.#element = this.createEl('span', {className: this.#buildClassName()}, {},
            Dom.createEl('span', {}, {}, ['s1', 's2', 's3'].map(function (className) {
                return Dom.createEl('span', {className: className})
            }))
        )
    }

    /**
     * @return {Array}
     */
    #buildClassName() {

        let className = 'icon-t',
            result = [];

        if (this.#icon) {
            className += ' ' + this.#icon;
        }

        result.push(className);

        if (this.#size) {
            result.push('size-'+this.#size);
        }

        return result;
    }

    /**
     *
     * @param value
     */
    set icon(value) {
        if (value) {
            let icon = this.#icon;
            if (icon !== value) {
                const el = this.#element;
                if (icon) {
                    Dom.removeClass(el, icon);
                }
                Dom.addClass(el, value);
                this.#icon = value;
            }
        }
    }

    /**
     * @param value
     */
    set size(value) {
        if (value) {
            value  = IconT.getClassName('size-'+value);
            const size = this.#size;
            if (size !== value) {
                const el = this.#element;
                if (size) {
                    Dom.removeClass(el, size);
                }
                Dom.addClass(el, value);
                this.#size = value;
            }
        }
    }

    /**
     *
     * @param value
     */
    set color(value) {
        Dom.$$('span[class^=s]', this.#element).forEach(function (el) {
            el.style.backgroundColor = value;
        })
    }

}


