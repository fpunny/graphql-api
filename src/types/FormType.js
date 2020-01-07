const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt,
} = require('graphql');
const QuestionType = require('./QuestionType');
const Question = require('../models/Question');

module.exports = new GraphQLObjectType({
    name: 'Form',
    description: 'Form for applications',
    fields: {
        _id: {
            type: GraphQLID,
        },
        title: {
            type: GraphQLString,
        },
        questions: {
            type: GraphQLList(QuestionType),
            resolve: async root => {
                return await Question.find({
                    _id: {
                        $in: root,
                    },
                });
            },
        },
        open: {
            type: GraphQLBoolean,
        },
        ends_at: {
            type: GraphQLInt,
        },
        created_at: {
            type: GraphQLInt,
        },
    },
});
