const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    status: {
        type: String,
        default: 'PENDING',
        enum: ['PENDING', 'WAITLISTED', 'ACCEPTED', 'DECLINED', 'REJECTED'],
    },
    email: String,
    firstname: String,
    lastname: String,
    gender: {
        type: String,
        default: 'NONE',
        enum: ['MALE', 'FEMALE', 'NONE'],
    },
    school: String,
    bio: String,
    created_at: {
        type: Date,
        default: Date.now,
    },
    links: [
        {
            name: String,
            href: String,
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
