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

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import type { Flavor } from "./flavors";
import { DARK, LIGHT } from "./flavors";

export type CycloneTheme = "light" | "dark";

/** Use Razorwind's generated sRGB values; MapLibre styles do not accept OKLCH. */
export function createFlavor(theme: CycloneTheme): Flavor {
  const cssPath = fileURLToPath(
    new URL(
      `../../../packages/tokens/src/css/tokens-${theme}.css`,
      import.meta.url
    )
  );
  const css = readFileSync(cssPath, "utf8");
  const color = (name: string): string => {
    const match = css.match(
      new RegExp(`--storm-color-${name}:\\s*(#[0-9a-fA-F]{6})\\s*;`)
    );

    if (!match) {
      throw new Error(`Missing Cyclone color token: ${name}`);
    }

    return match[1]!;
  };

  const dark = theme === "dark";
  const base = dark ? DARK : LIGHT;
  const canvas = color(dark ? "neutral-16" : "neutral-3");
  const earth = color(dark ? "neutral-14" : "neutral-1");
  const surface = color(dark ? "neutral-13" : "neutral-2");
  const casing = color(dark ? "neutral-16" : "neutral-5");
  const road = color(dark ? "neutral-10" : "white");
  const roadMinor = color(dark ? "neutral-12" : "neutral-1");
  const label = color(dark ? "neutral-2" : "neutral-11");
  const mutedLabel = color(dark ? "neutral-5" : "neutral-9");
  const halo = color(dark ? "neutral-15" : "white");

  return {
    ...base,
    regular: "Regular",
    bold: "Medium",
    italic: "Italic",
    background: canvas,
    earth,
    parkA: color(dark ? "green-9" : "green-1"),
    parkB: color(dark ? "green-8" : "green-2"),
    hospital: color(dark ? "red-9" : "neutral-2"),
    industrial: surface,
    school: surface,
    woodA: color(dark ? "green-9" : "green-1"),
    woodB: color(dark ? "green-8" : "green-2"),
    pedestrian: surface,
    scrubA: color(dark ? "green-9" : "green-1"),
    scrubB: color(dark ? "green-8" : "green-2"),
    glacier: surface,
    sand: color(dark ? "orange-9" : "orange-1"),
    beach: color(dark ? "yellow-9" : "yellow-1"),
    aerodrome: surface,
    runway: color(dark ? "neutral-11" : "neutral-4"),
    water: color(dark ? "blue-9" : "blue-1"),
    zoo: color(dark ? "green-9" : "green-1"),
    military: surface,
    tunnelOtherCasing: casing,
    tunnelMinorCasing: casing,
    tunnelLinkCasing: casing,
    tunnelMajorCasing: casing,
    tunnelHighwayCasing: casing,
    tunnelOther: roadMinor,
    tunnelMinor: roadMinor,
    tunnelLink: roadMinor,
    tunnelMajor: roadMinor,
    tunnelHighway: roadMinor,
    pier: surface,
    buildings: color(dark ? "neutral-12" : "neutral-4"),
    minorServiceCasing: casing,
    minorCasing: casing,
    linkCasing: casing,
    majorCasingLate: casing,
    highwayCasingLate: casing,
    other: roadMinor,
    minorService: roadMinor,
    minorA: roadMinor,
    minorB: road,
    link: road,
    majorCasingEarly: casing,
    major: road,
    highwayCasingEarly: casing,
    highway: road,
    railway: color(dark ? "neutral-8" : "neutral-7"),
    boundaries: color(dark ? "neutral-8" : "neutral-7"),
    bridgesOtherCasing: casing,
    bridgesMinorCasing: casing,
    bridgesLinkCasing: casing,
    bridgesMajorCasing: casing,
    bridgesHighwayCasing: casing,
    bridgesOther: roadMinor,
    bridgesMinor: road,
    bridgesLink: road,
    bridgesMajor: road,
    bridgesHighway: road,
    roadsLabelMinor: mutedLabel,
    roadsLabelMinorHalo: halo,
    roadsLabelMajor: label,
    roadsLabelMajorHalo: halo,
    oceanLabel: color(dark ? "blue-2" : "blue-8"),
    subplaceLabel: mutedLabel,
    subplaceLabelHalo: halo,
    cityLabel: label,
    cityLabelHalo: halo,
    stateLabel: mutedLabel,
    stateLabelHalo: halo,
    countryLabel: label,
    addressLabel: mutedLabel,
    addressLabelHalo: halo,
    pois: {
      blue: color(dark ? "blue-3" : "blue-7"),
      green: color(dark ? "green-3" : "green-7"),
      lapis: color(dark ? "blue-2" : "blue-8"),
      pink: color(dark ? "purple-3" : "purple-6"),
      red: color(dark ? "red-2" : "red-6"),
      slategray: color(dark ? "neutral-5" : "neutral-9"),
      tangerine: color(dark ? "orange-2" : "orange-7"),
      turquoise: color(dark ? "green-2" : "green-6")
    },
    landcover: {
      barren: color(dark ? "yellow-9" : "yellow-1"),
      farmland: color(dark ? "green-9" : "green-1"),
      forest: color(dark ? "green-8" : "green-2"),
      glacier: surface,
      grassland: color(dark ? "green-9" : "green-1"),
      scrub: color(dark ? "green-8" : "green-2"),
      urbanArea: earth
    }
  };
}
