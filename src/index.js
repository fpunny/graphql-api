const playground = require('graphql-playground-middleware-express').default;
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const User = require('./models/User');
const schema = require('./schema');
const app = express();

mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
});

app.use(cors());
app.use(
    '/graphql',
    async (req, res, next) => {
        const token = req.get('Authorization');
        const k = `${process.env.DATABASE_SECRET}.token`;
        req.user = await User.findOne({ [k]: token });
        next();
    },
    graphqlHTTP(req => ({
        context: {
            user: req.user || {},
        },
        schema,
    })),
);

if (process.env.NODE_ENV === 'development') {
    app.use('/auth', require('./auth'));
    app.get(
        '/playground',
        playground({
            endpoint: '/graphql',
        }),
    );
}

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
