const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Dashboard = require('../dashboard/dashboard-schema');
const Column = require('../column/column-schema');

const taskSchema = new Schema({
    title: String,
    description: String,
    dateCreate: { type: Date, default: Date.now },
    dashboard: { type: mongoose.Schema.Types.ObjectId, ref: 'Dashboard', required: true },
    column: { type: mongoose.Schema.Types.ObjectId, ref: 'Column', required: true },
    index: Number
});

module.exports = mongoose.model('Task', taskSchema);