const mongoose = require('mongoose');
const Response = require('./Response');

const schema = new mongoose.Schema({
    form: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Form',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    responses: [Response],
});

module.exports = mongoose.model('Application', schema);
