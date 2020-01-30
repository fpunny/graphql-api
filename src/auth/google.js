const oauth = require('passport-google-oauth').OAuth2Strategy;
const passport = require('passport');
const express = require('express');
const crypto = require('crypto');
const router = express.Router();

const isDevelopment = process.env.NODE_ENV === 'development';
const whitelist = require('./whitelist');
const User = require('../models/User');

passport.use(
    new oauth(
        {
            clientID: process.env.GOOGLE_CLIENT,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: `${
                isDevelopment ? 'http://lvh.me' : whitelist[0]
            }/auth/google/callback`,
        },
        async (accessToken, refreshToken, profile, done) => {
            const email = profile.emails[0].value;
            let user = await User.findOne({ email });

            if (!user) {
                user = new User({
                    firstname: profile.name.givenName,
                    lastname: profile.name.familyName,
                    email,
                });
            }

            const hash = crypto.createHmac('sha512', process.env.DATABASE_KEY);
            user[process.env.DATABASE_SECRET].token = hash
                .update(accessToken)
                .digest('hex');
            await user.save();
            done(null, user);
        },
    ),
);

router.get('/', async (req, res, next) => {
    const authenticator = passport.authenticate('google', {
        state: req.query.redirect,
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
        ],
    });
    authenticator(req, res, next);
});

router.get('/callback', passport.authenticate('google'), async (req, res) => {
    const token = req.user[process.env.DATABASE_SECRET].token;
    const { state } = req.query;
    const id = req.user._id;

    if (state) {
        const isAuthDomain = whitelist.find(domain => state.startsWith(domain));
        if (isDevelopment || isAuthDomain) {
            return res.redirect(`${state}?token=${token}&id=${id}`);
        }
    }
    res.json({ token, id });
});

module.exports = router;
