import { PropsWithChildren } from "react";
import { PortalProvider } from "@tamagui/portal";
import { TamaguiProvider, type TamaguiProviderProps } from "@tamagui/web";
import { useThemeNameState } from "./theme-state";

declare const window: any;

export type ThemeProviderProps = PropsWithChildren<
  Partial<TamaguiProviderProps> & Omit<TamaguiProviderProps, "defaultTheme">
>;

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
    <TamaguiProvider {...props} defaultTheme={defaultTheme}>
      <PortalProvider shouldAddRootHost={true}>{children}</PortalProvider>
    </TamaguiProvider>
  );
};
