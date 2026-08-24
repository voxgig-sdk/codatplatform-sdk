import { Context } from './Context';
declare class CodatplatformError extends Error {
    isCodatplatformError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CodatplatformError };
