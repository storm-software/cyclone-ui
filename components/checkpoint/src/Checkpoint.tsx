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

import { BodyText } from "@cyclone-ui/body-text";
import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import { Divider } from "@cyclone-ui/divider";
import { BackupRestore } from "@cyclone-ui/icons";
import type { GetProps, TamaguiElement, ViewProps } from "@tamagui/core";
import { styled, Text, View, withStaticProperties } from "@tamagui/core";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import { Children, forwardRef } from "react";

/**
 * `separator` centers the checkpoint between two rules, `border` puts a rule
 * under it, and `inline` has no rule.
 */
export type CheckpointVariant = "separator" | "border" | "inline";

export interface CheckpointProps extends ViewProps {
  /** The layout. Defaults to `separator`. */
  variant?: CheckpointVariant;
}

// A rule that fills the space beside the content. `Divider` is always as wide
// as its parent, so this wrapper does the flexing.
const CheckpointRule = () => (
  <View flex={1} minWidth="2xl">
    <Divider size="sm" />
  </View>
);

/**
 * A point in the conversation to return to: a row of a `Checkpoint.Icon`, a
 * label and a `Checkpoint.Trigger`, after the turn it restores. Text children
 * are shown as muted body text.
 */
const CheckpointRoot = forwardRef<TamaguiElement, CheckpointProps>(
  ({ variant = "separator", children, ...props }, forwardedRef) => (
    <View
      ref={forwardedRef}
      flexDirection="row"
      alignItems="center"
      gap="xl"
      width="100%"
      minWidth={0}
      {...(variant === "border" && {
        borderBottomWidth: 1,
        borderColor: "hairline",
        paddingBottom: "xl"
      })}
      {...props}>
      {variant === "separator" && <CheckpointRule />}
      {Children.map(children, child =>
        typeof child === "string" || typeof child === "number" ? (
          <BodyText size="sm" color="subtle" flexShrink={1} minWidth={0}>
            {child}
          </BodyText>
        ) : (
          child
        )
      )}
      {variant === "separator" && <CheckpointRule />}
    </View>
  )
);

CheckpointRoot.displayName = "Checkpoint";

const CheckpointIconFrame = styled(Text, {
  name: "CheckpointIcon",
  render: "span",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: "2xl",
  height: "2xl",
  color: "subtle"
});

export type CheckpointIconProps = GetProps<typeof CheckpointIconFrame>;

/**
 * A 16px icon, hidden from assistive tech. Defaults to a restore clock; pass
 * an icon as its child to change it.
 */
const CheckpointIcon = forwardRef<TamaguiElement, CheckpointIconProps>(
  ({ children, ...props }, forwardedRef) => {
    // A View can't carry `color` in v3, so this Text passes it to the icon's
    // `currentColor`.
    const getThemedIcon = useGetThemedIcon({ size: 16, color: "currentColor" });

    return (
      <CheckpointIconFrame ref={forwardedRef} aria-hidden={true} {...props}>
        {getThemedIcon(children ?? <BackupRestore />)}
      </CheckpointIconFrame>
    );
  }
);

CheckpointIcon.displayName = "Checkpoint.Icon";

export type CheckpointTriggerProps = ButtonProps;

/**
 * The button that restores the conversation to the checkpoint. Its label
 * defaults to `Restore`; `tooltip` explains what restoring does.
 */
const CheckpointTrigger = forwardRef<TamaguiElement, CheckpointTriggerProps>(
  ({ children = "Restore", ...props }, forwardedRef) => (
    <Button
      ref={forwardedRef}
      size="sm"
      flexGrow={0}
      flexShrink={0}
      // `Button` names itself after its `tooltip` when it has no
      // `aria-label`; the visible label must stay the name.
      aria-label={typeof children === "string" ? children : undefined}
      {...props}>
      {typeof children === "string" ? (
        <Button.Text>{children}</Button.Text>
      ) : (
        children
      )}
    </Button>
  )
);

CheckpointTrigger.displayName = "Checkpoint.Trigger";

export const Checkpoint = withStaticProperties(CheckpointRoot, {
  Icon: CheckpointIcon,
  Trigger: CheckpointTrigger
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Checkpoint.Icon` is undefined on the server).
 */
export { CheckpointIcon, CheckpointTrigger };
