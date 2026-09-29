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

import { getVariableValue, styled } from "@tamagui/core";
import { getFontSized } from "./get-font-sized";
import type { StyleEnv } from "./types";

/** The public size contract shared by form controls and field state. */
export type FormControlSize = "sm" | "md" | "lg";

const controlTokens = { sm: "8xl", md: "10xl", lg: "12xl" } as const;
const compactTokens = { sm: "4xl", md: "6xl", lg: "7xl" } as const;

export const getFormSizeToken = (
  size: FormControlSize = "md",
  kind: "control" | "compact" = "control"
) => (kind === "compact" ? compactTokens : controlTokens)[size];

/** Scale supplementary geometry without changing the medium baseline. */
export const getFormSizeScale = (size: FormControlSize = "md") =>
  ({ sm: 32 / 42, md: 1, lg: 52 / 42 })[size];

/** Text scales more gently than control height to keep labels readable. */
export const getFormFontScale = (size: FormControlSize = "md") =>
  ({ sm: 0.875, md: 1, lg: 1.125 })[size];

/**
 * Retain each typography role's medium font, weight and line height.
 *
 * @param size - The form control size.
 * @param env - The `styled.dynamic` environment.
 * @param token - The font size token to use.
 * @returns The computed font size style object.
 */
export const getFormFontSize = (
  size: FormControlSize,
  env: StyleEnv,
  token = "true"
): ReturnType<typeof getFontSized> => {
  const style = getFontSized(token, env) ?? {};
  if (size === "md") return style;
  const scale = getFormFontScale(size);

  return {
    ...style,
    ...(style.fontSize !== undefined
      ? { fontSize: Number(getVariableValue(style.fontSize)) * scale }
      : {}),
    // Tamagui v3 reads a numeric `lineHeight` as a ratio; keep the pixel value.
    ...(style.lineHeight !== undefined
      ? { lineHeight: `${Number(getVariableValue(style.lineHeight)) * scale}px` }
      : {})
  };
};

/** The `styled.dynamic` variant produced by {@link formSizeVariants}. */
export type FormSizeVariant = ReturnType<
  typeof styled.dynamic<FormControlSize>
>;

/** A typed dynamic variant keeps arbitrary Tamagui tokens out of the public API. */
export const formSizeVariants = <T extends object>(
  style: (size: FormControlSize, env: StyleEnv) => T | null | undefined
): FormSizeVariant =>
  styled.dynamic<FormControlSize>((size, env) =>
    size === "sm" || size === "md" || size === "lg" ? style(size, env) : undefined
  );
