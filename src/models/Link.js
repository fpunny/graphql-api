const mongoose = require('mongoose');

module.exports = {
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
};
