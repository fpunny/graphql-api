const { GraphQLSchema, GraphQLObjectType } = require("graphql")
const mutations = require("./mutations")
const queries = require("./queries")

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQuery",
    fields: queries,
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: mutations,
  }),
})
