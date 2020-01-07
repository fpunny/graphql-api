const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    status: {
        type: String,
        default: 'PENDING',
        enum: ['PENDING', 'WAITLISTED', 'ACCEPTED', 'DECLINED', 'REJECTED'],
    },
    email: {
        type: String,
        default: '',
    },
    firstname: {
        type: String,
        default: '',
    },
    lastname: {
        type: String,
        default: '',
    },
    gender: {
        type: String,
        default: 'NONE',
        enum: ['MALE', 'FEMALE', 'NONE'],
    },
    school: {
        type: String,
        default: '',
    },
    bio: {
        type: String,
        default: '',
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    links: [
        {
            name: {
                type: String,
                default: '',
            },
            href: {
                type: String,
                default: '',
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
