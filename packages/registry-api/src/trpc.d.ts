export declare const t: import("@trpc/server").TRPCRootObject<{
    version: string | undefined;
    storage: import("@cloudflare/workers-types").R2Bucket;
    req: Request;
    resHeaders: Headers;
    info: import("@trpc/server/unstable-core-do-not-import").TRPCRequestInfo;
}, object, import("@trpc/server").TRPCRuntimeConfigOptions<{
    version: string | undefined;
    storage: import("@cloudflare/workers-types").R2Bucket;
    req: Request;
    resHeaders: Headers;
    info: import("@trpc/server/unstable-core-do-not-import").TRPCRequestInfo;
}, object>, {
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
}>;
export declare const publicProcedure: import("@trpc/server").TRPCProcedureBuilder<{
    version: string | undefined;
    storage: import("@cloudflare/workers-types").R2Bucket;
    req: Request;
    resHeaders: Headers;
    info: import("@trpc/server/unstable-core-do-not-import").TRPCRequestInfo;
}, object, object, import("@trpc/server").TRPCUnsetMarker, import("@trpc/server").TRPCUnsetMarker, import("@trpc/server").TRPCUnsetMarker, import("@trpc/server").TRPCUnsetMarker, false>;
export declare const protectedProcedure: import("@trpc/server").TRPCProcedureBuilder<{
    version: string | undefined;
    storage: import("@cloudflare/workers-types").R2Bucket;
    req: Request;
    resHeaders: Headers;
    info: import("@trpc/server/unstable-core-do-not-import").TRPCRequestInfo;
}, object, object, import("@trpc/server").TRPCUnsetMarker, import("@trpc/server").TRPCUnsetMarker, import("@trpc/server").TRPCUnsetMarker, import("@trpc/server").TRPCUnsetMarker, false>;
export declare const createRouter: import("@trpc/server").TRPCRouterBuilder<{
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
}>;
