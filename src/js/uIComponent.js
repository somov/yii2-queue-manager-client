import {CSSClassNameMixin} from './mixins/cssClassName';
import * as Dom from './utils/dom';


export default class UIComponent {


    /**
     * @param property
     * @param options
     * @param instanceOf
     * @return {*}
     */
    static removeOptionsPtoperty(property, options, instanceOf = Element) {
        if ((options[property] instanceof instanceOf) === false) {
            throw Error('Invalid call. Property ' + property + ' is not valid')
        } else {
            const result = options[property];
            delete options[property];
            return result;
        }

    }

    /**
     * @param {string} tagName
     * @param {Object} properties
     * @param {Object}  attributes
     * @param {Object[]|string}  content
     * @return {Element}
     */
    createEl(tagName = 'div', properties = {}, attributes = {}, content) {

        if (typeof properties.className !== "undefined") {
            const classSet = new Set(),
                array = (typeof properties.className === 'string') ? properties.className.split(' ') : properties.className;
            array.forEach((item) => classSet.add(item));
            let className = '';
            for (let cssClass of classSet) {
                className += ' ' + UIComponent.getClassName(cssClass)
            }
            properties.className = className.trim();
        }

        return Dom.createEl(tagName, properties, attributes, content);
    }

    /**
     *
     * @param {string} selector
     * @return {string}
     * @private
     */
    static _normalizePrefix(selector) {
        const r = selector.replace(new RegExp("\\.", 'g'), '$&' + UIComponent.classPrefix);
        console.log(r);
        return r;
    }

    /**
     * @param {String} selector
     * @param {Element} context
     * @return {Element|null}
     */
    $(selector, context) {
        selector = UIComponent._normalizePrefix(selector);
        return Dom.$(selector, context);
    }

    /**
     * @param {String} selector
     * @param {Element} context
     * @return {Element[]|null}
     */
    $$(selector, context) {
        selector = UIComponent._normalizePrefix(selector);
        return Dom.$$(selector, context);
    }
}

Object.assign(UIComponent, CSSClassNameMixin);
