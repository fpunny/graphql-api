const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList,
} = require('graphql');
const QuestionTypeEnum = require('../enums/QuestionTypeEnum');

module.exports = new GraphQLObjectType({
    name: 'Question',
    description: 'Question of a form',
    fields: {
        _id: {
            type: GraphQLID,
        },
        title: {
            type: GraphQLString,
        },
        info: {
            type: GraphQLString,
        },
        options: {
            type: GraphQLList(GraphQLString),
        },
        default: {
            type: GraphQLString,
        },
        type: {
            type: QuestionTypeEnum,
        },
        required: {
            type: GraphQLBoolean,
        },
    },
});
