module.exports = class say {
  whoami(req) { 
    const { message } = req?.data
    return `Hello ${message}!` }
}