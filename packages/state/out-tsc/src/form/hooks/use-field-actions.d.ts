import type { Ref } from "react";
import { ValidationCause } from "../types";
export declare const useFieldActions: <TFieldValue = any>() => {
    mount: (ref: Ref<HTMLInputElement>, tabIndex?: number | undefined) => Promise<void>;
    initialize: (initialValue: TFieldValue, skipIfDirty?: boolean | undefined) => Promise<void>;
    change: (nextValue: TFieldValue, touch?: boolean | undefined) => Promise<void>;
    focus: () => Promise<void>;
    blur: () => Promise<void>;
    setFocused: (focused: boolean) => Promise<void>;
    toggleFocused: () => Promise<void>;
    validate: (nextValue: TFieldValue, cause: ValidationCause) => Promise<void>;
    reset: () => Promise<void>;
};
//# sourceMappingURL=use-field-actions.d.ts.map