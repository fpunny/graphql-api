const authenticated = require("../../utils/authenticated")
const FormType = require("../../types/FormType")
const getRole = require("../../utils/getRole")
const Form = require("../../models/Form")

module.exports = {
  type: FormType,
  description: "Get information of a list of forms",
  resolve: authenticated(async () => {
    return await Form.find(
      Object.assign(
        {},
        getRole(context) === "HACKER" && {
          open: true,
        }
      )
    )
  }),
}
