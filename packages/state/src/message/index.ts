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
 * The provider library used by Storm Software for building TypeScript applications.
 *
 * @remarks
 * A package containing the Provider component used to manage the applications theme state
 *
 * @packageDocumentation
 */

export { Toaster, toast } from "@tamagui/toast/v2";
export type { ExternalToast, ToasterProps } from "@tamagui/toast/v2";
/* eslint-disable perfectionist/sort-exports -- prettier requires external exports first */
export * from "./components";
export * from "./hooks";
export * from "./providers";
export * from "./types";
