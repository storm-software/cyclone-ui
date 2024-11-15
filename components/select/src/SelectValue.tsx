import { ColorThemeName } from "@cyclone-ui/colors";
import { styled, Theme, View } from "@tamagui/core";
import { Select as TamaguiSelect } from "@tamagui/select";
import { SelectContext } from "./utilities";

const SelectValueFrame = styled(TamaguiSelect.Value, {
  name: "SelectValue",
  context: SelectContext,

  animation: "normal",
  unstyled: true,
  cursor: "pointer",
  color: "$color",
  fontFamily: "$body",
  fontSize: "$4",
  fontWeight: "$true",
  lineHeight: "$true",
  letterSpacing: "$true",
  display: "flex",
  flexGrow: 1,
  verticalAlign: "center",

  hoverStyle: {
    backgroundColor: "transparent"
  },

  focusStyle: {
    backgroundColor: "transparent"
  },

  variants: {
    placeholding: {
      true: {
        color: "$placeholderColor"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        userSelect: "none",
        color: "$colorDisabled",
        placeholderColor: "$colorDisabled",

        hoverStyle: {
          color: "$colorDisabled"
        },

        focusStyle: {
          color: "$colorDisabled"
        },

        pressStyle: {
          color: "$colorDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    disabled: false,
    placeholding: false
  }
});

export const SelectValue = SelectValueFrame.styleable<{
  placeholder?: string;
}>(
  ({ children, placeholding, ...props }, forwardedRef) => {
    const { disabled, name } = SelectContext.useStyledContext();

    return (
      <View flex={1}>
        <Theme name={ColorThemeName.BASE}>
          <SelectValueFrame
            id={name}
            ref={forwardedRef}
            {...props}
            size={0}
            disabled={disabled}
            placeholding={placeholding && !disabled}>
            {children}
          </SelectValueFrame>
        </Theme>
      </View>
    );
  },
  {
    staticConfig: { componentName: "SelectValue" }
  }
);
