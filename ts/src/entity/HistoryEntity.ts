
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
  History,
} from '../CodatplatformTypes'

// TODO: needs Entity superclass
class HistoryEntity extends CodatplatformEntityBase<History> {

  constructor(client: CodatplatformSDK, entopts: any) {
    super(client, entopts)
    this.name = 'history'
    this.name_ = 'history'
    this.Name = 'History'
  }


  make(this: HistoryEntity) {
    return new HistoryEntity(this._client, this.entopts())
  }







}


export {
  HistoryEntity
}
