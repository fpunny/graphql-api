const {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
} = require('graphql');
const ResponseType = require('./ResponseType');
const FormType = require('./FormType');
const UserType = require('./UserType');
const Form = require('../models/Form');
const User = require('../models/User');

module.exports = new GraphQLObjectType({
    name: 'Application',
    description: 'Application of a hacker',
    fields: {
        _id: {
            type: GraphQLNonNull(GraphQLID),
        },
        form: {
            type: GraphQLNonNull(FormType),
            resolve: async root => {
                return await Form.findById(root.form);
            },
        },
        user: {
            type: GraphQLNonNull(UserType),
            resolve: async root => {
                return await User.findById(root.user);
            },
        },
        responses: {
            type: GraphQLNonNull(GraphQLList(GraphQLNonNull(ResponseType))),
        },
        submitted: {
            type: GraphQLNonNull(GraphQLBoolean),
        },
    },
});
