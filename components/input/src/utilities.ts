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
import type { VariantSpreadExtras } from "@tamagui/core";
import {
  createStyledContext,
  stylePropsTextOnly,
  validStyles
} from "@tamagui/core";
import type { InputContextProps } from "./types";
export const InputContext = createStyledContext<InputContextProps>({
  size: "md",
  circular: false,
  disabled: false,
  focused: false,
  hasValidationMessage: false,
  variant: "default"
});

type BaseInputStyle = [Record<string, any>, Record<string, any>];

export const baseInputStyle: BaseInputStyle = [
  {
    name: "InputValue",
    context: InputContext,

    transition: "200ms",
    cursor: "pointer",
    height: "100%",
    flex: 1,
    color: "$accent",
    placeholderTextColor: "$accentDisabled",
    selectionColor: "$color6",
    fontFamily: "$body-md",
    alignItems: "center",
    margin: 0,
    padding: 0,
    paddingHorizontal: "$xl",

    tabIndex: 0,

    // this fixes a flex bug where it overflows container
    minWidth: 0,

    hoverStyle: {
      color: "$accentHover"
    },

    variants: {
      disabled: {
        true: {
          cursor: "not-allowed",
          color: "$accentDisabled",
          placeholderTextColor: "$accentDisabled",

          hoverStyle: {
            color: "$accentDisabled"
          }
        }
      },

      size: formSizeVariants((size, extras) => ({
        ...getFormFontSize(size, extras),
        "$platform-web": {
          fontSize: 16 * getFormFontScale(size),
          lineHeight: size === "md" ? "normal" : 24 * getFormFontScale(size)
        },
        paddingHorizontal: Math.round(
          sizeToSpace(getSized(getFormSizeToken(size))) * 0.4
        )
      }))
    } as const,

    defaultVariants: {
      size: "md",
      disabled: false
    }
  },
  {
    isInput: true,
    accept: {
      placeholderTextColor: "color",
      selectionColor: "color"
    } as const,
    validStyles: {
      ...validStyles,
      ...stylePropsTextOnly
    }
  }
];

export const getInputSize = (
  val: FormControlSize,
  { props }: VariantSpreadExtras<any>
) => {
  const token = getFormSizeToken(val);
  const height = props.variant === "floating" ? getSized(token) + 3 : token;
  return {
    paddingHorizontal: getSpaced(token),
    height,
    minHeight: height,
    borderRadius: props.circular ? 100_000 : "$control"
  };
};
