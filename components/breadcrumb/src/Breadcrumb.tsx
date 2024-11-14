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

import { LabelText } from "@cyclone-ui/label-text";
import { Link } from "@cyclone-ui/link";
import { getSpaced } from "@cyclone-ui/theme-helpers";
import {
  createStyledContext,
  FontSizeTokens,
  styled,
  Theme,
  ThemeableProps,
  View
} from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { withStaticProperties } from "@tamagui/helpers";
import { ChevronRight, ChevronsRight, Slash } from "@tamagui/lucide-icons";
import { type TextContextStyles } from "@tamagui/text";

export type BreadcrumbVariant = "chevron" | "double" | "slash";
export const BreadcrumbVariant = {
  CHEVRON: "chevron" as BreadcrumbVariant,
  DOUBLE: "double" as BreadcrumbVariant,
  SLASH: "slash" as BreadcrumbVariant
};

export type BreadcrumbContextProps = TextContextStyles &
  ThemeableProps & {
    size: FontSizeTokens;
    variant: BreadcrumbVariant;
  };

export const BreadcrumbContext = createStyledContext<BreadcrumbContextProps>({
  size: "$true",
  variant: BreadcrumbVariant.SLASH
});

const BreadcrumbFrame = styled(XGroup, {
  name: "Breadcrumb",
  context: BreadcrumbContext,

  animation: "normal",
  alignItems: "center",
  flexWrap: "nowrap",
  flexShrink: 1,

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

  animation: "normal",
  cursor: "default",
  color: "$color",
  fontFamily: "$link",
  fontWeight: "$lg",
  verticalAlign: "middle"
});

const BreadcrumbImpl = BreadcrumbFrame.styleable<{
  currentName: string;
}>(
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

  animation: "normal",
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
            variant="mixed">
            {children}
          </BreadcrumbLink>
        </View>

        {variant === BreadcrumbVariant.CHEVRON && (
          <ChevronRight color="$borderColor" size="$2" />
        )}
        {variant === BreadcrumbVariant.DOUBLE && (
          <ChevronsRight color="$borderColor" size="$2" />
        )}
        {variant === BreadcrumbVariant.SLASH && (
          <Slash color="$borderColor" size="$0.75" />
        )}
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
