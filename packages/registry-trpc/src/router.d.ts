import { ComponentDetails, ComponentSummary } from "./types";
export declare const router: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
    ctx: {
        version: string | undefined;
        storage: import("@cloudflare/workers-types").R2Bucket;
        req: Request;
        resHeaders: Headers;
        info: import("@trpc/server/unstable-core-do-not-import").TRPCRequestInfo;
    };
    meta: object;
    errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
    transformer: false;
}, import("@trpc/server/unstable-core-do-not-import").DecorateCreateRouterOptions<{
    components: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
        ctx: {
            version: string | undefined;
            storage: import("@cloudflare/workers-types").R2Bucket;
            req: Request;
            resHeaders: Headers;
            info: import("@trpc/server/unstable-core-do-not-import").TRPCRequestInfo;
        };
        meta: object;
        errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
        transformer: false;
    }, {
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: ComponentSummary[];
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: string;
            output: ComponentDetails;
        }>;
    }>;
}>>;
export type Router = typeof router;
