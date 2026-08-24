import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { SupplementalDataConfig, SupplementalDataConfigLoadMatch } from '../CodatplatformTypes';
declare class SupplementalDataConfigEntity extends CodatplatformEntityBase<SupplementalDataConfig> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: SupplementalDataConfigEntity): SupplementalDataConfigEntity;
    load(this: any, reqmatch?: SupplementalDataConfigLoadMatch, ctrl?: Control): Promise<SupplementalDataConfigEntity>;
}
export { SupplementalDataConfigEntity };
