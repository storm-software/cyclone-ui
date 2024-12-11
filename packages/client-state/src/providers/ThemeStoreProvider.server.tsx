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
import { PropsWithChildren, useEffect } from "react";
import { ThemeApi } from "../molecules/theme-molecule";
import { ThemeOptions } from "../types";

export type ThemeStoreProviderServerProps = PropsWithChildren<
  Partial<ThemeOptions> &
    Omit<TamaguiProviderProps, "defaultTheme"> & {
      disableInjectCSS?: boolean;
      config: InferTamaguiConfig<CreateTamaguiProps>;
    }
>;

const ThemeStateManagerServer = ({
  children,
  defaultMode = ColorThemeMode.DARK,
  items = [ColorThemeMode.LIGHT, ColorThemeMode.DARK],
  disableInjectCSS = true,
  ...props
}: ThemeStoreProviderServerProps) => {
  const theme = ThemeApi.use();
  const setMode = theme.mode.set();
  const setItems = theme.items.set();

  useEffect(() => {
    setMode(defaultMode!);
    setItems(items!);
  }, [defaultMode, items, setMode, setItems]);

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

export const ThemeStoreProviderServer = ({
  children,
  ...props
}: ThemeStoreProviderServerProps) => {
  return (
    <ThemeApi.Provider scope="theme">
      <ThemeStateManagerServer {...props}>{children}</ThemeStateManagerServer>
    </ThemeApi.Provider>
  );
};
