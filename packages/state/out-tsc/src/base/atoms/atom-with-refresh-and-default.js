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
import { baseAtom } from "./base-atom";
export const atomWithRefreshAndDefault = (refreshAtom, getDefault) => {
    const overwrittenAtom = baseAtom(null);
    return baseAtom(get => {
        const lastState = get(overwrittenAtom);
        if (lastState && lastState.refresh === get(refreshAtom)) {
            return lastState.value;
        }
        return getDefault(get);
    }, (get, set, update) => {
        set(overwrittenAtom, { refresh: get(refreshAtom), value: update });
    });
};
//# sourceMappingURL=atom-with-refresh-and-default.js.map