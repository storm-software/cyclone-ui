import { useThemeNameState } from "./theme-state";
import { TamaguiProvider, type TamaguiProviderProps } from "@tamagui/web";
import { config } from "@cyclone-ui/config";
import { PortalProvider } from "@tamagui/portal";

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
      <PortalProvider shouldAddRootHost={true}>{children}</PortalProvider>
    </TamaguiProvider>
  );
};
