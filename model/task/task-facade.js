const Model = require('../../lib/facade');
const taskSchema  = require('./task-schema');


class TaskModel extends Model {
    find(query) {
    return this.Schema
    .find(query)
    .sort('index')
    .exec();
  }
}

module.exports = new TaskModel(taskSchema);