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

import type { ReactNode } from "react";

/** An option as typing on the select and the search filter see it. */
export interface SelectOptionEntry {
  value: string;
  label: string;
  disabled?: boolean;
}

/** An item's text, or its value when its children aren't plain text. */
export const getItemLabel = (children: ReactNode, value: unknown): string =>
  typeof children === "string" || typeof children === "number"
    ? String(children)
    : String(value);

/** Whether `label` contains the search filter's `search` text. */
export const matchesSearch = (label: string, search: string): boolean =>
  label.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase());

/**
 * The option that text typed to filter a searchable select picks: the first
 * enabled one whose label starts with `search`, else the first that contains
 * it, so it is always one of the options the filter shows.
 */
export const getSearchMatch = (
  options: readonly SelectOptionEntry[],
  search: string
): SelectOptionEntry | undefined => {
  const query = search.trim().toLocaleLowerCase();
  const enabled = options.filter(option => !option.disabled);

  return (
    enabled.find(option =>
      option.label.toLocaleLowerCase().startsWith(query)
    ) ?? enabled.find(option => matchesSearch(option.label, query))
  );
};

/**
 * The enabled option whose label starts with `search`, looking from the
 * current option on, as a native `<select>` does. A single character (or
 * one character repeated) starts after the current option, so pressing a key
 * again cycles through the options it starts.
 */
export const getTypeaheadMatch = (
  options: readonly SelectOptionEntry[],
  search: string,
  currentValue?: string
): SelectOptionEntry | undefined => {
  const repeated = [...search].every(char => char === search[0]);
  const query = (repeated ? search.charAt(0) : search).toLocaleLowerCase();
  const index = options.findIndex(option => option.value === currentValue);
  const start = index < 0 ? 0 : query.length === 1 ? index + 1 : index;

  return [...options.slice(start), ...options.slice(0, start)].find(
    option =>
      !option.disabled && option.label.toLocaleLowerCase().startsWith(query)
  );
};
