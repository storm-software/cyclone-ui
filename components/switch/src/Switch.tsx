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

import { ColorThemeName } from "@cyclone-ui/colors";
import { getSized, getSpaced } from "@cyclone-ui/helpers";
import { ThemeableIcon, ThemeableIconProps } from "@cyclone-ui/themeable-icon";
import { isWeb } from "@tamagui/constants";
import type { ColorTokens, SizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  getVariableValue,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { getSize } from "@tamagui/get-token";
import { createSwitch } from "@tamagui/switch";
import { useMemo } from "react";

export type SwitchContextProps = {
  size: SizeTokens;
  name: string;
  checked: boolean;
  required: boolean;
  disabled: boolean;
  theme: string;
};

export const SwitchContext = createStyledContext<SwitchContextProps>({
  size: "$true",
  name: "",
  checked: false,
  required: false,
  disabled: false,
  theme: `${ColorThemeName.BASE}_Switch`
});

const getSwitchHeight = (val: SizeTokens) =>
  Math.round(getVariableValue(getSize(val)) * 0.65);

const getSwitchWidth = (val: SizeTokens) => getSwitchHeight(val) * 2;

const SwitchFrame = styled(View, {
  name: "Switch",
  tag: "button",
  context: SwitchContext,

  animation: "normal",
  borderRadius: 100_000,
  backgroundColor: "transparent",
  borderWidth: 2,
  borderColor: "$borderColor",
  outlineStyle: "none",

  ...(isWeb
    ? {
        tabIndex: 0
      }
    : {
        focusable: true
      }),

  hoverStyle: {
    borderColor: "$accent10"
  },

  focusStyle: {
    outlineColor: "$accent10",
    outlineWidth: 3,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  },

  focusVisibleStyle: {
    outlineColor: "$accent10",
    outlineWidth: 3,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  },

  variants: {
    checked: {
      true: {
        backgroundColor: "$accent2"
      }
    },

    size: {
      "...size": val => {
        const height = getSwitchHeight(val);
        const width = getSwitchWidth(val);

        return {
          height,
          minHeight: height,
          width
        };
      }
    },

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed",
        borderColor: "$borderColorDisabled",

        hoverStyle: {
          borderColor: "$borderColorDisabled"
        },

        focusStyle: {
          borderColor: "$borderColorDisabled"
        },

        pressStyle: {
          borderColor: "$borderColorDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const SwitchThumb = styled(View, {
  name: "SwitchThumb",

  animation: "normal",
  backgroundColor: "$color",
  borderRadius: 100_000,
  borderWidth: 1,
  borderColor: "$background",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",

  variants: {
    checked: {
      true: {}
    },

    size: {
      "...size": val => {
        const width = getSwitchHeight(val);

        return {
          width
        };
      }
    }
  } as const,

  defaultVariants: {
    checked: false,
    size: "$true"
  }
});

// const SwitchThumbFrame = styled(View, {
//   name: "SwitchThumb",

//   animation: "normal",
//   height: "100%",
//   alignItems: "center",

//   variants: {
//     size: {
//       "...size": val => {
//         const width = getSwitchHeight(val);

//         return {
//           width
//         };
//       }
//     }
//   } as const,

//   defaultVariants: {
//     size: "$true"
//   }
// });

// const SwitchThumbBinary = styled(Binary, {
//   name: "SwitchThumb",

//   color: "$accent2",
//   height: "85%",
//   width: "85%",
//   margin: "auto"
// });

const SwitchThumbImpl = SwitchThumb.styleable(
  (props, forwardedRef) => {
    const { checked } = SwitchContext.useStyledContext();

    return <SwitchThumb ref={forwardedRef} {...props} checked={checked} />;
  },
  {
    staticConfig: { componentName: "SwitchThumb" }
  }
);

const SwitchIconFrame = styled(View, {
  position: "absolute",
  context: SwitchContext,
  height: "100%",
  justifyContent: "center",
  alignItems: "center",

  variants: {
    size: {
      "...size": {} as any
    },

    placement: {
      right: (_, { props }) => {
        const space = getSpaced((props as any).size, {
          scale: 0.35
        });

        return {
          right: space
        };
      },
      left: (_, { props }) => {
        const space = getSpaced((props as any).size, {
          scale: 0.35
        });

        return {
          left: space
        };
      }
    }
  } as const,

  defaultVariants: {
    placement: "right"
  }
});

const SwitchIcon = SwitchIconFrame.styleable<{
  size?: SizeTokens;
  color?: ColorTokens;
}>(
  ({ children, size, color, ...props }, forwardedRef) => {
    const {
      theme,
      disabled,
      size: contextSize
    } = SwitchContext.useStyledContext();
    const adjusted = useMemo(
      () => getSized(size ?? contextSize, { shift: -6 }),
      [size, contextSize]
    );

    return (
      <SwitchIconFrame
        ref={forwardedRef}
        zIndex="$md"
        alignItems="center"
        // flexGrow 1 leads to inconsistent native style where text pushes to start of view
        flexGrow={0}
        flexShrink={1}>
        <ThemeableIcon
          {...props}
          theme={theme}
          disabled={false}
          size={adjusted}
          color={
            (color ||
              (disabled
                ? "$colorDisabled"
                : "$color")) as ThemeableIconProps["color"]
          }
          $group-switch-hover={{
            color: disabled ? "$colorDisabled" : "$colorHover"
          }}>
          {children}
        </ThemeableIcon>
      </SwitchIconFrame>
    );
  },
  {
    staticConfig: { componentName: "SwitchIcon" }
  }
);

const BaseSwitch = createSwitch({
  Frame: SwitchFrame,
  Thumb: SwitchThumbImpl
});

const BaseSwitchImpl = BaseSwitch.styleable<{ focused?: boolean }>(
  (
    {
      name,
      size = "$true",
      disabled = false,
      checked = false,
      children,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <SwitchContext.Provider
        name={name}
        size={size}
        checked={checked}
        disabled={disabled}>
        <BaseSwitch
          ref={forwardedRef}
          {...props}
          id={name}
          size={size}
          checked={checked}
          disabled={disabled}>
          {children}
          <View
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%">
            <BaseSwitch.Thumb checked={checked} />
          </View>
        </BaseSwitch>
      </SwitchContext.Provider>
    );
  },
  {
    staticConfig: { componentName: "Switch" }
  }
);

export const Switch = withStaticProperties(BaseSwitchImpl, {
  Icon: SwitchIcon
});
