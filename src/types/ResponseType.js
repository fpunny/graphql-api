const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');
const QuestionType = require('./QuestionType');
const Question = require('../models/Question');

module.exports = new GraphQLObjectType({
    name: 'Response',
    description: 'Response of a hacker for an application',
    fields: {
        question: {
            type: QuestionType,
            resolve: async root => {
                return await Question.findById(root);
            },
        },
        answer: {
            type: GraphQLList(GraphQLString),
        },
    },
});
