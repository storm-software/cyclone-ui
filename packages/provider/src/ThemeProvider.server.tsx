import { TamaguiProvider, type TamaguiProviderProps } from "@tamagui/web";
import { config } from "@cyclone-ui/config";
import { PropsWithChildren } from "react";

export type ThemeProviderServerProps = PropsWithChildren<
  Partial<TamaguiProviderProps> &
    Omit<TamaguiProviderProps, "defaultTheme" | "config">
>;

export const ThemeProviderServer = ({
  children,
  ...props
}: ThemeProviderServerProps) => {
  return (
    <TamaguiProvider config={config} {...props}>
      {children}
    </TamaguiProvider>
  );
};
