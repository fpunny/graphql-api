const { GraphQLID, GraphQLBoolean, GraphQLNonNull } = require('graphql');
const authenticated = require('../../utils/authenticated');
const Question = require('../../models/Question');
const getRole = require('../../utils/getRole');
const Form = require('../../models/Form');

module.exports = {
    type: GraphQLBoolean,
    args: {
        formId: {
            type: GraphQLNonNull(GraphQLID),
        },
        questionId: {
            type: GraphQLNonNull(GraphQLID),
        },
    },
    description: 'Delete a question from a form. Returns true if successful',
    resolve: authenticated(async (root, args, context) => {
        if (getRole(context) === 'HACKER') {
            throw new Error('Permission denied');
        }

        const form = await Form.getById(args.formId);
        const index = form.questions.findIndex(
            ({ _id }) => args.questionId === _id,
        );
        form.questions.splice(index, 1);
        await form.save();

        const question = await Question.findByIdAndDelete(args.questionId);
        return question !== null;
    }),
};
