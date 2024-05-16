import { YStack } from "@tamagui/stacks";
import { Provider } from "@cyclone-ui/provider";

export const StorybookDecorator = (Story: any, args: any) => {
  const { theme: themeKey } = args.globals;

  return (
    <>
      <Provider
        theme={{
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
