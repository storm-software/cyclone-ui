import { animations } from "@cyclone-ui/animations";
import { createMonaSansFont } from "@cyclone-ui/font-mona-sans";
import { createPermanentMarkerFont } from "@cyclone-ui/font-permanent-marker";
import { createSpaceGroteskFont } from "@cyclone-ui/font-space-grotesk";
import { media, mediaQueryDefaultActive } from "@cyclone-ui/media-queries";
import { shorthands } from "@cyclone-ui/shorthands";
import { brand, tokens } from "@cyclone-ui/tokens";
import type { CreateTamaguiProps, InferTamaguiConfig } from "@tamagui/web";

const permanentMarkerFont = createPermanentMarkerFont({
  transform: {
    6: "uppercase"
  }
});
const monaSansFont = createMonaSansFont();
const spaceGroteskFont = createSpaceGroteskFont({});

export const config = {
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
    backgroundColor: theme.color10,
    color: theme.color2
  }),
  settings: {
    allowedStyleValues: "somewhat-strict-web",
    autocompleteSpecificTokens: "except-special"
    // mediaPropOrder: true,
  }
} satisfies InferTamaguiConfig<CreateTamaguiProps>;
