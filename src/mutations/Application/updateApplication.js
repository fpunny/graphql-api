const { GraphQLNonNull, GraphQLID, GraphQLList } = require('graphql');
const ApplicationType = require('../../types/ApplicationType');
const authenticated = require('../../utils/authenticated');
const ResponseInput = require('./../inputs/ResponseInput');
const Application = require('../../models/Application');
const getRole = require('../../utils/getRole');

module.exports = {
    type: ApplicationType,
    args: {
        _id: {
            type: GraphQLNonNull(GraphQLID),
        },
        responses: {
            type: GraphQLNonNull(GraphQLList(GraphQLNonNull(ResponseInput))),
        },
    },
    description: 'Create a new application',
    resolve: authenticated(async (root, args, context) => {
        const app = await Application.findById(args._id);
        if (getRole(context) === 'HACKER' && app.user !== context.user._id) {
            throw new Error('Permission denied');
        }

        const questions = app.responses.reduce((acc, curr, index) => {
            acc[curr.question] = index;
        }, {});

        args.responses.forEach(response => {
            const index = questions[response.questionId];
            if (index === undefined) return;
            app[index].answer = response.answer;
        });

        return await app.save();
    }),
};
