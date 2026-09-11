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

import { getSized } from "@cyclone-ui/helpers";
import type { SelectOption } from "@stryke/types/form";
import { Adapt } from "@tamagui/adapt";
import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import { styled, Theme, View, withStaticProperties } from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Check, ChevronDown, ChevronUp, Lock } from "@tamagui/lucide-icons-2";
import { Select as TamaguiSelect } from "@tamagui/select";
import { Sheet } from "@tamagui/sheet";
import { XStack, YStack } from "@tamagui/stacks";
import { useCallback, useMemo, useState } from "react";
import { SelectContext } from "./utilities";

const SELECT_VIEWPORT_PADDING = 10;
const SELECT_VIEWPORT_UPWARD_CLASS = "is_SelectViewportUpward";

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
      .${SELECT_VIEWPORT_UPWARD_CLASS} {
        top: var(--select-viewport-top) !important;
        max-height: var(--select-viewport-height) !important;
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

        if (fullHeight > spaceBelow && spaceAbove > spaceBelow) {
          const height = Math.min(fullHeight, spaceAbove);
          const top = triggerRect.top - (offsetParentRect?.top ?? 0) - height;

          // Tamagui writes collision values directly to the viewport. Override
          // only when the larger collision area is above the trigger.
          viewport.style.setProperty("--select-viewport-top", `${top}px`);
          viewport.style.setProperty("--select-viewport-height", `${height}px`);
          viewport.classList.add(SELECT_VIEWPORT_UPWARD_CLASS);
        } else {
          viewport.classList.remove(SELECT_VIEWPORT_UPWARD_CLASS);
        }
      });
    };

    const resizeObserver = new viewportWindow.ResizeObserver(updatePosition);
    resizeObserver.observe(viewport);
    resizeObserver.observe(trigger);
    viewportWindow.addEventListener("resize", updatePosition);
    viewportWindow.addEventListener("scroll", updatePosition, true);
    updatePosition();

    return () => {
      if (frame !== undefined) {
        cancelAnimationFrame(frame);
      }

      viewport.classList.remove(SELECT_VIEWPORT_UPWARD_CLASS);
      viewport.style.removeProperty("--select-viewport-top");
      viewport.style.removeProperty("--select-viewport-height");
      style.remove();
      resizeObserver.disconnect();
      viewportWindow.removeEventListener("resize", updatePosition);
      viewportWindow.removeEventListener("scroll", updatePosition, true);
    };
  }, [viewport]);

  return viewportRef;
};

const SelectItemFrame = styled(TamaguiSelect.Item, {
  name: "SelectItems",
  context: SelectContext,

  backgroundColor: "transparent",
  marginVertical: 0,
  paddingVertical: 0,
  paddingHorizontal: "$xl",

  focusStyle: {
    backgroundColor: "transparent"
  },

  hoverStyle: {
    backgroundColor: "transparent"
  }
});

const SelectItemGroup = styled(XStack, {
  name: "SelectItems",
  context: SelectContext,

  cursor: "pointer",
  gap: "$xl",
  alignItems: "center",
  paddingHorizontal: "$xl",
  paddingVertical: "$lg",
  borderRadius: "$button",
  minHeight: "$5xl",
  width: "100%",

  hoverStyle: {
    backgroundColor: "$backgroundHighestHover"
  },

  focusStyle: {
    backgroundColor: "$backgroundHighestHover"
  },

  focusVisibleStyle: {
    backgroundColor: "$backgroundHighestHover"
  },

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        backgroundColor: "transparent",

        hoverStyle: {
          backgroundColor: "transparent"
        },

        focusStyle: {
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

  transition: "200ms",
  cursor: "pointer",
  color: "$foregroundBody",
  fontFamily: "$body",
  fontSize: "$md",
  flex: 1,

  hoverStyle: {
    color: "$foreground"
  },

  variants: {
    selected: {
      true: {
        color: "$foreground"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        color: "$foregroundDisabled",

        hoverStyle: {
          color: "$foregroundDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    disabled: false,
    selected: false
  }
});

export const SelectItem = SelectItemFrame.styleable<Omit<SelectOption, "name">>(
  ({ children, value, selected, disabled, ...props }, forwardedRef) => {
    const { size, value: selectedValue } = SelectContext.useStyledContext();
    const isSmall = useMemo(() => getSized(size) < getSized("$4xl"), [size]);
    const isSelected = selectedValue === String(value);

    return (
      <SelectItemFrame
        {...props}
        group={true}
        ref={forwardedRef}
        value={String(value)}
        textValue={String(value)}
        aria-selected={isSelected}
        disabled={disabled}>
        <SelectItemGroup
          disabled={disabled}
          justifyContent={isSmall ? "space-between" : "center"}>
          <View width="$4xl" justifyContent="center">
            {disabled && <Lock size="$xl" color="$foregroundDisabled" />}
            {isSelected && (
              <View aria-hidden={true}>
                <Theme name="success">
                  <Check size="$xl" color="$foreground" />
                </Theme>
              </View>
            )}
          </View>
          <SelectItemTextFrame
            selected={!!isSelected}
            disabled={disabled}
            $group-hover={{
              color: disabled
                ? "$foregroundDisabled"
                : isSelected
                  ? "$foreground"
                  : "$foregroundHover"
            }}>
            {children}
          </SelectItemTextFrame>
        </SelectItemGroup>
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
              <TamaguiSelect.Group paddingVertical="$xl">
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
