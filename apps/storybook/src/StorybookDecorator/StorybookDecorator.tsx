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

import { config } from "@cyclone-ui/config";
import { Provider } from "@cyclone-ui/provider";
import { YStack } from "@tamagui/stacks";

export const StorybookDecorator = (Story: any, args: any) => {
  const { theme: themeKey } = args.globals;

  return (
    <Provider
      theme={{
        config,
        disableInjectCSS: !process.env.STORYBOOK,
        defaultMode: themeKey
      }}>
      <YStack backgroundColor="$backgroundStrong" padding="$8" flexGrow={1}>
        <Story />
      </YStack>
    </Provider>
  );
};
