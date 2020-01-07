const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    linkedin: {
        type: String,
        default: '',
    },
    github: {
        type: String,
        default: '',
    },
    devpost: {
        type: String,
        default: '',
    },
    other: {
        type: String,
        default: '',
    },
});
