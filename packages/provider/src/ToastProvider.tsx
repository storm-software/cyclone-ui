import {
  ToastProvider as TamaguiToastProvider,
  type ToastProviderProps as TamaguiToastProviderProps
} from "@tamagui/toast";
import { PropsWithChildren } from "react";

export type ToastProviderProps = PropsWithChildren<
  Partial<TamaguiToastProviderProps> & Omit<TamaguiToastProviderProps, "id">
>;

export const ToastProvider = ({ children, ...props }: ToastProviderProps) => {
  return (
    <TamaguiToastProvider id="Storm Software" {...props}>
      {children}
    </TamaguiToastProvider>
  );
};
