import type { Variable } from "@tamagui/web";

export type ThemeInfo = {
  palette: CreateThemePalette;
  definition: ThemeMask;
  options?: CreateThemeOptions;
  cache: Map<any, any>;
};

export type CreateThemePalette = (string | Variable)[];

export type ThemeMask = Record<string, string | number>;

export type MaskOptions = {
  palette?: CreateThemePalette;
  override?: Partial<ThemeMask>;
  overrideStrategy?: "shift" | "swap";
  overrideSwap?: Partial<ThemeMask>;
  overrideShift?: Partial<ThemeMask>;
  skip?: Partial<ThemeMask>;
  strength?: number;
  max?: number;
  min?: number;
  parentName?: string;
};

export type GenericTheme = { [key: string]: string | Variable };

export type MaskFunction = <A extends ThemeMask>(
  template: A,
  options: MaskOptions
) => A;

export type CreateMask = {
  name: string;
  mask: MaskFunction;
};

export type CreateThemeOptions = {
  nonInheritedValues?: GenericTheme;
};

export type Palette = string[];

export type Template = {
  [key: string]: number | string;
};

export type ThemeUsingMask<Masks = string> = MaskOptions & {
  mask: Masks;
  avoidNestingWithin?: string[];
  childOptions?: MaskOptions & {
    mask?: Masks;
  };
};

export type ThemeUsingTemplate = CreateThemeOptions & {
  palette?: string;
  template: string;
};

type ThemePreDefined = {
  theme: { [key: string]: string };
};

export type Theme<Masks = string> =
  | ThemePreDefined
  | ThemeUsingTemplate
  | ThemeUsingMask<Masks>;

export type ThemeWithParent<Masks = string> = Theme<Masks> & {
  parent: string;
};

export type PaletteDefinitions = {
  [key: string]: Palette;
};

export type ThemeDefinition<Masks extends string = string> =
  | Theme<Masks>
  | ThemeWithParent<Masks>[];

type UnionableString = string & {};

export type ThemeDefinitions<Masks extends string = string> = {
  [key: string]: ThemeDefinition<Masks | UnionableString>;
};

export type TemplateDefinitions = {
  [key: string]: Template;
};

export type MaskDefinitions = {
  [key: string]: CreateMask | CreateMask["mask"];
};

export type ObjectType = Record<PropertyKey, unknown>;

export type PickByValue<OBJ_T, VALUE_T> = // From https://stackoverflow.com/a/55153000
  Pick<
    OBJ_T,
    { [K in keyof OBJ_T]: OBJ_T[K] extends VALUE_T ? K : never }[keyof OBJ_T]
  >;

export type ObjectEntries<OBJ_T> = // From https://stackoverflow.com/a/60142095
  {
    [K in keyof OBJ_T]: [keyof PickByValue<OBJ_T, OBJ_T[K]>, OBJ_T[K]];
  }[keyof OBJ_T][];

export type EntriesType =
  | [PropertyKey, unknown][]
  | ReadonlyArray<readonly [PropertyKey, unknown]>;

// Existing Utils
export type DeepWritable<OBJ_T> = {
  -readonly [P in keyof OBJ_T]: DeepWritable<OBJ_T[P]>;
};
export type UnionToIntersection<UNION_T> = // From https://stackoverflow.com/a/50375286
  (UNION_T extends any ? (k: UNION_T) => void : never) extends (
    k: infer I
  ) => void
    ? I
    : never;

// New Utils
export type UnionObjectFromArrayOfPairs<ARR_T extends EntriesType> =
  DeepWritable<ARR_T> extends (infer R)[]
    ? R extends [infer key, infer val]
      ? { [prop in key & PropertyKey]: val }
      : never
    : never;
export type MergeIntersectingObjects<ObjT> = { [key in keyof ObjT]: ObjT[key] };
export type EntriesToObject<ARR_T extends EntriesType> =
  MergeIntersectingObjects<
    UnionToIntersection<UnionObjectFromArrayOfPairs<ARR_T>>
  >;
