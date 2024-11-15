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

import {
  ToastProvider,
  type ToastProviderProps
} from "@cyclone-ui/message-state";
import {
  ThemeStoreProviderServer,
  type ThemeStoreProviderServerProps
} from "@cyclone-ui/theme-state/providers/ThemeStoreProvider.server";
import { PropsWithChildren } from "react";

export type ProviderServerProps = PropsWithChildren<{
  toast?: ToastProviderProps;
  theme: ThemeStoreProviderServerProps;
}>;

export const ProviderServer = ({
  children,
  toast = {},
  theme,
  ...props
}: ProviderServerProps) => {
  return (
    <ThemeStoreProviderServer {...theme}>
      <ToastProvider {...toast}>{children}</ToastProvider>
    </ThemeStoreProviderServer>
  );
};
