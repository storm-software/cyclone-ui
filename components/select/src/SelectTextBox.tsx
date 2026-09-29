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

import { useComposedRefs } from "@tamagui/compose-refs";
import type { ViewProps } from "@tamagui/core";
import {
  createChangeEventDetails,
  createStyledHOC,
  isClient,
  isWeb,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import type { SelectScopedProps } from "@tamagui/select";
import { useSelectContext, useSelectItemParentContext } from "@tamagui/select";
import { SelectValue } from "./SelectValue";
import { SelectContext } from "./utilities";

const isPointerCoarse =
  isWeb && isClient ? window.matchMedia("(pointer:coarse)").matches : true;

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
  (
    { scope, children, ...props }: SelectScopedProps<ViewProps>,
    forwardedRef
  ) => {
    const { disabled } = SelectContext.useStyledContext();
    const context = useSelectContext(scope);
    const itemParentContext = useSelectItemParentContext(scope);
    const composedRefs = useComposedRefs(
      forwardedRef,
      context.floatingContext?.refs.setReference as any
    );

    if (itemParentContext.shouldRenderWebNative) {
      return null;
    }

    // v3 replaced the item parent's `setOpen` with `requestOpenChange`, which
    // takes change details, and moved `interactions` onto the select context.
    const toggleOpen = (event?: any) =>
      itemParentContext.requestOpenChange(
        !context.open,
        createChangeEventDetails(
          "trigger-press",
          event?.nativeEvent || event,
          event?.currentTarget
        )
      );

    return (
      <BaseSelectTextBox
        type="button"
        id={itemParentContext.id}
        // aria-controls={context.contentId}
        data-select-trigger
        aria-expanded={context.open}
        aria-autocomplete="none"
        dir={context.dir}
        disabled={disabled}
        data-disabled={disabled ? "" : undefined}
        {...props}
        ref={composedRefs}
        {...(process.env.TAMAGUI_TARGET === "web" && context.interactions
          ? {
              ...context.interactions.getReferenceProps(),
              ...(isPointerCoarse
                ? {
                    onPress(event?: any) {
                      toggleOpen(event);
                    }
                  }
                : {
                    onMouseDown(event?: any) {
                      context.floatingContext?.update?.();
                      toggleOpen(event);
                    }
                  })
            }
          : {
              onPress(event?: any) {
                toggleOpen(event);
              }
            })}>
        {children}
      </BaseSelectTextBox>
    );
  },
  {
    displayName: "SelectTrigger"
  }
);

export const SelectTextBox = withStaticProperties(SelectTextBoxImpl, {
  Value: SelectValue
});
