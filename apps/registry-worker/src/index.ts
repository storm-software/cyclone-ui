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

import { createContext } from "@cyclone-ui/registry-api/context";
import { router } from "@cyclone-ui/registry-api/router";
import type { Env } from "@cyclone-ui/registry-api/types";
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
