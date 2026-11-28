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

import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import type {
  ContextMenuContentProps,
  ContextMenuItemProps,
  ContextMenuProps
} from "@cyclone-ui/context-menu";
import { ContextMenu, getContextMenuSize } from "@cyclone-ui/context-menu";
import { EyebrowText } from "@cyclone-ui/eyebrow-text";
import { ChevronDown } from "@cyclone-ui/icons";
import type { GetProps, TamaguiElement, ViewProps } from "@tamagui/core";
import { View, withStaticProperties } from "@tamagui/core";
import { useControllableState } from "@tamagui/use-controllable-state";
import type { JSX, ReactNode } from "react";
import { createContext, forwardRef, use, useId } from "react";

type ModelSelectorSize = NonNullable<ContextMenuProps["size"]>;

// The menu's size, so group headings line up with the item text.
const ModelSelectorSizeContext = createContext<ModelSelectorSize>("md");

export type ModelSelectorProps = Omit<
  ContextMenuProps,
  "open" | "defaultOpen" | "onOpenChange" | "value" | "onValueChange"
> & {
  /** The selected option's `value`, which shows a check mark. */
  value?: string;
  /** Called with an option's `value` when it is picked. */
  onValueChange?: (value: string) => void;
  /** Whether the menu is open. Makes it controlled; pass `onOpenChange` too. */
  open?: boolean;
  /** Whether the menu starts open when uncontrolled. Defaults to `false`. */
  defaultOpen?: boolean;
  /** Called with the new open state when the menu opens or closes. */
  onOpenChange?: (open: boolean) => void;
};

/**
 * A menu that picks one option, such as the model an agent runs or how hard
 * it thinks. It opens as a popover on large screens and as a bottom sheet on
 * small ones. The selected option (`value`) shows a check mark, and picking
 * one calls `onValueChange` and closes the menu.
 */
const ModelSelectorRoot = ({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  onValueChange,
  size = "md",
  ...props
}: ModelSelectorProps): JSX.Element => {
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });

  return (
    <ModelSelectorSizeContext value={size}>
      <ContextMenu
        size={size}
        {...props}
        open={open}
        onOpenChange={(next: boolean) => setOpen(next)}
        onValueChange={(value: string) => {
          setOpen(false);
          onValueChange?.(value);
        }}
      />
    </ModelSelectorSizeContext>
  );
};

export type ModelSelectorTriggerProps = ButtonProps & {
  /** A muted label before the selected option, such as `Effort`. */
  label?: string;
};

/**
 * A small ghost button that opens the menu: the selected option (its
 * `children`), after an optional muted `label`, and a chevron.
 */
const ModelSelectorTrigger = forwardRef<
  TamaguiElement,
  ModelSelectorTriggerProps
>(({ label, children, ...props }, forwardedRef) => (
  <ContextMenu.Trigger asChild={true}>
    <Button
      ref={forwardedRef}
      variant="ghost"
      size="sm"
      // A Button grows along its parent's main axis; a trigger in a toolbar
      // keeps its own size.
      flexGrow={0}
      // "Effort: Medium" rather than "Effort Medium".
      aria-label={
        label && typeof children === "string"
          ? `${label}: ${children}`
          : undefined
      }
      {...props}>
      {label && <Button.Text color="subtle">{label}</Button.Text>}
      <Button.Text>{children}</Button.Text>
      <Button.Icon>
        <ChevronDown />
      </Button.Icon>
    </Button>
  </ContextMenu.Trigger>
));

ModelSelectorTrigger.displayName = "ModelSelector.Trigger";

export type ModelSelectorContentProps = ContextMenuContentProps;

/** The menu: its groups and items, in a scroll view. */
const ModelSelectorContent = ({
  children,
  ...props
}: ModelSelectorContentProps): JSX.Element => (
  <ContextMenu.Content minWidth="26xl" {...props}>
    <ContextMenu.Content.ScrollView>{children}</ContextMenu.Content.ScrollView>
  </ContextMenu.Content>
);

export type ModelSelectorGroupProps = ViewProps & {
  /** The group's name, such as the provider, shown above its items. */
  heading?: string;
};

/** Items under a heading, such as one provider's models. */
const ModelSelectorGroup = forwardRef<TamaguiElement, ModelSelectorGroupProps>(
  ({ heading, children, ...props }, forwardedRef) => {
    const id = useId();
    const { itemFramePaddingHorizontal, itemPaddingHorizontal } =
      getContextMenuSize(use(ModelSelectorSizeContext));

    return (
      <View
        ref={forwardedRef}
        role="group"
        aria-labelledby={heading ? id : undefined}
        {...props}>
        {heading && (
          <EyebrowText
            id={id}
            render="span"
            // In line with the item text.
            paddingHorizontal={
              itemFramePaddingHorizontal + itemPaddingHorizontal
            }
            paddingTop="xl"
            paddingBottom="lg">
            {heading}
          </EyebrowText>
        )}
        {children}
      </View>
    );
  }
);

ModelSelectorGroup.displayName = "ModelSelector.Group";

export type ModelSelectorNameProps = GetProps<typeof ContextMenu.Item.Text>;

/** An item's name. A string `children` of `ModelSelector.Item` is wrapped in one. */
const ModelSelectorName = (props: ModelSelectorNameProps): JSX.Element => (
  <ContextMenu.Item.Text {...props} />
);

export type ModelSelectorItemProps = ContextMenuItemProps & {
  /** A short line under the name, such as what the model is best at. */
  description?: ReactNode;
};

/**
 * One option. Its `value` is passed to the menu's `onValueChange`, and it
 * shows a check mark while it is the menu's `value`.
 */
const ModelSelectorItem = ({
  description,
  children,
  ...props
}: ModelSelectorItemProps): JSX.Element => {
  const name =
    typeof children === "string" ? (
      <ModelSelectorName paddingVertical={description == null ? undefined : 0}>
        {children}
      </ModelSelectorName>
    ) : (
      children
    );

  return (
    <ContextMenu.Item {...props}>
      {description == null ? (
        name
      ) : (
        <View flex={1} minWidth={0} paddingVertical="sm">
          {name}
          <ContextMenu.Item.Text
            fontSize="0.875em"
            fontWeight="normal"
            color="subtle"
            paddingVertical={0}>
            {description}
          </ContextMenu.Item.Text>
        </View>
      )}
    </ContextMenu.Item>
  );
};

/** A rule between groups. */
const ModelSelectorSeparator = forwardRef<TamaguiElement, ViewProps>(
  (props, forwardedRef) => (
    <View
      ref={forwardedRef}
      aria-hidden={true}
      height={1}
      marginVertical="lg"
      backgroundColor="hairline"
      {...props}
    />
  )
);

ModelSelectorSeparator.displayName = "ModelSelector.Separator";

export const ModelSelector = withStaticProperties(ModelSelectorRoot, {
  Trigger: ModelSelectorTrigger,
  Content: ModelSelectorContent,
  Group: ModelSelectorGroup,
  Item: ModelSelectorItem,
  Name: ModelSelectorName,
  Separator: ModelSelectorSeparator
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`ModelSelector.Item` is undefined on the server).
 */
export {
  ModelSelectorContent,
  ModelSelectorGroup,
  ModelSelectorItem,
  ModelSelectorName,
  ModelSelectorSeparator,
  ModelSelectorTrigger
};
