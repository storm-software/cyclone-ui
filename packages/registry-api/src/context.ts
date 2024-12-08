/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

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
