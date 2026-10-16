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

export interface Flavor {
  background: string;
  earth: string;
  parkA: string;
  parkB: string;
  hospital: string;
  industrial: string;
  school: string;
  woodA: string;
  woodB: string;
  pedestrian: string;
  scrubA: string;
  scrubB: string;
  glacier: string;
  sand: string;
  beach: string;
  aerodrome: string;
  runway: string;
  water: string;
  zoo: string;
  military: string;

  tunnelOtherCasing: string;
  tunnelMinorCasing: string;
  tunnelLinkCasing: string;
  tunnelMajorCasing: string;
  tunnelHighwayCasing: string;
  tunnelOther: string;
  tunnelMinor: string;
  tunnelLink: string;
  tunnelMajor: string;
  tunnelHighway: string;

  pier: string;
  buildings: string;

  minorServiceCasing: string;
  minorCasing: string;
  linkCasing: string;
  majorCasingLate: string;
  highwayCasingLate: string;
  other: string;
  minorService: string;
  minorA: string;
  minorB: string;
  link: string;
  majorCasingEarly: string;
  major: string;
  highwayCasingEarly: string;
  highway: string;

  railway: string;
  boundaries: string;

  bridgesOtherCasing: string;
  bridgesMinorCasing: string;
  bridgesLinkCasing: string;
  bridgesMajorCasing: string;
  bridgesHighwayCasing: string;
  bridgesOther: string;
  bridgesMinor: string;
  bridgesLink: string;
  bridgesMajor: string;
  bridgesHighway: string;

  roadsLabelMinor: string;
  roadsLabelMinorHalo: string;
  roadsLabelMajor: string;
  roadsLabelMajorHalo: string;
  oceanLabel: string;
  subplaceLabel: string;
  subplaceLabelHalo: string;
  cityLabel: string;
  cityLabelHalo: string;
  stateLabel: string;
  stateLabelHalo: string;
  countryLabel: string;

  addressLabel: string;
  addressLabelHalo: string;

  regular?: string;
  bold?: string;
  italic?: string;

  pois?: Pois;
  landcover?: Landcover;
}

export interface Pois {
  blue: string;
  green: string;
  lapis: string;
  pink: string;
  red: string;
  slategray: string;
  tangerine: string;
  turquoise: string;
}

export interface Landcover {
  barren: string;
  farmland: string;
  forest: string;
  glacier: string;
  grassland: string;
  scrub: string;
  urbanArea: string;
}

export const LIGHT: Flavor = {
  background: "#cccccc",
  earth: "#e2dfda",
  parkA: "#cfddd5",
  parkB: "#9cd3b4",
  hospital: "#e4dad9",
  industrial: "#d1dde1",
  school: "#e4ded7",
  woodA: "#d0ded0",
  woodB: "#a0d9a0",
  pedestrian: "#e3e0d4",
  scrubA: "#cedcd7",
  scrubB: "#99d2bb",
  glacier: "#e7e7e7",
  sand: "#e2e0d7",
  beach: "#e8e4d0",
  aerodrome: "#dadbdf",
  runway: "#e9e9ed",
  water: "#80deea",
  zoo: "#c6dcdc",
  military: "#dcdcdc",

  tunnelOtherCasing: "#e0e0e0",
  tunnelMinorCasing: "#e0e0e0",
  tunnelLinkCasing: "#e0e0e0",
  tunnelMajorCasing: "#e0e0e0",
  tunnelHighwayCasing: "#e0e0e0",
  tunnelOther: "#d5d5d5",
  tunnelMinor: "#d5d5d5",
  tunnelLink: "#d5d5d5",
  tunnelMajor: "#d5d5d5",
  tunnelHighway: "#d5d5d5",

  pier: "#e0e0e0",
  buildings: "#cccccc",

  minorServiceCasing: "#e0e0e0",
  minorCasing: "#e0e0e0",
  linkCasing: "#e0e0e0",
  majorCasingLate: "#e0e0e0",
  highwayCasingLate: "#e0e0e0",
  other: "#ebebeb",
  minorService: "#ebebeb",
  minorA: "#ebebeb",
  minorB: "#ffffff",
  link: "#ffffff",
  majorCasingEarly: "#e0e0e0",
  major: "#ffffff",
  highwayCasingEarly: "#e0e0e0",
  highway: "#ffffff",

  railway: "#a7b1b3",
  boundaries: "#adadad",

  bridgesOtherCasing: "#e0e0e0",
  bridgesMinorCasing: "#e0e0e0",
  bridgesLinkCasing: "#e0e0e0",
  bridgesMajorCasing: "#e0e0e0",
  bridgesHighwayCasing: "#e0e0e0",
  bridgesOther: "#ebebeb",
  bridgesMinor: "#ffffff",
  bridgesLink: "#ffffff",
  bridgesMajor: "#f5f5f5",
  bridgesHighway: "#ffffff",

  roadsLabelMinor: "#91888b",
  roadsLabelMinorHalo: "#ffffff",
  roadsLabelMajor: "#938a8d",
  roadsLabelMajorHalo: "#ffffff",
  oceanLabel: "#728dd4",
  subplaceLabel: "#8f8f8f",
  subplaceLabelHalo: "#e0e0e0",
  cityLabel: "#5c5c5c",
  cityLabelHalo: "#e0e0e0",
  stateLabel: "#b3b3b3",
  stateLabelHalo: "#e0e0e0",
  countryLabel: "#a3a3a3",

  addressLabel: "#91888b",
  addressLabelHalo: "#ffffff",

  pois: {
    blue: "#1A8CBD",
    green: "#20834D",
    lapis: "#315BCF",
    pink: "#EF56BA",
    red: "#F2567A",
    slategray: "#6A5B8F",
    tangerine: "#CB6704",
    turquoise: "#00C3D4"
  },

  landcover: {
    grassland: "rgba(210, 239, 207, 1)",
    barren: "rgba(255, 243, 215, 1)",
    urbanArea: "rgba(230, 230, 230, 1)",
    farmland: "rgba(216, 239, 210, 1)",
    glacier: "rgba(255, 255, 255, 1)",
    scrub: "rgba(234, 239, 210, 1)",
    forest: "rgba(196, 231, 210, 1)"
  }
};

