import {each} from './utils/obj';
/**
 *
 */
 const Event = {
    ready: 'qmc:manager:ready',
    destroy: 'qmc:manager:destroy',
    statusChange: 'qmc:manager:statusChange',

    fetchStart: 'qmc:resolver:start',
    fetchEnd: 'qmc:resolver:end',

};

Event.toString = function () {
  const events = [];
  each(this, function (event) {
      events.push(event);
  });
    return events.join(' ');
};


export default Event;