const {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLString,
} = require("graphql")
const StatusEnum = require("../../enums/StatusEnum")
const GenderEnum = require("../../enums/GenderEnum")
const LinkInput = require("./LinkInput")

module.exports = new GraphQLInputObjectType({
  name: "UserInput",
  fields: {
    status: {
      type: StatusEnum,
    },
    email: {
      type: GraphQLString,
    },
    firstname: {
      type: GraphQLString,
    },
    lastname: {
      type: GraphQLString,
    },
    gender: {
      type: GenderEnum,
    },
    school: {
      type: GraphQLString,
    },
    bio: {
      type: GraphQLString,
    },
    links: {
      type: GraphQLList(LinkInput),
    },
  },
})
