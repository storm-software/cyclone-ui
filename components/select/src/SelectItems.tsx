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
import { formSizeVariants, getSized } from "@cyclone-ui/helpers";
import type { SelectOption } from "@stryke/types/form";
import type { AdaptProps } from "@tamagui/adapt";
import { Adapt } from "@tamagui/adapt";
import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  Theme,
  View,
  withStaticProperties
} from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Check, ChevronDown, ChevronUp, Lock } from "@tamagui/lucide-icons-2";
import { Select as TamaguiSelect } from "@tamagui/select";
import { Sheet } from "@tamagui/sheet";
import { XStack, YStack } from "@tamagui/stacks";
import { useCallback, useState } from "react";
import {
  getSelectContentSize,
  SelectContext,
  shouldCenterSelectItemText
} from "./utilities";

const SELECT_VIEWPORT_PADDING = 10;
const SELECT_VIEWPORT_POSITION_CLASS = "is_SelectViewportPositioned";
const SELECT_CENTERED_VIEWPORT_CLASS = "is_SelectViewportContentCentered";
const SELECT_NARROW_VIEWPORT_WIDTH = getSized("20xl");

const useSelectViewportPosition = () => {
  const [viewport, setViewport] = useState<HTMLElement | null>(null);

  const viewportRef = useCallback((node: unknown) => {
    setViewport(
      typeof HTMLElement !== "undefined" && node instanceof HTMLElement
        ? node
        : null
    );
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!viewport) {
      return;
    }

    const document = viewport.ownerDocument;
    const viewportWindow = document.defaultView;
    const trigger = document.activeElement?.closest?.(
      // v3 no longer emits `is_<ComponentName>` classes, so the trigger is
      // marked with a data attribute instead (see SelectTextBox).
      "[data-select-trigger][aria-expanded='true']"
    );

    if (!viewportWindow || !(trigger instanceof viewportWindow.HTMLElement)) {
      return;
    }

    const style = document.createElement("style");
    style.textContent = `
      .${SELECT_VIEWPORT_POSITION_CLASS} {
        top: var(--select-viewport-top) !important;
        left: var(--select-viewport-left) !important;
        width: var(--select-viewport-width) !important;
        max-width: calc(100vw - ${SELECT_VIEWPORT_PADDING * 2}px) !important;
        max-height: var(--select-viewport-height) !important;
      }

      .${SELECT_VIEWPORT_POSITION_CLASS} [data-select-item]:last-child [data-select-item-divider] {
        display: none;
      }

      .${SELECT_VIEWPORT_POSITION_CLASS} [data-select-item]:focus-visible {
        border: 0 !important;
        outline: none !important;
        outline-color: transparent !important;
        outline-width: 0 !important;
      }

      .${SELECT_CENTERED_VIEWPORT_CLASS} [data-select-item-group] {
        justify-content: center !important;
      }

      .${SELECT_CENTERED_VIEWPORT_CLASS} [data-select-item-text] {
        flex: 0 1 auto !important;
        text-align: center;
      }
    `;
    document.head.appendChild(style);

    let frame: number | undefined;

    const updatePosition = () => {
      if (frame !== undefined) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        const triggerRect = trigger.getBoundingClientRect();
        const viewportRect = viewport.getBoundingClientRect();
        const offsetParentRect = viewport.offsetParent?.getBoundingClientRect();
        const borderHeight = viewportRect.height - viewport.clientHeight;
        const fullHeight = viewport.scrollHeight + borderHeight;
        const spaceAbove = triggerRect.top - SELECT_VIEWPORT_PADDING;
        const spaceBelow =
          viewportWindow.innerHeight -
          triggerRect.bottom -
          SELECT_VIEWPORT_PADDING;
        const opensUpward = spaceAbove > spaceBelow;
        const availableHeight = opensUpward ? spaceAbove : spaceBelow;
        const height = Math.min(fullHeight, availableHeight);
        const offsetParentTop = offsetParentRect?.top ?? 0;
        const top = opensUpward
          ? triggerRect.top - offsetParentTop - height
          : triggerRect.bottom - offsetParentTop;
        // Tamagui applies the trigger width after the viewport first mounts,
        // so its initial bounding rect can be narrower than the final menu.
        const availableWidth =
          viewportWindow.innerWidth - SELECT_VIEWPORT_PADDING * 2;
        const width = Math.min(
          Math.max(viewport.scrollWidth, triggerRect.width + 8),
          availableWidth
        );
        const centeredLeft = triggerRect.left + (triggerRect.width - width) / 2;
        const viewportLeft = Math.min(
          Math.max(centeredLeft, SELECT_VIEWPORT_PADDING),
          viewportWindow.innerWidth - SELECT_VIEWPORT_PADDING - width
        );

        // Keep the menu below its text box whenever space permits. Tamagui's
        // default item alignment otherwise lets the selected row overlap it.
        viewport.style.setProperty("--select-viewport-top", `${top}px`);
        viewport.style.setProperty("--select-viewport-height", `${height}px`);
        viewport.style.setProperty("--select-viewport-width", `${width}px`);
        viewport.style.setProperty(
          "--select-viewport-left",
          `${viewportLeft - (offsetParentRect?.left ?? 0)}px`
        );
        viewport.classList.toggle(
          SELECT_CENTERED_VIEWPORT_CLASS,
          shouldCenterSelectItemText(
            width,
            SELECT_NARROW_VIEWPORT_WIDTH,
            viewport.querySelector("[data-select-item-adorned]") !== null
          )
        );
        viewport.classList.add(SELECT_VIEWPORT_POSITION_CLASS);
      });
    };

    const resizeObserver = new viewportWindow.ResizeObserver(updatePosition);
    const mutationObserver = new viewportWindow.MutationObserver(
      updatePosition
    );
    const handleScroll = (event: Event) => {
      // The menu's own scroll position does not affect its placement. Avoid
      // feeding each wheel/touch scroll back into layout while still tracking
      // page and scroll-container movement around the trigger.
      if (event.target !== viewport) {
        updatePosition();
      }
    };

    resizeObserver.observe(viewport);
    resizeObserver.observe(trigger);
    mutationObserver.observe(viewport, {
      subtree: true,
      attributes: true,
      attributeFilter: ["data-select-item-adorned"]
    });
    viewportWindow.addEventListener("resize", updatePosition);
    viewportWindow.addEventListener("scroll", handleScroll, true);
    updatePosition();

    return () => {
      if (frame !== undefined) {
        cancelAnimationFrame(frame);
      }

      viewport.classList.remove(SELECT_VIEWPORT_POSITION_CLASS);
      viewport.classList.remove(SELECT_CENTERED_VIEWPORT_CLASS);
      viewport.style.removeProperty("--select-viewport-top");
      viewport.style.removeProperty("--select-viewport-height");
      viewport.style.removeProperty("--select-viewport-width");
      viewport.style.removeProperty("--select-viewport-left");
      style.remove();
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      viewportWindow.removeEventListener("resize", updatePosition);
      viewportWindow.removeEventListener("scroll", handleScroll, true);
    };
  }, [viewport]);

  return viewportRef;
};

