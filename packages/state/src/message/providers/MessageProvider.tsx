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

import type { PropsWithChildren } from "react";

/**
 * The properties provided to the MessageProvider component.
 */
export type MessageProviderProps = PropsWithChildren;

/**
 * A compatibility wrapper for message descendants.
 *
 * Toast 2 uses a global store, so rendering a MessageProvider is no longer required
 * for useMessageActions. Mount Message or MessageViewport once to render the toasts.
 *
 * @example
 * <MessageProvider>
 *   <App />
 * </MessageProvider>
 */
export const MessageProvider = ({ children }: MessageProviderProps) => children;
