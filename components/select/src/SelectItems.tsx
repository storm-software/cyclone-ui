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
import { getSized } from "@cyclone-ui/helpers";
import type { SelectOption } from "@stryke/types/form";
import { Adapt } from "@tamagui/adapt";
import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import type { SizeTokens } from "@tamagui/core";
import { styled, Theme, View, withStaticProperties } from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Check, ChevronDown, ChevronUp, Lock } from "@tamagui/lucide-icons-2";
import { Select as TamaguiSelect } from "@tamagui/select";
import { Sheet } from "@tamagui/sheet";
import { XStack, YStack } from "@tamagui/stacks";
import { useCallback, useState } from "react";
import { getSelectContentSize, SelectContext } from "./utilities";

const SELECT_VIEWPORT_PADDING = 10;
const SELECT_VIEWPORT_POSITION_CLASS = "is_SelectViewportPositioned";
const SELECT_NARROW_VIEWPORT_CLASS = "is_SelectViewportNarrow";
const SELECT_NARROW_VIEWPORT_WIDTH = getSized("$20xl");

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
      ".is_SelectTrigger[aria-expanded='true']"
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

      .${SELECT_NARROW_VIEWPORT_CLASS} [data-select-item-unadorned] [data-select-item-group] {
        justify-content: center !important;
      }

      .${SELECT_NARROW_VIEWPORT_CLASS} [data-select-item-unadorned] [data-select-item-text] {
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
          SELECT_NARROW_VIEWPORT_CLASS,
          width < SELECT_NARROW_VIEWPORT_WIDTH
        );
        viewport.classList.add(SELECT_VIEWPORT_POSITION_CLASS);
      });
    };

    const resizeObserver = new viewportWindow.ResizeObserver(updatePosition);
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
    viewportWindow.addEventListener("resize", updatePosition);
    viewportWindow.addEventListener("scroll", handleScroll, true);
    updatePosition();

    return () => {
      if (frame !== undefined) {
        cancelAnimationFrame(frame);
      }

      viewport.classList.remove(SELECT_VIEWPORT_POSITION_CLASS);
      viewport.classList.remove(SELECT_NARROW_VIEWPORT_CLASS);
      viewport.style.removeProperty("--select-viewport-top");
      viewport.style.removeProperty("--select-viewport-height");
      viewport.style.removeProperty("--select-viewport-width");
      viewport.style.removeProperty("--select-viewport-left");
      style.remove();
      resizeObserver.disconnect();
      viewportWindow.removeEventListener("resize", updatePosition);
      viewportWindow.removeEventListener("scroll", handleScroll, true);
    };
  }, [viewport]);

  return viewportRef;
};

const SelectItemFrame = styled(TamaguiSelect.Item, {
  name: "SelectItems",
  context: SelectContext,

  unstyled: true,
  transition: "200ms",
  cursor: "pointer",
  backgroundColor: "transparent",
  color: "$foregroundInactive",
  position: "relative",
  width: "max-content",
  minWidth: "100%",
  borderWidth: 0,
  borderRadius: "$button",

  focusStyle: {
    color: "$foreground"
  },

  hoverStyle: {
    color: "$foreground"
  },

  focusVisibleStyle: {
    color: "$foreground",
    borderWidth: 0,
    outlineStyle: "none",
    outline: "none",
    outlineWidth: 0,
    outlineColor: "transparent"
  },

  variants: {
    size: {
      "...size": (val: SizeTokens | number) => {
        const { itemFramePaddingHorizontal, itemPaddingVertical } =
          getSelectContentSize(val);

        return {
          paddingHorizontal: itemFramePaddingHorizontal,
          paddingVertical: itemPaddingVertical
        };
      }
    },

    selected: {
      true: {
        color: "$foregroundActive"
      },
      false: {
        color: "$foregroundInactive"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        color: "$foregroundDisabled",

        hoverStyle: {
          color: "$foregroundDisabled"
        },

        focusStyle: {
          color: "$foregroundDisabled"
        },

        focusVisibleStyle: {
          color: "$foregroundDisabled",
          borderWidth: 0,
          outlineStyle: "none",
          outlineWidth: 0
        }
      }
    }
  } as const,

  defaultVariants: {
    size: "$true",
    disabled: false,
    selected: false
  }
});

const SelectItemBackground = styled(View, {
  name: "SelectItems",
  context: SelectContext,

  transition: "200ms",
  position: "absolute",
  left: 0,
  right: 0,
  borderRadius: "$button",
  backgroundColor: "transparent",
  pointerEvents: "none",

  "$group-item-hover": {
    backgroundColor: "$backgroundHighestHover"
  },

  "$group-item-focus": {
    backgroundColor: "$backgroundHighestHover"
  },

  variants: {
    size: {
      "...size": (val: SizeTokens | number) => {
        const inset = getSelectContentSize(val).itemPaddingVertical;

        return { top: inset, bottom: inset };
      }
    },

    disabled: {
      true: {
        "$group-item-hover": {
          backgroundColor: "transparent"
        },

        "$group-item-focus": {
          backgroundColor: "transparent"
        }
      }
    }
  } as const,

  defaultVariants: {
    size: "$true",
    disabled: false
  }
});

const SelectItemDivider = styled(View, {
  name: "SelectItems",
  context: SelectContext,

  position: "absolute",
  bottom: 0,
  left: "$2xl",
  right: "$2xl",
  pointerEvents: "none",

  variants: {
    size: {
      "...size": (val: SizeTokens | number) => {
        const inset = getSelectContentSize(val).dividerInset;

        return { left: inset, right: inset };
      }
    }
  } as const,

  defaultVariants: {
    size: "$true"
  }
});

const SelectItemDividerLine = styled(View, {
  name: "SelectItems",
  context: SelectContext,

  borderBottomWidth: 1,
  borderBottomColor: "$borderSubtle",
  pointerEvents: "none"
});

const SelectItemGroup = styled(XStack, {
  name: "SelectItems",
  context: SelectContext,

  transition: "200ms",
  position: "relative",
  cursor: "inherit",
  alignItems: "center",
  borderRadius: "$button",
  minWidth: "100%",
  width: "max-content",

  variants: {
    size: {
      "...size": (val: SizeTokens | number) => {
        const { lineHeight, itemPaddingHorizontal } = getSelectContentSize(val);

        return {
          minHeight: lineHeight,
          paddingHorizontal: itemPaddingHorizontal
        };
      }
    }
  } as const,

  defaultVariants: {
    size: "$true"
  }
});

const SelectItemTextFrame = styled(TamaguiSelect.ItemText, {
  name: "SelectItems",
  context: SelectContext,

  flex: 1,
  color: "currentColor",
  whiteSpace: "nowrap",

  variants: {
    size: {
      "...size": (val: SizeTokens | number) => {
        const { itemTextPaddingVertical, itemTextPaddingHorizontal } =
          getSelectContentSize(val);

        return {
          paddingVertical: itemTextPaddingVertical,
          paddingHorizontal: itemTextPaddingHorizontal
        };
      }
    }
  } as const,

  defaultVariants: {
    size: "$true"
  }
});

const SelectItemValue = styled(BodyText, {
  name: "SelectItems",
  render: "span",
  context: SelectContext,

  transition: "200ms",
  cursor: "inherit",
  color: "currentColor",
  variants: {
    size: {
      "...size": (val: SizeTokens | number) => {
        const { fontSize, lineHeight } = getSelectContentSize(val);

        return { fontSize, lineHeight };
      }
    },

    selected: {
      true: {
        fontWeight: "$bold"
      },
      false: {
        fontWeight: "$light"
      }
    }
  } as const,

  defaultVariants: {
    size: "$true",
    selected: false
  }
});

