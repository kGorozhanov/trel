var Controller = require('../../lib/controller');
var Column = require('./column-facade');
const mongoose = require('mongoose');

class ColumnController extends Controller {
    updateAll(req, res, next) {
        let query = {
            _id: {
                $in: req.body.map(item => mongoose.Types.ObjectId(item._id))
            }
        }
        return this.model.find(query)
            .then(collection => res.status(200).json(collection))
            .catch(err => next(err));
    }
}

module.exports = new ColumnController(Column);