const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLString,
} = require('graphql');
const QuestionType = require('./QuestionType');
const Question = require('../models/Question');

module.exports = new GraphQLObjectType({
    name: 'Response',
    description: 'Response of a hacker for an application',
    fields: {
        question: {
            type: GraphQLNonNull(QuestionType),
            resolve: async root => {
                return await Question.findById(root);
            },
        },
        answer: {
            type: GraphQLNonNull(GraphQLList(GraphQLNonNull(GraphQLString))),
        },
    },
});
