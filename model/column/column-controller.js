var Controller = require('../../lib/controller');
var Column = require('./column-facade');
var async = require('async');

class ColumnController extends Controller {
    constructor(model) {
        this.model = model;
    }
    updateAll(req, res, next) {
        async.eachSeries(req.body, function (column, asyncdone) {
            this.model.update({ _id: column._id }, column)
                .then(asyncdone);
        }, function (err) {
            if (err) next(err)
            res.status(200).end();
        });
    }

}

module.exports = new ColumnController(Column);