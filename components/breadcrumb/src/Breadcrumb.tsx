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

import { getSpaced } from "@cyclone-ui/helpers";
import { LabelText } from "@cyclone-ui/label-text";
import { Link } from "@cyclone-ui/link";
import type { FontSizeTokens, GetProps, ThemeableProps } from "@tamagui/core";
import { createStyledContext, styled, Theme, View } from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { withStaticProperties } from "@tamagui/helpers";
import { ChevronRight, ChevronsRight, Slash } from "@tamagui/lucide-icons-2";
import type { TextContextStyles } from "@tamagui/text";

export type BreadcrumbVariant = "chevron" | "double" | "slash";

export type BreadcrumbContextProps = TextContextStyles &
  ThemeableProps & {
    size: FontSizeTokens;
    variant: BreadcrumbVariant;
  };

export const BreadcrumbContext = createStyledContext<BreadcrumbContextProps>({
  size: "$true",
  variant: "slash"
});

const BreadcrumbFrame = styled(XGroup, {
  name: "Breadcrumb",
  context: BreadcrumbContext,

  transition: "200ms",
  alignItems: "center",
  flexWrap: "nowrap",
  flexShrink: 1,
  gap: "$2xl",

  variants: {
    size: {
      "...size": (val = "$true") => {
        return {
          gap: getSpaced(val) / 2
        };
      }
    }
  }
});

const BreadcrumbCurrent = styled(LabelText, {
  name: "BreadcrumbCurrent",
  context: BreadcrumbContext,

  transition: "200ms",
  cursor: "default",
  color: "$foreground",
  fontWeight: "$lg",
  verticalAlign: "middle"
});

const BreadcrumbImpl = BreadcrumbFrame.styleable<
  Partial<BreadcrumbContextProps> & {
    currentName: string;
  }
>(
  ({ children, currentName, ...props }, forwardRef) => {
    const { theme } = BreadcrumbContext.useStyledContext();

    return (
      <Theme name={theme}>
        <BreadcrumbFrame ref={forwardRef} theme={theme} {...props}>
          {children}
          <BreadcrumbCurrent>{currentName || "Current"}</BreadcrumbCurrent>
        </BreadcrumbFrame>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "Breadcrumb" }
  }
);

const BreadcrumbLink = styled(Link, {
  name: "BreadcrumbItem",
  context: BreadcrumbContext,

  transition: "200ms",
  underline: "initial"
});

const BreadcrumbItemImpl = BreadcrumbLink.styleable(
  ({ children, ...props }, forwardRef) => {
    const { size, variant } = BreadcrumbContext.useStyledContext();

    return (
      <XGroup.Item>
        <View display="block">
          <BreadcrumbLink
            ref={forwardRef}
            size={size}
            {...props}
            inverse={true}>
            {children}
          </BreadcrumbLink>
        </View>

        {variant === "chevron" && (
          <ChevronRight color="$foregroundPrimary" size="$4xl" />
        )}
        {variant === "double" && (
          <ChevronsRight color="$foregroundPrimary" size="$4xl" />
        )}
        {variant === "slash" && <Slash color="$foregroundPrimary" size="$xl" />}
      </XGroup.Item>
    );
  },
  {
    staticConfig: { componentName: "BreadcrumbItem" }
  }
);

export const Breadcrumb = withStaticProperties(BreadcrumbImpl, {
  Item: BreadcrumbItemImpl
});

export type BreadcrumbProps = GetProps<typeof Breadcrumb>;
