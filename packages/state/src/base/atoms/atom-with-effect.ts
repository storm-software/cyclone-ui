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

/* eslint-disable ts/no-use-before-define -- debug labels reference the returned effect atom */

import { isEqual } from "@stryke/helpers/is-equal";
import type { Atom, Getter, Setter } from "jotai/vanilla";
import { atom } from "jotai/vanilla";

type Cleanup = () => void;
type GetterWithPeek = Getter & { peek: Getter };
type SetterWithRecurse = Setter & { recurse: Setter };
interface Ref {
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
}

export type EffectCallback = (
  get: GetterWithPeek,
  set: SetterWithRecurse
) => void | Cleanup;

export function atomWithEffect(effect: EffectCallback): Atom<void> {
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
  const baseAtom = atom(async get => {
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
