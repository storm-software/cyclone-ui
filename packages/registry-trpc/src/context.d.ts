import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { type Env } from "./types";
export declare const createContext: (env: Env) => (options: FetchCreateContextFnOptions) => {
    version: string | undefined;
    storage: import("@cloudflare/workers-types").R2Bucket;
    req: Request;
    resHeaders: Headers;
    info: import("@trpc/server/unstable-core-do-not-import").TRPCRequestInfo;
};
export type Context = Awaited<ReturnType<typeof createContext>>;
