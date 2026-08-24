
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
  All,
} from '../CodatplatformTypes'

// TODO: needs Entity superclass
class AllEntity extends CodatplatformEntityBase<All> {

  constructor(client: CodatplatformSDK, entopts: any) {
    super(client, entopts)
    this.name = 'all'
    this.name_ = 'all'
    this.Name = 'All'
  }


  make(this: AllEntity) {
    return new AllEntity(this._client, this.entopts())
  }







}


export {
  AllEntity
}