const SelectItemFrame = styled(TamaguiSelect.Item, {
  displayName: "SelectItems",
  context: SelectContext,
  transition: "200ms",
  cursor: "pointer",
  backgroundColor: "transparent",
  color: "accentInactive hover:accent focus:accent focus-visible:accent",
  position: "relative",
  justifyContent: "center",
  width: "max-content",
  minWidth: "100%",
  borderWidth: "0px focus-visible:0px",
  borderRadius: "button",
  outlineStyle: "focus-visible:none",
  outline: "focus-visible:none",
  outlineWidth: "focus-visible:0px",
  outlineColor: "focus-visible:transparent",
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const { itemFramePaddingHorizontal, itemPaddingVertical } =
          getSelectContentSize(val);

        return {
          paddingHorizontal: itemFramePaddingHorizontal,
          paddingVertical: itemPaddingVertical
        };
      })
    ),

    selected: {
      true: {
        color: "accentActive"
      },
      false: {
        color: "accentInactive"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        color:
          "accentDisabled hover:accentDisabled focus:accentDisabled focus-visible:accentDisabled",
        borderWidth: "focus-visible:0px",
        outlineStyle: "focus-visible:none",
        outlineWidth: "focus-visible:0px"
      }
    }
  } as const,
  defaultVariants: {
    size: "md",
    disabled: false,
    selected: false
  }
});

