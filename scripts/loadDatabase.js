const mongoose = require('mongoose');
const readline = require('readline');
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
    new User({
        firstname: data[1],
        lastname: data[2],
        email: data[4],
    }).save();
});
