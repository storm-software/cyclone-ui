import { useThemeNameState } from "@cyclone-ui/themes";
import { TamaguiProvider, YStack } from "tamagui";
import { config } from "../tamagui.config";

declare const window: any;

export const StorybookDecorator = (Story: any, args: any) => {
  // The theme global we just declared

  const { theme: themeKey } = args.globals;
  // const name = useThemeState((state) => state.name)
  let theme = themeKey;
  if (
    !theme &&
    window?.matchMedia &&
    window?.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    // dark mode
    theme = "dark";
  }

  const defaultTheme = useThemeNameState(theme as any);

  return (
    <>
      <TamaguiProvider
        config={config}
        disableInjectCSS={!process.env.STORYBOOK}
        defaultTheme={defaultTheme}>
        <YStack
          backgroundColor={"$backgroundStrong"}
          padding={"$4"}
          flexGrow={1}>
          <Story />
        </YStack>
      </TamaguiProvider>
    </>
  );
};
