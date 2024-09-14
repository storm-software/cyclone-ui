import { noop } from "@storm-stack/utilities";
import { baseAtom } from "../base/base-atom";

const pendingPromise = new Promise<never>(noop);

/**
 * Creates an atom that always returns a pending promise.
 *
 * @returns An atom that always returns a pending promise.
 */
export const atomWithPending = <Value>() =>
  baseAtom(pendingPromise as unknown as Value);