export const DARK: Flavor = {
  background: "#34373d",
  earth: "#1f1f1f",
  parkA: "#1c2421",
  parkB: "#192a24",
  hospital: "#252424",
  industrial: "#222222",
  school: "#262323",
  woodA: "#202121",
  woodB: "#202121",
  pedestrian: "#1e1e1e",
  scrubA: "#222323",
  scrubB: "#222323",
  glacier: "#1c1c1c",
  sand: "#212123",
  beach: "#28282a",
  aerodrome: "#1e1e1e",
  runway: "#333333",
  water: "#31353f",
  zoo: "#222323",
  military: "#242323",

  tunnelOtherCasing: "#141414",
  tunnelMinorCasing: "#141414",
  tunnelLinkCasing: "#141414",
  tunnelMajorCasing: "#141414",
  tunnelHighwayCasing: "#141414",
  tunnelOther: "#292929",
  tunnelMinor: "#292929",
  tunnelLink: "#292929",
  tunnelMajor: "#292929",
  tunnelHighway: "#292929",

  pier: "#333333",
  buildings: "#111111",

  minorServiceCasing: "#1f1f1f",
  minorCasing: "#1f1f1f",
  linkCasing: "#1f1f1f",
  majorCasingLate: "#1f1f1f",
  highwayCasingLate: "#1f1f1f",
  other: "#333333",
  minorService: "#333333",
  minorA: "#3d3d3d",
  minorB: "#333333",
  link: "#3d3d3d",
  majorCasingEarly: "#1f1f1f",
  major: "#3d3d3d",
  highwayCasingEarly: "#1f1f1f",
  highway: "#474747",

  railway: "#000000",
  boundaries: "#5b6374",

  bridgesOtherCasing: "#2b2b2b",
  bridgesMinorCasing: "#1f1f1f",
  bridgesLinkCasing: "#1f1f1f",
  bridgesMajorCasing: "#1f1f1f",
  bridgesHighwayCasing: "#1f1f1f",
  bridgesOther: "#333333",
  bridgesMinor: "#333333",
  bridgesLink: "#3d3d3d",
  bridgesMajor: "#3d3d3d",
  bridgesHighway: "#474747",

  roadsLabelMinor: "#525252",
  roadsLabelMinorHalo: "#1f1f1f",
  roadsLabelMajor: "#666666",
  roadsLabelMajorHalo: "#1f1f1f",
  oceanLabel: "#717784",
  subplaceLabel: "#525252",
  subplaceLabelHalo: "#1f1f1f",
  cityLabel: "#7a7a7a",
  cityLabelHalo: "#212121",
  stateLabel: "#3d3d3d",
  stateLabelHalo: "#1f1f1f",
  countryLabel: "#5c5c5c",

  addressLabel: "#525252",
  addressLabelHalo: "#1f1f1f",

  pois: {
    blue: "#4299BB",
    green: "#30C573",
    lapis: "#2B5CEA",
    pink: "#EF56BA",
    red: "#F2567A",
    slategray: "#93939F",
    tangerine: "#F19B6E",
    turquoise: "#00C3D4"
  },

  landcover: {
    grassland: "rgba(30, 41, 31, 1)",
    barren: "rgba(38, 38, 36, 1)",
    urbanArea: "rgba(28, 28, 28, 1)",
    farmland: "rgba(31, 36, 32, 1)",
    glacier: "rgba(43, 43, 43, 1)",
    scrub: "rgba(34, 36, 30, 1)",
    forest: "rgba(28, 41, 37, 1)"
  }
};

