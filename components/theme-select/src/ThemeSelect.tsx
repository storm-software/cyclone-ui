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

"use client";

import { Select } from "@cyclone-ui/select";
import type { GetProps } from "@tamagui/core";
import { getConfig } from "@tamagui/core";
import type { JSX } from "react";

/**
 * The color themes in the Tamagui config (`light_brand` → `brand`), so a
 * config's own themes show up too.
 */
const getThemeNames = (): string[] => [
  ...new Set(
    Object.keys(getConfig().themes)
      .map(name => /^(?:light|dark)_([^_]+)$/.exec(name)?.[1])
      .filter((name): name is string => Boolean(name))
  )
];

const toLabel = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1);

export type ThemeSelectProps = Omit<GetProps<typeof Select>, "children">;

/**
 * A `Select` with an option for each color theme, each written in its theme's
 * `primary` color. Wrap it in a `Field` to connect it to a form.
 */
export const ThemeSelect = ({
  placeholder = "Select a theme",
  ...props
}: ThemeSelectProps): JSX.Element => (
  <Select {...props}>
    <Select.TextBox>
      <Select.TextBox.Value placeholder={placeholder} />
    </Select.TextBox>
    <Select.Items>
      {getThemeNames().map((name, index) => (
        // A themed item rests at its theme's `primary` color.
        <Select.Items.Item key={name} index={index} value={name} theme={name}>
          {toLabel(name)}
        </Select.Items.Item>
      ))}
    </Select.Items>
  </Select>
);
