const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLInt,
} = require("graphql")
const QuestionInput = require("./QuestionInput")

module.exports = new GraphQLInputObjectType({
  name: "FormInput",
  fields: {
    title: {
      type: GraphQLString,
    },
    questions: {
      type: GraphQLList(QuestionInput),
    },
    open: {
      type: GraphQLBoolean,
    },
    ends_at: {
      type: GraphQLInt,
    },
  },
})
