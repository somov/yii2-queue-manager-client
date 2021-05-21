
const StatusesList = {
    INIT: -1,
    WAIT: 0,
    EXEC: 1,
    DONE: 2,
    ERROR: 3,
    DELETED: 99,
};

StatusesList.SET_VISIBLE = [
    StatusesList.WAIT, StatusesList.EXEC, StatusesList.ERROR, StatusesList.DONE
];

StatusesList.SET_COMPLETE = [
    StatusesList.DONE, StatusesList.ERROR, StatusesList.DELETED
];


/**
 * @param {Array} set
 * @param {number} status
 * @return {boolean}
 */
StatusesList.is = function (set, status) {
    return set.indexOf(status) > -1;
};

export default StatusesList;
