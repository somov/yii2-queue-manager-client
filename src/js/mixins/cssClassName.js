/**
 *
 */
export const CSSClassNameMixin  = {

    /**
     * @type {null|string}
     */
    classPrefix: null,

    /**
     * @param {string} name
     * @return {*}
     */
     getClassName: function(name) {

        if (this.classPrefix=== null || name.startsWith(this.classPrefix)) {
            return name;
        }
        return this.classPrefix + name;
    },

};