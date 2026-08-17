import type { CreateTamaguiProps, InferTamaguiConfig, TamaguiProviderProps } from "@tamagui/core";
import type { PropsWithChildren } from "react";
import type { ThemeOptions } from "../types";
type ThemeStateManagerServerProps = PropsWithChildren<Omit<TamaguiProviderProps, "defaultTheme"> & {
    disableInjectCSS?: boolean;
    config: InferTamaguiConfig<CreateTamaguiProps>;
}>;
export type ThemeProviderServerProps = PropsWithChildren<Partial<ThemeOptions> & ThemeStateManagerServerProps>;
export declare const ThemeProviderServer: ({ children, defaultMode, items, ...props }: ThemeProviderServerProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=ThemeProvider.server.d.ts.map