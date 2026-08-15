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

import { createMoleculeApi } from "@cyclone-ui/state";
import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

export const ThemeApi = createMoleculeApi(
  () => {
    const itemsAtom = atom<string[]>(["light", "dark"]);
    const modeAtom = atomWithReset<string>("dark");

    return {
      items: itemsAtom,
      mode: modeAtom
    };
  },
  {
    type: "theme"
  }
);
