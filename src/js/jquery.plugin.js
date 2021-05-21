import $ from 'global/jQuery';

import Manager from './manager'

$.fn.queueManager = function (method) {

    const manager = this.data('queue-manager'),
        methods = {

            /**
             *
             * @param  {Manager.Defaults} options
             */
            init: function (options) {
                this.each(function (index, item) {
                    const $wrapper = $(item);
                    if ($wrapper.data('queueManager')) {
                        return;
                    }
                    $wrapper.data('queueManager', new Manager(
                        $.extend(true, {element: $wrapper.get(0)}, Manager.Defaults, options || {}, $wrapper.data('manager') || {}))
                    );
                });
                return this;
            },

            createButtons: function(options, $wrapper){
                $wrapper = $wrapper || this;
                $wrapper.append($(new Manager.ButtonsGroup(options).render()).data('manager', manager));
            }



        };



    if (manager instanceof Manager && typeof manager[method] === 'function') {
        return manager[method].apply(manager, Array.prototype.slice.call(arguments, 1));
    } else if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
        return methods.init.apply(this, arguments);
    } else {
        $.error('Method ' + method + ' does not exist on queueManager ');
        return false;
    }

};

$.fn.queueManager.Manager = Manager;




