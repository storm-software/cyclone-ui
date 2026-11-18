#!/usr/bin/env tsx
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
import fs from "node:fs";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { layers, namedFlavor } from "../src";
import { REMOTE_GLYPHS_URL } from "../src/create-style";
import type { Flavor } from "../src/flavors";

/**
 * Generates a MapLibre style from the provided configuration.
 *
 * @param tileJson - The TileJSON URL used by the vector source.
 * @param flavorArg - A named flavor or path to a flavor module or JSON file.
 * @param lang - The language used for map labels.
 * @param customSprite - An optional custom sprite URL.
 * @param customGlyphs - An optional custom glyphs URL template.
 * @returns A promise that resolves to the generated MapLibre style as a JSON string.
 */
async function generate(
  tileJson: string,
  flavorArg: string,
  lang?: string,
  customSprite?: string,
  customGlyphs?: string
) {
  let spriteValue: string | undefined;

  let flavor: Flavor;
  if (flavorArg?.endsWith(".json")) {
    flavor = JSON.parse(fs.readFileSync(flavorArg, "utf-8"));
  } else if (flavorArg?.endsWith(".js") || flavorArg?.endsWith(".ts")) {
    flavor = (await import(path.resolve(flavorArg))).default;
  } else {
    if (flavorArg === "light" || flavorArg === "dark") {
      spriteValue = flavorArg;
    }
    flavor = namedFlavor(flavorArg);
  }

  const style: StyleSpecification = {
    version: 8,
    sources: {
      stormsoftware: {
        type: "vector",
        url: tileJson
      }
    },
    layers: layers("stormsoftware", flavor, { lang }),
    glyphs: customGlyphs || REMOTE_GLYPHS_URL
  };

  if (customSprite) {
    style.sprite = customSprite;
  } else if (spriteValue) {
    style.sprite = `https://public.storm-cdn.com/basemaps/assets/sprites/v4/${flavorArg}`;
  }

  return JSON.stringify(style, null, 2);
}

const [output, tileJson, flavor, lang, spriteUrl, glyphsUrl] =
  process.argv.slice(2);

if (!output || !tileJson || !flavor) {
  throw new TypeError(
    "usage: cyclone-map OUTPUT TILEJSON_URL [FLAVOR.js|FLAVOR.ts|FLAVOR.json|FLAVOR_NAME] LANG [SPRITE_URL] [GLYPHS_URL]"
  );
}

const result = await generate(
  tileJson,
  flavor,
  lang,
  spriteUrl,
  glyphsUrl
).catch(err => {
  console.error(err);
  process.exit(1);
});

await writeFile(output, result);
