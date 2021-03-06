const { GraphQLNonNull, GraphQLBoolean, GraphQLID } = require('graphql');
const authenticated = require('../../utils/authenticated');
const Application = require('../../models/Application');

module.exports = {
    type: GraphQLBoolean,
    args: {
        _id: {
            type: GraphQLNonNull(GraphQLID),
        },
    },
    description: 'Create a new application',
    resolve: authenticated(async (root, args, context) => {
        if (getRole(context) === 'HACKER') {
            throw new Error('Permission denied');
        }

        if (app.submitted && getRole(context) !== 'ADMIN') {
            throw new Error('Application is already submitted');
        }

        const app = await Application.findOneAndDelete({
            _id: args._id,
        });
        return app !== null;
    }),
};
