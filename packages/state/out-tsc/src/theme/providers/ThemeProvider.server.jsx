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
import { ThemeApi } from "../molecules/theme-molecule";
const ThemeStateManagerServer = ({ children, disableInjectCSS = true, ...props }) => {
    const theme = ThemeApi.use();
    const mode = theme.mode.get();
    return (<TamaguiProvider {...props} defaultTheme={mode} disableInjectCSS={disableInjectCSS}>
      {children}
    </TamaguiProvider>);
};
const DEFAULT_ITEMS = ["light", "dark"];
export const ThemeProviderServer = ({ children, defaultMode = "dark", items = DEFAULT_ITEMS, ...props }) => {
    return (<ThemeApi.Provider scope="theme" initialState={{ mode: defaultMode, items }}>
      <ThemeStateManagerServer {...props}>{children}</ThemeStateManagerServer>
    </ThemeApi.Provider>);
};
//# sourceMappingURL=ThemeProvider.server.jsx.map