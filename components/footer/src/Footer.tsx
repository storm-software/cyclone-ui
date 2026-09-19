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

import { Link } from "@cyclone-ui/link";
import { BackgroundNoise } from "@cyclone-ui/vectors";
import type { GetProps } from "@tamagui/core";
import { styled, Text, View, withStaticProperties } from "@tamagui/core";
import { createContext, use, useId, useState } from "react";
import { FooterTerrain } from "./FooterTerrain";

interface FooterLinkHoverContextValue {
  hoveredLinkId: string | null;
  setHoveredLinkId: (linkId: string | null) => void;
}

const FooterLinkHoverContext =
  createContext<FooterLinkHoverContextValue | null>(null);

const FooterFrame = styled(View, {
  name: "Footer",
  render: "footer",

  position: "relative",
  width: "100%",
  overflow: "hidden",
  backgroundColor: "$background",
  borderTopWidth: 1,
  borderTopColor: "$borderSubtle"
});

const FooterContainer = styled(View, {
  name: "FooterContainer",

  position: "relative",
  zIndex: "$10",
  width: "100%",
  maxWidth: 1440,
  marginHorizontal: "auto",
  paddingTop: 280,
  paddingHorizontal: "$4xl",
  paddingBottom: "$7xl",
  gap: "$10xl",

  "$max-md": {
    paddingTop: 160,
    paddingHorizontal: "$2xl",
    paddingBottom: "$5xl",
    gap: "$10xl"
  }
});

const FooterMain = styled(View, {
  name: "FooterMain",

  width: "100%",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "$7xl",

  "$max-md": {
    flexDirection: "column",
    gap: "$10xl"
  }
});

const FooterIntroduction = styled(View, {
  name: "FooterIntroduction",

  flexBasis: 0,
  flexGrow: 1,
  minWidth: 0,
  maxWidth: 440,
  flexShrink: 1,
  gap: "$5xl",

  "$max-md": {
    flexBasis: "auto",
    width: "100%",
    maxWidth: "none",
    gap: "$6xl"
  }
});

const FooterStatement = styled(Text, {
  name: "FooterStatement",
  render: "h2",

  margin: 0,
  color: "$foreground",
  fontFamily: "$heading-sm",
  textTransform: "uppercase",
  letterSpacing: 2
});

const FooterDescription = styled(Text, {
  name: "FooterDescription",
  render: "p",

  maxWidth: 560,
  margin: 0,
  color: "$foreground",
  fontFamily: "$body",
  opacity: 0.85
});

const FooterAction = styled(View, {
  name: "FooterAction",

  flexBasis: 0,
  flexGrow: 1,
  minWidth: 0,
  alignItems: "center",

  "$max-md": {
    flexBasis: "auto",
    width: "100%",
    alignItems: "flex-start"
  }
});

const FooterNavigation = styled(View, {
  name: "FooterNavigation",
  render: "nav",

  flexBasis: 0,
  flexGrow: 1,
  minWidth: 0,
  maxWidth: 440,
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "$6xl",

  "$max-md": {
    width: "100%",
    maxWidth: "none",
    flexBasis: "auto",
    justifyContent: "flex-start",
    gap: "$8xl"
  }
});

const FooterSectionFrame = styled(View, {
  name: "FooterSection",

  minWidth: 120,
  flexBasis: 120,
  flexGrow: 1,
  gap: "$4xl",

  "$max-md": {
    minWidth: 132,
    flexBasis: 132
  }
});

const FooterSectionTitle = styled(Text, {
  name: "FooterSectionTitle",
  render: "h3",

  margin: 0,
  color: "$foreground",
  fontFamily: "$heading-sm",
  textTransform: "uppercase",
  letterSpacing: 2
});

const FooterSectionLinks = styled(View, {
  name: "FooterSectionLinks",

  alignItems: "flex-start",
  gap: "$2xl"
});

const FooterLink = styled(Link, {
  name: "FooterLink",

  width: "fit-content",
  color: "$foreground",
  fontFamily: "$body",
  fontSize: "$md",
  opacity: 0.85,
  textDecorationLine: "none",

  hoverStyle: {
    x: 3,
    color: "$foregroundActive",
    opacity: 1
  },

  focusVisibleStyle: {
    color: "$foregroundActive",
    opacity: 1,
    outlineColor: "$foreground",
    outlineOffset: 3,
    outlineStyle: "solid",
    outlineWidth: 2
  }
});

const FooterRail = styled(View, {
  name: "FooterRail",

  width: "100%",
  paddingTop: "$5xl",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$5xl",

  "$max-md": {
    alignItems: "flex-start",
    flexDirection: "column"
  }
});

const FooterBrand = styled(View, {
  name: "FooterBrand",

  minWidth: 0,
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "$5xl"
});

const FooterCopyright = styled(Text, {
  name: "FooterCopyright",

  color: "$foreground",
  fontFamily: "$body-sm",
  fontSize: "$xs",
  opacity: 0.85
});

