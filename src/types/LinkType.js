const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Link',
    description: 'User links for portfolio information',
    fields: {
        name: {
            type: GraphQLNonNull(GraphQLString),
        },
        href: {
            type: GraphQLNonNull(GraphQLString),
        },
    },
});
