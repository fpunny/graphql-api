const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
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
});
