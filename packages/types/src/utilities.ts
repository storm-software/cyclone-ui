export type Nullable<T> = T | null;
export type IsNullable<T> = [null] extends [T] ? true : false;

export type RequiredByKey<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

type Narrowable = string | number | bigint | boolean;

type NarrowRaw<A> =
  | (A extends [] ? [] : never)
  | (A extends Narrowable ? A : never)
  | {
      [K in keyof A]: A[K] extends Function ? A[K] : NarrowRaw<A[K]>;
    };

export type NoInfer<T> = [T][T extends any ? 0 : never];

export type Narrow<A> = Try<A, [], NarrowRaw<A>>;

export type Try<A1, A2, Catch = never> = A1 extends A2 ? A1 : Catch;

// Hack to get TypeScript to show simplified types in error messages
export type Pretty<T> = { [K in keyof T]: T[K] } & {};

export type ComputeRange<
  N extends number,
  Result extends Array<unknown> = []
> = Result["length"] extends N
  ? Result
  : ComputeRange<N, [...Result, Result["length"]]>;
export type Index40 = ComputeRange<40>[number];
