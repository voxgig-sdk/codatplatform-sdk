

class CodatplatformError extends Error {

  isCodatplatformError = true

  sdk = 'Codatplatform'

  constructor(code, msg, ctx) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

module.exports = {
  CodatplatformError
}

