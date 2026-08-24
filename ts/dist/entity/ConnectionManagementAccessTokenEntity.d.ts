import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { ConnectionManagementAccessToken, ConnectionManagementAccessTokenLoadMatch } from '../CodatplatformTypes';
declare class ConnectionManagementAccessTokenEntity extends CodatplatformEntityBase<ConnectionManagementAccessToken> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: ConnectionManagementAccessTokenEntity): ConnectionManagementAccessTokenEntity;
    load(this: any, reqmatch?: ConnectionManagementAccessTokenLoadMatch, ctrl?: Control): Promise<ConnectionManagementAccessTokenEntity>;
}
export { ConnectionManagementAccessTokenEntity };
