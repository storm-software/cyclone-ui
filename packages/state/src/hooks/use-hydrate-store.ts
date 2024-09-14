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
