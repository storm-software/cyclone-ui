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

import { isEqual } from "@stryke/helpers/is-equal";
import type { SetStateAction, WritableAtom } from "jotai";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import type { JotaiStore, WritableAtomRecord } from "../../types";
import { isAtom } from "../utilities/is-atom";

export type UseSyncAtoms<T> = (
  values: Partial<Record<keyof T, any>>,
  store?: JotaiStore
) => void;

/**
 * Keep the previous reference while `value` is deeply equal to it, so callers
 * passing a fresh object literal each render do not re-trigger effects.
 */
const useDeepStable = <T>(value: T): T => {
  const ref = useRef(value);
  if (!isEqual(ref.current, value)) {
    ref.current = value;
  }

  return ref.current;
};

/**
 * Update atoms with new values on changes.
 *
 * @remarks
 * Values are compared deeply, so a provider that re-renders with equivalent
 * `initialState` does not write to its atoms again. Without this, two
 * providers sharing a molecule scope overwrite each other on every render.
 */
export const useSyncMolecule = <T extends object>(
  atoms: WritableAtomRecord<T>,
  values: Partial<Record<keyof T, unknown>>,
  store?: JotaiStore
) => {
  for (const key of Object.keys(atoms) as (keyof T)[]) {
    let value = values[key];
    if (isAtom(value)) {
      value = useAtomValue(value);
    }
    value = useDeepStable(value);

    const setAtom = useSetAtom(
      atoms[key] as WritableAtom<
        T[keyof T],
        [SetStateAction<T[keyof T]>],
        void
      >,
      { store }
    );
    useEffect(() => {
      if (value !== undefined) {
        setAtom(value as SetStateAction<T[keyof T]>);
      }
    }, [setAtom, value]);
  }
};
