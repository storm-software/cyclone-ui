import { PropsWithChildren } from "react";
import {
  ThemeProviderServer,
  type ThemeProviderServerProps
} from "./ThemeProvider.server";
import { ToastProvider, type ToastProviderProps } from "./ToastProvider";

export type ProviderServerProps = PropsWithChildren<{
  toast?: ToastProviderProps;
  theme?: ThemeProviderServerProps;
}>;

export const ProviderServer = ({
  children,
  toast = {},
  theme = {},
  ...props
}: ProviderServerProps) => {
  return (
    <ThemeProviderServer {...theme}>
      <ToastProvider {...toast}>{children}</ToastProvider>
    </ThemeProviderServer>
  );
};