const SelectItemBackground = styled(View, {
  displayName: "SelectItems",
  context: SelectContext,
  transition: "200ms",
  position: "absolute",
  left: 0,
  right: 0,
  borderRadius: "button",
  backgroundColor:
    "transparent group-hover/item:surfaceOverlayHover group-focus/item:surfaceOverlayHover",
  pointerEvents: "none",
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const inset = getSelectContentSize(val).itemPaddingVertical;

        return { top: inset, bottom: inset };
      })
    ),

    disabled: {
      true: {
        backgroundColor:
          "group-hover/item:transparent group-focus/item:transparent"
      }
    }
  } as const,
  defaultVariants: {
    size: "md",
    disabled: false
  }
});

const SelectItemDivider = styled(View, {
  displayName: "SelectItems",
  context: SelectContext,
  position: "absolute",
  bottom: 0,
  left: "2xl",
  right: "2xl",
  pointerEvents: "none",
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const inset = getSelectContentSize(val).dividerInset;

        return { left: inset, right: inset };
      })
    )
  } as const,
  defaultVariants: {
    size: "md"
  }
});

const SelectItemDividerLine = styled(View, {
  displayName: "SelectItems",
  context: SelectContext,
  borderBottomWidth: 1,
  borderBottomColor: "hairline",
  pointerEvents: "none"
});

const SelectItemGroup = styled(XStack, {
  displayName: "SelectItems",
  context: SelectContext,
  transition: "200ms",
  position: "relative",
  cursor: "inherit",
  alignItems: "center",
  borderRadius: "button",
  minWidth: "100%",
  width: "max-content",
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const { lineHeight, itemPaddingHorizontal } = getSelectContentSize(val);

        return {
          minHeight: lineHeight,
          paddingHorizontal: itemPaddingHorizontal
        };
      })
    )
  } as const,
  defaultVariants: {
    size: "md"
  }
});

const SelectItemTextFrame = styled(TamaguiSelect.ItemText, {
  displayName: "SelectItems",
  context: SelectContext,

  flex: 1,
  color: "currentColor",
  whiteSpace: "nowrap",

  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const {
          fontSize,
          lineHeight,
          itemTextPaddingVertical,
          itemTextPaddingHorizontal
        } = getSelectContentSize(val);

        return {
          fontSize,
          lineHeight: `${lineHeight}px`,
          paddingVertical: itemTextPaddingVertical,
          paddingHorizontal: itemTextPaddingHorizontal
        };
      })
    )
  } as const,

  defaultVariants: {
    size: "md"
  }
});

const SelectItemValue = styled(BodyText, {
  displayName: "SelectItems",
  render: "span",
  context: SelectContext,

  transition: "200ms",
  cursor: "inherit",
  color: "currentColor",
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const { fontSize, lineHeight } = getSelectContentSize(val);

        return { fontSize, lineHeight: `${lineHeight}px` };
      })
    ),

    selected: {
      true: {
        fontWeight: "bold"
      },
      false: {
        fontWeight: 300
      }
    }
  } as const,

  defaultVariants: {
    size: "md",
    selected: false
  }
});

// Like v2 `.styleable<Custom>()`, the option fields replace the frame's
// same-named props (`value` is stringified below).
type SelectItemOption = Omit<SelectOption, "name">;
type SelectItemProps = Omit<
  GetProps<typeof SelectItemFrame>,
  keyof SelectItemOption
> &
  SelectItemOption;

export const SelectItem = createStyledHOC(
  SelectItemFrame,
  (
    { children, value, selected, disabled, ...props }: SelectItemProps,
    forwardedRef
  ) => {
    // The Select root forwards its `value` through the context provider.
    const { value: selectedValue, size } =
      SelectContext.useStyledContext() as ReturnType<
        typeof SelectContext.useStyledContext
      > & { value?: unknown };
    const isSelected = selectedValue === String(value);
    const { indicatorWidth, indicatorIconSize } = getSelectContentSize(size);

    return (
      <SelectItemFrame
        {...props}
        data-select-item
        data-select-item-adorned={disabled || isSelected ? true : undefined}
        group="item"
        ref={forwardedRef}
        value={String(value)}
        textValue={String(value)}
        aria-selected={isSelected}
        size={size}
        selected={isSelected}
        disabled={disabled}>
        <SelectItemBackground size={size} disabled={disabled} />
        <SelectItemGroup
          size={size}
          data-select-item-group
          justifyContent="space-between">
          <SelectItemTextFrame size={size} data-select-item-text>
            <SelectItemValue size={size} selected={!!isSelected}>
              {children}
            </SelectItemValue>
          </SelectItemTextFrame>
          {(disabled || isSelected) && (
            <View width={indicatorWidth} justifyContent="center">
              {disabled && (
                <Lock
                  size={indicatorIconSize}
                  color="accentDisabled"
                  strokeWidth={2}
                />
              )}
              {isSelected && (
                <View aria-hidden={true}>
                  <Check
                    size={indicatorIconSize}
                    color="accentActive"
                    strokeWidth={3}
                  />
                </View>
              )}
            </View>
          )}
        </SelectItemGroup>
        <SelectItemDivider size={size} data-select-item-divider>
          <SelectItemDividerLine />
        </SelectItemDivider>
      </SelectItemFrame>
    );
  },
  {
    displayName: "SelectItems"
  }
);

