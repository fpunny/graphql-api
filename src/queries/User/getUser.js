const { GraphQLString, GraphQLID } = require("graphql")
const authenticated = require("../../utils/authenticated")
const UserType = require("../../types/UserType")
const getRole = require("../../utils/getRole")
const User = require("../../models/User")

module.exports = {
  type: UserType,
  args: {
    _id: {
      type: GraphQLID,
    },
    email: {
      type: GraphQLString,
    },
  },
  description: "Get information of selected user",
  resolve: authenticated(async (root, args, context) => {
    if (
      getRole(context) === "HACKER" &&
      ((args._id && args._id !== context.user._id.toString()) ||
        (args.email && args.email !== context.user.email))
    ) {
      throw new Error("Permission denied")
    }

    return await User.findOne(
      Object.assign(
        {},
        args._id && {
          _id: args._id,
        },
        args.email && {
          email: args.email,
        }
      )
    )
  }),
}
