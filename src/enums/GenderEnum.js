const { GraphQLEnumType } = require('graphql');

module.exports = new GraphQLEnumType({
    name: 'GenderEnum',
    description: 'User genders',
    values: {
        MALE: {
            value: 'MALE',
        },
        FEMALE: {
            value: 'FEMALE',
        },
        NONE: {
            value: 'NONE',
        },
    },
});
