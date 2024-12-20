/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { getFontSizedFromSize, getSized, getSpaced } from "@cyclone-ui/helpers";
import { sizeToSpace } from "@cyclone-ui/tamagui";
import {
  createStyledContext,
  isWeb,
  SizeTokens,
  stylePropsTextOnly,
  validStyles,
  VariantSpreadExtras
} from "@tamagui/core";
import { InputContextProps } from "./types";

export const InputContext = createStyledContext<InputContextProps>({
  size: "$true",
  circular: false,
  disabled: false,
  focused: false
});

export const baseInputStyle = [
  {
    name: "InputValue",
    tag: "input",
    context: InputContext,

    animation: "normal",
    cursor: "pointer",
    height: "100%",
    flex: 1,
    color: "$color",
    placeholderTextColor: "$placeholderColor",
    selectionColor: "$color6",
    fontFamily: "$body",
    fontSize: "$true",
    alignItems: "center",
    margin: 0,
    padding: 0,

    ...(isWeb
      ? {
          tabIndex: 0 as const
        }
      : {
          focusable: true
        }),

    // this fixes a flex bug where it overflows container
    minWidth: 0,

    variants: {
      disabled: {
        true: {
          cursor: "not-allowed",
          color: "$colorDisabled",
          placeholderTextColor: "$placeholderColorDisabled"
        }
      },

      size: {
        "...size": (
          val: SizeTokens | number,
          extras: VariantSpreadExtras<any>
        ) => {
          if (typeof val === "number") {
            const space = sizeToSpace(val);
            return {
              ...getFontSizedFromSize(val, extras),
              paddingHorizontal: Math.round(space * 0.4)
            };
          }

          const size = getSized(val);
          const space = sizeToSpace(size);
          return {
            ...getFontSizedFromSize(val, extras),
            paddingHorizontal: Math.round(space * 0.4)
          };
        }
      }
    } as const,

    defaultVariants: {
      size: "$true",
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
  val: SizeTokens | number,
  extras: VariantSpreadExtras<any>
) => {
  const { tokens, props } = extras;
  if (!val || props.circular) {
    return;
  }

  if (typeof val === "number") {
    return {
      paddingHorizontal: val * 0.25,
      height: val,
      borderRadius: props.circular ? 100_000 : val * 0.2
    };
  }

  const xSize = getSpaced(val);
  const radiusToken = tokens.radius[val] ?? tokens.radius["$true"];

  return {
    paddingHorizontal: xSize,
    height: val,
    borderRadius: props.circular ? 100_000 : radiusToken
  };
};
