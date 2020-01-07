const { GraphQLInputObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'LinkInput',
    fields: {
        linkedin: {
            type: GraphQLString,
        },
        github: {
            type: GraphQLString,
        },
        devpost: {
            type: GraphQLString,
        },
        other: {
            type: GraphQLString,
        },
    },
});
