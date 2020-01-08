const { GraphQLNonNull, GraphQLID } = require('graphql');
const ApplicationType = require('../../types/ApplicationType');
const authenticated = require('../../utils/authenticated');
const Application = require('../../models/Application');
const getRole = require('../../utils/getRole');
const Form = require('../../models/Form');

module.exports = {
    type: ApplicationType,
    args: {
        formId: {
            type: GraphQLNonNull(GraphQLID),
        },
        userId: {
            type: GraphQLNonNull(GraphQLID),
        },
    },
    description: 'Create a new application',
    resolve: authenticated(async (root, args, context) => {
        const user =
            getRole(context) === 'HACKER' ? context.user._id : args.userId;
        const app = await Application.findOne({ user });
        if (app) throw new Error('An application already exist for this user');

        const form = await Form.findById(args.formId);
        const responses = form.questions.map(question => ({
            question: question._id,
            answer: [],
        }));

        return await new Application({
            form: form._id,
            responses,
            user,
        }).save();
    }),
};
