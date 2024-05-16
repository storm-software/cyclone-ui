import {
  ToastProvider as TamaguiToastProvider,
  type ToastProviderProps as TamaguiToastProviderProps
} from "@tamagui/toast";
import { PropsWithChildren } from "react";

export type ToastProviderProps = PropsWithChildren<
  Partial<TamaguiToastProviderProps> &
    Omit<TamaguiToastProviderProps, "id" | "label">
>;

export const ToastProvider = ({ children, ...props }: ToastProviderProps) => {
  return (
    <TamaguiToastProvider
      id="Storm Software"
      label="Storm Notification"
      duration={30 * 1000}
      swipeDirection="horizontal"
      {...props}>
      {children}
    </TamaguiToastProvider>
  );
};
