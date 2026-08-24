import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Queue } from '../CodatplatformTypes';
declare class QueueEntity extends CodatplatformEntityBase<Queue> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: QueueEntity): QueueEntity;
}
export { QueueEntity };
