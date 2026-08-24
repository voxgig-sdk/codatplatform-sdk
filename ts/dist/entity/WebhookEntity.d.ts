import { CodatplatformEntityBase } from '../CodatplatformEntityBase';
import type { CodatplatformSDK } from '../CodatplatformSDK';
import type { Control } from '../types';
import type { Webhook, WebhookListMatch, WebhookCreateData, WebhookRemoveMatch } from '../CodatplatformTypes';
declare class WebhookEntity extends CodatplatformEntityBase<Webhook> {
    constructor(client: CodatplatformSDK, entopts: any);
    make(this: WebhookEntity): WebhookEntity;
    list(this: any, reqmatch?: WebhookListMatch, ctrl?: Control): Promise<WebhookEntity[]>;
    create(this: any, reqdata?: WebhookCreateData, ctrl?: Control): Promise<WebhookEntity>;
    remove(this: any, reqmatch?: WebhookRemoveMatch, ctrl?: Control): Promise<WebhookEntity>;
}
export { WebhookEntity };
