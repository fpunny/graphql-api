const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
    },
    answer: [
        {
            type: String,
            default: '',
            required: true,
        },
    ],
});
