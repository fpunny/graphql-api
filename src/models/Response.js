const mongoose = require('mongoose');

module.exports = {
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    },
    answer: [
        {
            type: String,
            default: '',
        },
    ],
};
