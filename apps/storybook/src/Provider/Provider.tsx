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
  ThemeStoreProvider,
  type ThemeStoreProviderProps
} from "@cyclone-ui/theme-state";
import { PortalProvider } from "@tamagui/portal";
import { PropsWithChildren } from "react";

export type ProviderProps = PropsWithChildren<{
  toast?: ToastProviderProps;
  theme: ThemeStoreProviderProps;
}>;

export const Provider = ({
  children,
  toast = {},
  theme,
  ...props
}: ProviderProps) => {
  return (
    <ThemeStoreProvider {...theme}>
      <PortalProvider shouldAddRootHost={true}>
        <ToastProvider {...toast}>{children}</ToastProvider>
      </PortalProvider>
    </ThemeStoreProvider>
  );
};
