import type { Getter, PrimitiveAtom } from "jotai";
export declare const atomWithRefreshAndDefault: <TValue>(refreshAtom: PrimitiveAtom<number>, getDefault: (get: Getter) => TValue) => import("jotai").WritableAtom<TValue, [update: TValue], void>;
//# sourceMappingURL=atom-with-refresh-and-default.d.ts.map