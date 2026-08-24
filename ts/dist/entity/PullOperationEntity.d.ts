import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { PullOperation, PullOperationLoadMatch, PullOperationListMatch, PullOperationCreateData } from '../CodatplatformTypes';
declare class PullOperationEntity extends CodatplatformEntityBase<PullOperation> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: PullOperationEntity): PullOperationEntity;
    load(this: any, reqmatch?: PullOperationLoadMatch, ctrl?: Control): Promise<PullOperationEntity>;
    list(this: any, reqmatch?: PullOperationListMatch, ctrl?: Control): Promise<PullOperationEntity[]>;
    create(this: any, reqdata?: PullOperationCreateData, ctrl?: Control): Promise<PullOperationEntity>;
}
export { PullOperationEntity };
