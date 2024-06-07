module.exports = class say {
    whoami(req) { 
      const { tenantid } = req.data
      return `Hello ${tenantid}!` }
  }