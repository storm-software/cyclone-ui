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

import {
  createTamagui as createTamaguiCore,
  type CreateTamaguiProps,
  type InferTamaguiConfig
} from "@tamagui/core";
import { animations } from "./animations/native";
import { createFonts } from "./fonts";
import { media, mediaQueryDefaultActive } from "./media-queries";
import { shorthands } from "./shorthands";
import { tokens } from "./tokens/tokens";

/**
 * Adds some helpful validation at dev time only for `tamagui` specifically
 * */
export const createTamagui = <Config extends CreateTamaguiProps>(
  config: Config
): InferTamaguiConfig<Config> => {
  const normalizedConfig = config;

  normalizedConfig.tokens ??= tokens;
  normalizedConfig.shorthands ??= shorthands;
  normalizedConfig.media ??= media;
  normalizedConfig.animations ??= animations;

  normalizedConfig.fonts ??= createFonts();

  normalizedConfig.defaultProps = {
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
    },
    ...normalizedConfig.defaultProps
  };
  normalizedConfig.settings = {
    defaultFont: "body",
    shouldAddPrefersColorThemes: true,
    themeClassNameOnRoot: true,
    mediaQueryDefaultActive,
    selectionStyles: theme => ({
      backgroundColor: theme.color6,
      color: theme.fg
    }),
    allowedStyleValues: "somewhat-strict-web",
    autocompleteSpecificTokens: "except-special",
    onlyAllowShorthands: false,
    ...config.settings
  };

  if (process.env.NODE_ENV !== "development") {
    return createTamaguiCore<Config>(config);
  }

  const sizeTokenKeys = ["$true"];

  const hasKeys = (expectedKeys: string[], obj: Record<any, any>) => {
    return expectedKeys.every(k => obj[k] !== undefined);
  };

  const tamaguiConfig = createTamaguiCore<Config>(config);

  // size and space should be fully defined
  for (const name of ["size", "space"] as const) {
    const tokenSet = tamaguiConfig.tokensParsed[name];
    if (!tokenSet) {
      throw new Error(
        `Expected tokens for "${name}" in ${Object.keys(
          tamaguiConfig.tokensParsed
        ).join(", ")}`
      );
    }
    if (!hasKeys(sizeTokenKeys, tokenSet)) {
      throw new Error(`
createTamagui() missing expected tokens.${name}:

Received: ${Object.keys(tokenSet).join(", ")}

Expected: ${sizeTokenKeys.join(", ")}

Tamagui expects a "true" key that is the same value as your default size. This is so
it can size things up or down from the defaults without assuming which keys you use.

Please define a "true" or "$true" key on your size and space tokens like so (example):

size: {
  sm: 2,
  md: 10,
  true: 10, // this means "md" is your default size
  lg: 20,
}

`);
    }
  }

  // others must define subset of size tokens
  const expected = Object.keys(tamaguiConfig.tokensParsed.size);
  for (const name of ["radius", "zIndex"] as const) {
    const tokenSet = tamaguiConfig.tokensParsed[name];
    const received = Object.keys(tokenSet);
    const hasSomeOverlap = received.some(rk => expected.includes(rk));
    if (!hasSomeOverlap) {
      throw new Error(`
createTamagui() invalid tokens.${name}:

Received: ${received.join(", ")}

Expected a subset of: ${expected.join(", ")}

`);
    }
  }

  return tamaguiConfig as InferTamaguiConfig<Config>;
};
