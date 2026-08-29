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

import { ThemeProvider, useThemeActions } from "@cyclone-ui/state/client";
import { MessageProvider } from "@cyclone-ui/state/message";
import { config } from "@cyclone-ui/themes/tamagui";
import { DocsContainer } from "@storybook/addon-docs/blocks";
import type { Decorator } from "@storybook/react-vite";
import { Theme } from "@tamagui/core";
import { PortalProvider } from "@tamagui/portal";
import { YStack } from "@tamagui/stacks";
import type { ComponentProps } from "react";
import { useEffect, useState } from "react";
import {
  SafeAreaProvider,
  initialWindowMetrics
} from "react-native-safe-area-context";
import { GLOBALS_UPDATED } from "storybook/internal/core-events";
import type { StorybookColorMode } from "./storybook-themes";
import {
  resolveStorybookMode,
  resolveStorybookTheme
} from "./storybook-themes";

const FALLBACK_SAFE_AREA_METRICS = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 }
};

const SyncColorMode = ({ mode }: { mode: StorybookColorMode }) => {
  const { changeMode } = useThemeActions();

  useEffect(() => {
    changeMode(mode);
  }, [changeMode, mode]);

  return null;
};

const modeFromDocsContext = (
  context: ComponentProps<typeof DocsContainer>["context"]
) => {
  try {
    const story = context.storyById();

    return context.getStoryContext(story).globals.mode;
  } catch {
    return undefined;
  }
};

export const CycloneDocsContainer = ({
  children,
  context
}: ComponentProps<typeof DocsContainer>) => {
  const [mode, setMode] = useState(() =>
    resolveStorybookMode(modeFromDocsContext(context))
  );

  useEffect(() => {
    const sync = ({ globals }: { globals?: { mode?: unknown } }) => {
      setMode(resolveStorybookMode(globals?.mode));
    };

    context.channel.on(GLOBALS_UPDATED, sync);
    return () => {
      context.channel.off(GLOBALS_UPDATED, sync);
    };
  }, [context.channel]);

  return (
    <DocsContainer context={context} theme={resolveStorybookTheme(mode)}>
      {children}
    </DocsContainer>
  );
};

export const withCycloneTheme: Decorator = (Story, context) => {
  const mode = resolveStorybookMode(context.globals.mode);

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics ?? FALLBACK_SAFE_AREA_METRICS}>
      <ThemeProvider
        config={config}
        disableInjectCSS={false}
        defaultMode={mode}>
        <SyncColorMode mode={mode} />
        <Theme name={mode}>
          <PortalProvider>
            <MessageProvider>
              <YStack p="$8" w="100%" minh="100%">
                <Story />
              </YStack>
            </MessageProvider>
          </PortalProvider>
        </Theme>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
