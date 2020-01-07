const {
    GraphQLObjectType,
    GraphQLString,
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
            type: GraphQLID,
        },
        status: {
            type: StatusEnum,
        },
        email: {
            type: GraphQLString,
        },
        firstname: {
            type: GraphQLString,
        },
        lastname: {
            type: GraphQLString,
        },
        gender: {
            type: GenderEnum,
        },
        school: {
            type: GraphQLString,
        },
        bio: {
            type: GraphQLString,
        },
        created_at: {
            type: GraphQLInt,
        },
        links: {
            type: GraphQLList(LinkType),
        },
    },
});
