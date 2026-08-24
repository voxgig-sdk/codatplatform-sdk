import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { WebhookZapierKey, WebhookZapierKeyCreateData } from '../CodatplatformTypes';
declare class WebhookZapierKeyEntity extends CodatplatformEntityBase<WebhookZapierKey> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: WebhookZapierKeyEntity): WebhookZapierKeyEntity;
    create(this: any, reqdata?: WebhookZapierKeyCreateData, ctrl?: Control): Promise<WebhookZapierKeyEntity>;
}
export { WebhookZapierKeyEntity };
