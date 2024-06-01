import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { HttpHeaders, type Env } from "./types";

export const createContext =
  (env: Env) => (options: FetchCreateContextFnOptions) => {
    const version = options.req.headers.get(HttpHeaders.Version);
    return {
      ...options,
      version: version ? String(version) : undefined,
      storage: env.STORAGE_BUCKET
    };
  };

export type Context = Awaited<ReturnType<typeof createContext>>;
