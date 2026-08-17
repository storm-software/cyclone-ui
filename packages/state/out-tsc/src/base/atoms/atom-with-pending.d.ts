import type { PrimitiveAtom } from "jotai";
import type { WithInitialValue } from "../../types";
/**
 * Creates an atom that always returns a pending promise.
 *
 * @returns An atom that always returns a pending promise.
 */
export declare const atomWithPending: <Value>() => PrimitiveAtom<Value> & WithInitialValue<Value>;
//# sourceMappingURL=atom-with-pending.d.ts.map