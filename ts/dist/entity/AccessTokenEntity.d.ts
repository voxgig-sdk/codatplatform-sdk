import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { AccessToken } from '../CodatplatformTypes';
declare class AccessTokenEntity extends CodatplatformEntityBase<AccessToken> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: AccessTokenEntity): AccessTokenEntity;
}
export { AccessTokenEntity };
