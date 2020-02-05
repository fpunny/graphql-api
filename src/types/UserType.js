const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
} = require('graphql');
const EthnicityEnum = require('../enums/EthnicityEnum');
const StatusEnum = require('../enums/StatusEnum');
const GenderEnum = require('../enums/GenderEnum');
const SizeEnum = require('../enums/SizeEnum');
const DateScalar = require('./DateScalar');
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
        phone: {
            type: GraphQLNonNull(GraphQLString),
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
            type: GenderEnum,
        },
        school: {
            type: GraphQLNonNull(GraphQLString),
        },
        size: {
            type: SizeEnum,
        },
        birthday: {
            type: GraphQLNonNull(DateScalar),
        },
        food_restrictions: {
            type: GraphQLNonNull(GraphQLString),
        },
        year_of_graduation: {
            type: GraphQLNonNull(GraphQLInt),
        },
        resume: {
            type: GraphQLNonNull(GraphQLString),
        },
        year_of_study: {
            type: GraphQLNonNull(GraphQLString),
        },
        ethnicity: {
            type: EthnicityEnum,
        },
        bio: {
            type: GraphQLNonNull(GraphQLString),
        },
        created_at: {
            type: GraphQLNonNull(DateScalar),
        },
        links: {
            type: GraphQLNonNull(LinkType),
        },
    },
});
