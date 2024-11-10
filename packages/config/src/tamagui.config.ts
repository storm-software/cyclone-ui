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
import { cyclone } from "@cyclone-ui/themes";
import { tokens } from "@cyclone-ui/tokens";
import { shorthands } from "@tamagui/shorthands";
import type { CreateTamaguiProps, InferTamaguiConfig } from "@tamagui/web";

const titleFont = createPermanentMarkerFont(
  {
    transform: {
      6: "uppercase"
    }
  },
  45,
  "700"
);
const eyebrowFont = createPermanentMarkerFont(
  {
    transform: {
      6: "uppercase"
    }
  },
  12,
  "400"
);

const headingFont = createMonaSansFont({}, 32, "700");
const labelFont = createMonaSansFont({}, 18, "550");
const ctaFont = createMonaSansFont(
  {
    transform: {
      6: "uppercase"
    }
  },
  18,
  "550"
);

const bodyFont = createSpaceGroteskFont({}, 16, "300");

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
    w: "width",
    hmax: "maxHeight",
    hmin: "minHeight",
    wmax: "maxWidth",
    wmin: "minWidth"
  } as const,
  fonts: {
    title: titleFont,
    eyebrow: eyebrowFont,
    heading: headingFont,
    label: labelFont,
    body: bodyFont,
    link: bodyFont,
    cta: ctaFont
  },
  tokens,
  themes: cyclone,
  media,
  mediaQueryDefaultActive,
  selectionStyles: theme => ({
    backgroundColor: theme.color6,
    color: theme.color10
  }),
  settings: {
    allowedStyleValues: "somewhat-strict-web",
    autocompleteSpecificTokens: "except-special"
  },
  defaultProps: {
    Paragraph: {
      fontFamily: "body"
    },
    LabelText: {
      fontFamily: "label"
    },
    HeadingText: {
      fontFamily: "heading"
    },
    EyebrowText: {
      fontFamily: "eyebrow"
    },
    TitleText: {
      fontFamily: "title"
    },
    LinkText: {
      fontFamily: "link"
    }
  }
} satisfies CreateTamaguiProps;

export const config: InferTamaguiConfig<CreateTamaguiProps> =
  createTamagui(options);
