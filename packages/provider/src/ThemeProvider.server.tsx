import { PropsWithChildren } from "react";
import { TamaguiProvider, type TamaguiProviderProps } from "@tamagui/web";

export type ThemeProviderServerProps = PropsWithChildren<
  Partial<TamaguiProviderProps> & Omit<TamaguiProviderProps, "defaultTheme">
>;

export const ThemeProviderServer = ({
  children,
  ...props
}: ThemeProviderServerProps) => {
  return <TamaguiProvider {...props}>{children}</TamaguiProvider>;
};
