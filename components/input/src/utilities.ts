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

import type { FieldLabelPlacement } from "@cyclone-ui/field";
import { getFieldLabelInset } from "@cyclone-ui/field";
import {
  formSizeVariants,
  getFormFontScale,
  getFormFontSize,
  getFormSizeToken,
  getSized,
  getSpaced,
  sizeToSpace,
  type FormControlSize
} from "@cyclone-ui/helpers";
import { createStyledContext, getVariableValue } from "@tamagui/core";
import type { InputContextProps } from "./types";
export const InputContext = createStyledContext<
  InputContextProps,
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
  } as InputContextProps,
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
    color: "accent hover:accentHover",
    placeholderTextColor: "accentDisabled",
    selectionColor: "color6",
    fontFamily: "body-md",
    alignItems: "center",
    margin: 0,
    padding: 0,
    paddingHorizontal: "xl",

    tabIndex: 0,

    // this fixes a flex bug where it overflows container
    minWidth: 0,

    variants: {
      disabled: {
        true: {
          cursor: "not-allowed",
          color: "accentDisabled hover:accentDisabled",
          placeholderTextColor: "accentDisabled"
        }
      },

      size: formSizeVariants((size, env) => {
        const font = getFormFontSize(size, env);

        return {
          fontFamily: font.fontFamily,
          fontWeight: font.fontWeight,
          fontStyle: font.fontStyle,
          letterSpacing: font.letterSpacing,
          textTransform: font.textTransform,
          color: font.color,
          // Native keeps the font's size and leading; web pins them.
          fontSize: joinFlatValues(
            toFlatLength(font.fontSize),
            `web:${16 * getFormFontScale(size)}px`
          ),
          lineHeight: joinFlatValues(
            toFlatLength(font.lineHeight),
            size === "md"
              ? "web:normal"
              : `web:${24 * getFormFontScale(size)}px`
          ),
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
