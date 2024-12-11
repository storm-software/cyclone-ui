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
import { JotaiStore, WritableAtomRecord } from "../types";
import { isAtom } from "../utilities/is-atom";

export type UseSyncAtoms<T> = (
  values: Partial<Record<keyof T, any>>,
  store?: JotaiStore
) => void;

/**
 * Update atoms with new values on changes.
 */
export const useSyncMolecule = (
  atoms: WritableAtomRecord<unknown>,
  values: Record<number | string, unknown>,
  store?: JotaiStore
) => {
  for (const key of Object.keys(atoms)) {
    let value = values[key];
    if (isAtom(value)) {
      value = useAtomValue(value);
    }

    const setAtom = useSetAtom(atoms[key], { store });
    useEffect(() => {
      if (value !== undefined) {
        setAtom(value);
      }
    }, [setAtom, value]);
  }
};
