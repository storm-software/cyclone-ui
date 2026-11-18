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

import type { ToastRootProps } from "@tamagui/toast";
import { Toast } from "@tamagui/toast";

/**
 * The properties provided to the MessageViewport component.
 */
export type MessageViewportProps = Partial<ToastRootProps> & {
  /**
   * The accessible label of the toast region
   *
   * @defaultValue "Storm Messages"
   */
  label?: string;
};

/**
 * The MessageViewport component configures Tamagui's composable Toast for messages.
 *
 * @example
 * <MessageProvider>
 *   <App />
 *   <MessageViewport />
 * </MessageProvider>
 */
export const MessageViewport = ({
  label = "Storm Messages",
  children,
  ...props
}: MessageViewportProps) => (
  <Toast
    duration={30 * 1000}
    position="top-right"
    swipeDirection="horizontal"
    swipeThreshold={50}
    {...props}>
    <Toast.Viewport label={label}>
      <Toast.List />
    </Toast.Viewport>
    {children}
  </Toast>
);
