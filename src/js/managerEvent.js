/**
 * Manager Event
 */
export default class ManagerEvent extends CustomEvent {

    /**
     *
     * @type {Manager}
     */
    #manager = null;

    /**
     *
     * @param {Manager} manager
     * @param {string} type
     * @param {Object} props
     */
    constructor(manager, type, props) {
        super(type, props);
        this.#manager = manager;
    }

    /**
     * @return {Manager}
     */
    get manager(){
        return this.#manager;
    }
};
