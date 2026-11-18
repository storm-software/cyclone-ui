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

import type {
  CreateTamaguiProps,
  InferTamaguiConfig,
  TamaguiProviderProps
} from "@tamagui/core";
import { TamaguiProvider } from "@tamagui/core";
import type { PropsWithChildren } from "react";
import { useMemo } from "react";
import { ThemeApi } from "../molecules/theme-molecule";
import type { ColorThemeMode, ThemeOptions } from "../types";

type ThemeStateManagerProps = PropsWithChildren<
  Omit<TamaguiProviderProps, "defaultTheme"> & {
    disableInjectCSS?: boolean;
    config: InferTamaguiConfig<CreateTamaguiProps>;
  }
>;

export type ThemeProviderProps = PropsWithChildren<
  Partial<ThemeOptions> & ThemeStateManagerProps
>;

// Tamagui scopes its `selectionStyles` rules to full theme class names
// (`.t_light_base ::selection`), which miss short sub-theme classes such as
// `t_base`. Custom properties inherit into `::selection`, so one global rule
// picks up the active theme's colors; the system colors cover elements outside
// any theme that defines them.
const SELECTION_CSS =
  "::selection{background:var(--selection-background,var(--primary,Highlight));color:var(--selection-foreground,var(--on-primary,HighlightText))}";

/**
 * Applies the active theme's `primary` / `on-primary` colors (or
 * `selection-background` / `selection-foreground`) to selected text.
 */
export const SelectionStyle = () => {
  const layer = process.env.TAMAGUI_CSS_LAYER;

  return (
    <style href="cyclone-ui-selection" precedence="default">
      {layer ? `@layer ${layer}{${SELECTION_CSS}}` : SELECTION_CSS}
    </style>
  );
};

const ThemeStateManager = ({
  children,
  disableInjectCSS = true,
  ...props
}: ThemeStateManagerProps) => {
  const theme = ThemeApi.use();
  const mode = theme.mode.get();

  return (
    <TamaguiProvider
      {...props}
      defaultTheme={mode}
      disableInjectCSS={disableInjectCSS}>
      <SelectionStyle />
      {children}
    </TamaguiProvider>
  );
};

const DEFAULT_ITEMS = ["light", "dark"] as ColorThemeMode[];

export const ThemeProvider = ({
  children,
  defaultMode = "dark",
  items = DEFAULT_ITEMS,
  ...props
}: ThemeProviderProps) => {
  const mode = useMemo(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        return "light";
      }

      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }

    return defaultMode;
  }, [defaultMode]);

  return (
    <ThemeApi.Provider scope="theme" initialState={{ mode, items }}>
      <ThemeStateManager {...props}>{children}</ThemeStateManager>
    </ThemeApi.Provider>
  );
};