const FooterLegalNavigation = styled(View, {
  name: "FooterLegalNavigation",
  render: "nav",

  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "$5xl"
});

const FooterBackgroundLogo = styled(View, {
  name: "FooterBackgroundLogo",

  display: "flex",
  alignItems: "center",
  position: "absolute",
  top: "$2xl",
  zIndex: "$40",
  paddingHorizontal: "$9xl"
});

const FooterBackgroundLogoImpl = FooterBackgroundLogo.styleable(
  ({ children, ...props }, forwardedRef) => (
    <FooterBackgroundLogo ref={forwardedRef} {...props}>
      <View opacity={0.075} display="flex" alignItems="center">
        {children}
      </View>
    </FooterBackgroundLogo>
  ),
  { staticConfig: { componentName: "FooterBackgroundLogo" } }
);

const FooterNoise = styled(View, {
  name: "FooterNoise",

  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: "$30",
  opacity: 0.025,
  pointerEvents: "none"
});

export type FooterProps = GetProps<typeof FooterFrame> & {
  /** Enable the subtle terrain ripple. Respects reduced motion. Defaults to false. */
  animate?: boolean;
  /** Overlay a low-opacity noise texture over the footer. Defaults to false. */
  noise?: boolean;
};

export type FooterContainerProps = GetProps<typeof FooterContainer>;
export type FooterMainProps = GetProps<typeof FooterMain>;
export type FooterIntroductionProps = GetProps<typeof FooterIntroduction>;
export type FooterStatementProps = GetProps<typeof FooterStatement>;
export type FooterDescriptionProps = GetProps<typeof FooterDescription>;
export type FooterActionProps = GetProps<typeof FooterAction>;
export type FooterNavigationProps = GetProps<typeof FooterNavigation>;
export type FooterSectionProps = GetProps<typeof FooterSectionFrame>;
export type FooterSectionTitleProps = GetProps<typeof FooterSectionTitle>;
export type FooterSectionLinksProps = GetProps<typeof FooterSectionLinks>;
export type FooterLinkProps = GetProps<typeof FooterLink>;
export type FooterRailProps = GetProps<typeof FooterRail>;
export type FooterBrandProps = GetProps<typeof FooterBrand>;
export type FooterCopyrightProps = GetProps<typeof FooterCopyright>;
export type FooterLegalNavigationProps = GetProps<typeof FooterLegalNavigation>;

const FooterLinkImpl = FooterLink.styleable(
  ({ children, onMouseEnter, onMouseLeave, ...props }, forwardedRef) => {
    const linkId = useId();
    const hoverContext = use(FooterLinkHoverContext);
    const hovered = hoverContext ? hoverContext.hoveredLinkId !== null : false;
    const active = hoverContext?.hoveredLinkId === linkId;

    return (
      <FooterLink
        ref={forwardedRef}
        group={false}
        underline="none"
        {...props}
        color={
          hovered
            ? active
              ? "$foregroundActive"
              : "$foregroundInactive"
            : undefined
        }
        onMouseEnter={(event: any) => {
          onMouseEnter?.(event);
          hoverContext?.setHoveredLinkId(linkId);
        }}
        onMouseLeave={(event: any) => {
          onMouseLeave?.(event);
          hoverContext?.setHoveredLinkId(null);
        }}>
        {children}
      </FooterLink>
    );
  },
  { staticConfig: { componentName: "FooterLink" } }
);

const FooterRailLink = styled(FooterLinkImpl, {
  name: "FooterRailLink",

  underline: true,
  fontSize: "$sm"
});

const FooterFrameImpl = FooterFrame.styleable<FooterProps>(
  ({ children, animate = true, noise = true, ...props }, forwardedRef) => {
    const [hoveredLinkId, setHoveredLinkId] = useState<string | null>(null);

    return (
      <FooterFrame ref={forwardedRef} {...props}>
        <FooterLinkHoverContext.Provider
          value={{ hoveredLinkId, setHoveredLinkId }}>
          {children}
        </FooterLinkHoverContext.Provider>
        <FooterTerrain animate={animate} />
        {noise ? (
          <FooterNoise>
            <BackgroundNoise />
          </FooterNoise>
        ) : null}
      </FooterFrame>
    );
  },
  { staticConfig: { componentName: "Footer" } }
);

export const Footer = withStaticProperties(FooterFrameImpl, {
  Container: FooterContainer,
  Main: FooterMain,
  BackgroundLogo: FooterBackgroundLogoImpl,
  Introduction: FooterIntroduction,
  Statement: FooterStatement,
  Description: FooterDescription,
  Action: FooterAction,
  Navigation: FooterNavigation,
  Section: withStaticProperties(FooterSectionFrame, {
    Title: FooterSectionTitle,
    Links: FooterSectionLinks
  }),
  Link: FooterLinkImpl,
  Rail: withStaticProperties(FooterRail, {
    Link: FooterRailLink
  }),
  Brand: FooterBrand,
  Copyright: FooterCopyright,
  LegalNavigation: FooterLegalNavigation
});
