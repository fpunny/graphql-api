const authenticated = require("../../utils/authenticated")
const UserType = require("../../types/UserType")
const User = require("../../models/User")

module.exports = {
  type: UserType,
  description: "Get information of currently authenticated user",
  resolve: authenticated(async (root, args, { user }) => {
    return await User.findById(user._id)
  }),
}
