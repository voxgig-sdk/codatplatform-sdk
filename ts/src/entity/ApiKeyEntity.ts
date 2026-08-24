
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
  ApiKey,
} from '../CodatplatformTypes'

// TODO: needs Entity superclass
class ApiKeyEntity extends CodatplatformEntityBase<ApiKey> {

  constructor(client: CodatplatformSDK, entopts: any) {
    super(client, entopts)
    this.name = 'api_key'
    this.name_ = 'api_key'
    this.Name = 'ApiKey'
  }


  make(this: ApiKeyEntity) {
    return new ApiKeyEntity(this._client, this.entopts())
  }







}


export {
  ApiKeyEntity
}
