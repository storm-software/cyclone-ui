export declare const router: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        version: string | undefined;
        storage: import("@cloudflare/workers-types").R2Bucket;
        req: Request;
        resHeaders: Headers;
        info: import("@trpc/server/unstable-core-do-not-import").TRPCRequestInfo;
    };
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: false;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    components: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            version: string | undefined;
            storage: import("@cloudflare/workers-types").R2Bucket;
            req: Request;
            resHeaders: Headers;
            info: import("@trpc/server/unstable-core-do-not-import").TRPCRequestInfo;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: false;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: import("./types").ComponentSummary[];
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: string;
            output: import("./types").ComponentDetails;
            meta: object;
        }>;
    }>>;
}>>;
export type Router = typeof router;
