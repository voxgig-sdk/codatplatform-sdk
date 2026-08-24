
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
  Queue,
} from '../CodatplatformTypes'

// TODO: needs Entity superclass
class QueueEntity extends CodatplatformEntityBase<Queue> {

  constructor(client: CodatplatformSDK, entopts: any) {
    super(client, entopts)
    this.name = 'queue'
    this.name_ = 'queue'
    this.Name = 'Queue'
  }


  make(this: QueueEntity) {
    return new QueueEntity(this._client, this.entopts())
  }







}


export {
  QueueEntity
}
