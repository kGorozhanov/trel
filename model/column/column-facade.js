const Model = require('../../lib/facade');
const columnSchema  = require('./column-schema');


class ColumndModel extends Model {
    find(query) {
    return this.Schema
    .find(query)
    .sort('index')
    .exec();
  }
}

module.exports = new ColumndModel(columnSchema);