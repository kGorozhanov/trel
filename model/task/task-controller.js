var Controller = require('../../lib/controller');
var Task = require('./task-facade');
var async = require('async');
var mongoose = require('mongoose');

class TaskController extends Controller {
    updateAllIndexes(req, res, next) {
        async.eachSeries(req.body, (task, asyncdone) => {
            this.model.update({_id: mongoose.Types.ObjectId(task._id)}, {index: task.index, column: task.column})
                .then(result => asyncdone())
                .catch(err => asyncdone(null, err));
        }, (err) => {
            if (err) next(err)
             res.status(200).end();
        });
    }
}

module.exports = new TaskController(Task);