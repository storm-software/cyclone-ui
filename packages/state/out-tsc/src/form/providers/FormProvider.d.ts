import type { PropsWithChildren } from "react";
import type { FormOptions } from "../types";
export type FormProviderOptions<TFormValues extends Record<string, any> = Record<string, any>> = PropsWithChildren<FormOptions<TFormValues> & {
    name: string;
}>;
export declare const FormProvider: <TFormValues extends Record<string, any> = Record<string, any>>({ children, name, ...props }: FormProviderOptions<TFormValues>) => import("react").JSX.Element;
//# sourceMappingURL=FormProvider.d.ts.map