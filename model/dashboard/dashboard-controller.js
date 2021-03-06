var Controller = require('../../lib/controller');
var Dashboard = require('./dashboard-facade');

class DashboardController extends Controller {
    find(req, res, next) {
        let query = req.query || {};
        query.user = req.user._id;
        return this.model.find(query)
            .then(collection => res.status(200).json(collection))
            .catch(err => next(err));
    }
    create(req, res, next) {
    	req.body.user = req.user._id;
	    this.model.create(req.body)
	    .then(doc => res.status(201).json(doc))
	    .catch(err => next(err));
	  }
}

module.exports = new DashboardController(Dashboard);