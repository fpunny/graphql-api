const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID,
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'ResponseInput',
    fields: {
        questionId: {
            type: GraphQLNonNull(GraphQLID),
        },
        answer: {
            type: GraphQLNonNull(GraphQLList(GraphQLString)),
        },
    },
});
