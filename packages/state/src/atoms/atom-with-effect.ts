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

import type { Getter, Setter } from "jotai/vanilla";
import { baseAtom } from "../base/base-atom";

type CleanupFn = () => void;

/**
 * Creates an atom that runs an effect function when mounted and unmounts.
 *
 * @param effectFn - The effect function to run
 * @returns An atom that runs an effect function when mounted and unmounts.
 */
export function atomWithEffect(
  effectFn: (get: Getter, set: Setter) => CleanupFn | void
) {
  const refAtom = baseAtom(() => ({
    cleanup: undefined as CleanupFn | void,
    inProgress: 0,
    mounted: false,
    promise: undefined as Promise<void> | undefined
  }));
  const refreshAtom = baseAtom(0);

  const initAtom = baseAtom(null, (get, set, mounted: boolean) => {
    const ref = get(refAtom);
    if (mounted) {
      ref.mounted = true;
      set(refreshAtom, c => c + 1);
    } else {
      ref.cleanup?.();
      ref.cleanup = undefined;
      ref.mounted = false;
    }
  });
  initAtom.onMount = init => {
    init(true);
    return () => init(false);
  };

  const effectAtom = baseAtom(
    // eslint-disable-next-line consistent-return
    (get, { setSelf }) => {
      get(refreshAtom);
      const ref = get(refAtom);
      if (!ref.mounted || ref.inProgress) {
        return ref.promise;
      }
      ++ref.inProgress;
      ref.promise = Promise.resolve().then(() => {
        try {
          if (!ref.mounted) {
            return;
          }

          ref.cleanup?.();
          ref.cleanup = effectFn(get, setSelf as Setter);
        } finally {
          --ref.inProgress;
          ref.promise = undefined;
        }
      });
    },
    (get, set, ...args: Parameters<Setter>) => {
      const ref = get(refAtom);
      ++ref.inProgress;
      try {
        return set(...args);
      } finally {
        --ref.inProgress;
      }
    }
  );

  return baseAtom(get => {
    get(initAtom);
    get(effectAtom);
  });
}
