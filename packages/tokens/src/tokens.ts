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

import { colors } from "@cyclone-ui/colors";
import type { Variable } from "@tamagui/web";
import { createTokens } from "@tamagui/web";

// should roughly map to button/input etc height at each level
// fonts should match that height/lineHeight at each stop
// so these are really non-linear on purpose
// why?
//   - at sizes <1, used for fine grained things (borders, smallest paddingY)
//     - so smallest padY should be roughly 1-4px so it can join with lineHeight
//   - at sizes >=1, have to consider "pressability" (jumps up)
//   - after that it should go upwards somewhat naturally
//   - H1 / headings top out at 10 naturally, so after 10 we can go upwards faster
//  but also one more wrinkle...
//  space is used in conjunction with size
//  i'm setting space to generally just a fixed fraction of size (~1/3-2/3 still fine tuning)
export const size = {
  $0: 0,
  "$0.1": 2,
  "$0.2": 4,
  "$0.25": 5,
  "$0.3": 6,
  "$0.4": 8,
  "$0.5": 10,
  "$0.75": 15,
  "$0.8": 16,
  "$0.9": 18,
  $1: 20,
  "$1.25": 22,
  "$1.5": 24,
  "$1.75": 26,
  "$2": 28,
  "$2.25": 30,
  "$2.5": 34,
  "$2.75": 35,
  $3: 36,
  "$3.5": 40,
  $4: 44,
  $true: 44,
  "$4.5": 48,
  $5: 52,
  $6: 64,
  $7: 74,
  $8: 84,
  $9: 94,
  $10: 104,
  $11: 124,
  $12: 144,
  $13: 164,
  $14: 184,
  $15: 204,
  $16: 224,
  $17: 224,
  $18: 244,
  $19: 264,
  $20: 284,
  $21: 304,
  $22: 324,
  $23: 344,
  $24: 364,
  $25: 384
};

type SizeKeysIn = keyof typeof size;
type Sizes = {
  [Key in SizeKeysIn extends `$${infer Key}` ? Key : SizeKeysIn]: number;
};
type SizeKeys = `${keyof Sizes extends `${infer K}` ? K : never}`;

const spaces = Object.entries(size).map(([k, v]) => {
  return [k, sizeToSpace(v)] as const;
});

// a bit odd but keeping backward compat for values >8 while fixing below
function sizeToSpace(v: number) {
  if (v === 0) return 0;
  if (v === 2) return 0.5;
  if (v === 4) return 1;
  if (v === 8) return 1.5;
  if (v <= 16) return Math.round(v * 0.333);
  return Math.floor(v * 0.7 - 12);
}

const spacesNegative = spaces.slice(1).map(([k, v]) => [`-${k.slice(1)}`, -v]);

type SizeKeysWithNegatives =
  | Exclude<`-${SizeKeys extends `$${infer Key}` ? Key : SizeKeys}`, "-0">
  | SizeKeys;

export const space: {
  [Key in SizeKeysWithNegatives]: Key extends keyof Sizes ? Sizes[Key] : number;
} = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative)
} as any;

export const zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
  6: 600,
  7: 700,
  8: 800,
  9: 900
};

export const colorTokens = {
  light: {
    base: colors.base,
    brand: colors.brand,
    alternate: colors.alternate,
    accent: colors.accent,
    help: colors.help,
    success: colors.success,
    error: colors.error,
    warning: colors.warning,
    info: colors.info
  },
  dark: {
    base: colors.baseDark,
    brand: colors.brandDark,
    alternate: colors.alternateDark,
    accent: colors.accentDark,
    help: colors.helpDark,
    success: colors.successDark,
    error: colors.errorDark,
    warning: colors.warningDark,
    info: colors.infoDark
  }
};

export const darkColors = {
  ...colorTokens.dark.base,
  ...colorTokens.dark.brand,
  ...colorTokens.dark.alternate,
  ...colorTokens.dark.accent,
  ...colorTokens.dark.help,
  ...colorTokens.dark.success,
  ...colorTokens.dark.error,
  ...colorTokens.dark.warning,
  ...colorTokens.dark.info
};

export const lightColors = {
  ...colorTokens.light.base,
  ...colorTokens.light.brand,
  ...colorTokens.light.alternate,
  ...colorTokens.light.accent,
  ...colorTokens.light.help,
  ...colorTokens.light.success,
  ...colorTokens.light.error,
  ...colorTokens.light.warning,
  ...colorTokens.light.info
};

export const color = {
  ...postfixObjKeys(lightColors, "Light"),
  ...postfixObjKeys(darkColors, "Dark")
};

function postfixObjKeys<
  A extends { [key: string]: Variable<string> | string },
  B extends string
>(
  obj: A,
  postfix: B
): {
  [Key in `${keyof A extends string ? keyof A : never}${B}`]:
    | Variable<string>
    | string;
} {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [`${k}${postfix}`, v])
  ) as any;
}

export const radius = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  true: 10,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50
} as const;

export const tokens = createTokens({
  color,
  radius,
  zIndex,
  space,
  size,
  icon: {
    sm: 16,
    true: 24,
    md: 24,
    lg: 32
  }
});

export const ColorPaletteShades = {
  PRIMARY: 10,
  SECONDARY: 8,
  MUTED: 4,
  DISABLED: 6,
  BACKGROUND: 1,
  BACKGROUND_TRANSPARENT: 0,
  FOREGROUND: -1,
  FOREGROUND_TRANSPARENT: -0
} as const;
