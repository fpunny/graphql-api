const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLList,
    GraphQLInt,
} = require('graphql');
const StatusEnum = require('../enums/StatusEnum');
const GenderEnum = require('../enums/GenderEnum');
const LinkType = require('./LinkType');

module.exports = new GraphQLObjectType({
    name: 'User',
    description: 'User for Hack the Valley',
    fields: {
        _id: {
            type: GraphQLNonNull(GraphQLID),
        },
        status: {
            type: GraphQLNonNull(StatusEnum),
        },
        email: {
            type: GraphQLNonNull(GraphQLString),
        },
        firstname: {
            type: GraphQLNonNull(GraphQLString),
        },
        lastname: {
            type: GraphQLNonNull(GraphQLString),
        },
        gender: {
            type: GraphQLNonNull(GenderEnum),
        },
        school: {
            type: GraphQLNonNull(GraphQLString),
        },
        bio: {
            type: GraphQLNonNull(GraphQLString),
        },
        created_at: {
            type: GraphQLNonNull(GraphQLInt),
        },
        links: {
            type: GraphQLNonNull(GraphQLList(GraphQLNonNull(LinkType))),
        },
    },
});
