import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Sync } from '../CodatplatformTypes';
declare class SyncEntity extends CodatplatformEntityBase<Sync> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: SyncEntity): SyncEntity;
}
export { SyncEntity };
