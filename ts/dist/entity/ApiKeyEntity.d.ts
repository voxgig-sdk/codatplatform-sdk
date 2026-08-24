import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { ApiKey } from '../CodatplatformTypes';
declare class ApiKeyEntity extends CodatplatformEntityBase<ApiKey> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: ApiKeyEntity): ApiKeyEntity;
}
export { ApiKeyEntity };
