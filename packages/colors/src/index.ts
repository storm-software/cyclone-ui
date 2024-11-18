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

/**
 * The colors library used by Storm Software for building TypeScript applications.
 *
 * @remarks
 * A package containing the Cyclone UI default color scheme
 *
 * @packageDocumentation
 */

import { theme as defaultDark } from "./schemes/cyclone-dark";
import { theme as defaultLight } from "./schemes/cyclone-light";

export const colorSchemes = {
  default: {
    light: defaultDark,
    dark: defaultLight
  }
};

export * from "./colors";
export * from "./get-color-definition";
export * from "./masks";
export * from "./types";
