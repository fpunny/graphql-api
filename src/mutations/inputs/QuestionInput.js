const {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} = require("graphql")
const QuestionTypeEnum = require("../../enums/QuestionTypeEnum")

module.exports = new GraphQLInputObjectType({
  name: "QuestionInput",
  fields: {
    _id: {
      type: GraphQLNonNull(GraphQLID),
    },
    title: {
      type: GraphQLString,
    },
    info: {
      type: GraphQLString,
    },
    options: {
      type: GraphQLList(GraphQLString),
    },
    default: {
      type: GraphQLString,
    },
    type: {
      type: QuestionTypeEnum,
    },
    required: {
      type: GraphQLBoolean,
    },
  },
})
