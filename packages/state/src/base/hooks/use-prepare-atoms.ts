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

import { useAtomValue } from "jotai/react";
import type { Atom } from "jotai/vanilla";
import { atom } from "jotai/vanilla";
import { useMemo, useState } from "react";

function useMemoList<T>(list: T[], compareFn = (a: T, b: T) => a === b) {
  const [state, setState] = useState(list);
  const listChanged =
    list.length !== state.length ||
    list.some((arg, index) => !compareFn(arg, state[index] as T));
  if (listChanged) {
    // schedule update, triggers re-render
    setState(list);
  }
  return listChanged ? list : state;
}

type Options = Parameters<typeof useAtomValue>[1];

export function usePrepareAtoms(atoms: Atom<unknown>[], options?: Options) {
  const stableAtoms = useMemoList(atoms);
  useAtomValue(
    useMemo(
      () =>
        atom(get => {
          stableAtoms.map(stableAtom => get(stableAtom));
        }),
      [stableAtoms]
    ),
    options
  );
}
