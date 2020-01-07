const {
    GraphQLObjectType,
    GraphQLNonNull,
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
            type: GraphQLNonNull(GraphQLID),
        },
        title: {
            type: GraphQLNonNull(GraphQLString),
        },
        info: {
            type: GraphQLNonNull(GraphQLString),
        },
        options: {
            type: GraphQLNonNull(GraphQLList(GraphQLNonNull(GraphQLString))),
        },
        default: {
            type: GraphQLNonNull(GraphQLString),
        },
        type: {
            type: GraphQLNonNull(QuestionTypeEnum),
        },
        required: {
            type: GraphQLNonNull(GraphQLBoolean),
        },
    },
});