export const SelectItem = SelectItemFrame.styleable<Omit<SelectOption, "name">>(
  ({ children, value, selected, disabled, ...props }, forwardedRef) => {
    const { value: selectedValue, size } = SelectContext.useStyledContext();
    const isSelected = selectedValue === String(value);
    const { indicatorWidth, indicatorIconSize } = getSelectContentSize(size);

    return (
      <SelectItemFrame
        {...props}
        data-select-item
        data-select-item-unadorned={!disabled && !isSelected ? true : undefined}
        group={"item" as any}
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
                  color="$foregroundDisabled"
                  strokeWidth={2}
                />
              )}
              {isSelected && (
                <View aria-hidden={true}>
                  <Check
                    size={indicatorIconSize}
                    color="$foregroundActive"
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
    staticConfig: { componentName: "SelectItems" }
  }
);

const SelectItemsGroup = View.styleable(
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
          <Adapt when="max-sm" platform="touch">
            <Sheet
              modal={true}
              dismissOnSnapToBottom={true}
              transitionConfig={{
                type: "spring",
                damping: 20,
                mass: 1.2,
                stiffness: 250
              }}>
              <Sheet.Frame>
                <Sheet.ScrollView>
                  <Adapt.Contents />
                </Sheet.ScrollView>
              </Sheet.Frame>
              <Sheet.Overlay
                transition="lazy"
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
              />
            </Sheet>
          </Adapt>

          <TamaguiSelect.Content zIndex="$90">
            <TamaguiSelect.ScrollUpButton
              transition="200ms"
              animateOnly={["scale", "opacity"]}
              enterStyle={{ opacity: 0.2, scale: 0.5 }}
              alignItems="center"
              justifyContent="center"
              position="relative"
              height={scrollButtonHeight}>
              <YStack zIndex="$10">
                <ChevronUp size={scrollIconSize} color="$foreground" />
              </YStack>
              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                fullscreen={true}
                colors={["$backgroundFloating", "transparent"]}
                borderRadius="$popover"
                marginTop={gradientMargin}
              />
            </TamaguiSelect.ScrollUpButton>

            <TamaguiSelect.Viewport
              ref={viewportRef}
              transition="200ms"
              animateOnly={["transform", "scale", "opacity"]}
              enterStyle={{ opacity: 0.5, scale: 0.9, y: -10 }}
              exitStyle={{ opacity: 0.7, scale: 0.95, y: 10 }}
              backgroundColor="$backgroundFloating"
              width="max-content"
              minWidth="$12xl"
              maxWidth={`calc(100vw - ${SELECT_VIEWPORT_PADDING * 2}px)`}
              borderRadius="$popover"
              boxShadow="0px 4px 30px $overlayBackdrop">
              <TamaguiSelect.Group
                width="max-content"
                minWidth="100%"
                padding={viewportPadding}>
                {children}
              </TamaguiSelect.Group>
            </TamaguiSelect.Viewport>

            <TamaguiSelect.ScrollDownButton
              transition="200ms"
              animateOnly={["scale", "opacity"]}
              enterStyle={{ opacity: 0.2, scale: 0.5 }}
              alignItems="center"
              justifyContent="center"
              position="relative"
              width="100%"
              height={scrollButtonHeight}>
              <YStack zIndex="$10">
                <ChevronDown size={scrollIconSize} color="$foreground" />
              </YStack>
              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                fullscreen={true}
                colors={["transparent", "$backgroundFloating"]}
                borderRadius="$popover"
                marginBottom={gradientMargin}
              />
            </TamaguiSelect.ScrollDownButton>
          </TamaguiSelect.Content>
        </Theme>
      </View>
    );
  },
  { staticConfig: { componentName: "SelectItems" } }
);

export const SelectItems = withStaticProperties(SelectItemsGroup, {
  Item: SelectItem
});
