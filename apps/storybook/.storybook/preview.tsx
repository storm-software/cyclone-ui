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

import { ThemeProvider } from "@cyclone-ui/state/client";
import { MessageProvider } from "@cyclone-ui/state/message";
import type { Preview } from "@storybook/react-vite";
import "@tamagui/core/reset.css";
import { PortalProvider } from "@tamagui/portal";
import { YStack } from "@tamagui/stacks";
import { DevTools, useAtomsDebugValue } from "jotai-devtools";
import "jotai-devtools/styles.css";
import "raf/polyfill";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { config } from "@cyclone-ui/themes/tamagui";

const DebugAtoms = () => {
  useAtomsDebugValue({
    enabled: true
  });

  return null;
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(?<temp1>background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      values: [
        { value: "#F8F8F7", left: "☀️", name: "Light Mode" },
        { value: "#1A1C1F", left: "🌙", name: "Dark Mode" }
      ],
      default: "Dark Mode"
    }
  },
  decorators: [
    // eslint-disable-next-line ts/naming-convention
    (Story, args) => {
      const { mode } = args.globals;

      return (
        <SafeAreaProvider>
          <ThemeProvider
            config={config}
            disableInjectCSS={false}
            defaultMode={mode}>
            <PortalProvider>
              <MessageProvider>
                <DevTools theme={mode} position="bottom-right" />
                <DebugAtoms />
                <YStack padding="$8" flexGrow={1}>
                  <Story />
                </YStack>
              </MessageProvider>
            </PortalProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      );
    }
  ],
  tags: ["autodocs"],
  initialGlobals: {
    mode: "dark",
    locale: "en",
    locales: {
      en: "English",
      de: "German"
    }
  }
};

export default preview;
