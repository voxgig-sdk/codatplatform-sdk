import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { ConnectionManagementAllowedOrigin, ConnectionManagementAllowedOriginListMatch, ConnectionManagementAllowedOriginCreateData } from '../CodatplatformTypes';
declare class ConnectionManagementAllowedOriginEntity extends CodatplatformEntityBase<ConnectionManagementAllowedOrigin> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: ConnectionManagementAllowedOriginEntity): ConnectionManagementAllowedOriginEntity;
    list(this: any, reqmatch?: ConnectionManagementAllowedOriginListMatch, ctrl?: Control): Promise<ConnectionManagementAllowedOriginEntity[]>;
    create(this: any, reqdata?: ConnectionManagementAllowedOriginCreateData, ctrl?: Control): Promise<ConnectionManagementAllowedOriginEntity>;
}
export { ConnectionManagementAllowedOriginEntity };
