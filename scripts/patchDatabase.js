const mongoose = require('mongoose');
const crypto = require('crypto');
require('dotenv').config();

const User = require('../src/models/User');

mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
});


User.find(
    { [`${process.env.DATABASE_SECRET}.token`]: { $exists: false } },
    { _id: 1 }
).then(users => {
    console.log(users.length, 'users found');
    users.forEach(async ({ _id }, index) => {
        const hash = crypto.createHmac('sha512', process.env.DATABASE_KEY);
        await User.findByIdAndUpdate(_id, {
            [`${process.env.DATABASE_SECRET}.token`]: hash
                .update(crypto.randomBytes(20).toString('hex'))
                .digest('hex')
            ,
        });
        console.log('user', index + 1, 'done');
    });
});
