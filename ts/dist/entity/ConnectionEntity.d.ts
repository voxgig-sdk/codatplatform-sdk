import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { Connection, ConnectionLoadMatch, ConnectionListMatch, ConnectionCreateData, ConnectionUpdateData, ConnectionRemoveMatch } from '../CodatplatformTypes';
declare class ConnectionEntity extends CodatplatformEntityBase<Connection> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: ConnectionEntity): ConnectionEntity;
    load(this: any, reqmatch?: ConnectionLoadMatch, ctrl?: Control): Promise<ConnectionEntity>;
    list(this: any, reqmatch?: ConnectionListMatch, ctrl?: Control): Promise<ConnectionEntity[]>;
    create(this: any, reqdata?: ConnectionCreateData, ctrl?: Control): Promise<ConnectionEntity>;
    update(this: any, reqdata?: ConnectionUpdateData, ctrl?: Control): Promise<ConnectionEntity>;
    remove(this: any, reqmatch?: ConnectionRemoveMatch, ctrl?: Control): Promise<ConnectionEntity>;
}
export { ConnectionEntity };
