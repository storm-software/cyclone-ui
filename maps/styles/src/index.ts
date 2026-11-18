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

import type { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";
import { labelsLayers, noLabelsLayers } from "./base-layers";
import { createFlavor, tokenColors } from "./create-flavor";
import { createStyle } from "./create-style";
import type { Flavor, Pois } from "./flavors";
import { BLACK, DARK, GRAYSCALE, LIGHT, WHITE } from "./flavors";
import {
  getCountryName,
  getMultilineName,
  languageScriptPairs
} from "./language";

export {
  BLACK,
  createFlavor,
  createStyle,
  DARK,
  getCountryName,
  getMultilineName,
  GRAYSCALE,
  languageScriptPairs,
  LIGHT,
  tokenColors,
  WHITE
};

export type { Flavor, Pois };

export function namedFlavor(name: string): Flavor {
  switch (name) {
    case "light":
      return LIGHT;
    case "dark":
      return DARK;
    case "white":
      return WHITE;
    case "grayscale":
      return GRAYSCALE;
    case "black":
      return BLACK;
  }
  throw new Error("Flavor not found");
}

export function layers(
  source: string,
  flavor: Flavor,
  options?: { labelsOnly?: boolean; lang?: string }
): LayerSpecification[] {
  let layers: LayerSpecification[] = [];
  if (!options?.labelsOnly) {
    layers = noLabelsLayers(source, flavor);
  }
  if (options?.lang) {
    layers = layers.concat(labelsLayers(source, flavor, options.lang));
  }
  return layers;
}
