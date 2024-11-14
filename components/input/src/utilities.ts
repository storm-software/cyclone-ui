import { getFontSizedFromSize, getSized } from "@cyclone-ui/theme-helpers";
import { sizeToSpace } from "@cyclone-ui/tokens";
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
  color: "$color",
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
    fontFamily: "$body",
    verticalAlign: "center",
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
            ...getFontSizedFromSize(size, extras),
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
