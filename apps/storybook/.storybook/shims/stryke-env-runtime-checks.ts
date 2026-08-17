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

/**
 * Browser-safe stand-in for `@stryke/env/runtime-checks`.
 *
 * The published module reads undeclared globals (`Bun`, `Deno`, `Netlify`, …)
 * which throw `ReferenceError` in Storybook's iframe.
 */
export const isNode = false;
export const isBun = false;
export const isDeno = false;
export const isFastly = false;
export const isNetlify = false;
export const isEdgeLight = false;
export const isWorkerd = false;
export const isRuntimeServer = false;
export const isRuntimeClient = true;
export const runtime = "browser";
export const runtimeInfo = { name: "browser" };
