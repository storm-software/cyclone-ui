import type { PropsWithChildren } from "react";
import type { FieldOptions } from "../types";
export type FieldProviderOptions<TFieldValue = any> = PropsWithChildren<FieldOptions<TFieldValue> & {
    name: string;
}>;
export declare function FieldProvider<TFieldValue = any>({ children, name, ...props }: FieldProviderOptions<TFieldValue>): import("react").JSX.Element;
//# sourceMappingURL=FieldProvider.d.ts.map