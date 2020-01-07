const { GraphQLObjectType, GraphQLString } = require("graphql")

module.exports = new GraphQLObjectType({
  name: "Link",
  description: "User links for portfolio information",
  fields: {
    name: {
      type: GraphQLString,
    },
    href: {
      type: GraphQLString,
    },
  },
})
