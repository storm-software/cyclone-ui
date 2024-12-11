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

import type { SetStateAction, WritableAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { JotaiStore, WritableAtomRecord } from "../types";

export type UseHydrateAtoms<T> = (
  initialValues: Partial<Record<keyof T, any>>,
  options?: Parameters<typeof useHydrateAtoms>[1]
) => void;

/**
 * Hydrate atoms with initial values for SSR.
 */
export const useHydrateMolecule = (
  atoms: WritableAtomRecord<unknown>,
  initialValues: Partial<Record<keyof unknown, any>>,
  store?: JotaiStore
) => {
  const values: [
    WritableAtom<unknown, [SetStateAction<unknown>], void>,
    Parameters<UseHydrateAtoms<unknown>>[0]
  ][] = [];

  for (const key of Object.keys(atoms)) {
    const initialValue = initialValues[key];

    if (initialValue !== undefined) {
      values.push([atoms[key], initialValue]);
    }
  }

  useHydrateAtoms(values, { store });
};
