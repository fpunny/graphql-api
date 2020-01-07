const { GraphQLInputObjectType, GraphQLString } = require("graphql")

module.exports = new GraphQLInputObjectType({
  name: "LinkInput",
  fields: {
    name: {
      type: GraphQLString,
    },
    href: {
      type: GraphQLString,
    },
  },
})
