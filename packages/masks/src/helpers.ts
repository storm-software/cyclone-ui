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
 Licensing:       https://stormsoftware.com/projects/cyclone-ui/licensing

 -------------------------------------------------------------------*/

import type {
  CreateMask,
  CreateThemeOptions,
  CreateThemePalette,
  EntriesToObject,
  EntriesType,
  GenericTheme,
  MaskOptions,
  ObjectEntries,
  ObjectType,
  ThemeInfo,
  ThemeMask
} from "./types";

export function isMinusZero(value: number): boolean {
  return 1 / value === -Infinity;
}

export const objectKeys = <O extends object>(obj: O) =>
  Object.keys(obj) as (keyof O)[];

export function objectEntries<OBJ_T extends ObjectType>(
  obj: OBJ_T
): ObjectEntries<OBJ_T> {
  return Object.entries(obj) as ObjectEntries<OBJ_T>;
}

export function objectFromEntries<ARR_T extends EntriesType>(
  arr: ARR_T
): EntriesToObject<ARR_T> {
  return Object.fromEntries(arr) as EntriesToObject<ARR_T>;
}

const THEME_INFO = new Map<string, ThemeInfo>();

export const getThemeInfo = (
  theme: GenericTheme | ThemeMask,
  name?: string
): ThemeInfo | undefined => {
  console.log(
    "*****************************getThemeInfo**************************************"
  );
  console.log(THEME_INFO);
  console.log(
    "******************************getThemeInfo*************************************"
  );

  return THEME_INFO.get(name || JSON.stringify(theme));
};

export const setThemeInfo = (
  theme: GenericTheme | ThemeMask,
  info: Pick<ThemeInfo, "palette" | "definition" | "options"> & {
    name?: string;
  }
) => {
  const next = {
    ...info,
    cache: new Map()
  };
  THEME_INFO.set(info.name || JSON.stringify(theme), next);
  THEME_INFO.set(JSON.stringify(info.definition), next);

  console.log(
    "*****************************setThemeInfo**************************************"
  );
  console.log(THEME_INFO);
  console.log(
    "******************************setThemeInfo*************************************"
  );
};

export function applyMaskStateless<Theme extends GenericTheme | ThemeMask>(
  info: ThemeInfo,
  mask: CreateMask,
  options: MaskOptions = {},
  parentName?: string
): ThemeInfo & {
  theme: Theme;
} {
  const skip = {
    ...options.skip
  };

  // skip nonInheritedValues from parent theme
  if (info.options?.nonInheritedValues) {
    for (const key of Object.keys(info.options.nonInheritedValues)) {
      skip[key] = 1;
    }
  }

  // convert theme back to template first
  const maskOptions = {
    parentName,
    palette: info.palette,
    ...options,
    skip
  };

  const template = mask.mask(info.definition, maskOptions);
  const theme = createTheme(info.palette, template) as Theme;

  return {
    ...info,
    cache: new Map(),
    definition: template,
    theme
  };
}

const IDENTITY_CACHE = new Map();

export function createTheme<
  Definition extends ThemeMask,
  Extras extends GenericTheme = {}
>(
  palette: CreateThemePalette,
  definition: Definition,
  options?: CreateThemeOptions,
  name?: string,
  skipCache = false
): {
  [key in keyof Definition | keyof Extras]: string;
} {
  const cacheKey = skipCache
    ? ""
    : JSON.stringify([name, palette, definition, options]);
  if (!skipCache && IDENTITY_CACHE.has(cacheKey)) {
    return IDENTITY_CACHE.get(cacheKey);
  }

  const theme = {
    ...(Object.fromEntries(
      Object.entries(definition).map(([key, offset]) => {
        return [key, getValue(palette, offset)];
      })
    ) as any),
    ...options?.nonInheritedValues
  };

  setThemeInfo(theme, {
    palette,
    definition,
    options,
    name
  });

  if (cacheKey) {
    IDENTITY_CACHE.set(cacheKey, theme);
  }

  return theme;
}

const getValue = (palette: CreateThemePalette, value: string | number) => {
  if (!palette) {
    throw new Error("Missing palette in createTheme");
  }
  if (typeof value === "string") {
    return value;
  }

  return palette[
    Math.min(
      Math.max(
        0,
        (value === 0 ? !isMinusZero(value) : value >= 0)
          ? value
          : palette.length - 1 + value
      ),
      palette.length - 1
    )
  ];
};
