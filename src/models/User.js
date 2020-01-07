const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    status: {
        type: String,
        default: 'PENDING',
        enum: ['PENDING', 'WAITLISTED', 'ACCEPTED', 'DECLINED', 'REJECTED'],
        required: true,
    },
    email: {
        type: String,
        default: '',
        required: true,
    },
    firstname: {
        type: String,
        default: '',
        required: true,
    },
    lastname: {
        type: String,
        default: '',
        required: true,
    },
    gender: {
        type: String,
        default: 'NONE',
        enum: ['MALE', 'FEMALE', 'NONE'],
        required: true,
    },
    school: {
        type: String,
        default: '',
        required: true,
    },
    bio: {
        type: String,
        default: '',
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true,
    },
    links: [
        {
            name: {
                type: String,
                default: '',
                required: true,
            },
            href: {
                type: String,
                default: '',
                required: true,
            },
        },
    ],
    [process.env.DATABASE_SECRET]: {
        token: String,
        role: {
            type: String,
            default: 'HACKER',
            enum: ['HACKER', 'VOLUNTEER', 'ADMIN'],
        },
    },
});

module.exports = mongoose.model('User', schema);
