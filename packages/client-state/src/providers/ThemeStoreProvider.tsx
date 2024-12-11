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
import { PropsWithChildren, useEffect, useMemo } from "react";
import { ThemeApi } from "../molecules/theme-molecule";
import { ThemeOptions } from "../types";

export type ThemeStoreProviderProps = PropsWithChildren<
  Partial<ThemeOptions> &
    Omit<TamaguiProviderProps, "defaultTheme"> & {
      disableInjectCSS?: boolean;
      config: InferTamaguiConfig<CreateTamaguiProps>;
    }
>;

const ThemeStateManager = ({
  children,
  defaultMode = ColorThemeMode.DARK,
  items = [ColorThemeMode.LIGHT, ColorThemeMode.DARK],
  disableInjectCSS = true,
  ...props
}: ThemeStoreProviderProps) => {
  const userMode = useMemo(() => {
    if (isRuntimeClient() && window?.matchMedia) {
      if (window?.matchMedia("(prefers-color-scheme: light)").matches) {
        return ColorThemeMode.LIGHT;
      } else if (window?.matchMedia("(prefers-color-scheme: dark)").matches) {
        return ColorThemeMode.DARK;
      }
    }

    return defaultMode;
  }, [defaultMode]);

  const theme = ThemeApi.use();
  const setMode = theme.mode.set();
  const setItems = theme.items.set();

  useEffect(() => {
    setMode(userMode!);
    setItems(items!);
  }, [userMode, items, setMode, setItems]);

  const mode = theme.mode.get();

  return (
    <TamaguiProvider
      {...props}
      defaultTheme={mode}
      disableInjectCSS={disableInjectCSS}>
      {children}
    </TamaguiProvider>
  );
};

export const ThemeStoreProvider = ({
  children,
  ...props
}: ThemeStoreProviderProps) => {
  return (
    <ThemeApi.Provider scope="theme">
      <ThemeStateManager {...props}>{children}</ThemeStateManager>
    </ThemeApi.Provider>
  );
};
