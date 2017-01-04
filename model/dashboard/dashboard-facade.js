const Model = require('../../lib/facade');
const dashboardSchema  = require('./dashboard-schema');


class DashboardModel extends Model {}

module.exports = new DashboardModel(dashboardSchema);