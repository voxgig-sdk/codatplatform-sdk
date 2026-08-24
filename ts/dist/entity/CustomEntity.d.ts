import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { Custom, CustomLoadMatch, CustomUpdateData } from '../CodatplatformTypes';
declare class CustomEntity extends CodatplatformEntityBase<Custom> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: CustomEntity): CustomEntity;
    load(this: any, reqmatch?: CustomLoadMatch, ctrl?: Control): Promise<CustomEntity>;
    update(this: any, reqdata?: CustomUpdateData, ctrl?: Control): Promise<CustomEntity>;
}
export { CustomEntity };
