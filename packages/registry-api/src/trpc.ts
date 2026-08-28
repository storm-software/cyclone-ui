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

import type { TRPCRootObject } from "@trpc/server";
import { initTRPC } from "@trpc/server";
import type { Context } from "./context";

// eslint-disable-next-line ts/no-empty-object-type
export const t: TRPCRootObject<Context, object, {}> = initTRPC
  .context<Context>()
  .create();

export const publicProcedure: typeof t.procedure = t.procedure;
export const protectedProcedure: typeof t.procedure = t.procedure;

export const createRouter: typeof t.router = t.router;
