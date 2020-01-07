const { GraphQLEnumType } = require('graphql');

module.exports = new GraphQLEnumType({
    name: 'EthnicityEnum',
    description: 'User ethnicities',
    values: {
        WHITE: {
            value: 'WHITE',
        },
        BLACK: {
            value: 'BLACK',
        },
        ASIAN: {
            value: 'ASIAN',
        },
        MIXED: {
            value: 'MIXED',
        },
        HISPANIC: {
            value: 'HISPANIC',
        },
        INDIGENOUS: {
            value: 'INDIGENOUS',
        },
        OTHER: {
            value: 'OTHER',
        },
    },
});
