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
    description: 'Submit an application',
    resolve: authenticated(async (root, args, context) => {
        const app = await Application.findById(args._id);

        if (app.submitted) {
            throw new Error('Application is already submitted');
        }

        if (
            getRole(context) === 'HACKER' &&
            app.user !== context.user._id &&
            getRole(context) !== 'ADMIN'
        ) {
            throw new Error('Permission denied');
        }

        app.submitted = true;
        return (await app.save()) !== null;
    }),
};
