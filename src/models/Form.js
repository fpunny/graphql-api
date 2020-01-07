const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        default: '',
        required: true,
    },
    questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question',
            required: true,
        },
    ],
    open: {
        type: Boolean,
        default: false,
        required: true,
    },
    ends_at: {
        type: Date,
        default: Date.now,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

module.exports = mongoose.model('Form', schema);
