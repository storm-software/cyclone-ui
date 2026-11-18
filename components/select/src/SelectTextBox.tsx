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

"use client";

import { ContextMenu } from "@cyclone-ui/context-menu";
import { getFormControlAriaProps, useFormControl } from "@cyclone-ui/helpers";
import type { ViewProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { use } from "react";
import { SelectValue } from "./SelectValue";
import { SelectBehaviorContext, SelectContext } from "./utilities";

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
  ({ children, onKeyDown, ...props }: ViewProps, forwardedRef) => {
    const { disabled, name, open } = SelectContext.useStyledContext();
    const { searchable, invalid, inputRef, onTextBoxKey } = use(
      SelectBehaviorContext
    );
    const formControl = useFormControl();

    return (
      <ContextMenu.Trigger
        asChild={true}
        // Runs before the trigger's toggle, which a handled press skips: a
        // click in the open select's text input places the caret rather
        // than closing the menu.
        onPress={(event: any) => {
          if (searchable && open && event?.target === inputRef?.current) {
            event.preventDefault();
          }
        }}>
        <BaseSelectTextBox
          // A searchable select's text box holds a text input, which takes
          // the focus, `id` and ARIA state (see `SelectValue`), and which a
          // button can't contain.
          {...(searchable
            ? {
                render: "div",
                // A press beside the input focuses it, as in other fields.
                onMouseDown: (event: any) => {
                  const input = inputRef?.current;
                  if (input && event.target !== input) {
                    event.preventDefault();
                    input.focus();
                  }
                }
              }
            : {
                type: "button",
                "aria-required": formControl?.required ? true : undefined,
                ...getFormControlAriaProps(formControl),
                ...(invalid && { "aria-invalid": true }),
                id: formControl?.id ?? name
              })}
          data-select-trigger
          disabled={disabled}
          data-disabled={disabled ? "" : undefined}
          {...props}
          onKeyDown={(event: any) => {
            onKeyDown?.(event);
            // Typed characters pick (and in a searchable select, filter) the
            // options; see `Select`.
            if (
              !event.defaultPrevented &&
              !event.isComposing &&
              !event.ctrlKey &&
              !event.metaKey &&
              !event.altKey &&
              onTextBoxKey?.(event.key)
            ) {
              event.preventDefault();
            }
          }}
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

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`SelectTextBox.Value` is undefined on the server).
 */
export { SelectValue as SelectTextBoxValue };
