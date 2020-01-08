const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt,
} = require('graphql');
const QuestionType = require('./QuestionType');
const Question = require('../models/Question');
const DateScalar = require('./DateScalar');

module.exports = new GraphQLObjectType({
    name: 'Form',
    description: 'Form for applications',
    fields: {
        _id: {
            type: GraphQLNonNull(GraphQLID),
        },
        title: {
            type: GraphQLNonNull(GraphQLString),
        },
        questions: {
            type: GraphQLNonNull(GraphQLList(GraphQLNonNull(QuestionType))),
            resolve: async root => {
                return await Question.find({
                    _id: {
                        $in: root.questions,
                    },
                });
            },
        },
        open: {
            type: GraphQLNonNull(GraphQLBoolean),
        },
        ends_at: {
            type: GraphQLNonNull(DateScalar),
        },
        created_at: {
            type: GraphQLNonNull(DateScalar),
        },
    },
});
