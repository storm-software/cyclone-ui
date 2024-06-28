import { DeepKeys } from "@cyclone-ui/types";
import { SetRecordParam } from "../types";

export type UpdaterFn<TInput, TOutput = TInput> = (input: TInput) => TOutput;

export type Updater<TInput, TOutput = TInput> =
  | TOutput
  | UpdaterFn<TInput, TOutput>;

export function functionalUpdate<TInput, TOutput = TInput>(
  updater: Updater<TInput, TOutput>,
  input: TInput
): TOutput {
  return typeof updater === "function"
    ? (updater as UpdaterFn<TInput, TOutput>)(input)
    : updater;
}

export const isFunction = (
  value: unknown
): value is ((params?: unknown) => unknown) & ((param?: any) => any) => {
  try {
    return (
      value instanceof Function ||
      typeof value === "function" ||
      !!(value?.constructor && (value as any)?.call && (value as any)?.apply)
    );
    // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  } catch (e) {
    return false;
  }
};

/**
 * Get a value from an object using a path, including dot notation.
 */
export function getBy(obj: any, path: any) {
  if (typeof path === "undefined" || path === null) {
    return obj;
  }

  const pathObj = makePathArray(path);
  if (pathObj.length === 0) {
    return obj;
  }

  return pathObj.reduce((current: any, pathPart: any) => {
    if (current === null) {
      return null;
    }
    if (typeof current !== "undefined") {
      return current[pathPart];
    }
    return undefined;
  }, obj);
}

/**
 * Set a value on an object using a path, including dot notation.
 */
export function setBy<T, K extends DeepKeys<T> = DeepKeys<T>>(
  obj: T,
  _path: string | number,
  updater: SetRecordParam<T>
) {
  const path = makePathArray(_path as string);

  function doSet(parent?: any): any {
    if (isFunction(updater)) {
      if (updater.length !== 1) {
        throw new Error(
          `A setter function must accept ${updater.length <= 0 ? "a" : "only one"} parameter for the previous value. Use the format '(prev) => newValue' instead.`
        );
      }

      return updater(getBy(parent, path));
    }

    if (!path.length) {
      return parent;
    }

    const key = path.shift();
    if (typeof key === "string") {
      if (typeof parent === "object") {
        if (parent === null) {
          parent = {};
        }
        return {
          ...parent,
          [key]: doSet(parent[key])
        };
      }
      return {
        [key]: doSet()
      };
    }

    if (Array.isArray(parent) && key !== undefined) {
      const prefix = parent.slice(0, key);
      return [
        ...(prefix.length ? prefix : new Array(key)),
        doSet(parent[key]),
        ...parent.slice(key + 1)
      ];
    }
    return [...new Array(key), doSet()];
  }

  return doSet(obj);
}

/**
 * Delete a field on an object using a path, including dot notation.
 */
export function removeBy(obj: any, _path: any) {
  const path = makePathArray(_path);

  function doDelete(parent: any): any {
    if (!parent) return;
    if (path.length === 1) {
      const finalPath = path[0]!;
      if (Array.isArray(parent) && typeof finalPath === "number") {
        return parent.filter((_, i) => i !== finalPath);
      }
      const { [finalPath]: remove, ...rest } = parent;
      return rest;
    }

    const key = path.shift();

    if (typeof key === "string") {
      if (typeof parent === "object") {
        return {
          ...parent,
          [key]: doDelete(parent[key])
        };
      }
    }

    if (typeof key === "number") {
      if (Array.isArray(parent)) {
        if (key >= parent.length) {
          return parent;
        }
        const prefix = parent.slice(0, key);
        return [
          ...(prefix.length ? prefix : new Array(key)),
          doDelete(parent[key]),
          ...parent.slice(key + 1)
        ];
      }
    }

    throw new Error("It seems we have created an infinite loop in deleteBy. ");
  }

  return doDelete(obj);
}

const reFindNumbers0 = /^(\d*)$/gm;
const reFindNumbers1 = /\.(\d*)\./gm;
const reFindNumbers2 = /^(\d*)\./gm;
const reFindNumbers3 = /\.(\d*$)/gm;
const reFindMultiplePeriods = /\.{2,}/gm;

const intPrefix = "__int__";
const intReplace = `${intPrefix}$1`;

export function makePathArray(str: string | number) {
  if (typeof str !== "string" && typeof str !== "number") {
    throw new Error("Path must be a string or a number.");
  }

  if (typeof str === "number") {
    return [str];
  } else {
    return str
      .replaceAll("[", ".")
      .replaceAll("]", "")
      .replace(reFindNumbers0, intReplace)
      .replace(reFindNumbers1, `.${intReplace}.`)
      .replace(reFindNumbers2, `${intReplace}.`)
      .replace(reFindNumbers3, `.${intReplace}`)
      .replace(reFindMultiplePeriods, ".")
      .split(".")
      .map(d => {
        if (d.indexOf(intPrefix) === 0) {
          return parseInt(d.substring(intPrefix.length), 10);
        }
        return d;
      });
  }
}
