const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        default: '',
    },
    questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question',
        },
    ],
    open: {
        type: Boolean,
        default: false,
    },
    ends_at: {
        type: Date,
        default: Date.now,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Form', schema);
