import type { CreateTamaguiProps, InferTamaguiConfig, TamaguiProviderProps } from "@tamagui/core";
import type { PropsWithChildren } from "react";
import type { ThemeOptions } from "../types";
type ThemeStateManagerProps = PropsWithChildren<Omit<TamaguiProviderProps, "defaultTheme"> & {
    disableInjectCSS?: boolean;
    config: InferTamaguiConfig<CreateTamaguiProps>;
}>;
export type ThemeProviderProps = PropsWithChildren<Partial<ThemeOptions> & ThemeStateManagerProps>;
export declare const ThemeProvider: ({ children, defaultMode, items, ...props }: ThemeProviderProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=ThemeProvider.d.ts.map