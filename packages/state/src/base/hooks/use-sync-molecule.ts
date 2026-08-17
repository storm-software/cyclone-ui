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

/* eslint-disable react-compiler/react-compiler -- jotai atom maps require per-key hook calls */
/* eslint-disable react-hooks/rules-of-hooks -- jotai atom maps require per-key hook calls */
/* eslint-disable react/rules-of-hooks -- jotai atom maps require per-key hook calls */

import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import type { JotaiStore, WritableAtomRecord } from "../types";
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
