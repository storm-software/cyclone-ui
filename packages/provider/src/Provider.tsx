import { PropsWithChildren } from "react";
import { ToastProvider, type ToastProviderProps } from "./ToastProvider";
import { ThemeProvider, type ThemeProviderProps } from "./ThemeProvider";

export type ProviderProps = PropsWithChildren<{
  toast: ToastProviderProps;
  theme: ThemeProviderProps;
}>;

export const Provider = ({
  children,
  toast,
  theme,
  ...props
}: ProviderProps) => {
  return (
    <ThemeProvider {...theme}>
      <ToastProvider {...toast}>{children}</ToastProvider>
    </ThemeProvider>
  );
};
