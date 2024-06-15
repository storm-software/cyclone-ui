import { config } from "@cyclone-ui/config";
import { Provider } from "@cyclone-ui/provider";
import { YStack } from "@tamagui/stacks";

export const StorybookDecorator = (Story: any, args: any) => {
  const { theme: themeKey } = args.globals;

  return (
    <>
      <Provider
        theme={{
          config,
          disableInjectCSS: !process.env.STORYBOOK,
          defaultTheme: themeKey
        }}>
        <YStack backgroundColor={"$background"} padding={"$8"} flexGrow={1}>
          <Story />
        </YStack>
      </Provider>
    </>
  );
};
