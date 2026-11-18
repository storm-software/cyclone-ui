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

import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { Router } from "./router";

export const DEFAULT_REGISTRY_URL = "https://registry.cyclone-ui.com/api";

export type RegistryClient = ReturnType<typeof createRegistryClient>;

export function createRegistryClient(url = DEFAULT_REGISTRY_URL) {
  return createTRPCClient<Router>({
    links: [
      httpBatchLink({
        url
      })
    ]
  });
}
