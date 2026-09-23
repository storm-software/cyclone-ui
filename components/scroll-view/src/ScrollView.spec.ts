/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 https://stormsoftware.com/licenses/projects/cyclone-ui.

 SPDX-License-Identifier: Apache-2.0

 ------------------------------------------------------------------- */

import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readComponent = () =>
  readFileSync(new URL("./ScrollView.tsx", import.meta.url), "utf8");

const readStory = () =>
  readFileSync(new URL("./ScrollView.stories.tsx", import.meta.url), "utf8");

const readConsumer = (path: string) =>
  readFileSync(new URL(path, import.meta.url), "utf8");

describe("ScrollView", () => {
  it("defaults to the compact width and supports a large full-width size", () => {
    const source = readComponent();

    expect(source).toMatch(/size:\s*\{\s*sm:\s*\{\s*width:\s*"90%"/s);
    expect(source).toMatch(/lg:\s*\{\s*width:\s*"100%"/s);
    expect(source).toMatch(/defaultVariants:\s*\{\s*size:\s*"sm"/s);
  });

  it("documents the scroll state and both width presets", () => {
    const source = readStory();

    expect(source).toMatch(/args:\s*\{\s*size:\s*"sm"/s);
    expect(source).toMatch(/export const LargeSize[\s\S]*size:\s*"lg"/);
    expect(source).toMatch(/export const FitsWithinMaxHeight/);
  });

  it("preserves full-width layouts for shared popover and sheet consumers", () => {
    expect(readConsumer("../../sheet/src/Sheet.tsx")).toMatch(
      /<ScrollView flex=\{1\} size="lg"/
    );

    for (const path of [
      "../../phone-number-input-field/src/PhoneNumberInputField.tsx",
      "../../search-input-field/src/SearchInputField.tsx",
      "../../data-table/src/DataTable.tsx"
    ]) {
      expect(readConsumer(path)).toMatch(
        /<Popover\.Content\.ScrollView\s+size="lg"/
      );
    }
  });
});
