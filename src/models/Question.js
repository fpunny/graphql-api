const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        default: '',
        required: true,
    },
    info: {
        type: String,
        default: '',
        required: true,
    },
    options: [
        {
            type: String,
            default: '',
            required: true,
        },
    ],
    default: {
        type: String,
        default: '',
        required: true,
    },
    type: {
        type: String,
        default: 'TEXT',
        enum: ['TEXT', 'TEXTAREA', 'CHECKBOX', 'MULTI_CHECKBOX'],
        required: true,
    },
    required: {
        type: Boolean,
        default: false,
        required: true,
    },
});

module.exports = mongoose.model('Question', schema);