export const WHITE: Flavor = {
  background: "#ffffff",
  earth: "#ffffff",
  parkA: "#fcfcfc",
  parkB: "#fcfcfc",
  hospital: "#f8f8f8",
  industrial: "#fcfcfc",
  school: "#f8f8f8",
  woodA: "#fafafa",
  woodB: "#fafafa",
  pedestrian: "#fdfdfd",
  scrubA: "#fafafa",
  scrubB: "#fafafa",
  glacier: "#fcfcfc",
  sand: "#fafafa",
  beach: "#f6f6f6",
  aerodrome: "#fdfdfd",
  runway: "#efefef",
  water: "#dcdcdc",
  zoo: "#f7f7f7",
  military: "#fcfcfc",

  tunnelOtherCasing: "#d6d6d6",
  tunnelMinorCasing: "#fcfcfc",
  tunnelLinkCasing: "#fcfcfc",
  tunnelMajorCasing: "#fcfcfc",
  tunnelHighwayCasing: "#fcfcfc",
  tunnelOther: "#d6d6d6",
  tunnelMinor: "#d6d6d6",
  tunnelLink: "#d6d6d6",
  tunnelMajor: "#d6d6d6",
  tunnelHighway: "#d6d6d6",

  pier: "#efefef",
  buildings: "#efefef",

  minorServiceCasing: "#ffffff",
  minorCasing: "#ffffff",
  linkCasing: "#ffffff",
  majorCasingLate: "#ffffff",
  highwayCasingLate: "#ffffff",
  other: "#f5f5f5",
  minorService: "#f5f5f5",
  minorA: "#ebebeb",
  minorB: "#f5f5f5",
  link: "#ebebeb",
  majorCasingEarly: "#ffffff",
  major: "#ebebeb",
  highwayCasingEarly: "#ffffff",
  highway: "#ebebeb",

  railway: "#d6d6d6",
  boundaries: "#adadad",

  bridgesOtherCasing: "#ffffff",
  bridgesMinorCasing: "#ffffff",
  bridgesLinkCasing: "#ffffff",
  bridgesMajorCasing: "#ffffff",
  bridgesHighwayCasing: "#ffffff",
  bridgesOther: "#f5f5f5",
  bridgesMinor: "#f5f5f5",
  bridgesLink: "#ebebeb",
  bridgesMajor: "#ebebeb",
  bridgesHighway: "#ebebeb",

  roadsLabelMinor: "#adadad",
  roadsLabelMinorHalo: "#ffffff",
  roadsLabelMajor: "#999999",
  roadsLabelMajorHalo: "#ffffff",
  oceanLabel: "#adadad",
  subplaceLabel: "#8f8f8f",
  subplaceLabelHalo: "#ffffff",
  cityLabel: "#5c5c5c",
  cityLabelHalo: "#ffffff",
  stateLabel: "#b3b3b3",
  stateLabelHalo: "#ffffff",
  countryLabel: "#b8b8b8",

  addressLabel: "#adadad",
  addressLabelHalo: "#ffffff"
};

