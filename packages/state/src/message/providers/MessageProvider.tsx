/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

// import { uuid } from "@storm-stack/unique-identifier";
import type { ToastProviderProps as TamaguiToastProviderProps } from "@tamagui/toast";
import { ToastProvider as TamaguiToastProvider } from "@tamagui/toast";
import type { PropsWithChildren } from "react";
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
      label="Messages"
      duration={30 * 1000}
      swipeDirection="horizontal"
      swipeThreshold={50}
      {...props}>
      <MessageViewport />

      {children}
    </TamaguiToastProvider>
  );
};
