const { GraphQLNonNull, GraphQLID } = require("graphql")
const authenticated = require("../../utils/authenticated")
const FormInput = require("./../inputs/FormInput")
const Question = require("../../models/Question")
const FormType = require("../../types/FormType")
const getRole = require("../../utils/getRole")
const Form = require("../../models/Form")

module.exports = {
  type: FormType,
  args: {
    _id: {
      type: GraphQLNonNull(GraphQLID),
    },
    form: {
      type: GraphQLNonNull(FormInput),
    },
  },
  description: "Update form information",
  resolve: authenticated(
    async (root, { _id, form: { questions, ...args } }, context) => {
      if (getRole(context) === "HACKER") {
        throw new Error("Permission denied")
      }

      if (args.form.questions) {
        await Promise.all(
          questions.map(({ _id, ...args }) =>
            Question.findByIdAndUpdate(_id, args)
          )
        )
      }
      return await Form.findByIdAndUpdate(_id, args, { new: true })
    }
  ),
}
