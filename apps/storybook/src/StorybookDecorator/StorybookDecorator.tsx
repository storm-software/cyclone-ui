import { YStack } from "tamagui";
import { ThemeProvider } from "@cyclone-ui/theme-provider";

export const StorybookDecorator = (Story: any, args: any) => {
  const { theme: themeKey } = args.globals;

  return (
    <>
      <ThemeProvider
        disableInjectCSS={!process.env.STORYBOOK}
        defaultTheme={themeKey}>
        <YStack backgroundColor={"$background"} padding={"$8"} flexGrow={1}>
          <Story />
        </YStack>
      </ThemeProvider>
    </>
  );
};
