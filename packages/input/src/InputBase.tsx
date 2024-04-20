import { isWeb } from "@tamagui/constants";
import type { GetProps } from "@tamagui/core";
import { styled, useComposedRefs, useTheme } from "@tamagui/core";
import { registerFocusable, useFocusable } from "@tamagui/focusable";
import { TextInput } from "react-native";
import { inputSizeVariant } from "./utilities/size-helper";
import { useEffect, useRef } from "react";
import React from "react";

export const defaultStyles = {
  size: "$true",
  fontFamily: "$body",
  borderWidth: 1,
  outlineWidth: 0,
  color: "$color",

  ...(isWeb
    ? {
        tabIndex: 0
      }
    : {
        focusable: true
      }),

  borderColor: "$borderColor",
  backgroundColor: "$background",

  // this fixes a flex bug where it overflows container
  minWidth: 0,

  hoverStyle: {
    borderColor: "$borderColorHover"
  },

  focusStyle: {
    borderColor: "$borderColorFocus"
  },

  focusVisibleStyle: {
    outlineColor: "$outlineColor",
    outlineWidth: 2,
    outlineStyle: "solid"
  }
} as const;

export const InputBaseFrame = styled(
  TextInput,
  {
    name: "Input",

    variants: {
      unstyled: {
        false: defaultStyles
      },

      size: {
        "...size": inputSizeVariant
      },

      disabled: {
        true: {}
      }
    } as const,

    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false
    }
  },
  {
    isInput: true,

    accept: {
      placeholderTextColor: "color",
      selectionColor: "color"
    } as const
  }
);

// const x = <InputFrame selectionColor="" />

export type InputBase = TextInput;

export type InputBaseFrameProps = GetProps<typeof InputBaseFrame>;

export type InputBaseExtraProps = {
  rows?: number;
};

export type InputBaseProps = InputBaseFrameProps & InputBaseExtraProps;

export const InputBase = InputBaseFrame.styleable<InputBaseExtraProps>(
  (propsIn, forwardedRef) => {
    const ref = useRef<InputBase>(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const props = useInputBaseProps(propsIn, composedRefs);

    if (process.env.TAMAGUI_TARGET === "native") {
      useEffect(() => {
        if (!props.id) return;
        if (props.disabled) return;

        return registerFocusable(props.id, {
          focusAndSelect: () => {
            ref.current?.focus();
          },
          focus: () => {}
        });
      }, [props.id, props.disabled]);
    }

    return <InputBaseFrame {...props} />;
  }
);

export type UseInputBaseResult = InputBaseProps & {
  readOnly?: boolean;
  ref: (node: any) => void;
  onChangeText: (value: any) => void;
  placeholderTextColor: any;
};

export function useInputBaseProps(
  props: InputBaseProps,
  ref: any
): UseInputBaseResult {
  const theme = useTheme();
  const { onChangeText, ref: combinedRef } = useFocusable({
    // @ts-ignore
    props,
    ref,
    isInput: true
  });

  const placeholderColorProp = props.placeholderTextColor;
  const placeholderTextColor =
    theme[placeholderColorProp as any]?.get() ??
    placeholderColorProp ??
    theme.placeholderColor?.get();

  return {
    ref: combinedRef,
    readOnly: props.disabled,
    ...props,
    placeholderTextColor,
    onChangeText
  };
}
