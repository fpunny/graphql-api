const { GraphQLID, GraphQLNonNull, GraphQLBoolean } = require("graphql")
const authenticated = require("../../utils/authenticated")
const getRole = require("../../utils/getRole")
const Form = require("../../models/Form")

module.exports = {
  type: GraphQLBoolean,
  args: {
    _id: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  description: "Deletes an existing form. Returns true if successful.",
  resolve: authenticated(async (root, args, context) => {
    if (getRole(context) === "HACKER") {
      throw new Error("Permission denied")
    }

    const res = await Form.findByIdAndDelete(args._id)
    return res !== null
  }),
}
