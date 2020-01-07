const { GraphQLNonNull, GraphQLID } = require("graphql")
const authenticated = require("../../utils/authenticated")
const QuestionInput = require("./../inputs/QuestionInput")
const QuestionType = require("../../types/QuestionType")
const Question = require("../../models/Question")
const getRole = require("../../utils/getRole")
const Form = require("../../models/Form")

module.exports = {
  type: QuestionType,
  args: {
    formId: {
      type: GraphQLNonNull(GraphQLID),
    },
    question: {
      type: GraphQLNonNull(QuestionInput),
    },
  },
  description: "Add a question to a form",
  resolve: authenticated(async (root, args, context) => {
    if (getRole(context) === "HACKER") {
      throw new Error("Permission denied")
    }

    const question = await new Question(args.question)
    await question.save()

    const form = await Form.getById(args.formId)
    form.questions.push(question._id)
    await form.save()

    return question
  }),
}
