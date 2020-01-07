const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'CreateFormInput',
    fields: {
        title: {
            type: GraphQLString,
        },
        open: {
            type: GraphQLBoolean,
        },
        ends_at: {
            type: GraphQLInt,
        },
    },
});
