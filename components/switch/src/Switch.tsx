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

import { useFieldHasValidationMessage } from "@cyclone-ui/field";
import { getSized, getSpaced } from "@cyclone-ui/helpers";
import type { ThemeableIconProps } from "@cyclone-ui/themeable-icon";
import { ThemeableIcon } from "@cyclone-ui/themeable-icon";
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

export interface SwitchContextProps {
  size: SizeTokens;
  name: string;
  checked: boolean;
  required: boolean;
  disabled: boolean;
  hasValidationMessage: boolean;
}

export const SwitchContext = createStyledContext<SwitchContextProps>({
  size: "$6xl",
  name: "",
  checked: false,
  required: false,
  disabled: false,
  hasValidationMessage: false
});

const getSwitchHeight = (val: SizeTokens) =>
  Math.round(getVariableValue(getSize(val)));

const getSwitchWidth = (val: SizeTokens) => getSwitchHeight(val) * 2;

const SwitchFrame = styled(View, {
  name: "Switch",
  render: "button",
  context: SwitchContext,

  transition: "200ms",
  borderRadius: 100_000,
  backgroundColor: "$surfaceElevated",
  borderWidth: 1,
  borderColor: "$hairline",
  boxShadow: "none",
  tabIndex: 0,

  hoverStyle: {
    borderColor: "$accentHover"
  },

  focusStyle: {
    borderColor: "$accentActive",
    boxShadow: "$ringOffset"
  },

  focusVisibleStyle: {
    borderColor: "$accentActive",
    boxShadow: "$ringOffset"
  },

  variants: {
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

    hasValidationMessage: {
      true: {
        borderColor: "$accent",
        hoverStyle: {
          borderColor: "$accentHover"
        }
      }
    },

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed",
        borderColor: "$accentDisabled",

        hoverStyle: {
          borderColor: "$accentDisabled"
        },

        focusStyle: {
          borderColor: "$accentDisabled"
        },

        pressStyle: {
          borderColor: "$accentDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    size: "$6xl",
    disabled: false
  }
});

const SwitchThumb = styled(View, {
  name: "SwitchThumb",

  theme: "base",
  transition: "200ms",
  backgroundColor: "$muted",
  borderRadius: 100_000,
  borderWidth: 0,
  justifyContent: "center",
  alignItems: "center",

  variants: {
    checked: {
      true: {
        backgroundColor: "$muted"
      }
    },

    size: {
      "...size": val => {
        const height = getSwitchHeight(val);

        return {
          height: height - 2,
          width: height - 2
        };
      }
    }
  } as const,

  defaultVariants: {
    size: "$6xl",
    checked: false
  }
});

const SwitchThumbImpl = SwitchThumb.styleable(
  (props, forwardedRef) => {
    return <SwitchThumb ref={forwardedRef} {...props} />;
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
    const { disabled, size: contextSize } = SwitchContext.useStyledContext();
    const adjusted = useMemo(
      () => getSized(size ?? contextSize, { shift: -6 }),
      [size, contextSize]
    );

    return (
      <SwitchIconFrame
        theme="base"
        ref={forwardedRef}
        zIndex="$20"
        alignItems="center"
        // flexGrow 1 leads to inconsistent native style where text pushes to start of view
        flexGrow={0}
        flexShrink={1}
        $group-field-hover={{
          borderColor: "$hairlineHover"
        }}>
        <ThemeableIcon
          {...props}
          theme="base"
          disabled={false}
          size={adjusted}
          color={
            (color ||
              (disabled
                ? "$onAccentDisabled"
                : "$onAccent")) as ThemeableIconProps["color"]
          }
          $group-switch-hover={{
            color: disabled ? "$onAccentDisabled" : "$onAccentHover"
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
      size = "$6xl",
      disabled = false,
      checked = false,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const hasValidationMessage = useFieldHasValidationMessage();

    return (
      <SwitchContext.Provider
        name={name}
        size={size}
        checked={checked}
        hasValidationMessage={hasValidationMessage}
        disabled={disabled}>
        <BaseSwitch
          ref={forwardedRef}
          activeStyle={{
            backgroundColor: "$accent"
          }}
          {...props}
          id={name}
          size={size}
          checked={checked}
          hasValidationMessage={hasValidationMessage}
          disabled={disabled}
          $group-field-hover={{
            borderColor: disabled ? "$accentDisabled" : "$accentHover"
          }}>
          {children}
          <BaseSwitch.Thumb />
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
