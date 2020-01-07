const { GraphQLEnumType } = require('graphql');

module.exports = new GraphQLEnumType({
    name: 'SizeEnum',
    description: 'User shirt sizes',
    values: {
        XS: {
            value: 'XS',
        },
        S: {
            value: 'S',
        },
        M: {
            value: 'M',
        },
        L: {
            value: 'L',
        },
        XL: {
            value: 'XL',
        },
        XXL: {
            value: 'XXL',
        },
    },
});
