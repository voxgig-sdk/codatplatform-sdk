
import { inspect } from 'node:util'

import { CodatplatformEntityBase } from '../CodatplatformEntityBase'

import type {
  CodatplatformSDK,
} from '../CodatplatformSDK'


import type {
  Operation,
  Context,
  Control,
} from '../types'

import type {
  AccessToken,
} from '../CodatplatformTypes'

// TODO: needs Entity superclass
class AccessTokenEntity extends CodatplatformEntityBase<AccessToken> {

  constructor(client: CodatplatformSDK, entopts: any) {
    super(client, entopts)
    this.name = 'access_token'
    this.name_ = 'access_token'
    this.Name = 'AccessToken'
  }


  make(this: AccessTokenEntity) {
    return new AccessTokenEntity(this._client, this.entopts())
  }







}


export {
  AccessTokenEntity
}
