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

import type { StyleSpecification } from "@maplibre/maplibre-gl-style-spec";
import { titleCase } from "@stryke/string-format/title-case";
import type { ColorLookup, CycloneTheme } from "./create-flavor";
import { createFlavor } from "./create-flavor";
import { layers } from "./index";

export const LOCAL_GLYPHS_URL =
  "http://127.0.0.1:8000/fonts/storm-sans/dist/pbf/{fontstack}/{range}.pbf";

export const REMOTE_GLYPHS_URL =
  "https://public.storm-cdn.com/fonts/storm-sans/pbf/{fontstack}/{range}.pbf";

export function createStyle({
  theme,
  archiveUrl,
  glyphsUrl = REMOTE_GLYPHS_URL,
  color
}: {
  theme: CycloneTheme;
  archiveUrl: string;
  glyphsUrl?: string;
  color: ColorLookup;
}): StyleSpecification & { name: string } {
  if (!/^pmtiles:\/\/https?:\/\//.test(archiveUrl)) {
    throw new Error(
      "The archive URL must start with pmtiles://http:// or pmtiles://https://"
    );
  }

  if (
    !/^https?:\/\//.test(glyphsUrl) ||
    !glyphsUrl.includes("{fontstack}") ||
    !glyphsUrl.includes("{range}")
  ) {
    throw new Error(
      "The glyph URL must be an absolute HTTP(S) template containing {fontstack} and {range}"
    );
  }

  return {
    version: 8,
    name: `Cyclone - ${titleCase(theme)}`,
    sources: {
      stormsoftware: {
        type: "vector",
        url: archiveUrl
      }
    },
    glyphs: glyphsUrl,
    sprite: `https://public.storm-cdn.com/basemaps/assets/sprites/v4/${theme}`,
    layers: layers("stormsoftware", createFlavor(theme, color), { lang: "en" })
  };
}
