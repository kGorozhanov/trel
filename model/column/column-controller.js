var Controller = require('../../lib/controller');
var Column = require('./column-facade');
var async = require('async');
var mongoose = require('mongoose');

class ColumnController extends Controller {
    updateAllIndexes(req, res, next) {
        async.eachSeries(req.body, (column, asyncdone) => {
            this.model.update({_id: mongoose.Types.ObjectId(column._id)}, {index: column.index})
                .then(result => asyncdone())
                .catch(err => asyncdone(null, err));
        }, (err) => {
            if (err) next(err)
             res.status(200).end();
        });
    }

}

module.exports = new ColumnController(Column);