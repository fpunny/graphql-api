const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Link',
    description: 'User links for portfolio information',
    fields: {
        linkedin: {
            type: GraphQLNonNull(GraphQLString),
        },
        github: {
            type: GraphQLNonNull(GraphQLString),
        },
        devpost: {
            type: GraphQLNonNull(GraphQLString),
        },
        other: {
            type: GraphQLNonNull(GraphQLString),
        },
    },
});
