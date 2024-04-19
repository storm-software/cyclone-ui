import { useThemeNameState } from "@cyclone-ui/themes";
import { TamaguiProvider, type TamaguiProviderProps } from "@tamagui/core";
import { config } from "@cyclone-ui/config";
import React from "react";

declare const window: any;

export type ThemeProviderProps = Partial<TamaguiProviderProps> &
  Omit<TamaguiProviderProps, "defaultTheme" | "config">;

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  let theme = props?.defaultTheme;
  if (
    !theme &&
    window?.matchMedia &&
    window?.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    // light mode
    theme = "light";
  }

  const defaultTheme = useThemeNameState((theme ? theme : "dark") as any);

  return (
    <TamaguiProvider config={config} {...props} defaultTheme={defaultTheme}>
      {children}
    </TamaguiProvider>
  );
};
