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
import type {
  SimpleWritableAtomRecord,
  UseHydrateAtoms
} from "../utilities/create-atom-store";

/**
 * Hydrate atoms with initial values for SSR.
 */
export const useHydrateStore = (
  atoms: SimpleWritableAtomRecord<unknown>,
  initialValues: Parameters<UseHydrateAtoms<unknown>>[0],
  options: Parameters<UseHydrateAtoms<unknown>>[1] = {}
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

  useHydrateAtoms(values, options);
};
