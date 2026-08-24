import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { Push, PushLoadMatch, PushListMatch } from '../CodatplatformTypes';
declare class PushEntity extends CodatplatformEntityBase<Push> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: PushEntity): PushEntity;
    load(this: any, reqmatch?: PushLoadMatch, ctrl?: Control): Promise<PushEntity>;
    list(this: any, reqmatch?: PushListMatch, ctrl?: Control): Promise<PushEntity[]>;
}
export { PushEntity };
