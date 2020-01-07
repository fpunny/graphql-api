const { GraphQLID } = require("graphql")
const authenticated = require("../../utils/authenticated")
const FormType = require("../../types/FormType")
const getRole = require("../../utils/getRole")
const Form = require("../../models/Form")

module.exports = {
  type: FormType,
  args: {
    _id: {
      type: GraphQLID,
    },
  },
  description: "Get information of a form",
  resolve: authenticated(async (root, args, context) => {
    return await Form.findOne(
      Object.assign(
        {},
        args._id && {
          _id: args._id,
        },
        getRole(context) === "HACKER" && {
          open: true,
        }
      )
    )
  }),
}
