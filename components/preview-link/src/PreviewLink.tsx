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
import type { LinkProps } from "@cyclone-ui/link";
import { Link } from "@cyclone-ui/link";
import { Tooltip } from "@cyclone-ui/tooltip";
import type { TooltipProps } from "@tamagui/tooltip";
import type { ReactNode } from "react";

export type PreviewLinkProps = LinkProps & {
  /**
   * The details shown in the tooltip while the link is hovered or focused. Strings are wrapped in `BodyText`.
   */
  preview: ReactNode;

  /**
   * The placement of the tooltip relative to the link.
   */
  placement?: TooltipProps["placement"];
};

/**
 * A `Link` with a dotted underline that shows a `Tooltip` with more details on hover or focus.
 */
export const PreviewLink = ({
  preview,
  placement = "top",
  theme,
  style,
  ...props
}: PreviewLinkProps) => (
  <Tooltip theme={theme} placement={placement}>
    <Tooltip.Trigger asChild={true}>
      <Link
        theme={theme}
        textDecorationStyle="dotted"
        style={[{ textDecorationThickness: 3 }, style]}
        {...props}
      />
    </Tooltip.Trigger>
    <Tooltip.Content>
      {typeof preview === "string" ? (
        <BodyText marginHorizontal="3xl" marginVertical="2xl">
          {preview}
        </BodyText>
      ) : (
        preview
      )}
    </Tooltip.Content>
  </Tooltip>
);