const SelectItemsGroup = createStyledHOC(
  View,
  ({ children, ...props }, forwardedRef) => {
    const viewportRef = useSelectViewportPosition();
    const { size } = SelectContext.useStyledContext();
    const {
      scrollButtonHeight,
      scrollIconSize,
      viewportPadding,
      gradientMargin
    } = getSelectContentSize(size);

    return (
      <View ref={forwardedRef} flex={1} {...props}>
        <Theme name="base">
          {/* The app's media keys are not visible to this package's types (the
              config augments "tamagui", not "@tamagui/web"), so `AdaptWhen`
              narrows to booleans here. */}
          <Adapt
            when={"max-sm" as unknown as AdaptProps["when"]}
            platform="touch">
            <Sheet
              modal={true}
              dismissOnSnapToBottom={true}
              transitionConfig={{
                type: "spring",
                damping: 20,
                mass: 1.2,
                stiffness: 250
              }}>
              <Sheet.Container>
                <Sheet.Background />
                <Sheet.ScrollView>
                  <Adapt.Contents />
                </Sheet.ScrollView>
              </Sheet.Container>
              <Sheet.Overlay transition="lazy" opacity="enter:0 exit:0" />
            </Sheet>
          </Adapt>

          {/* v2's `zIndex` here fell through to FocusScope and was ignored; v3
              types reject it. Portal z-index is set on the Select root. */}
          <TamaguiSelect.Content>
            <TamaguiSelect.ScrollUpButton
              transition={{ duration: "200ms", properties: "scale, opacity" }}
              opacity="enter:0.2"
              scale="enter:0.5"
              alignItems="center"
              justifyContent="center"
              position="relative"
              height={scrollButtonHeight}>
              <YStack zIndex="10">
                <ChevronUp size={scrollIconSize} color="accent" />
              </YStack>
              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                borderRadius="popover"
                marginTop={gradientMargin}
                position="absolute"
                inset={0}
                colors={["surfaceFloating", "transparent"]}
              />
            </TamaguiSelect.ScrollUpButton>

            <TamaguiSelect.Viewport
              ref={viewportRef}
              transition={{
                duration: "200ms",
                properties: "transform, scale, opacity"
              }}
              opacity="enter:0.5 exit:0.7"
              scale="enter:0.9 exit:0.95"
              y="enter:-10px exit:10px"
              backgroundColor="surfaceFloating"
              width="max-content"
              minWidth="12xl"
              maxWidth={`calc(100vw - ${SELECT_VIEWPORT_PADDING * 2}px)`}
              borderRadius="popover"
              borderColor="hairline"
              borderWidth={1}
              boxShadow="0px 4px 30px overlayBackdrop">
              <TamaguiSelect.Group
                width="max-content"
                minWidth="100%"
                padding={viewportPadding}>
                {children}
              </TamaguiSelect.Group>
            </TamaguiSelect.Viewport>

            <TamaguiSelect.ScrollDownButton
              transition={{ duration: "200ms", properties: "scale, opacity" }}
              opacity="enter:0.2"
              scale="enter:0.5"
              alignItems="center"
              justifyContent="center"
              position="relative"
              width="100%"
              height={scrollButtonHeight}>
              <YStack zIndex="10">
                <ChevronDown size={scrollIconSize} color="accent" />
              </YStack>
              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                borderRadius="popover"
                marginBottom={gradientMargin}
                position="absolute"
                inset={0}
                colors={["transparent", "surfaceFloating"]}
              />
            </TamaguiSelect.ScrollDownButton>
          </TamaguiSelect.Content>
        </Theme>
      </View>
    );
  },
  { displayName: "SelectItems" }
);

export const SelectItems = withStaticProperties(SelectItemsGroup, {
  Item: SelectItem
});
