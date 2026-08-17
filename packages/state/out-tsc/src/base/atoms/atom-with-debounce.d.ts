import type { Atom, PrimitiveAtom, SetStateAction, WritableAtom } from "jotai";
import { RESET } from "jotai/utils";
export declare function atomWithDebounce<TValue = unknown>(initialValueOrAtom: Atom<TValue> | PrimitiveAtom<TValue> | TValue | WritableAtom<TValue, [SetStateAction<TValue> | typeof RESET], void>, debounceMs?: number, shouldDebounceOnReset?: boolean): {
    clearTimeoutAtom: WritableAtom<null, [], void>;
    currentValueAtom: Atom<TValue>;
    debouncedValueAtom: WritableAtom<TValue, [
        SetStateAction<TValue> | typeof RESET
    ], void>;
    isDebouncingAtom: PrimitiveAtom<boolean>;
};
//# sourceMappingURL=atom-with-debounce.d.ts.map