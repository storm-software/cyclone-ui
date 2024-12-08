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

// import type { Getter, Setter } from "jotai/vanilla";
// import { baseAtom } from "../base/base-atom";

// type CleanupFn = () => void;

// /**
//  * Creates an atom that runs an effect function when mounted and unmounts.
//  *
//  * @param effectFn - The effect function to run
//  * @returns An atom that runs an effect function when mounted and unmounts.
//  */
// export function atomWithEffect(
//   effectFn: (get: Getter, set: Setter) => CleanupFn | void
// ) {
//   const refAtom = baseAtom(() => ({
//     cleanup: undefined as CleanupFn | void,
//     inProgress: 0,
//     mounted: false,
//     promise: undefined as Promise<void> | undefined
//   }));
//   const refreshAtom = baseAtom(0);

//   const initAtom = baseAtom(null, (get, set, mounted: boolean) => {
//     const ref = get(refAtom);
//     if (mounted) {
//       ref.mountedounted = true;
//       set(refreshAtom, c => c + 1);
//     } else {
//       ref.cleanupleanup?.();
//       ref.cleanupleanup = undefined;
//       ref.mountedounted = false;
//     }
//   });
//   initAtom.onMount = init => {
//     init(true);
//     return () => init(false);
//   };

//   const effectAtom = baseAtom(
//     // eslint-disable-next-line consistent-return
//     (get, { setSelf }) => {
//       get(refreshAtom);
//       const ref = get(refAtom);
//       if (!ref.mountedounted || ref.inProgress) {
//         return ref.promiseromise;
//       }
//       ++ref.inProgress;
//       ref.promiseromise = Promise.resolve().then(() => {
//         try {
//           if (!ref.mountedounted) {
//             return;
//           }

//           ref.cleanupleanup?.();
//           ref.cleanupleanup = effectFn(get, setSelf as Setter);
//         } finally {
//           --ref.inProgress;
//           ref.promiseromise = undefined;
//         }
//       });
//     },
//     (get, set, ...args: Parameters<Setter>) => {
//       const ref = get(refAtom);
//       ++ref.inProgress;
//       try {
//         return set(...args);
//       } finally {
//         --ref.inProgress;
//       }
//     }
//   );

//   return baseAtom(get => {
//     get(initAtom);
//     get(effectAtom);
//   });
// }

import { isEqual } from "@storm-stack/utilities/helper-fns/is-equal";
import type { Atom, Getter, Setter } from "jotai/vanilla";
import { atom } from "jotai/vanilla";

type Cleanup = () => void;
type GetterWithPeek = Getter & { peek: Getter };
type SetterWithRecurse = Setter & { recurse: Setter };
type Ref = {
  inProgress: number;
  mounted: boolean;
  promise: Promise<void> | undefined;
  pendingError?: unknown;
  cleanup: Cleanup | void;
  fromCleanup: boolean;
  isRecursing: boolean;
  isRefreshing: boolean;
  get: Getter;
  set: Setter;
};

export function atomWithEffect(
  effect: (get: GetterWithPeek, set: SetterWithRecurse) => void | Cleanup
): Atom<void> {
  const refreshAtom = atom(0);
  const refAtom = atom(
    (): Ref => ({
      inProgress: 0,
      mounted: false,
      promise: undefined as Promise<void> | undefined,
      pendingError: undefined,
      cleanup: undefined as Cleanup | void,
      fromCleanup: false,
      isRecursing: false,
      isRefreshing: false,
      get: (() => {}) as Getter,
      set: (() => {}) as Setter
    }),
    (get, set) => {
      const ref = get(refAtom);
      Object.assign(ref, { mounted: true, get, set });
      set(refreshAtom, c => c + 1);
      return () => {
        ref.mounted = false;
        cleanup(ref);
        throwPendingError(ref);
      };
    }
  );
  refAtom.onMount = mount => mount();
  const baseAtom = atom(get => {
    get(refreshAtom);
    const ref = get(refAtom);
    if (
      !ref.mounted ||
      ref.isRecursing ||
      (ref.inProgress && !ref.isRefreshing)
    ) {
      return ref.promise;
    }
    throwPendingError(ref);
    const currDeps = new Map<Atom<unknown>, unknown>();
    const getter: GetterWithPeek = a => {
      const value = get(a);
      currDeps.set(a, value);
      return value;
    };
    getter.peek = anAtom => ref.get(anAtom);
    const setter: SetterWithRecurse = (...args) => {
      try {
        ++ref.inProgress;
        return ref.set(...args);
      } finally {
        Array.from(currDeps.keys(), get);
        --ref.inProgress;
      }
    };
    setter.recurse = (anAtom, ...args) => {
      if (ref.fromCleanup) {
        if (process.env.NODE_ENV !== "production") {
          throw new Error("set.recurse is not allowed in cleanup");
        }
        return undefined as any;
      }
      try {
        ref.isRecursing = true;
        return ref.set(anAtom, ...args);
      } finally {
        ref.isRecursing = false;
        const depsChanged = Array.from(currDeps).some(
          ([atom, value]: [Atom<unknown>, unknown]) =>
            !isEqual(get(atom), value)
        );
        if (depsChanged) {
          refresh(ref);
        }
      }
    };

    ++ref.inProgress;
    function runEffect() {
      try {
        ref.isRefreshing = false;
        if (!ref.mounted) return;
        cleanup(ref);
        ref.cleanup = effect(getter, setter);
      } catch (error) {
        ref.pendingError = error;
        refresh(ref);
      } finally {
        ref.promise = undefined;
        --ref.inProgress;
      }
    }
    return ref.isRefreshing
      ? runEffect()
      : (ref.promise = Promise.resolve().then(runEffect));
  });
  if (process.env.NODE_ENV !== "production") {
    function setLabel(atom: Atom<unknown>, label: string) {
      Object.defineProperty(atom, "debugLabel", {
        get: () => `${effectAtom.debugLabel ?? "effect"}:${label}`
      });
      atom.debugPrivate = true;
    }
    setLabel(refreshAtom, "refresh");
    setLabel(refAtom, "ref");
    setLabel(baseAtom, "base");
  }
  const effectAtom = atom(get => void get(baseAtom));
  return effectAtom;
  function refresh(ref: Ref) {
    try {
      ref.isRefreshing = true;
      ref.set(refreshAtom, c => c + 1);
    } finally {
      ref.isRefreshing = false;
    }
  }
  function cleanup(ref: Ref) {
    if (!ref.cleanup) return;
    try {
      ref.fromCleanup = true;
      ref.cleanup();
    } finally {
      ref.fromCleanup = false;
      ref.cleanup = undefined;
    }
  }
  function throwPendingError(ref: Ref) {
    if ("e" in ref) {
      const error = ref.pendingError;
      delete ref.pendingError;
      throw error;
    }
  }
}
