const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLInt,
} = require('graphql');
const EthnicityEnum = require('../../enums/EthnicityEnum');
const StatusEnum = require('../../enums/StatusEnum');
const GenderEnum = require('../../enums/GenderEnum');
const DateScalar = require('../../types/DateScalar');
const SizeEnum = require('../../enums/SizeEnum');
const LinkInput = require('./LinkInput');

module.exports = new GraphQLInputObjectType({
    name: 'UserInput',
    fields: {
        status: {
            type: StatusEnum,
        },
        phone: {
            type: GraphQLString,
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
        size: {
            type: SizeEnum,
        },
        birthday: {
            type: DateScalar,
        },
        food_restrictions: {
            type: GraphQLString,
        },
        year_of_graduation: {
            type: GraphQLInt,
        },
        resume: {
            type: GraphQLString,
        },
        year_of_study: {
            type: GraphQLString,
        },
        ethnicity: {
            type: EthnicityEnum,
        },
        bio: {
            type: GraphQLString,
        },
        links: {
            type: LinkInput,
        },
    },
});
