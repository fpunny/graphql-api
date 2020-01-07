const Application = require('./Application');
const Form = require('./Form');
const User = require('./User');

module.exports = {
    ...User,
    ...Application,
    ...Form,
};
