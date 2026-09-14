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

import type { SelectOption } from "@stryke/types/form";
import { Adapt } from "@tamagui/adapt";
import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import { styled, Theme, View, withStaticProperties } from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Check, ChevronDown, ChevronUp, Lock } from "@tamagui/lucide-icons-2";
import { Select as TamaguiSelect } from "@tamagui/select";
import { Sheet } from "@tamagui/sheet";
import { XStack, YStack } from "@tamagui/stacks";
import { SizableText } from "@tamagui/text";
import { useCallback, useState } from "react";
import { SelectContext } from "./utilities";

const SELECT_VIEWPORT_PADDING = 10;
const SELECT_VIEWPORT_POSITION_CLASS = "is_SelectViewportPositioned";

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
        const width = Math.max(viewport.scrollWidth, triggerRect.width + 8);
        const centeredLeft = triggerRect.left + (triggerRect.width - width) / 2;

        // Keep the menu below its text box whenever space permits. Tamagui's
        // default item alignment otherwise lets the selected row overlap it.
        viewport.style.setProperty("--select-viewport-top", `${top}px`);
        viewport.style.setProperty("--select-viewport-height", `${height}px`);
        viewport.style.setProperty(
          "--select-viewport-left",
          `${centeredLeft - (offsetParentRect?.left ?? 0)}px`
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
      viewport.style.removeProperty("--select-viewport-top");
      viewport.style.removeProperty("--select-viewport-height");
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
  paddingTop: "$xs",
  paddingBottom: "$sm",
  paddingVertical: "$lg",
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
    disabled: false,
    selected: false
  }
});

const SelectItemDivider = styled(View, {
  name: "SelectItems",
  context: SelectContext,

  position: "absolute",
  bottom: 0,
  left: "$2xl",
  right: "$2xl",
  pointerEvents: "none"
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
  cursor: "inherit",
  alignItems: "center",
  borderRadius: "$button",
  minHeight: "$5xl",
  width: "100%",
  paddingHorizontal: "$2xl",

  "$group-item-hover": {
    backgroundColor: "$backgroundHigherHover"
  },

  "$group-item-focus": {
    backgroundColor: "$backgroundHigherHover"
  },

  variants: {
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
    disabled: false
  }
});

const SelectItemTextFrame = styled(TamaguiSelect.ItemText, {
  name: "SelectItems",
  context: SelectContext,

  flex: 1,
  color: "currentColor",
  paddingVertical: "$xl",
  paddingHorizontal: "$sm"
});

const SelectItemValue = styled(SizableText, {
  name: "SelectItems",
  context: SelectContext,

  transition: "200ms",
  cursor: "inherit",
  color: "currentColor",
  fontFamily: "$body",
  fontSize: "$md",

  variants: {
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
    selected: false
  }
});

export const SelectItem = SelectItemFrame.styleable<Omit<SelectOption, "name">>(
  ({ children, value, selected, disabled, ...props }, forwardedRef) => {
    const { value: selectedValue } = SelectContext.useStyledContext();
    const isSelected = selectedValue === String(value);

    return (
      <SelectItemFrame
        {...props}
        data-select-item
        group={"item" as any}
        ref={forwardedRef}
        value={String(value)}
        textValue={String(value)}
        aria-selected={isSelected}
        selected={isSelected}
        disabled={disabled}>
        <SelectItemGroup disabled={disabled} justifyContent="space-between">
          <SelectItemTextFrame>
            <SelectItemValue selected={!!isSelected}>
              {children}
            </SelectItemValue>
          </SelectItemTextFrame>
          <View width="$4xl" justifyContent="center">
            {disabled && (
              <Lock size="$2xl" color="$foregroundDisabled" strokeWidth={2} />
            )}
            {isSelected && (
              <View aria-hidden={true}>
                <Check size="$2xl" color="$foregroundActive" strokeWidth={3} />
              </View>
            )}
          </View>
        </SelectItemGroup>
        <SelectItemDivider data-select-item-divider>
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
              height="$3xl">
              <YStack zIndex="$10">
                <ChevronUp size={20} color="$foreground" />
              </YStack>
              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                fullscreen={true}
                colors={["$backgroundFloating", "transparent"]}
                borderRadius="$popover"
                marginTop="$xxs"
              />
            </TamaguiSelect.ScrollUpButton>

            <TamaguiSelect.Viewport
              ref={viewportRef}
              transition="200ms"
              animateOnly={["transform", "scale", "opacity"]}
              enterStyle={{ opacity: 0.5, scale: 0.9, y: -10 }}
              exitStyle={{ opacity: 0.7, scale: 0.95, y: 10 }}
              backgroundColor="$backgroundFloating"
              minWidth="$12xl"
              borderRadius="$popover"
              boxShadow="0px 4px 30px $overlayBackdrop">
              <TamaguiSelect.Group padding="$xl">
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
              height="$3xl">
              <YStack zIndex="$10">
                <ChevronDown size={20} color="$foreground" />
              </YStack>
              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                fullscreen={true}
                colors={["transparent", "$backgroundFloating"]}
                borderRadius="$popover"
                marginBottom="$xxs"
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
