
import { Context } from './Context'


class CodatplatformError extends Error {

  isCodatplatformError = true

  sdk = 'Codatplatform'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  CodatplatformError
}

