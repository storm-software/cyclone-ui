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

import { animations } from "@cyclone-ui/animations";
import { createMonaSansFont } from "@cyclone-ui/font-mona-sans";
import { createPermanentMarkerFont } from "@cyclone-ui/font-permanent-marker";
import { createSpaceGroteskFont } from "@cyclone-ui/font-space-grotesk";
import { media, mediaQueryDefaultActive } from "@cyclone-ui/media-queries";
import { createTamagui } from "@cyclone-ui/theme-helpers";
import { brand } from "@cyclone-ui/themes";
import { tokens } from "@cyclone-ui/tokens";
import { shorthands } from "@tamagui/shorthands";
import type { CreateTamaguiProps, InferTamaguiConfig } from "@tamagui/web";

const titleFont = createMonaSansFont({}, 30, "700");
const eyebrowFont = createPermanentMarkerFont(
  {
    transform: {
      6: "uppercase"
    }
  },
  12,
  "400"
);
const headingFont = createPermanentMarkerFont(
  {
    transform: {
      6: "uppercase"
    }
  },
  20
);
const labelFont = createMonaSansFont({}, 18, "550");
const bodyFont = createSpaceGroteskFont();

export const options: CreateTamaguiProps = {
  defaultFont: "body",
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands: {
    ...shorthands,
    p: "padding",
    px: "paddingHorizontal",
    py: "paddingVertical",
    pl: "paddingLeft",
    pr: "paddingRight",
    pt: "paddingTop",
    pb: "paddingBottom",
    f: "flex",
    m: "margin",
    mx: "marginHorizontal",
    my: "marginVertical",
    ml: "marginLeft",
    mr: "marginRight",
    mt: "marginTop",
    mb: "marginBottom",
    h: "height",
    w: "width"
  } as const,
  fonts: {
    title: titleFont,
    eyebrow: eyebrowFont,
    heading: headingFont,
    label: labelFont,
    body: bodyFont,
    link: bodyFont,
    cta: labelFont
  },
  tokens,
  themes: brand,
  media,
  mediaQueryDefaultActive,
  selectionStyles: theme => ({
    backgroundColor: theme.color6,
    color: theme.color12
  }),
  settings: {
    // allowedStyleValues: "somewhat-strict-web",
    autocompleteSpecificTokens: "except-special"
  },
  defaultProps: {
    Paragraph: {
      fontFamily: "body"
    },
    Label: {
      fontFamily: "label"
    }
  }
} satisfies CreateTamaguiProps;

export const config: InferTamaguiConfig<CreateTamaguiProps> =
  createTamagui(options);
