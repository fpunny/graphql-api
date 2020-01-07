const passport = require('passport');
const express = require('express');
const googleAuth = require('./google.js');
const router = express.Router();

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

router.use(require('body-parser').urlencoded({ extended: true }));
router.use(require('cookie-parser')());
router.use(passport.initialize());
router.use(passport.session());

router.use('/google', googleAuth);
module.exports = router;
