const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Dashboard = require('../dashboard/dashboard-schema');

const columnSchema = new Schema({
    title: String,
    dateCreate: { type: Date, default: Date.now },
    dashboard: { type: mongoose.Schema.Types.ObjectId, ref: 'Dashboard', required: true },
    index: Number
});

module.exports = mongoose.model('Column', columnSchema);