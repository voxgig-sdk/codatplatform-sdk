
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
  Sync,
} from '../CodatplatformTypes'

// TODO: needs Entity superclass
class SyncEntity extends CodatplatformEntityBase<Sync> {

  constructor(client: CodatplatformSDK, entopts: any) {
    super(client, entopts)
    this.name = 'sync'
    this.name_ = 'sync'
    this.Name = 'Sync'
  }


  make(this: SyncEntity) {
    return new SyncEntity(this._client, this.entopts())
  }







}


export {
  SyncEntity
}
