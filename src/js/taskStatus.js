import UIComponent from './uIComponent';
import * as Dom from './utils/dom';
import IconT from './icont';
import ButtonsGroup from './buttonsGroup';
import extend from './utils/extend'

/**
 *
 */
export default class TaskStatus extends UIComponent {

    /**
     * @type {Element[]}
     */
    #elements = [];

    map = {
        icons: [],
        actions: []
    };

    /**
     * @type {TaskAbstract}
     */
    #task;

    /**
     *
     * @type {IconT}
     */
    #icon = null;

    /**
     *
     * @type {Element}
     */
    #text = null;

    /**
     * @type {ButtonsGroup}
     */
    #bGroup = null;

    /**
     * @param {TaskAbstract} task
     * @param {Object} mapIcons
     * @param {Object} actions
     */
    constructor(task, mapIcons, actions) {
        super();
        this.#task = task;
        this.map.icons = mapIcons;
        this.map.actions = actions;

        this.#icon = new IconT('none', 'big');
        this.#text = this.createEl('span', {className: 'status-text'});

        actions.forEach(function (item) {
           extend(item, {data: {task: task}})
        });
    }

    /**
     *
     */
    render() {

        let els = this.#elements;

        if (els.length > 0) {
            return els;
        }
        els.push(this.#icon.render());
        els.push(this.#text);

        if (this.map.actions.length > 0) {
            this.#bGroup = new ButtonsGroup({buttons: this.map.actions, arrange: false, scaled: true});
            els.push(this.#bGroup.render());
        }


        return els;

    }

    /**
     *
     * @param {Number} status
     */
    refresh(status) {
        this.#text.innerHTML = this.#task.statusText;

        this.#icon.icon = this.map.icons[status];

        const buttonGroup = this.#bGroup;

        if (buttonGroup) {
            buttonGroup.buttons.forEach((button) => {
                let enabledWith = button.options?.enabledWithStatus;
                if (typeof enabledWith === "function") {
                    enabledWith = enabledWith.call(button, status);
                }
                if (Array.isArray(enabledWith)) {
                    if (button.options.enabledWithStatus.length === 0) {
                        return;
                    }
                    button.disabled = button.options.enabledWithStatus.indexOf(status) === -1;
                } else if (typeof enabledWith === "boolean") {
                    button.disabled = enabledWith;
                }
            })
        }
    }

}
