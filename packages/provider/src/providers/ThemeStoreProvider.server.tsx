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

import { ColorThemeMode } from "@cyclone-ui/colors";
import {
  CreateTamaguiProps,
  InferTamaguiConfig,
  TamaguiProvider,
  type TamaguiProviderProps
} from "@tamagui/core";
import { PropsWithChildren } from "react";
import { themeStore } from "../stores/theme-store";
import { ThemeOptions } from "../types";

export type ThemeStoreProviderServerProps = PropsWithChildren<
  Partial<ThemeOptions> &
    Omit<TamaguiProviderProps, "defaultTheme"> & {
      disableInjectCSS?: boolean;
      config: InferTamaguiConfig<CreateTamaguiProps>;
    }
>;

export const ThemeStoreProviderServer = ({
  children,
  defaultMode = ColorThemeMode.DARK,
  items = [ColorThemeMode.LIGHT, ColorThemeMode.DARK],
  disableInjectCSS = true,
  config,
  ...props
}: ThemeStoreProviderServerProps) => {
  return (
    <themeStore.Provider
      initialValues={{
        options: {
          items,
          defaultMode
        } as ThemeOptions,
        mode: defaultMode
      }}>
      <TamaguiProvider
        {...props}
        config={config}
        disableInjectCSS={disableInjectCSS}
        defaultTheme={defaultMode}>
        {children}
      </TamaguiProvider>
    </themeStore.Provider>
  );
};
