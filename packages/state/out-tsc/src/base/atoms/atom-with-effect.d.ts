import type { Atom, Getter, Setter } from "jotai/vanilla";
type Cleanup = () => void;
type GetterWithPeek = Getter & {
    peek: Getter;
};
type SetterWithRecurse = Setter & {
    recurse: Setter;
};
export type EffectCallback = (get: GetterWithPeek, set: SetterWithRecurse) => void | Cleanup;
export declare function atomWithEffect(effect: EffectCallback): Atom<void>;
export {};
//# sourceMappingURL=atom-with-effect.d.ts.map