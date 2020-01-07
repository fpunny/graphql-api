const { GraphQLID } = require('graphql');
const ApplicationType = require('../../types/ApplicationType');
const authenticated = require('../../utils/authenticated');
const Application = require('../../models/Application');
const getRole = require('../../utils/getRole');

module.exports = {
    type: ApplicationType,
    args: {
        userId: {
            type: GraphQLID,
        },
        formId: {
            type: GraphQLID,
        },
    },
    description: 'Get information of a list of applications',
    resolve: authenticated(async (root, args, context) => {
        return await Application.find(
            Object.assign(
                {},
                args.formId && {
                    form: args.formId,
                },
                args.userId && {
                    user: args.userId,
                },
                getRole(context) === 'HACKER' && {
                    user: context.user._id,
                },
            ),
        );
    }),
};
