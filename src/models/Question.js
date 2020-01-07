const mongoose = require("mongoose")

const schema = new mongoose.Schema({
  title: String,
  info: String,
  options: [String],
  default: String,
  type: {
    type: String,
    default: "TEXT",
    enum: ["TEXT", "TEXTAREA", "CHECKBOX", "MULTI_CHECKBOX"],
  },
  required: Boolean,
})

module.exports = mongoose.model("Question", schema)
