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

import { getFontSizedFromSize, getSized } from "@cyclone-ui/helpers";
import type { SelectOption } from "@stryke/types/form";
import { Adapt } from "@tamagui/adapt";
import { styled, Theme, View, withStaticProperties } from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Check, ChevronDown, ChevronUp, Lock } from "@tamagui/lucide-icons-2";
import { Select as TamaguiSelect } from "@tamagui/select";
import { Sheet } from "@tamagui/sheet";
import { XStack, YStack } from "@tamagui/stacks";
import { useMemo } from "react";
import { SelectContext } from "./utilities";

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
  paddingVertical: 0,
  borderRadius: "$button",
  minHeight: "$5xl",
  width: "100%",

  hoverStyle: {
    backgroundColor: "$backgroundHover"
  },

  focusStyle: {
    backgroundColor: "$backgroundHover"
  },

  focusVisibleStyle: {
    backgroundColor: "$backgroundHover"
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

  cursor: "pointer",
  color: "$foreground",
  fontFamily: "$body",
  flex: 1,

  variants: {
    selected: {
      true: {
        color: "$foregroundLink"
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
    },

    size: {
      "...size": getFontSizedFromSize
    }
  } as const,

  fontWeight: "$semibold",

  defaultVariants: {
    disabled: false,
    selected: false,
    size: "$true"
  }
});

export const SelectItem = SelectItemFrame.styleable<Omit<SelectOption, "name">>(
  ({ children, value, selected, disabled, ...props }, forwardedRef) => {
    const { size } = SelectContext.useStyledContext();
    const isSmall = useMemo(() => getSized(size) < getSized("$4xl"), [size]);

    return (
      <Theme name={"base"}>
        <SelectItemFrame
          {...props}
          group={true}
          ref={forwardedRef}
          value={String(value)}
          textValue={String(value)}
          disabled={disabled}>
          <SelectItemGroup
            disabled={disabled}
            justifyContent={isSmall ? "space-between" : "center"}>
            <View width="$xl" justifyContent="center">
              {disabled && (
                <Lock size="$6xl" color="$foregroundDisabled" />
              )}
              <TamaguiSelect.ItemIndicator>
                <Theme name={"accent"}>
                  <Check size="$7xl" color="$foregroundInverse" />
                </Theme>
              </TamaguiSelect.ItemIndicator>
            </View>
            <SelectItemTextFrame
              selected={selected}
              disabled={disabled}
              $group-hover={{
                color: disabled
                  ? "$foregroundDisabled"
                  : selected
                    ? "$foregroundLinkHover"
                    : "$foregroundHover"
              }}>
              {children}
            </SelectItemTextFrame>
          </SelectItemGroup>
        </SelectItemFrame>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "SelectItems" }
  }
);

const SelectItemsGroup = View.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <View ref={forwardedRef} flex={1} {...props}>
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
            transition="quick"
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
            transition="quick"
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
            transition="quick"
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
      </View>
    );
  },
  { staticConfig: { componentName: "SelectItems" } }
);

export const SelectItems = withStaticProperties(SelectItemsGroup, {
  Item: SelectItem
});
