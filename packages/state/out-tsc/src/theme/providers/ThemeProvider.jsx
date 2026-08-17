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
import { TamaguiProvider } from "@tamagui/core";
import { useMemo } from "react";
import { ThemeApi } from "../molecules/theme-molecule";
const ThemeStateManager = ({ children, disableInjectCSS = true, ...props }) => {
    const theme = ThemeApi.use();
    const mode = theme.mode.get();
    return (<TamaguiProvider {...props} defaultTheme={mode} disableInjectCSS={disableInjectCSS}>
      {children}
    </TamaguiProvider>);
};
const DEFAULT_ITEMS = ["light", "dark"];
export const ThemeProvider = ({ children, defaultMode = "dark", items = DEFAULT_ITEMS, ...props }) => {
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
    return (<ThemeApi.Provider scope="theme" initialState={{ mode, items }}>
      <ThemeStateManager {...props}>{children}</ThemeStateManager>
    </ThemeApi.Provider>);
};
//# sourceMappingURL=ThemeProvider.jsx.map