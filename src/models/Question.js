const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        default: '',
    },
    info: {
        type: String,
        default: '',
    },
    options: [
        {
            type: String,
            default: '',
        },
    ],
    default: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'TEXT',
        enum: ['TEXT', 'TEXTAREA', 'CHECKBOX', 'MULTI_CHECKBOX'],
    },
    required: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Question', schema);
