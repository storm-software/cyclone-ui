import { shorthands } from "@tamagui/shorthands";
import { tokens } from "@cyclone-ui/themes";
import * as themes from "@cyclone-ui/themes/default-theme";
import { createMedia } from "@tamagui/react-native-media-driver";
import { animations } from "./animations";
import { createSpaceGroteskFont } from "@cyclone-ui/font-space-grotesk";
import { createPermanentMarkerFont } from "@cyclone-ui/font-permanent-marker";
import { createMonaSansFont } from "@cyclone-ui/font-mona-sans";
import { createTamagui } from "./create-tamagui";
import type { CreateTamaguiProps, InferTamaguiConfig } from "@tamagui/web";

const headingFont = createPermanentMarkerFont({
  transform: {
    6: "uppercase"
  },
  weight: {
    6: "400"
  },
  color: {
    6: "$colorFocus",
    7: "$color"
  }
});

const labelFont = createMonaSansFont({});
const bodyFont = createSpaceGroteskFont({});

export const options: CreateTamaguiProps = {
  defaultFont: "body",
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    heading: headingFont,
    label: labelFont,
    body: bodyFont
  },
  tokens,
  themes,
  media: createMedia({
    xxs: { maxWidth: 390 },
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" }
  }),
  mediaQueryDefaultActive: {
    xl: true,
    lg: true,
    md: true,
    sm: true,
    xs: true,
    // false
    xxs: false
  },
  selectionStyles: theme => ({
    backgroundColor: theme.color5,
    color: theme.color12
  }),
  settings: {
    allowedStyleValues: "somewhat-strict-web",
    autocompleteSpecificTokens: "except-special"
    // mediaPropOrder: true,
  }
} satisfies CreateTamaguiProps;

export const config: InferTamaguiConfig<CreateTamaguiProps> =
  createTamagui(options);
