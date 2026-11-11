/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { toPath } from "@stryke/helpers/to-path";
import { isSetObject } from "@stryke/type-checks/is-set-object";
import type { ValidationDetail as ValidationDetails } from "@stryke/types/validations";
import type { FormErrors, ValidationResults } from "../types";
import { isValidationResults } from "./is-validation-results";

/** The code prefix of the messages seeded from a form's `errors` option. */
export const SERVER_ERROR_CODE = "server-error";

const isServerError = (message: ValidationDetails) =>
  message.code?.startsWith(SERVER_ERROR_CODE) ?? false;

/**
 * Remove the messages seeded from the form's `errors` option from one field's
 * validation results, such as once the user edits the field.
 */
export const clearServerErrors = <
  TResults extends ValidationResults | undefined
>(
  results: TResults
): TResults =>
  results?.server?.some(isServerError)
    ? {
        ...results,
        server: results.server.filter(message => !isServerError(message))
      }
    : results;

/**
 * Remove the messages seeded from the form's `errors` option from a form's
 * per-field validation results.
 */
export const stripServerErrors = <TResults>(node: TResults): TResults =>
  (isValidationResults(node)
    ? clearServerErrors(node)
    : isSetObject(node)
      ? Object.fromEntries(
          Object.entries(node).map(([key, value]) => [
            key,
            stripServerErrors(value)
          ])
        )
      : node) as TResults;

/**
 * Replace the messages seeded from a form's `errors` option in its per-field
 * validation results.
 *
 * @param results - The form's `validationResultsFields`.
 * @param errors - Messages keyed by field name, such as Zod's
 * `flattenError(error).fieldErrors` returned from a server action.
 * @returns New results; `results` is not modified.
 */
export const applyServerErrors = <TResults extends Record<string, any>>(
  results: TResults,
  errors: FormErrors | undefined
): TResults => {
  // A fresh copy: stripping returns objects without seeded messages as-is.
  const next: Record<string, any> = { ...stripServerErrors(results) };

  for (const [name, value] of Object.entries(errors ?? {})) {
    const messages = (Array.isArray(value) ? value : [value]).filter(
      (message): message is string => Boolean(message)
    );
    if (messages.length === 0) {
      continue;
    }

    const path = toPath(name);
    let parent = next;
    for (const key of path.slice(0, -1)) {
      parent[key] = { ...parent[key] };
      parent = parent[key];
    }

    const key = path.at(-1)!;
    const fieldResults = (parent[key] ?? {}) as ValidationResults;
    parent[key] = {
      ...fieldResults,
      server: [
        ...(fieldResults.server ?? []),
        ...messages.map((message, index) => ({
          type: "danger" as const,
          // Unique codes: messages with equal codes are shown once.
          code: `${SERVER_ERROR_CODE}:${index}`,
          message
        }))
      ]
    };
  }

  return next as TResults;
};

/**
 * Whether a form's `errors` option holds at least one message.
 */
export const hasServerErrors = (errors: FormErrors | undefined) =>
  Object.values(errors ?? {}).some(value =>
    Array.isArray(value) ? value.some(Boolean) : Boolean(value)
  );
