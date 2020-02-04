const mongoose = require('mongoose');
const readline = require('readline');
const crypto = require('crypto');
const fs = require('fs');
require('dotenv').config();

const DATA = process.env.DATA_PATH + '/apps.csv';
const User = require('../src/models/User');
const interface = readline.createInterface({
    input: fs.createReadStream(DATA),
    output: process.stdout,
    console: false,
});

mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
});

let isFirstLine = true;
interface.on('line', async line => {
    if (isFirstLine) {
        isFirstLine = false;
        return;
    }

    const data = line.split(',');
    const hash = crypto.createHmac('sha512', process.env.DATABASE_KEY);
    const token = hash
        .update(crypto.randomBytes(20).toString('hex'))
        .digest('hex')
    ;

    try {
        new User({
            firstname: data[1],
            lastname: data[2],
            email: data[4],
            [process.env.DATABASE_SECRET]: {
                token,
            },
        }).save();
        console.log(`Hacker ${ data[4] } added.`)
    } catch (err) {
        console.log(`Error on ${ data[4] }, `, err);
    }
});
