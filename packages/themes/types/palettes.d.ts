type ObjectType = Record<PropertyKey, unknown>;
type PickByValue<OBJ_T, VALUE_T> = Pick<OBJ_T, {
    [K in keyof OBJ_T]: OBJ_T[K] extends VALUE_T ? K : never;
}[keyof OBJ_T]>;
type ObjectEntries<OBJ_T> = {
    [K in keyof OBJ_T]: [keyof PickByValue<OBJ_T, OBJ_T[K]>, OBJ_T[K]];
}[keyof OBJ_T][];
export declare const objectKeys: <O extends Object>(obj: O) => (keyof O)[];
export declare function objectEntries<OBJ_T extends ObjectType>(obj: OBJ_T): ObjectEntries<OBJ_T>;
type EntriesType = [PropertyKey, unknown][] | ReadonlyArray<readonly [PropertyKey, unknown]>;
type DeepWritable<OBJ_T> = {
    -readonly [P in keyof OBJ_T]: DeepWritable<OBJ_T[P]>;
};
type UnionToIntersection<UNION_T> = (UNION_T extends any ? (k: UNION_T) => void : never) extends (k: infer I) => void ? I : never;
type UnionObjectFromArrayOfPairs<ARR_T extends EntriesType> = DeepWritable<ARR_T> extends (infer R)[] ? R extends [infer key, infer val] ? {
    [prop in key & PropertyKey]: val;
} : never : never;
type MergeIntersectingObjects<ObjT> = {
    [key in keyof ObjT]: ObjT[key];
};
type EntriesToObject<ARR_T extends EntriesType> = MergeIntersectingObjects<UnionToIntersection<UnionObjectFromArrayOfPairs<ARR_T>>>;
export declare function objectFromEntries<ARR_T extends EntriesType>(arr: ARR_T): EntriesToObject<ARR_T>;
export declare const palettes: {
    dark_base: string[];
    dark_primary: string[];
    dark_secondary: string[];
    dark_tertiary: string[];
    dark_accent: string[];
    dark_success: string[];
    dark_info: string[];
    dark_warning: string[];
    dark_error: string[];
    dark_blue: string[];
    dark_gray: string[];
    dark_green: string[];
    dark_orange: string[];
    dark_pink: string[];
    dark_purple: string[];
    dark_red: string[];
    dark_yellow: string[];
    light_base: string[];
    light_primary: string[];
    light_secondary: string[];
    light_tertiary: string[];
    light_accent: string[];
    light_success: string[];
    light_info: string[];
    light_warning: string[];
    light_error: string[];
    light_blue: string[];
    light_gray: string[];
    light_green: string[];
    light_orange: string[];
    light_pink: string[];
    light_purple: string[];
    light_red: string[];
    light_yellow: string[];
    light: string[];
    dark: string[];
};
export {};
//# sourceMappingURL=palettes.d.ts.map