import type { ComponentDetails, ComponentSummary } from "../types";
export declare const componentsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
        output: ComponentSummary[];
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: string;
        output: ComponentDetails;
        meta: object;
    }>;
}>>;
