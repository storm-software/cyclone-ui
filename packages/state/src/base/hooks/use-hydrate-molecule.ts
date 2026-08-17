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

import type { SetStateAction, WritableAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import type { JotaiStore, WritableAtomRecord } from "../../types";

export type UseHydrateAtoms<T> = (
  initialValues: Partial<Record<keyof T, any>>,
  options?: Parameters<typeof useHydrateAtoms>[1]
) => void;

/**
 * Hydrate atoms with initial values for SSR.
 */
export const useHydrateMolecule = <T extends object>(
  atoms: WritableAtomRecord<T>,
  initialValues: Partial<Record<keyof T, unknown>>,
  store?: JotaiStore
) => {
  const values: [
    WritableAtom<unknown, [SetStateAction<unknown>], void>,
    unknown
  ][] = [];

  for (const key of Object.keys(atoms) as (keyof T)[]) {
    const initialValue = initialValues[key];

    if (initialValue !== undefined) {
      values.push([
        atoms[key] as WritableAtom<unknown, [SetStateAction<unknown>], void>,
        initialValue
      ]);
    }
  }

  useHydrateAtoms(values, { store });
};
