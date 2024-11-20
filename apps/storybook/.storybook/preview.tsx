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

/* eslint-disable @nx/enforce-module-boundaries */

import { ThemeStoreProvider } from "@cyclone-ui/client-state";
import { MessageProvider } from "@cyclone-ui/message-state";
import { Preview } from "@storybook/react";
import "@tamagui/core/reset.css";
import { PortalProvider } from "@tamagui/portal";
import { YStack } from "@tamagui/stacks";
import "raf/polyfill";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../../../packages/font-mona-sans/css/style.css";
import "../../../packages/font-permanent-marker/css/style.css";
import "../../../packages/font-space-grotesk/css/style.css";
import config from "../tamagui.config";

const Decorator = (Story: any, args: any) => {
  const { mode } = args.globals;

  return (
    <SafeAreaProvider>
      <YStack padding="$8" flexGrow={1}>
        <ThemeStoreProvider
          config={config}
          disableInjectCSS={false}
          defaultMode={mode}>
          <PortalProvider>
            <MessageProvider>
              <Story />
            </MessageProvider>
          </PortalProvider>
        </ThemeStoreProvider>
      </YStack>
    </SafeAreaProvider>
  );
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
        { value: "#fafafa", left: "☀️", name: "Light Mode" },
        { value: "#151718", left: "🌙", name: "Dark Mode" }
      ],
      default: "Dark Mode"
    }
  },
  decorators: [Decorator],
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
