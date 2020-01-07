const { GraphQLEnumType } = require('graphql');

module.exports = new GraphQLEnumType({
    name: 'QuestionTypeEnum',
    description: 'Types of questions',
    values: {
        TEXT: {
            value: 'TEXT',
        },
        TEXTAREA: {
            value: 'TEXTAREA',
        },
        CHECKBOX: {
            value: 'CHECKBOX',
        },
        MULTI_CHECKBOX: {
            value: ' MULTI_CHECKBOX',
        },
    },
});
