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

import { ColorThemeName } from "@cyclone-ui/colors";
import { SelectOption } from "@storm-stack/types/utility-types/form";
import { Adapt } from "@tamagui/adapt";
import { styled, Theme, View, withStaticProperties } from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Check, ChevronDown, ChevronUp, Lock } from "@tamagui/lucide-icons";
import { Select as TamaguiSelect } from "@tamagui/select";
import { Sheet } from "@tamagui/sheet";
import { XStack, YStack } from "@tamagui/stacks";
import { SelectContext } from "./utilities";

const SelectItemFrame = styled(TamaguiSelect.Item, {
  name: "SelectItems",
  context: SelectContext,

  backgroundColor: "transparent",
  marginVertical: 0,
  paddingVertical: 0,
  paddingHorizontal: "$2",

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
  gap: "$2",
  alignItems: "center",
  paddingHorizontal: "$2",
  paddingVertical: 0,
  borderRadius: "$3",
  minHeight: "$4",
  width: "100%",

  hoverStyle: {
    backgroundColor: "$muted"
  },

  focusStyle: {
    backgroundColor: "$muted"
  },

  focusVisibleStyle: {
    backgroundColor: "$muted"
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
  color: "$color",
  fontFamily: "$body",
  fontSize: "$4",
  fontWeight: "$true",
  lineHeight: "$true",
  letterSpacing: "$true",
  flex: 1,

  variants: {
    selected: {
      true: {
        color: "$fg"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        color: "$colorDisabled",

        hoverStyle: {
          color: "$colorDisabled"
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
    return (
      <Theme name={ColorThemeName.BASE}>
        <SelectItemFrame
          {...props}
          group={true}
          ref={forwardedRef}
          value={String(value)}
          textValue={String(value)}
          disabled={disabled}>
          <SelectItemGroup
            disabled={disabled}
            $sm={{
              justifyContent: "space-between"
            }}>
            <View width="$2" justifyContent="center">
              {disabled && <Lock size="$1.5" color="$colorDisabled" />}
              <TamaguiSelect.ItemIndicator>
                <Theme name={ColorThemeName.ACCENT}>
                  <Check size="$2" color="$color" />
                </Theme>
              </TamaguiSelect.ItemIndicator>
            </View>
            <SelectItemTextFrame
              selected={selected}
              disabled={disabled}
              $group-hover={{
                color: disabled
                  ? "$colorDisabled"
                  : selected
                    ? "$fg"
                    : "$colorHover"
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
        <Adapt when={"sm" as any} platform="touch">
          <Sheet
            modal={true}
            dismissOnSnapToBottom
            animationConfig={{
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
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>

        <TamaguiSelect.Content zIndex={200000}>
          <TamaguiSelect.ScrollUpButton
            animation="quick"
            animateOnly={["scale", "opacity"]}
            enterStyle={{ opacity: 0.2, scale: 0.5 }}
            alignItems="center"
            justifyContent="center"
            position="relative"
            height="$3">
            <YStack zIndex={10}>
              <ChevronUp size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen={true}
              colors={["$base2", "transparent"]}
              borderRadius="$4"
              marginTop="$0.2"
            />
          </TamaguiSelect.ScrollUpButton>

          <TamaguiSelect.Viewport
            animation="quick"
            animateOnly={["transform", "scale", "opacity"]}
            enterStyle={{ opacity: 0.5, scale: 0.9, y: -10 }}
            exitStyle={{ opacity: 0.7, scale: 0.95, y: 10 }}
            backgroundColor="$base2"
            minWidth="$10"
            borderRadius="$true"
            shadowColor="$shadowColor"
            shadowOffset={{ width: 0, height: 4 }}
            shadowRadius={30}>
            <TamaguiSelect.Group paddingVertical="$2">
              {children}
            </TamaguiSelect.Group>
          </TamaguiSelect.Viewport>

          <TamaguiSelect.ScrollDownButton
            animation="quick"
            animateOnly={["scale", "opacity"]}
            enterStyle={{ opacity: 0.2, scale: 0.5 }}
            alignItems="center"
            justifyContent="center"
            position="relative"
            width="100%"
            height="$3">
            <YStack zIndex={10}>
              <ChevronDown size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen={true}
              colors={["transparent", "$base2"]}
              borderRadius="$4"
              marginBottom="$0.2"
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
