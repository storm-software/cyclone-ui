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

import { shorthands as base } from "@tamagui/shorthands";

export const shorthands = {
  ...base,
  p: "padding",
  px: "paddingHorizontal",
  py: "paddingVertical",
  pl: "paddingLeft",
  pr: "paddingRight",
  pt: "paddingTop",
  pb: "paddingBottom",
  f: "flex",
  m: "margin",
  mx: "marginHorizontal",
  my: "marginVertical",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  mb: "marginBottom",
  h: "height",
  w: "width",
  maxh: "maxHeight",
  minh: "minHeight",
  maxw: "maxWidth",
  minw: "minWidth"
} as const;
