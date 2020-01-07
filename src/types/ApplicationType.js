const { GraphQLObjectType, GraphQLID } = require("graphql")
const ResponseType = require("./ResponseType")
const FormType = require("./FormType")
const UserType = require("./UserType")
const Form = require("../models/Form")
const User = require("../models/User")

module.exports = new GraphQLObjectType({
  name: "Application",
  description: "Application of a hacker",
  fields: {
    _id: {
      type: GraphQLID,
    },
    form: {
      type: FormType,
      resolve: async root => {
        return await Form.findById(root)
      },
    },
    user: {
      type: UserType,
      resolve: async root => {
        return await User.findById(root)
      },
    },
    responses: {
      type: ResponseType,
    },
  },
})
