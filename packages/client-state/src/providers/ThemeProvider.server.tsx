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
import { ThemeApi } from "../molecules/theme-molecule";
import { ThemeOptions } from "../types";

type ThemeStateManagerServerProps = PropsWithChildren<
  Omit<TamaguiProviderProps, "defaultTheme"> & {
    disableInjectCSS?: boolean;
    config: InferTamaguiConfig<CreateTamaguiProps>;
  }
>;

export type ThemeProviderServerProps = PropsWithChildren<
  Partial<ThemeOptions> & ThemeStateManagerServerProps
>;

const ThemeStateManagerServer = ({
  children,
  disableInjectCSS = true,
  ...props
}: ThemeStateManagerServerProps) => {
  const theme = ThemeApi.use();
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

export const ThemeProviderServer = ({
  children,
  defaultMode = ColorThemeMode.DARK,
  items = [ColorThemeMode.LIGHT, ColorThemeMode.DARK],
  ...props
}: ThemeProviderServerProps) => {
  return (
    <ThemeApi.Provider
      scope="theme"
      initialState={{ mode: defaultMode, items }}>
      <ThemeStateManagerServer {...props}>{children}</ThemeStateManagerServer>
    </ThemeApi.Provider>
  );
};
