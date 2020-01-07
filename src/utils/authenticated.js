module.exports = handler => async (...args) => {
  if (args[2].user._id) {
    return await handler(...args)
  }
}
