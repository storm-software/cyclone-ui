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

import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import type {
  SimpleWritableAtomRecord,
  UseSyncAtoms
} from "../utilities/create-atom-store";
import { isAtom } from "../utilities/is-atom";

/**
 * Update atoms with new values on changes.
 */
export const useSyncStore = (
  atoms: SimpleWritableAtomRecord<unknown>,
  values: Record<number | string, unknown>,
  { store }: Parameters<UseSyncAtoms<unknown>>[1] = {}
) => {
  for (const key of Object.keys(atoms)) {
    let value = values[key];
    if (isAtom(value)) {
      value = useAtomValue(value);
    }
    const set = useSetAtom(atoms[key], { store });
    useEffect(() => {
      if (value !== undefined && value !== null) {
        set(value);
      }
    }, [set, value]);
  }
};
