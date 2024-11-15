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

const InnerSelectTextBox = styled(View, {
  name: "Select",
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

const SelectTextBoxImpl = InnerSelectTextBox.styleable(
  (
    { __scopeSelect, children, ...props }: SelectScopedProps<ViewProps>,
    forwardedRef
  ) => {
    const { disabled, size } = SelectContext.useStyledContext();
    const context = useSelectContext("Select", __scopeSelect);
    const itemParentContext = useSelectItemParentContext(
      "Select",
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
      <InnerSelectTextBox
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
      </InnerSelectTextBox>
    );
  }
);

export const SelectTextBox = withStaticProperties(SelectTextBoxImpl, {
  Value: SelectValue
});
