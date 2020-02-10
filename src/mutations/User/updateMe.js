const { GraphQLNonNull } = require('graphql');
const authenticated = require('../../utils/authenticated');
const UserInput = require('./../inputs/UserInput');
const UserType = require('../../types/UserType');
const getRole = require('../../utils/getRole');
const User = require('../../models/User');

module.exports = {
    type: UserType,
    args: {
        user: {
            type: GraphQLNonNull(UserInput),
        },
    },
    description: 'Update session user information',
    resolve: authenticated(async (root, args, context) => {
        if (getRole(context) === 'HACKER') {
            throw new Error('Permission denied');
        }
        return await User.findByIdAndUpdate(context.user._id, args.user, {
            new: true,
        });
    }),
};
