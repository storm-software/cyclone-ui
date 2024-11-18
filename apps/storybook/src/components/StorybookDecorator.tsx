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

import { YStack } from "@tamagui/stacks";
import config from "../../tamagui.config";
import { Providers } from "./Providers";

export const StorybookDecorator = (Story: any, args: any) => {
  const { theme } = args.globals;

  return (
    <Providers
      theme={{
        config,
        disableInjectCSS: false,
        defaultMode: theme
      }}>
      <YStack padding="$8" flexGrow={1}>
        <Story />
      </YStack>
    </Providers>
  );
};
