import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { Integration, IntegrationLoadMatch, IntegrationListMatch } from '../CodatplatformTypes';
declare class IntegrationEntity extends CodatplatformEntityBase<Integration> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: IntegrationEntity): IntegrationEntity;
    load(this: any, reqmatch?: IntegrationLoadMatch, ctrl?: Control): Promise<IntegrationEntity>;
    list(this: any, reqmatch?: IntegrationListMatch, ctrl?: Control): Promise<IntegrationEntity[]>;
}
export { IntegrationEntity };
