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
import { atom } from "jotai/vanilla";
export function atomWithEffect(effect) {
    const refreshAtom = atom(0);
    const refAtom = atom(() => ({
        inProgress: 0,
        mounted: false,
        promise: undefined,
        pendingError: undefined,
        cleanup: undefined,
        fromCleanup: false,
        isRecursing: false,
        isRefreshing: false,
        get: (() => { }),
        set: (() => { })
    }), (get, set) => {
        const ref = get(refAtom);
        Object.assign(ref, { mounted: true, get, set });
        set(refreshAtom, c => c + 1);
        return () => {
            ref.mounted = false;
            cleanup(ref);
            throwPendingError(ref);
        };
    });
    refAtom.onMount = mount => mount();
    const baseAtom = atom(async (get) => {
        get(refreshAtom);
        const ref = get(refAtom);
        if (!ref.mounted ||
            ref.isRecursing ||
            (ref.inProgress && !ref.isRefreshing)) {
            return ref.promise;
        }
        throwPendingError(ref);
        const currDeps = new Map();
        const getter = a => {
            const value = get(a);
            currDeps.set(a, value);
            return value;
        };
        getter.peek = anAtom => ref.get(anAtom);
        const setter = (...args) => {
            try {
                ++ref.inProgress;
                return ref.set(...args);
            }
            finally {
                Array.from(currDeps.keys(), get);
                --ref.inProgress;
            }
        };
        setter.recurse = (anAtom, ...args) => {
            if (ref.fromCleanup) {
                if (process.env.NODE_ENV !== "production") {
                    throw new Error("set.recurse is not allowed in cleanup");
                }
                return undefined;
            }
            try {
                ref.isRecursing = true;
                return ref.set(anAtom, ...args);
            }
            finally {
                ref.isRecursing = false;
                const depsChanged = Array.from(currDeps).some(([atom, value]) => !isEqual(get(atom), value));
                if (depsChanged) {
                    refresh(ref);
                }
            }
        };
        ++ref.inProgress;
        function runEffect() {
            try {
                ref.isRefreshing = false;
                if (!ref.mounted)
                    return;
                cleanup(ref);
                ref.cleanup = effect(getter, setter);
            }
            catch (error) {
                ref.pendingError = error;
                refresh(ref);
            }
            finally {
                ref.promise = undefined;
                --ref.inProgress;
            }
        }
        return ref.isRefreshing
            ? runEffect()
            : (ref.promise = Promise.resolve().then(runEffect));
    });
    if (process.env.NODE_ENV !== "production") {
        function setLabel(atom, label) {
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
    function refresh(ref) {
        try {
            ref.isRefreshing = true;
            ref.set(refreshAtom, c => c + 1);
        }
        finally {
            ref.isRefreshing = false;
        }
    }
    function cleanup(ref) {
        if (!ref.cleanup)
            return;
        try {
            ref.fromCleanup = true;
            ref.cleanup();
        }
        finally {
            ref.fromCleanup = false;
            ref.cleanup = undefined;
        }
    }
    function throwPendingError(ref) {
        if ("e" in ref) {
            const error = ref.pendingError;
            delete ref.pendingError;
            throw error;
        }
    }
}
//# sourceMappingURL=atom-with-effect.js.map