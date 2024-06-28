import { Index40, IsNullable, Nullable } from "./utilities";

// Is this type a tuple?
type IsTuple<T> = T extends readonly any[] & { length: infer Length }
  ? Length extends Index40
    ? T
    : never
  : never;

// If this type is a tuple, what indices are allowed?
type AllowedIndexes<
  Tuple extends ReadonlyArray<any>,
  Keys extends number = never
> = Tuple extends readonly []
  ? Keys
  : Tuple extends readonly [infer _, ...infer Tail]
    ? AllowedIndexes<Tail, Keys | Tail["length"]>
    : Keys;

type PrefixArrayAccessor<T extends any[], TDepth extends any[]> = {
  [K in keyof T]: `[${number}]${DeepKeys<T[K], TDepth>}`;
}[number];

type PrefixTupleAccessor<
  T extends any[],
  TIndex extends number,
  TDepth extends any[]
> = {
  [K in TIndex]: `[${K}]` | `[${K}]${DeepKeys<T[K], TDepth>}`;
}[TIndex];

type PrefixObjectAccessor<T extends object, TDepth extends any[]> = {
  [K in keyof T]-?: K extends string | number
    ?
        | PrefixFromDepth<K, TDepth>
        | `${PrefixFromDepth<K, TDepth>}${DeepKeys<T[K], [TDepth]>}`
    : never;
}[keyof T];

export type DeepKeys<T, TDepth extends any[] = []> = TDepth["length"] extends 5
  ? never
  : unknown extends T
    ? PrefixFromDepth<string, TDepth>
    : T extends readonly any[] & IsTuple<T>
      ? PrefixTupleAccessor<T, AllowedIndexes<T>, TDepth>
      : T extends any[]
        ? PrefixArrayAccessor<T, [...TDepth, any]>
        : T extends Date
          ? never
          : T extends object
            ? PrefixObjectAccessor<T, TDepth>
            : T extends string | number | boolean | bigint
              ? ""
              : never;

type PrefixFromDepth<
  T extends string | number,
  TDepth extends any[]
> = TDepth["length"] extends 0 ? T : `.${T}`;

/**
   Infer the type of a deeply nested property within an object or an array.
   See the tests in `util-types.test-d.ts` for usage.
*/
export type DeepValue<
  // The object or array in which we have the property whose type we're trying to infer
  TValue,
  // A string representing the path of the property we're trying to access
  TAccessor extends string | number,
  TNullable extends boolean = IsNullable<TValue>
> =
  // If TValue is any it will recurse forever, this terminates the recursion
  unknown extends TValue
    ? TValue
    : // Check if we're looking for the property in an array
      TValue extends ReadonlyArray<any>
      ? TAccessor extends `[${infer TBrackets}].${infer TAfter}`
        ? /*
          Extract the first element from the accessor path (`TBrackets`)
          and recursively call `DeepValue` with it
          */
          DeepValue<DeepValue<TValue, TBrackets>, TAfter>
        : TAccessor extends `[${infer TBrackets}]`
          ? DeepValue<TValue, TBrackets>
          : TAccessor extends keyof TValue
            ? TValue[TAccessor]
            : TValue[TAccessor & number]
      : // Check if we're looking for the property in an object
        TValue extends Record<string | number, any>
        ? TAccessor extends `${infer TBefore}[${infer TEverythingElse}`
          ? DeepValue<DeepValue<TValue, TBefore>, `[${TEverythingElse}`>
          : TAccessor extends `[${infer TBrackets}]`
            ? DeepValue<TValue, TBrackets>
            : TAccessor extends `${infer TBefore}.${infer TAfter}`
              ? DeepValue<DeepValue<TValue, TBefore>, TAfter>
              : TAccessor extends string
                ? TNullable extends true
                  ? Nullable<TValue[TAccessor]>
                  : TValue[TAccessor]
                : never
        : // Do not allow `TValue` to be anything else
          never;
