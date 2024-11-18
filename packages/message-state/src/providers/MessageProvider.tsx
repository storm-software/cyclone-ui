/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

// import { uuid } from "@storm-stack/unique-identifier";
import {
  ToastProvider as TamaguiToastProvider,
  type ToastProviderProps as TamaguiToastProviderProps
} from "@tamagui/toast";
import { PropsWithChildren } from "react";
import { MessageViewport } from "../components/MessageViewport";

/**
 * The properties provided to the MessageProvider component.
 */
export type MessageProviderProps = PropsWithChildren<
  Partial<TamaguiToastProviderProps> &
    Omit<TamaguiToastProviderProps, "id" | "label">
>;

/**
 * The MessageProvider component is a wrapper for the Tamagui ToastProvider component.
 *
 * @example
 * <MessageProvider>
 *   <App />
 * </MessageProvider>
 */
export const MessageProvider = ({
  children,
  ...props
}: MessageProviderProps) => {
  return (
    <TamaguiToastProvider
      label="Storm Notifications"
      duration={30 * 1000}
      swipeDirection="horizontal"
      swipeThreshold={50}
      {...props}>
      <MessageViewport />

      {children}
    </TamaguiToastProvider>
  );
};
