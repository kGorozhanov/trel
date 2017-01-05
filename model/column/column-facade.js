const Model = require('../../lib/facade');
const columnSchema  = require('./column-schema');


class ColumndModel extends Model {}

module.exports = new ColumndModel(columnSchema);