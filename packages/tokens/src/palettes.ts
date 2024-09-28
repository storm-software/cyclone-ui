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

import { ColorPalette, ColorRole, colors } from "@cyclone-ui/colors";
import { colorTokens } from "./tokens";

type ObjectType = Record<PropertyKey, unknown>;

type PickByValue<OBJ_T, VALUE_T> = // From https://stackoverflow.com/a/55153000
  Pick<
    OBJ_T,
    { [K in keyof OBJ_T]: OBJ_T[K] extends VALUE_T ? K : never }[keyof OBJ_T]
  >;

type ObjectEntries<OBJ_T> = // From https://stackoverflow.com/a/60142095
  {
    [K in keyof OBJ_T]: [keyof PickByValue<OBJ_T, OBJ_T[K]>, OBJ_T[K]];
  }[keyof OBJ_T][];

export const objectKeys = <O extends Object>(obj: O) =>
  (obj ? Object.keys(obj) : []) as Array<keyof O>;

export function objectEntries<OBJ_T extends ObjectType>(
  obj: OBJ_T
): ObjectEntries<OBJ_T> {
  return Object.entries(obj) as ObjectEntries<OBJ_T>;
}

type EntriesType =
  | [PropertyKey, unknown][]
  | ReadonlyArray<readonly [PropertyKey, unknown]>;

// Existing Utils
type DeepWritable<OBJ_T> = {
  -readonly [P in keyof OBJ_T]: DeepWritable<OBJ_T[P]>;
};
type UnionToIntersection<UNION_T> = // From https://stackoverflow.com/a/50375286
  (UNION_T extends any ? (k: UNION_T) => void : never) extends (
    k: infer I
  ) => void
    ? I
    : never;

// New Utils
type UnionObjectFromArrayOfPairs<ARR_T extends EntriesType> =
  DeepWritable<ARR_T> extends (infer R)[]
    ? R extends [infer key, infer val]
      ? { [prop in key & PropertyKey]: val }
      : never
    : never;
type MergeIntersectingObjects<ObjT> = { [key in keyof ObjT]: ObjT[key] };
type EntriesToObject<ARR_T extends EntriesType> = MergeIntersectingObjects<
  UnionToIntersection<UnionObjectFromArrayOfPairs<ARR_T>>
>;

export function objectFromEntries<ARR_T extends EntriesType>(
  arr: ARR_T
): EntriesToObject<ARR_T> {
  return Object.fromEntries(arr) as EntriesToObject<ARR_T>;
}

export const palettes = (() => {
  const lightestLightColor = colors.base.base1 as string;
  const darkestDarkColor = colors.baseDark.base1 as string;
  const darkestLightColor = colors.base.base12 ?? darkestDarkColor;
  const lightestDarkColor = colors.baseDark.base12 ?? lightestLightColor;
  if (!lightestLightColor || !darkestDarkColor) {
    throw new Error("Missing transparent colors from palette");
  }

  const transparent = (hsl: string, opacity = 0) =>
    hsl.replace("%)", `%, ${opacity})`).replace("hsl(", "hsla(");

  const getColorPalette = (
    colorPalette: ColorPalette,
    foregroundColor: string,
    backgroundColor: string
  ): string[] => {
    const colorPaletteValues = Object.values(colorPalette);

    // were re-ordering these
    const [head, tail] = [
      colorPaletteValues.slice(0, 6),
      colorPaletteValues.slice(-5)
    ];

    // add our transparent colors first/last
    // and make sure the last (foreground) color is white/black rather than colorful
    // this is mostly for consistency with the older theme-base
    return [
      transparent(colorPaletteValues[0]!),
      backgroundColor,
      ...head,
      ...tail,
      foregroundColor,
      transparent(colorPaletteValues.at(-1)!)
    ];
  };

  const lightBasePalette = [
    transparent(lightestLightColor),
    ...Object.values(colors.base),
    transparent(darkestLightColor)
  ];
  const darkBasePalette = [
    transparent(darkestDarkColor),
    ...Object.values(colors.baseDark),
    transparent(lightestDarkColor)
  ];

  const lightPalettes = objectFromEntries(
    objectKeys(colorTokens.light)
      .filter(key => key !== ColorRole.BASE)
      .map(
        key =>
          [
            `light_${key}`,
            getColorPalette(
              colorTokens.light[key],
              darkestLightColor,
              lightestLightColor
            )
          ] as const
      )
  );

  const darkPalettes = objectFromEntries(
    objectKeys(colorTokens.dark)
      .filter(key => key !== ColorRole.BASE)
      .map(
        key =>
          [
            `dark_${key}`,
            getColorPalette(
              colorTokens.dark[key],
              lightestDarkColor,
              darkestDarkColor
            )
          ] as const
      )
  );

  lightPalettes.light_base = lightBasePalette;
  darkPalettes.dark_base = darkBasePalette;

  const colorPalettes = {
    ...lightPalettes,
    ...darkPalettes
  };

  return {
    light: lightBasePalette,
    dark: darkBasePalette,
    ...colorPalettes
  };
})();
