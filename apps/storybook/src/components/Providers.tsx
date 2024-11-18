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
  ThemeStoreProvider,
  type ThemeStoreProviderProps
} from "@cyclone-ui/client-state";
import {
  MessageProvider,
  type MessageProviderProps
} from "@cyclone-ui/message-state";
import { PortalProvider } from "@tamagui/portal";
import { PropsWithChildren } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type ProvidersProps = PropsWithChildren<{
  message?: MessageProviderProps;
  theme: ThemeStoreProviderProps;
}>;

export const Providers = ({
  children,
  message = {},
  theme,
  ...props
}: ProvidersProps) => {
  return (
    <SafeAreaProvider>
      <ThemeStoreProvider {...theme}>
        <PortalProvider>
          <MessageProvider {...message}>{children}</MessageProvider>
        </PortalProvider>
      </ThemeStoreProvider>
    </SafeAreaProvider>
  );
};
