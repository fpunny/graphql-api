const mongoose = require('mongoose');
const Link = require('./Link');

const schema = new mongoose.Schema({
    status: {
        type: String,
        default: 'PENDING',
        enum: ['PENDING', 'WAITLISTED', 'ACCEPTED', 'DECLINED', 'REJECTED'],
    },
    phone: {
        type: String,
        default: '',
    },
    email: {
        type: String,
        unique: true,
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
        enum: ['MALE', 'FEMALE', 'OTHER'],
    },
    school: {
        type: String,
        default: '',
    },
    size: {
        type: String,
        enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    },
    birthday: {
        type: Date,
        default: Date.now,
    },
    food_restrictions: {
        type: String,
        default: '',
    },
    year_of_graduation: {
        type: Number,
        default: 2020,
    },
    resume: {
        type: String,
        default: '',
    },
    year_of_study: {
        type: String,
        default: '',
    },
    ethnicity: {
        type: String,
        enum: [
            'WHITE',
            'BLACK',
            'ASIAN',
            'MIXED',
            'HISPANIC',
            'INDIGENOUS',
            'OTHER',
        ],
    },
    bio: {
        type: String,
        default: '',
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    links: Link,
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
