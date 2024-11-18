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

import { styled } from "@tamagui/core";
import { ToastViewport } from "@tamagui/toast";
import { PropsWithChildren } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BaseMessageViewportProps } from "../types";

/**
 * The properties provided to the BaseMessageProvider component.
 */
export type MessageViewportProps = PropsWithChildren<BaseMessageViewportProps>;

const TamaguiToastViewport = styled(ToastViewport, {
  width: "100%",
  flexDirection: "column",
  flex: 1,
  paddingTop: "$5",
  paddingHorizontal: "$6"
});

/**
 * The BaseMessageProvider component is a wrapper for the Tamagui ToastProvider component.
 *
 * @example
 * <MessageProvider>
 *   <App />
 *   <MessageViewport />
 * </MessageProvider>
 */
export const MessageViewport = ({
  children,
  ...props
}: MessageViewportProps) => {
  const { top, left, right } = useSafeAreaInsets();

  return (
    <TamaguiToastViewport
      name="messages"
      top={top}
      left={left}
      right={right}
      hotkey={["F8"]}
      label="Storm Messages ({hotkey})"
      multipleToasts={true}
      portalToRoot={true}
      {...props}>
      {children}
    </TamaguiToastViewport>
  );
};
