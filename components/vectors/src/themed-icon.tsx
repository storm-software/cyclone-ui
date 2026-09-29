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

import { getTokens } from "@tamagui/core";
import type { IconProps } from "@tamagui/helpers-icon";
import { themed } from "@tamagui/helpers-icon";
import type { FC } from "react";

/**
 * The props an icon body receives after {@link themedIcon} and Tamagui's
 * `themed` resolved them: `size` is a pixel number and `strokeWidth` is a
 * number (or `themed`'s numeric-string default).
 */
export type ThemedIconBodyProps<P extends IconProps> = Omit<
  P,
  "size" | "strokeWidth"
> & {
  size?: number;
  strokeWidth?: number | string;
};

/**
 * Tamagui v3's `themed` resolves a string icon `size` through the font size
 * scale. Cyclone UI icons were authored against v2, which resolved string
 * sizes through the `size` token scale, so resolve size token keys here first.
 * Any other value (numbers, `true`, unknown keys) is left to `themed`.
 */
const resolveIconSize = (size: IconProps["size"]): IconProps["size"] => {
  if (typeof size !== "string") {
    return size;
  }

  const token = (getTokens().size as Record<string, { val: unknown }>)[
    size.replace(/^\$/, "")
  ];

  return token && typeof token.val === "number" ? token.val : size;
};

/**
 * Wrap an icon body with Tamagui's `themed`, preserving the v2 size token
 * semantics for string `size` values.
 */
export function themedIcon<P extends IconProps>(
  Component: FC<ThemedIconBodyProps<P>>
): FC<P> {
  const Themed = themed(Component as unknown as FC<IconProps>);

  const Wrapped = ({ size, ...props }: P) => (
    <Themed {...(props as IconProps)} size={resolveIconSize(size)} />
  );

  // keep the `themed` HOC marker so `styled()` treats the icon the same way
  (Wrapped as unknown as { staticConfig: unknown }).staticConfig = (
    Themed as unknown as { staticConfig: unknown }
  ).staticConfig;

  return Wrapped;
}
