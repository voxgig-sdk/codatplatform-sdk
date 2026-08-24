import { BaseFeature } from './feature/base/BaseFeature';
declare class Config {
    makeFeature(this: any, fn: string): BaseFeature;
    hasFeature(this: any, fn: string): boolean;
    main: {
        name: string;
        slug: string;
        version: string;
        target: string;
    };
    feature: {
        test: {
            options: {
                active: boolean;
            };
        };
    };
    options: {
        base: string;
        auth: {
            prefix: string;
        };
        headers: {
            "content-type": string;
        };
        entity: {
            access_token: {};
            all: {};
            api_key: {};
            branding: {};
            company: {};
            company_access_token: {};
            connection: {};
            connection_management_access_token: {};
            connection_management_allowed_origin: {};
            custom: {};
            data_status: {};
            data_type: {};
            history: {};
            integration: {};
            option: {};
            product: {};
            profile: {};
            pull_operation: {};
            push: {};
            push_option: {};
            queue: {};
            refresh_data: {};
            setting: {};
            supplemental_data: {};
            supplemental_data_config: {};
            sync: {};
            sync_setting: {};
            validation: {};
            webhook: {};
            webhook_zapier_key: {};
        };
    };
    entity: {
        access_token: {
            fields: never[];
            name: string;
            op: {};
            relations: {
                ancestors: string[][];
            };
        };
        all: {
            fields: never[];
            name: string;
            op: {};
            relations: {
                ancestors: string[][];
            };
        };
        api_key: {
            fields: never[];
            name: string;
            op: {};
            relations: {
                ancestors: never[];
            };
        };
        branding: {
            fields: {
                name: string;
                short: string;
                type: string;
            }[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                platformKey: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        company: {
            fields: ({
                name: string;
                short: string;
                type: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                type: string;
                short?: undefined;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                req: boolean;
                type: string;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                op: {
                    patch: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        args: {
                            params: ({
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            } | {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                                example?: undefined;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                                productIdentifier: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    } | {
                        args: {
                            params?: undefined;
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        rename?: undefined;
                    })[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            query: ({
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            } | {
                                example: number;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                patch: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: ({
                        args: {
                            params: ({
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            } | {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                                example?: undefined;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                                productIdentifier: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    } | {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                                productIdentifier?: undefined;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    })[];
                };
                update: {
                    input: string;
                    name: string;
                    points: ({
                        args: {
                            params: ({
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            } | {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                                example?: undefined;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                                productIdentifier: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    } | {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                                productIdentifier?: undefined;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    })[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        company_access_token: {
            fields: {
                name: string;
                req: boolean;
                short: string;
                type: string;
            }[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        connection: {
            fields: ({
                name: string;
                type: string;
                req?: undefined;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                short: string;
                type: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                req: boolean;
                type: string;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                op: {
                    patch: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query: ({
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            } | {
                                example: number;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                                connectionId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                patch: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                                connectionId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                status: string;
                            };
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                                connectionId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                                connectionId: string;
                            };
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        connection_management_access_token: {
            fields: {
                name: string;
                short: string;
                type: string;
            }[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        connection_management_allowed_origin: {
            fields: {
                name: string;
                short: string;
                type: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        custom: {
            fields: ({
                name: string;
                short: string;
                type: string;
            } | {
                name: string;
                type: string;
                short?: undefined;
            })[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: ({
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query: {
                                example: number;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                                connectionId: string;
                                customDataIdentifier: string;
                                platformKey?: undefined;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    } | {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query?: undefined;
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                customDataIdentifier: string;
                                platformKey: string;
                                companyId?: undefined;
                                connectionId?: undefined;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    })[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                customDataIdentifier: string;
                                platformKey: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        data_status: {
            fields: {
                name: string;
                req: boolean;
                short: string;
                type: string;
            }[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        data_type: {
            fields: never[];
            name: string;
            op: {};
            relations: {
                ancestors: string[][];
            };
        };
        history: {
            fields: never[];
            name: string;
            op: {};
            relations: {
                ancestors: string[][];
            };
        };
        integration: {
            fields: ({
                name: string;
                short: string;
                type: string;
                req?: undefined;
            } | {
                name: string;
                type: string;
                short?: undefined;
                req?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                req: boolean;
                type: string;
                short?: undefined;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            query: ({
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            } | {
                                example: number;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                platformKey: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        option: {
            fields: never[];
            name: string;
            op: {};
            relations: {
                ancestors: string[][];
            };
        };
        product: {
            fields: never[];
            name: string;
            op: {};
            relations: {
                ancestors: string[][];
            };
        };
        profile: {
            fields: ({
                name: string;
                short: string;
                type: string;
                req?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        pull_operation: {
            fields: ({
                name: string;
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                short: string;
                type: string;
                req?: undefined;
            } | {
                name: string;
                req: boolean;
                type: string;
                short?: undefined;
            } | {
                name: string;
                type: string;
                req?: undefined;
                short?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query?: undefined;
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                                connectionId: string;
                                customDataIdentifier: string;
                                dataType?: undefined;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    } | {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query: {
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                                dataType: string;
                                connectionId?: undefined;
                                customDataIdentifier?: undefined;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    })[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query: ({
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            } | {
                                example: number;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: ({
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            } | {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                                example?: undefined;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                                datasetId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        push: {
            fields: ({
                name: string;
                short: string;
                type: string;
                req?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                req: boolean;
                type: string;
                short?: undefined;
            } | {
                name: string;
                type: string;
                short?: undefined;
                req?: undefined;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query: ({
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            } | {
                                example: number;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: ({
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            } | {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                                example?: undefined;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                                pushOperationKey: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        push_option: {
            fields: ({
                name: string;
                short: string;
                type: string;
                req?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                type: string;
                short?: undefined;
                req?: undefined;
            })[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                                connectionId: string;
                                dataType: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        queue: {
            fields: never[];
            name: string;
            op: {};
            relations: {
                ancestors: string[][];
            };
        };
        refresh_data: {
            fields: never[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        setting: {
            fields: {
                name: string;
                short: string;
                type: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                apiKeyId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        supplemental_data: {
            fields: {
                name: string;
                type: string;
            }[];
            name: string;
            op: {
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                dataType: string;
                                platformKey: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        supplemental_data_config: {
            fields: {
                name: string;
                short: string;
                type: string;
            }[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                dataType: string;
                                platformKey: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        sync: {
            fields: never[];
            name: string;
            op: {};
            relations: {
                ancestors: string[][];
            };
        };
        sync_setting: {
            fields: ({
                name: string;
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                short: string;
                type: string;
                req?: undefined;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        validation: {
            fields: {
                name: string;
                type: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: ({
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            } | {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                                example?: undefined;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                companyId: string;
                                datasetId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        webhook: {
            fields: {
                name: string;
                short: string;
                type: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                example: string;
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                webhookId: string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        webhook_zapier_key: {
            fields: {
                name: string;
                type: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
    };
}
declare const config: Config;
export { config };
