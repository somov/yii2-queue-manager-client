import TaskAbstract from "./taskAbstract";
import DomData from './utils/dom-data';
import Progress from './progress';
import StatusesList from './statusesList';
import TaskStatus from './taskStatus';

const Defaults = {
    iconPlacement: 'default',
    parts: {
        status: 'refresh.status',
        title: 'title',
        text: 'text',
        error: 'errors',
        'progress-wrapper': 'refresh.progress',
    },
    progress: {
        label: '',
        size: '',
        barOptions: {
            labelText: false
        }
    },
    actions: []
};

const iconMap = {};
iconMap[StatusesList.WAIT] = 'clock';
iconMap[StatusesList.EXEC] = 'play';
iconMap[StatusesList.ERROR] = 'warning';
iconMap[StatusesList.DONE] = 'checked';


/**
 *
 */
export default class Task extends TaskAbstract {


    #elements = {};

    /**
     *
     * @protected
     * @return {Element}
     */
    _renderChild(elWrapper) {

        const
            elements = this.#elements,
            options = this.options,
            elDetail = elWrapper.appendChild(this.createEl('div', {className: 'detail'})),
            elStatusWrapper = elWrapper.appendChild(this.createEl('div', {className: 'status-wrapper'}));

        Object.keys(options.parts).forEach((part) => {
            let owner = elDetail,
                component = null;

            if (part === 'progress-wrapper') {
                if (options.progress) {
                    component = new Progress(options.progress);
                } else {
                    delete options['progress-wrapper'];
                }
            } else if (part === 'status') {
                owner = elStatusWrapper;
                component = new TaskStatus(this, iconMap, options.actions)
            }

            elements[part] = owner.appendChild(this.createEl('div', {className: part}, {}));

            if (component && typeof component?.render === "function") {
                let content = component.render();
                if (content instanceof Element) {
                    content = [content];
                }

                content.forEach((content) => elements[part].append(content));
                Task.#setComponent(elements[part], component);
            }
        });

    }

    /**
     *
     */
    refresh(response) {
        super.refresh(response, this.#elements);
    }

    /**
     * @return {Array}
     * @protected
     */
    _buildCssClass() {

        const classList = super._buildCssClass();

        if (this.options.iconPlacement !== Defaults.iconPlacement) {
            classList.push('task-item-' + this.options.iconPlacement);
        }

        return classList;
    }

    /**
     *
     * @param {Element} el
     * @param {Object}component
     */
    static #setComponent(el, component) {
        if (!DomData.has(el)) {
            DomData.set(el, {});
        }
        const data = DomData.get(el);
        data.componet = component;
    }


    /**
     * @param {Element} el
     * @return {*}
     */
    static #getComponent(el) {
        if (DomData.has(el)) {
            const data = DomData.get(el);
            if (typeof data.componet !== "undefined") {
                return data.componet;
            }
        }
        return null;
    }

    /**
     * @param {element} el
     * @param {Number|Number[]}value
     * @private
     */
    _refreshProgress(el, value) {
        const
            progress = Task.#getComponent(el);

        if (progress instanceof Progress) {
            progress.setLabel(this.getProgressTotal() + '%');
            progress.setProgress(value);
        }
    }

    /**
     * @param {Element} elStatus
     * @param {Number|Number[]}value
     * @private
     */
     _refreshStatus(elStatus, value) {
        Task.#getComponent(elStatus).refresh(value);
    }

    /**
     * @return {string}
     */
    getTitle() {
        const part = this.options.parts['title'];
        if (part) {
            return this[part] ?? '';
        }
        return '';
    }

}

Task.Defualts = Defaults;