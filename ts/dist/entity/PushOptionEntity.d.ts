import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { PushOption, PushOptionLoadMatch } from '../CodatplatformTypes';
declare class PushOptionEntity extends CodatplatformEntityBase<PushOption> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: PushOptionEntity): PushOptionEntity;
    load(this: any, reqmatch?: PushOptionLoadMatch, ctrl?: Control): Promise<PushOptionEntity>;
}
export { PushOptionEntity };
