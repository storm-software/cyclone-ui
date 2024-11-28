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

import { useComposedRefs } from "@tamagui/compose-refs";
import {
  isClient,
  isWeb,
  styled,
  View,
  withStaticProperties,
  type ViewProps
} from "@tamagui/core";
import {} from "@tamagui/list-item";
import {
  useSelectContext,
  useSelectItemParentContext,
  type SelectScopedProps
} from "@tamagui/select";
import { SelectValue } from "./SelectValue";
import { getSelectSize, SelectContext } from "./utilities";

const isPointerCoarse =
  isWeb && isClient ? window.matchMedia("(pointer:coarse)").matches : true;

const BaseSelectTextBox = styled(View, {
  name: "SelectTrigger",
  context: SelectContext,

  tag: "button",

  animation: "normal",
  cursor: "pointer",
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  flex: 1,
  flexGrow: 1,
  backgroundColor: "transparent",
  borderWidth: 0,
  outlineStyle: "none",

  variants: {
    size: {
      "...size": getSelectSize
    },

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    size: "$true",
    disabled: false
  }
});

const SelectTextBoxImpl = BaseSelectTextBox.styleable(
  (
    { __scopeSelect, children, ...props }: SelectScopedProps<ViewProps>,
    forwardedRef
  ) => {
    const { disabled, size } = SelectContext.useStyledContext();
    const context = useSelectContext("SelectTrigger", __scopeSelect);
    const itemParentContext = useSelectItemParentContext(
      "SelectTrigger",
      __scopeSelect
    );
    const composedRefs = useComposedRefs(
      forwardedRef,
      context.floatingContext?.refs.setReference as any
    );

    if (itemParentContext.shouldRenderWebNative) {
      return null;
    }

    return (
      <BaseSelectTextBox
        type="button"
        id={itemParentContext.id}
        // aria-controls={context.contentId}
        aria-expanded={context.open}
        aria-autocomplete="none"
        dir={context.dir}
        size={size}
        disabled={disabled}
        data-disabled={disabled ? "" : undefined}
        {...props}
        ref={composedRefs}
        {...(process.env.TAMAGUI_TARGET === "web" &&
        itemParentContext.interactions
          ? {
              ...itemParentContext.interactions.getReferenceProps(),
              ...(isPointerCoarse
                ? {
                    onPress() {
                      itemParentContext.setOpen(!context.open);
                    }
                  }
                : {
                    onMouseDown() {
                      context.floatingContext?.update();
                      itemParentContext.setOpen(!context.open);
                    }
                  })
            }
          : {
              onPress() {
                itemParentContext.setOpen(!context.open);
              }
            })}>
        {children}
      </BaseSelectTextBox>
    );
  },
  {
    staticConfig: { componentName: "SelectTrigger" }
  }
);

export const SelectTextBox = withStaticProperties(SelectTextBoxImpl, {
  Value: SelectValue
});