export const GRAYSCALE: Flavor = {
  background: "#a3a3a3",
  earth: "#cccccc",
  parkA: "#c2c2c2",
  parkB: "#c2c2c2",
  hospital: "#d0d0d0",
  industrial: "#c6c6c6",
  school: "#d0d0d0",
  woodA: "#c2c2c2",
  woodB: "#c2c2c2",
  pedestrian: "#c4c4c4",
  scrubA: "#c2c2c2",
  scrubB: "#c2c2c2",
  glacier: "#d2d2d2",
  sand: "#d2d2d2",
  beach: "#d2d2d2",
  aerodrome: "#c9c9c9",
  runway: "#f5f5f5",
  water: "#a3a3a3",
  zoo: "#c7c7c7",
  military: "#bfbfbf",

  tunnelOtherCasing: "#b8b8b8",
  tunnelMinorCasing: "#b8b8b8",
  tunnelLinkCasing: "#b8b8b8",
  tunnelMajorCasing: "#b8b8b8",
  tunnelHighwayCasing: "#b8b8b8",
  tunnelOther: "#d6d6d6",
  tunnelMinor: "#d6d6d6",
  tunnelLink: "#d6d6d6",
  tunnelMajor: "#d6d6d6",
  tunnelHighway: "#d6d6d6",

  pier: "#b8b8b8",
  buildings: "#e0e0e0",

  minorServiceCasing: "#cccccc",
  minorCasing: "#cccccc",
  linkCasing: "#cccccc",
  majorCasingLate: "#cccccc",
  highwayCasingLate: "#cccccc",
  other: "#e0e0e0",
  minorService: "#e0e0e0",
  minorA: "#ebebeb",
  minorB: "#e0e0e0",
  link: "#ebebeb",
  majorCasingEarly: "#cccccc",
  major: "#ebebeb",
  highwayCasingEarly: "#cccccc",
  highway: "#ebebeb",

  railway: "#f5f5f5",
  boundaries: "#5c5c5c",

  bridgesOtherCasing: "#cccccc",
  bridgesMinorCasing: "#cccccc",
  bridgesLinkCasing: "#cccccc",
  bridgesMajorCasing: "#cccccc",
  bridgesHighwayCasing: "#cccccc",
  bridgesOther: "#e0e0e0",
  bridgesMinor: "#e0e0e0",
  bridgesLink: "#ebebeb",
  bridgesMajor: "#ebebeb",
  bridgesHighway: "#ebebeb",

  roadsLabelMinor: "#999999",
  roadsLabelMinorHalo: "#e0e0e0",
  roadsLabelMajor: "#8f8f8f",
  roadsLabelMajorHalo: "#ebebeb",
  oceanLabel: "#7a7a7a",
  subplaceLabel: "#7a7a7a",
  subplaceLabelHalo: "#cccccc",
  cityLabel: "#474747",
  cityLabelHalo: "#cccccc",
  stateLabel: "#999999",
  stateLabelHalo: "#cccccc",
  countryLabel: "#858585",

  addressLabel: "#999999",
  addressLabelHalo: "#e0e0e0"
};

export const BLACK: Flavor = {
  background: "#2b2b2b",
  earth: "#141414",
  parkA: "#181818",
  parkB: "#181818",
  hospital: "#1d1d1d",
  industrial: "#101010",
  school: "#111111",
  woodA: "#1a1a1a",
  woodB: "#1a1a1a",
  pedestrian: "#191919",
  scrubA: "#1c1c1c",
  scrubB: "#1c1c1c",
  glacier: "#191919",
  sand: "#161616",
  beach: "#1f1f1f",
  aerodrome: "#191919",
  runway: "#323232",
  water: "#333333",
  zoo: "#191919",
  military: "#121212",

  tunnelOtherCasing: "#101010",
  tunnelMinorCasing: "#101010",
  tunnelLinkCasing: "#101010",
  tunnelMajorCasing: "#101010",
  tunnelHighwayCasing: "#101010",
  tunnelOther: "#292929",
  tunnelMinor: "#292929",
  tunnelLink: "#292929",
  tunnelMajor: "#292929",
  tunnelHighway: "#292929",

  pier: "#0a0a0a",
  buildings: "#0a0a0a",

  minorServiceCasing: "#141414",
  minorCasing: "#141414",
  linkCasing: "#141414",
  majorCasingLate: "#141414",
  highwayCasingLate: "#141414",
  other: "#1f1f1f",
  minorService: "#1f1f1f",
  minorA: "#292929",
  minorB: "#1f1f1f",
  link: "#1f1f1f",
  majorCasingEarly: "#141414",
  major: "#292929",
  highwayCasingEarly: "#141414",
  highway: "#292929",

  railway: "#292929",
  boundaries: "#707070",

  bridgesOtherCasing: "#141414",
  bridgesMinorCasing: "#141414",
  bridgesLinkCasing: "#141414",
  bridgesMajorCasing: "#141414",
  bridgesHighwayCasing: "#141414",
  bridgesOther: "#1f1f1f",
  bridgesMinor: "#1f1f1f",
  bridgesLink: "#292929",
  bridgesMajor: "#292929",
  bridgesHighway: "#292929",

  roadsLabelMinor: "#525252",
  roadsLabelMinorHalo: "#141414",
  roadsLabelMajor: "#5c5c5c",
  roadsLabelMajorHalo: "#141414",
  oceanLabel: "#707070",
  subplaceLabel: "#5c5c5c",
  subplaceLabelHalo: "#141414",
  cityLabel: "#999999",
  cityLabelHalo: "#141414",
  stateLabel: "#3d3d3d",
  stateLabelHalo: "#141414",
  countryLabel: "#707070",

  addressLabel: "#525252",
  addressLabelHalo: "#141414"
};
