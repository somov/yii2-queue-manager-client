import UIComponent from './uIComponent';
import * as Dom from './utils/dom';
import Button from './button';
import extend from "./utils/extend";


/**
 *
 * @type {{selectIcon: null, scaled: boolean, arrange: boolean, selectable: boolean}}
 */
const Defaults = {

    /**
     * @type {Button.Defaults[]}
     */
    buttons: [],

    /**
     * @type {boolean}
     */
    arrange: false,

    /**
     * @type {boolean}
     */
    scaled: false,

    /**
     * @type {boolean}
     */
    selectable: false,
    /**
     * @type {string|null}
     */
    selectIcon: null

};

/**
 *
 */
export default class ButtonsGroup extends UIComponent {

    /**
     * @type {Button[]}
     */
    buttons = null;

    /**
     * @type {Defaults}
     */
    #options = Defaults;

    /**
     * @type {Element}
     */
    #element;

    /**
     * @param {Defaults} options
     */
    constructor(options) {
        super();
        const buttons = UIComponent.removeOptionsPtoperty('buttons', options, Array);
        this.#options = extend({}, Defaults, options);
        this.buttons = buttons.map((config) => new Button(config));
    }

    /**
     * @return {Element}
     */
    render() {
        let el = this.#element;

        if (el instanceof Element) {
            return el;
        }

        this.#element = el = this.createEl('div', {className: ButtonsGroup.#buildClassName(this.options)}, {},
            this.buttons.map((btn) => {
                return btn.render()
            }));

        if (this.options.selectable) {
            this.#bindSelectEvents(el);
        }

        return el;
    }

    /**
     *
     * @param {Defaults} options
     * @return {Array}
     */
    static #buildClassName(options) {

        let result = ['button-group'];

        if (options.arrange) {
            result.push('arrange');
        }

        if (options.scaled) {
            result.push('scaled');
        }

        return result;
    }

    /**
     * @return {Defaults}
     */
    get options() {
        return this.#options;
    }

    /**
     *
     * @param {boolean} value
     */
    set arrange(value) {

        const className = ButtonsGroup.getClassName('arrange');

        let el = this.#element,
            options = this.#options;

        if (el) {
            if (value) {
                if (Dom.hasClass(el, className) === false) {
                    Dom.addClass(el, className);
                }
            } else {
                Dom.removeClass(el, className);
            }
        }
        options.arrange = value;
    }

    /**
     * @param element
     */
    #bindSelectEvents(element) {

        element.addEventListener('click', (event) => {
            const element = event.target.closest( '.' + ButtonsGroup.getClassName('button'));
            this.selected = this.buttons.find(function (btn) {
                return btn.element === element;
            });
        });

        element.addEventListener('mouseenter', (event) => {
            this.$$('.button.selected', event.target).forEach(function (el) {
                Dom.setAttribute(el, 'data-group-selected', true);
                Dom.removeClass(el,  ButtonsGroup.getClassName('selected'));
            })
        });

        element.addEventListener('mouseleave', (event) => {
            this.$$('.button[data-group-selected]', event.target).forEach(function (el) {
                Dom.removeAttribute(el, 'data-group-selected');
                Dom.addClass(el, ButtonsGroup.getClassName('selected'));
            })
        });
    }


    /**
     *
     * @param {Button|number} button
     */
    set selected(button) {

        const className = ButtonsGroup.getClassName('selected'),
            options = this.options;

        if (typeof button === "number") {
            button = this.buttons[button];
        }

        if (button instanceof Button) {
            this.buttons.forEach((btn) => {
                Dom.removeAttribute(btn.element, 'data-group-selected');
                Dom.removeClass(btn.element, className);
            });
            Dom.addClass(button.element, className);

            if (options.selectIcon) {
                button.icon.icon = options.selectIcon;
                button.options.iconName = options.selectIcon;
            }
        }
    }


}




