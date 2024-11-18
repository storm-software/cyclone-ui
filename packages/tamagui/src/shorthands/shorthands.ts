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
  hmax: "maxHeight",
  hmin: "minHeight",
  wmax: "maxWidth",
  wmin: "minWidth"
} as const;
