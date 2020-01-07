const { GraphQLEnumType } = require("graphql")

module.exports = new GraphQLEnumType({
  name: "StatusEnum",
  description: "User status for hackathon",
  values: {
    PENDING: {
      value: "PENDING",
    },
    WAITLISTED: {
      value: "WAITLISTED",
    },
    ACCEPTED: {
      value: "ACCEPTED",
    },
    DECLINED: {
      value: "DECLINED",
    },
    REJECTED: {
      value: "REJECTED",
    },
  },
})
