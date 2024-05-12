import { shorthands } from "@tamagui/shorthands";
import { tokens, brand } from "@cyclone-ui/themes";
import { animations } from "./animations";
import { createSpaceGroteskFont } from "@cyclone-ui/font-space-grotesk";
import { media, mediaQueryDefaultActive } from "@cyclone-ui/media-queries";
import { createPermanentMarkerFont } from "@cyclone-ui/font-permanent-marker";
import { createMonaSansFont } from "@cyclone-ui/font-mona-sans";
import { createTamagui } from "./create-tamagui";
import type { CreateTamaguiProps, InferTamaguiConfig } from "@tamagui/web";

const permanentMarkerFont = createPermanentMarkerFont({
  transform: {
    6: "uppercase"
  }
});
const monaSansFont = createMonaSansFont();
const spaceGroteskFont = createSpaceGroteskFont({});

export const options: CreateTamaguiProps = {
  defaultFont: "body",
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    title: monaSansFont,
    eyebrow: permanentMarkerFont,
    heading: permanentMarkerFont,
    label: monaSansFont,
    body: spaceGroteskFont
  },
  tokens,
  themes: brand,
  media,
  mediaQueryDefaultActive,
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
