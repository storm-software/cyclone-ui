import { colorTokens } from "./tokens";
import { darkTheme, lightTheme } from "./colors";

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
  Object.keys(obj) as Array<keyof O>;

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
  const lightTransparent = lightTheme.base["0"];
  const darkTransparent = darkTheme.base["0"];

  const transparent = (hsl: string, opacity = 0) =>
    hsl.replace(`%)`, `%, ${opacity})`).replace(`hsl(`, `hsla(`);

  const getColorPalette = (
    colors: Record<string, any>,
    color = colors[0]
  ): string[] => {
    const colorPalette = Object.values(colors);

    // were re-ordering these
    const [head, tail] = [
      colorPalette.slice(0, 6),
      colorPalette.slice(colorPalette.length - 5)
    ];

    // add our transparent colors first/last
    // and make sure the last (foreground) color is white/black rather than colorful
    // this is mostly for consistency with the older theme-base
    return [
      transparent(colorPalette[0]),
      ...head,
      ...tail,
      color,
      transparent(colorPalette[colorPalette.length - 1])
    ];
  };

  const lightPalette = [
    lightTransparent,
    ...Object.values(lightTheme.base),
    lightTheme.base["11"],
    darkTransparent
  ];

  const darkPalette = [
    darkTransparent,
    ...Object.values(darkTheme.base),
    darkTheme.base["11"],
    lightTransparent
  ];

  const lightPalettes = objectFromEntries(
    objectKeys(colorTokens.light).map(
      key =>
        [
          `light_${key}`,
          getColorPalette(
            colorTokens.light[key],
            Object.values(lightTheme.base)[
              Object.values(lightTheme.base).length - 1
            ]
          )
        ] as const
    )
  );

  const darkPalettes = objectFromEntries(
    objectKeys(colorTokens.dark).map(
      key =>
        [
          `dark_${key}`,
          getColorPalette(
            colorTokens.dark[key],
            Object.values(darkTheme.base)[
              Object.values(darkTheme.base).length - 1
            ]
          )
        ] as const
    )
  );

  const colorPalettes = {
    ...lightPalettes,
    ...darkPalettes
  };

  return {
    light: lightPalette,
    dark: darkPalette,
    ...colorPalettes
  };
})();
