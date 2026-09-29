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

import { BodyText } from "@cyclone-ui/body-text";
import type { FormControlSize } from "@cyclone-ui/helpers";
import { formSizeVariants } from "@cyclone-ui/helpers";
import type { InputVariant } from "@cyclone-ui/input";
import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled, View } from "@tamagui/core";
import { Select as TamaguiSelect } from "@tamagui/select";
import { getSelectContentSize, SelectContext } from "./utilities";

const SelectValueFrame = styled(TamaguiSelect.Value, {
  // `name` is a plain prop in v3, so the primitive uses `displayName`
  displayName: "SelectValue",
  context: SelectContext,
  transition: "200ms",
  cursor: "pointer",
  color: "accent hover:accentHover",
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
  backgroundColor: "hover:transparent focus:transparent",
  variants: {
    // `styled.dynamic` re-brands the helper's carrier with this package's
    // `@tamagui/web` symbol type (runtime no-op; helpers resolves another copy).
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const { fontSize, lineHeight, valuePaddingLeft, valuePaddingRight } =
          getSelectContentSize(val);

        return {
          fontSize,
          lineHeight: `${lineHeight}px`,
          paddingLeft: valuePaddingLeft,
          paddingRight: valuePaddingRight
        };
      })
    ),

    // Styled by the `.resolve` below because `floating` depends on `size`.
    variant: styled.dynamic<InputVariant>(),

    placeholding: {
      true: {
        color: "accentDisabled"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        userSelect: "none",
        // v2 also set `placeholderColor`, which is not a text style in v3
        // and had no effect on this text node.
        color:
          "accentDisabled hover:accentDisabled press:accentDisabled focus:accentDisabled"
      }
    }
  } as const,
  defaultVariants: {
    size: "md",
    variant: "default",
    disabled: false,
    placeholding: false
  }
}).resolve(props =>
  props.variant === "floating"
    ? {
        paddingTop: getSelectContentSize(
          props.size as FormControlSize | undefined
        ).valuePaddingLeft
      }
    : undefined
);

export const SelectValue = createStyledHOC(
  SelectValueFrame,
  (
    {
      children,
      placeholder,
      ...props
    }: GetProps<typeof SelectValueFrame> & {
      placeholder?: string;
    },
    forwardedRef
  ) => {
    const { disabled, name, size, variant } = SelectContext.useStyledContext();

    return (
      <View flex={1} minWidth={0}>
        <SelectValueFrame
          id={name}
          ref={forwardedRef}
          {...props}
          size={size}
          variant={variant}
          disabled={disabled}
          placeholding={!!placeholder && !disabled}>
          <BodyText
            render="span"
            fontSize={getSelectContentSize(size).fontSize}
            lineHeight={`${getSelectContentSize(size).lineHeight}px`}>
            {children}
          </BodyText>
        </SelectValueFrame>
      </View>
    );
  },
  {
    displayName: "SelectValue"
  }
);
