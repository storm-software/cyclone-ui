import { TamaguiProvider, type TamaguiProviderProps } from "@tamagui/web";
import { PropsWithChildren } from "react";

export type ThemeProviderServerProps = PropsWithChildren<
  Partial<TamaguiProviderProps> & Omit<TamaguiProviderProps, "defaultTheme">
>;

export const ThemeProviderServer = ({
  children,
  ...props
}: ThemeProviderServerProps) => {
  return <TamaguiProvider {...props}>{children}</TamaguiProvider>;
};
