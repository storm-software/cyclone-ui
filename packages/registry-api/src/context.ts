/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import type { Env } from "./types";
import { HttpHeaders } from "./types";

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
