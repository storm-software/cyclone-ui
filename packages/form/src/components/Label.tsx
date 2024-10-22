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

import { ColorRole } from "@cyclone-ui/colors";
import { LabelText } from "@cyclone-ui/label-text";
import { styled, View } from "@tamagui/core";
import { Label as TamaguiLabel } from "@tamagui/label";
import { Asterisk } from "@tamagui/lucide-icons";
import { XStack } from "@tamagui/stacks";
import type { GetProps } from "@tamagui/web";
import { forwardRef, useMemo } from "react";
import { useFieldStore } from "../hooks/use-field-store";

const LABEL_NAME = "Label";

const StyledLabelText = styled(LabelText, {
  name: LABEL_NAME,

  animation: "100ms",
  cursor: "pointer",
  color: "$primary",
  fontFamily: "$label",
  fontSize: "$true",
  fontWeight: "$true",
  wordWrap: "break-word",
  verticalAlign: "middle",

  hoverStyle: {
    color: "$colorHover"
  },

  variants: {
    focused: {
      true: {
        color: "$colorFocus"
      }
    },

    disabled: {
      true: {
        color: "$disabled",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$disabled"
        }
      },
      false: {
        cursor: "pointer"
      }
    }
  } as const,

  defaultVariants: {
    focused: false,
    disabled: false
  }
});

const LabelXStack = styled(XStack, {
  name: LABEL_NAME,

  cursor: "pointer",
  gap: "$1.2",
  flex: 1,

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed"
      },
      false: {
        cursor: "pointer"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

export type LabelProps = GetProps<typeof LabelText> & {
  required?: boolean;
  disabled?: boolean;
  focused?: boolean;
  htmlFor: string;
};

export const Label = forwardRef<typeof TamaguiLabel, LabelProps>(
  (props, forwardedRef) => {
    const { children, required, htmlFor, ...rest } = props;

    const store = useFieldStore();
    const fieldDisabled = store.get.disabled();

    const disabled = useMemo(
      () => Boolean(fieldDisabled || props.disabled),
      [fieldDisabled, props.disabled]
    );
    const focused = useMemo(
      () => Boolean(disabled ? false : props.focused),
      [disabled, props.focused]
    );

    return (
      <TamaguiLabel ref={forwardedRef} htmlFor={htmlFor}>
        <LabelXStack disabled={disabled}>
          <StyledLabelText
            {...rest}
            focused={focused}
            disabled={disabled}
            theme={ColorRole.BASE}>
            {children}
          </StyledLabelText>
          {required && (
            <View position="relative">
              <Asterisk
                color="$error8"
                size="$0.75"
                position="absolute"
                top={-5}
              />
            </View>
          )}
        </LabelXStack>
      </TamaguiLabel>
    );
  }
);
