const { GraphQLNonNull } = require("graphql")
const CreateFormInput = require("./../inputs/CreateFormInput")
const authenticated = require("../../utils/authenticated")
const FormType = require("../../types/FormType")
const getRole = require("../../utils/getRole")
const Form = require("../../models/Form")

module.exports = {
  type: FormType,
  args: {
    form: {
      type: GraphQLNonNull(CreateFormInput),
    },
  },
  description: "Create a new form",
  resolve: authenticated(async (root, args, context) => {
    if (getRole(context) === "HACKER") {
      throw new Error("Permission denied")
    }
    return await new Form(args.form).save()
  }),
}
