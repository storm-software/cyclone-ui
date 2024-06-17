import { PropsWithChildren } from "react";
import { ViewProps } from "@tamagui/core";
import {
  ToastProvider as TamaguiToastProvider,
  type ToastProviderProps as TamaguiToastProviderProps
} from "@tamagui/toast";

export type ToastViewportProps = ViewProps & {
  /**
   * The keys to use as the keyboard shortcut that will move focus to the toast viewport.
   * @defaultValue ['F8']
   */
  hotkey?: string[];
  /**
   * An author-localized label for the toast viewport to provide context for screen reader users
   * when navigating page landmarks. The available `{hotkey}` placeholder will be replaced for you.
   * @defaultValue 'Notifications ({hotkey})'
   */
  label?: string;
  /**
   * Used to reference the viewport if you want to have multiple viewports in the same provider.
   */
  name?: string;
  /**
   * Pass this when you want to have multiple/duplicated toasts.
   */
  multipleToasts?: boolean;
  /**
   * When true, uses a portal to render at the very top of the root TamaguiProvider.
   */
  portalToRoot?: boolean;
};

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
