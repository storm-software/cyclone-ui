import type { SelectOption, SelectOptionValue } from "@stryke/types/form";
import type { Atom, SetStateAction, WritableAtom } from "jotai";
import type { RESET } from "jotai/utils";
import type { FieldOptions, InferFieldState } from "../types";
import { FieldStatus } from "../types";
export declare const atomWithFieldStatus: (themeAtom: Atom<string | undefined>) => Atom<FieldStatus>;
export declare const atomWithFieldItems: <TFieldValue = any>(optionsAtom: Atom<FieldOptions>, valueAtom: Atom<TFieldValue | null>, disabledAtom: Atom<InferFieldState<TFieldValue, boolean>>) => WritableAtom<SelectOption<SelectOptionValue, string>[], [typeof RESET | SetStateAction<SelectOption<SelectOptionValue, string>[]>], void>;
//# sourceMappingURL=atom-with-field.d.ts.map