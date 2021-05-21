import express from 'express';
import bodyParser from 'body-parser';
import _ from 'lodash';
import Statuses from '../src/js/statusesList.js';
import path from 'path';
import dateformat from 'dateformat'

const
    PORT = 8080,
    HOST = 'localhost',
    PROGRESS_STEP_MIN = 5,
    PROGRESS_STEP_MAX = 20,
    PROGRESS_DELAY = 4000;

const app = express(),
    __dirname = path.resolve(),
    urlencodedParser = bodyParser.urlencoded({extended: false}),
    tasks = [];

let taskSequence = 0;


const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;


function totalProgress(task){
    if (typeof  task.progress === 'object') {

        return  (task.progress.reduce((a, c) => a + c) / task.progress.length).toFixed(2)
    }
    return task.progress;
}


/**
 * @param {Number} current
 * @return {Number}
 */
function incrementProgress(current) {
    current += random(PROGRESS_STEP_MIN, PROGRESS_STEP_MAX);

    if (current > 100) {
        current = 100;
    }
    return current;
}

app.post("/add-task", urlencodedParser, function (request, response) {
    const id = ++taskSequence;

    tasks.push({
        id: id,
        title: request.body['name'] + `  [${id}]`,
        progress: 0,
        status: Statuses.INIT
    });
    response.send([id]);
});





let taskSHandler = function (progressInc, request, response) {

    if (!request.body) return response.sendStatus(400);
    let output = [];

    let items = request.body['t[]'];

    if (items instanceof Array === false) {
        items = [items]
    }
    items.forEach(function (item) {
        const taskId = parseInt(item),
            taskIndex = _.findIndex(tasks, {id: taskId});

        if (taskIndex > -1) {
            const task = tasks[taskIndex];

            switch (task.status) {
                case Statuses.INIT:
                    task.status = Statuses.WAIT;
                    setTimeout(function () {
                        task.status = Statuses.EXEC;
                        progressInc(task);
                    }, PROGRESS_DELAY);
                    break;
                case Statuses.EXEC:
                    const  p = totalProgress(task);

                    if (p >= 100) {
                        task.status = Statuses.DONE;
                    } else {
                        progressInc(task);
                    }

                    task.text = dateformat(new Date(),'[H:MM:ss] ')+" Current progress: "+p;
                    if (random(0, 4) === 1 && (p > 50  && p < 60  )) {
                        task.status = Statuses.ERROR;
                        task.errors = [
                            'Example error Example error Example error Example error 1',
                            'Example error Example error Example error2',
                            'Example error Example error 3'
                        ]
                    }
                    break;

                case Statuses.ERROR:
                case Statuses.DONE:
                    tasks.splice(taskIndex, 1);
                    break

            }
            output.push(task);
        } else {
            output.push({
                id: taskId,
                status: Statuses.DELETED
            })
        }
    });
    response.send(output);
}


app.post("/queue-reader-example", urlencodedParser, taskSHandler.bind(null, function (task) {
    task.progress = incrementProgress(task.progress);
}));

app.post("/queue-reader-threads", urlencodedParser, taskSHandler.bind(null, function (task) {

    const max = task.theads ?? random(3, 15);

    if (typeof task.progress !== "object") {
        task.progress = [];
        for (let step = 0; step < max; step++) {
            task.progress.push(0);
        }
        task.theads = max;
    }

    for (let step = 0; step < max; step++) {
        task.progress[step] = incrementProgress(task.progress[step]);
    }


}));


app.use(express.static(__dirname + "/examples"));
app.use(express.static(__dirname + "/build"));
app.use(express.static(__dirname + "/lib"));

app.listen(PORT, HOST, function () {
    console.log(`View examples at url http://${HOST}:${PORT}/index.html`);
});