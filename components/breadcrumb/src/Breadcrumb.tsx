import {
  FontSizeTokens,
  SizeTokens,
  ThemeableProps,
  createStyledContext,
  styled
} from "@tamagui/core";
import type { SizableTextProps, TextContextStyles } from "@tamagui/text";
import { ThemeableStack, XStack } from "@tamagui/stacks";
import { Link, LinkProps } from "@cyclone-ui/link";
import { SizableText } from "@tamagui/text";
import { withStaticProperties } from "@tamagui/helpers";
import { ChevronsRight, ChevronRight, Slash } from "@tamagui/lucide-icons";
import { useContext } from "react";

export type BreadcrumbDivider = "chevron" | "double" | "slash";
export const BreadcrumbDivider = {
  CHEVRON: "chevron" as BreadcrumbDivider,
  DOUBLE: "double" as BreadcrumbDivider,
  SLASH: "slash" as BreadcrumbDivider
};

interface BreadcrumbExtraProps {
  divider: BreadcrumbDivider;
}

export type BreadcrumbProps = SizableTextProps & BreadcrumbExtraProps;

type BreadcrumbContextProps = TextContextStyles &
  ThemeableProps & {
    size: FontSizeTokens;
    divider: BreadcrumbDivider;
  };

export const BreadcrumbContext = createStyledContext<BreadcrumbContextProps>({
  size: "$0.5",
  divider: BreadcrumbDivider.CHEVRON
});

const BreadcrumbContainer = styled(ThemeableStack, {
  name: "Breadcrumb",
  context: BreadcrumbContext,
  animation: "medium",
  flexDirection: "row",
  alignItems: "center",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          gap: tokens.size[val]
        };
      }
    }
  }
});

const BreadcrumbContainerImpl = BreadcrumbContainer.styleable<{
  current: string;
}>(
  (props, forwardRef) => {
    const { children, current, ...rest } = props;
    const { size } = useContext(BreadcrumbContext);

    return (
      <BreadcrumbContainer {...rest} ref={forwardRef}>
        {children}
        <SizableText
          color="$color"
          fontFamily="$body"
          fontWeight="$6"
          size={size}>
          {current}
        </SizableText>
      </BreadcrumbContainer>
    );
  },
  {
    staticConfig: { componentName: "Breadcrumb" }
  }
);

const BreadcrumbItemContainer = styled(XStack, {
  name: "Breadcrumb",
  context: BreadcrumbContext,
  animation: "medium",
  flexDirection: "row",
  alignItems: "center",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          gap: tokens.size[val]
        };
      }
    }
  }
});

const BreadcrumbItem = Link.styleable<LinkProps>(
  (props, forwardRef) => {
    const { children, ...rest } = props;
    const { size, divider } = useContext(BreadcrumbContext);

    return (
      <BreadcrumbItemContainer size={size}>
        <Link
          ref={forwardRef}
          underline="initial"
          fontFamily="$body"
          size={size}
          {...rest}>
          {children}
        </Link>
        {divider === BreadcrumbDivider.CHEVRON && (
          <ChevronRight color="$color" size="$1" />
        )}
        {divider === BreadcrumbDivider.DOUBLE && (
          <ChevronsRight color="$color" size="$1" />
        )}
        {divider === BreadcrumbDivider.SLASH && (
          <Slash color="$color" size="$0.5" />
        )}
      </BreadcrumbItemContainer>
    );
  },
  {
    staticConfig: { componentName: "Breadcrumb" }
  }
);

export const Breadcrumb = withStaticProperties(BreadcrumbContainerImpl, {
  Item: BreadcrumbItem,
  props: BreadcrumbContext.Provider
});
