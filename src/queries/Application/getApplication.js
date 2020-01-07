const { GraphQLID } = require('graphql');
const ApplicationType = require('../../types/ApplicationType');
const authenticated = require('../../utils/authenticated');
const Application = require('../../models/Application');
const getRole = require('../../utils/getRole');

module.exports = {
    type: ApplicationType,
    args: {
        _id: {
            type: GraphQLID,
        },
    },
    description: 'Get information of an application',
    resolve: authenticated(async (root, args, context) => {
        return await Application.findOne(
            Object.assign(
                {},
                args._id && {
                    _id: args._id,
                },
                getRole(context) === 'HACKER' && {
                    user: context.user._id,
                },
            ),
        );
    }),
};
