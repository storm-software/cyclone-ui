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

import { ContextMenu } from "@cyclone-ui/context-menu";
import type { ViewProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { SelectValue } from "./SelectValue";
import { SelectContext } from "./utilities";

const BaseSelectTextBox = styled(View, {
  displayName: "SelectTrigger",
  context: SelectContext,
  render: "button",

  transition: "200ms",
  cursor: "pointer",
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  height: "100%",
  flex: 1,
  flexGrow: 1,
  minWidth: 0,
  padding: 0,
  backgroundColor: "transparent",
  borderWidth: 0,
  outlineStyle: "none",
  overflow: "hidden",

  variants: {
    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const SelectTextBoxImpl = createStyledHOC(
  BaseSelectTextBox,
  ({ children, ...props }: ViewProps, forwardedRef) => {
    const { disabled, name } = SelectContext.useStyledContext();

    return (
      <ContextMenu.Trigger asChild={true}>
        <BaseSelectTextBox
          // Not typed on a styled View; keeps the trigger from submitting a
          // form.
          {...({ type: "button" } as object)}
          // The field label's `htmlFor` target: a resting floating label
          // covers the text box, and only a labelable element (this button)
          // receives the label's clicks.
          id={name}
          data-select-trigger
          disabled={disabled}
          data-disabled={disabled ? "" : undefined}
          {...props}
          ref={forwardedRef}>
          {children}
        </BaseSelectTextBox>
      </ContextMenu.Trigger>
    );
  },
  {
    displayName: "SelectTrigger"
  }
);

export const SelectTextBox = withStaticProperties(SelectTextBoxImpl, {
  Value: SelectValue
});
