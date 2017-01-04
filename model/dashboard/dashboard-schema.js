const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../user/user-schema');

const dashboardSchema = new Schema({
    title: String,
    body: String,
    dateCreate: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Dashboard', dashboardSchema);