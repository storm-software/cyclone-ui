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

import type { FieldLabelPlacement, FormControlSize } from "@cyclone-ui/helpers";
import {
  formSizeVariants,
  getFieldLabelInset,
  getFormFontScale,
  getFormFontSize,
  getFormSizeToken,
  getSized,
  getSpaced,
  sizeToSpace
} from "@cyclone-ui/helpers";
import { createStyledContext, getVariableValue } from "@tamagui/core";
import { createContext, use } from "react";
import type {
  InputBehaviorContextProps,
  InputStyleContextProps
} from "./types";

// Callbacks must never enter createStyledContext: Tamagui hashes object and
// function identities using randomness during prerendering.
export const InputBehaviorContext = createContext<InputBehaviorContextProps>(
  {}
);
export const useInputBehavior = () => use(InputBehaviorContext);
export const InputContext = createStyledContext<
  InputStyleContextProps,
  | "size"
  | "circular"
  | "disabled"
  | "focused"
  | "hasValidationMessage"
  | "variant"
>(
  {
    size: "md",
    circular: false,
    disabled: false,
    focused: false,
    hasValidationMessage: false,
    variant: "outlined"
  } as InputStyleContextProps,
  {
    keys: [
      "size",
      "circular",
      "disabled",
      "focused",
      "hasValidationMessage",
      "variant"
    ]
  }
);

type BaseInputStyle = [Record<string, any>, Record<string, any>];

export const baseInputStyle: BaseInputStyle = [
  {
    name: "InputValue",
    context: InputContext,

    transition: "200ms",
    cursor: "pointer",
    height: "100%",
    flex: 1,
    color: "primary hover:primary-hovered",
    placeholderTextColor: "primary-disabled",
    selectionColor: "color6",
    fontFamily: "body",
    fontWeight: "400",
    alignItems: "center",
    margin: 0,
    padding: 0,
    paddingHorizontal: "xl",
    // Clear the browser's native field chrome, which a `color-scheme: dark`
    // page paints gray. The frame draws the background, border and focus ring;
    // don't rely on a global reset such as `@tamagui/core/reset.css`.
    backgroundColor: "transparent",
    borderWidth: 0,
    outlineStyle: "none",

    tabIndex: 0,

    // this fixes a flex bug where it overflows container
    minWidth: 0,

    variants: {
      disabled: {
        true: {
          cursor: "not-allowed",
          color: "primary-disabled hover:primary-disabled",
          placeholderTextColor: "primary-disabled"
        }
      },

      size: formSizeVariants((size, env) => {
        return {
          ...getInputValueTypography(size, env),
          paddingHorizontal: Math.round(
            sizeToSpace(getSized(getFormSizeToken(size))) * 0.4
          )
        };
      })
    } as const,

    defaultVariants: {
      size: "md",
      disabled: false
    }
  },
  {
    // Tamagui v3 removed `accept`; `isInput` selects the input style props,
    // which include `placeholderTextColor` and `selectionColor` as colors.
    isInput: true
  }
];

/** Join flat style values; later clauses win over earlier ones. */
const joinFlatValues = (...values: unknown[]) =>
  values.filter(value => value != null && value !== "").join(" ");

/** Flat value strings need explicit units for numeric lengths. */
const toFlatLength = (value: unknown) => {
  if (value == null) {
    return undefined;
  }

  const resolved = getVariableValue(value);

  return typeof resolved === "number" ? `${resolved}px` : String(resolved);
};

/** Shared value typography for editable inputs and selected values. */
export const getInputValueTypography = (
  size: FormControlSize,
  env: Parameters<typeof getFormFontSize>[1]
) => {
  const font = getFormFontSize(size, env);

  return {
    fontFamily: font.fontFamily ?? "body",
    fontWeight: "400" as const,
    fontStyle: font.fontStyle,
    letterSpacing: font.letterSpacing,
    textTransform: font.textTransform,
    fontSize: joinFlatValues(
      toFlatLength(font.fontSize),
      `web:${16 * getFormFontScale(size)}px`
    ),
    lineHeight: joinFlatValues(
      toFlatLength(font.lineHeight),
      `web:${24 * getFormFontScale(size)}px`
    )
  };
};

export const getInputSize = (
  val: FormControlSize,
  {
    labelPlacement,
    circular
  }: {
    labelPlacement?: FieldLabelPlacement | null;
    circular?: boolean | null;
  } = {}
) => {
  const token = getFormSizeToken(val);
  const height = labelPlacement
    ? getSized(token) + getFieldLabelInset(labelPlacement, val)
    : token;

  return {
    paddingHorizontal: getSpaced(token),
    height,
    minHeight: height,
    borderRadius: circular ? 100_000 : "control"
  };
};
