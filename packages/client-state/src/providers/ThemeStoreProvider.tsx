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
import { isRuntimeClient } from "@storm-stack/utilities/helper-fns/is-runtime-server";
import {
  CreateTamaguiProps,
  InferTamaguiConfig,
  TamaguiProvider,
  type TamaguiProviderProps
} from "@tamagui/core";
import { PropsWithChildren, useMemo } from "react";
import { themeStore } from "../stores/theme-store";
import { ThemeOptions } from "../types";

export type ThemeStoreProviderProps = PropsWithChildren<
  Partial<ThemeOptions> &
    Omit<TamaguiProviderProps, "defaultTheme"> & {
      disableInjectCSS?: boolean;
      config: InferTamaguiConfig<CreateTamaguiProps>;
    }
>;

export const ThemeStoreProvider = ({
  children,
  defaultMode = ColorThemeMode.DARK,
  items = [ColorThemeMode.LIGHT, ColorThemeMode.DARK],
  disableInjectCSS = true,
  config,
  ...props
}: ThemeStoreProviderProps) => {
  const mode = useMemo(() => {
    if (isRuntimeClient() && window?.matchMedia) {
      if (window?.matchMedia("(prefers-color-scheme: light)").matches) {
        return ColorThemeMode.LIGHT;
      } else if (window?.matchMedia("(prefers-color-scheme: dark)").matches) {
        return ColorThemeMode.DARK;
      }
    }

    return defaultMode;
  }, [defaultMode]);

  return (
    <themeStore.Provider
      initialValues={{
        options: {
          items,
          defaultMode: mode
        } as ThemeOptions,
        mode
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
