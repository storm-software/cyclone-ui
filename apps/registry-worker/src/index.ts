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

import { createContext } from "@cyclone-ui/registry-trpc/context";
import { router } from "@cyclone-ui/registry-trpc/router";
import type { Env } from "@cyclone-ui/registry-trpc/types";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    return fetchRequestHandler({
      endpoint: "/api",
      req,
      router,
      createContext: createContext(env)
    });
  }
};
