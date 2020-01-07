const { GraphQLList } = require('graphql');
const authenticated = require('../../utils/authenticated');
const StatusEnum = require('../../enums/StatusEnum');
const UserType = require('../../types/UserType');
const getRole = require('../../utils/getRole');
const User = require('../../models/User');

module.exports = {
    type: new GraphQLList(UserType),
    args: {
        status: {
            type: StatusEnum,
        },
    },
    description: 'Get information of a list of users',
    resolve: authenticated(async (root, args, context) => {
        if (getRole(context) === 'HACKER') {
            throw new Error('Permission denied');
        }

        return await User.find(
            Object.assign(
                {},
                args.status && {
                    status: args.status,
                },
            ),
        );
    }),
};
