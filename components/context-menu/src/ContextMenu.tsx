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
import { Button } from "@cyclone-ui/button";
import type { FormControlSize } from "@cyclone-ui/helpers";
import {
  getFormFontScale,
  getFormSizeScale,
  getFormSizeToken
} from "@cyclone-ui/helpers";
import { Popover } from "@cyclone-ui/popover";
import type { GetProps } from "@tamagui/core";
import { createStyledContext, View, withStaticProperties } from "@tamagui/core";
import type { JSX } from "react";

interface ContextMenuContextValue {
  size: FormControlSize;
}

const ContextMenuContext = createStyledContext<ContextMenuContextValue, "size">(
  { size: "md" },
  { keys: ["size"] }
);

export interface ContextMenuProps extends Omit<
  GetProps<typeof Popover>,
  "size"
> {
  size?: FormControlSize;
}

/**
 * A menu of actions that opens as a popover on large screens and as a bottom
 * sheet on small touch screens.
 */
const ContextMenuFrame = ({
  size = "md",
  ...props
}: ContextMenuProps): JSX.Element => (
  <ContextMenuContext.Provider size={size}>
    <Popover
      size={getFormSizeToken(size)}
      placement="bottom-start"
      {...props}
    />
  </ContextMenuContext.Provider>
);

export type ContextMenuContentProps = GetProps<typeof Popover.Content>;

const ContextMenuContent = ({
  children,
  ...props
}: ContextMenuContentProps): JSX.Element => (
  <Popover.Content maxWidth="90vw" {...props}>
    {/* Adapted to a sheet, only the children render, so they carry the layout. */}
    <View gap="3xl" width="100%">
      {children}
    </View>
  </Popover.Content>
);

const ContextMenuScrollView = (
  props: GetProps<typeof Popover.Content.ScrollView>
): JSX.Element => (
  <Popover.Content.ScrollView
    size="lg"
    maxHeight="32xl"
    paddingRight="3xl"
    {...props}
  />
);

export type ContextMenuItemProps = GetProps<typeof Button>;

const ContextMenuItem = ({
  children,
  ...props
}: ContextMenuItemProps): JSX.Element => {
  const { size } = ContextMenuContext.useStyledContext();

  return (
    <Button
      variant="ghost"
      noPadding={true}
      animate={false}
      width="100%"
      height="auto"
      minHeight="unset"
      padding={0}
      paddingVertical="xl"
      justifyContent="flex-start"
      position="relative"
      overflow="visible"
      {...props}>
      <View
        transition="200ms"
        zIndex="20"
        cursor="inherit"
        flexDirection="row"
        alignItems="center"
        minHeight={22 * getFormSizeScale(size)}
        width="100%"
        paddingHorizontal="2xl"
        paddingBottom="xs"
        gap="2xl">
        {children}
      </View>
    </Button>
  );
};

const ContextMenuItemText = (props: GetProps<typeof BodyText>): JSX.Element => {
  const { size } = ContextMenuContext.useStyledContext();

  return (
    <BodyText
      render="span"
      transition="200ms"
      color="accentInactive group-hover/button:accentHover group-focus/button:accentHover"
      fontSize={18 * getFormFontScale(size)}
      {...props}
    />
  );
};

export const ContextMenu = withStaticProperties(ContextMenuFrame, {
  Trigger: Popover.Trigger,
  Content: withStaticProperties(ContextMenuContent, {
    ScrollView: ContextMenuScrollView
  }),
  Item: withStaticProperties(ContextMenuItem, {
    Text: ContextMenuItemText
  })
});
