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
import { HeadingSmallText } from "@cyclone-ui/heading-text";
import { Link } from "@cyclone-ui/link";
import { BackgroundNoise } from "@cyclone-ui/vectors";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { createContext, use, useId, useState } from "react";
import { FooterTerrain } from "./FooterTerrain";

interface FooterLinkHoverContextValue {
  hoveredLinkId: string | null;
  setHoveredLinkId: (linkId: string | null) => void;
}

const FooterLinkHoverContext =
  createContext<FooterLinkHoverContextValue | null>(null);

const FooterFrame = styled(View, {
  displayName: "Footer",
  render: "footer",
  position: "relative",
  width: "100%",
  overflow: "hidden",
  backgroundColor: "muted",
  borderTopWidth: 1,
  borderTopColor: "hairline"
});

const FooterContainer = styled(View, {
  displayName: "FooterContainer",
  position: "relative",
  zIndex: "10",
  width: "100%",
  maxWidth: 1440,
  marginHorizontal: "auto",
  paddingTop: "300px max-md:160px",
  paddingHorizontal: "4xl max-md:2xl",
  paddingBottom: "7xl max-md:5xl",
  gap: "10xl max-md:10xl"
});

const FooterMain = styled(View, {
  displayName: "FooterMain",
  width: "100%",
  flexDirection: "row max-md:column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "7xl max-md:10xl"
});

const FooterIntroduction = styled(View, {
  displayName: "FooterIntroduction",
  flexBasis: "0px max-md:auto",
  flexGrow: 1,
  minWidth: 0,
  maxWidth: "440px max-md:none",
  flexShrink: 1,
  gap: "5xl max-md:6xl",
  width: "max-md:100%"
});

const FooterStatement = styled(HeadingSmallText, {
  displayName: "FooterStatement",
  render: "h2",
  margin: 0,
  color: "accent",
  textTransform: "uppercase",
  letterSpacing: 2
});

const FooterDescription = styled(BodyText, {
  displayName: "FooterDescription",
  render: "p",
  maxWidth: 560,
  margin: 0,
  color: "accent",
  opacity: 0.85
});

const FooterAction = styled(View, {
  displayName: "FooterAction",
  flexBasis: "0px max-md:auto",
  flexGrow: 1,
  minWidth: 0,
  alignItems: "center max-md:flex-start",
  width: "max-md:100%"
});

const FooterNavigation = styled(View, {
  displayName: "FooterNavigation",
  render: "nav",
  flexBasis: "0px max-md:auto",
  flexGrow: 1,
  minWidth: 0,
  maxWidth: "440px max-md:none",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "flex-start",
  justifyContent: "space-between max-md:flex-start",
  gap: "6xl max-md:8xl",
  width: "max-md:100%"
});

const FooterSectionFrame = styled(View, {
  displayName: "FooterSection",
  minWidth: "120px max-md:132px",
  flexBasis: "120px max-md:132px",
  flexGrow: 1,
  gap: "4xl"
});

const FooterSectionTitle = styled(HeadingSmallText, {
  displayName: "FooterSectionTitle",
  render: "h3",
  margin: 0,
  color: "accent",
  textTransform: "uppercase",
  letterSpacing: 2
});

const FooterSectionLinks = styled(View, {
  displayName: "FooterSectionLinks",
  alignItems: "flex-start",
  gap: "2xl"
});

const FooterLink = styled(Link, {
  displayName: "FooterLink",
  width: "fit-content",
  color: "accent hover:accentActive focus-visible:accentActive",
  opacity: "0.85 hover:1 focus-visible:1",
  textDecorationLine: "none",
  x: "hover:3px",
  outlineColor: "focus-visible:accent",
  outlineOffset: "focus-visible:3px",
  outlineStyle: "focus-visible:solid",
  outlineWidth: "focus-visible:2px"
});

const FooterRail = styled(View, {
  displayName: "FooterRail",
  width: "100%",
  paddingTop: "5xl",
  flexDirection: "row max-md:column",
  alignItems: "center max-md:flex-start",
  justifyContent: "space-between",
  gap: "5xl"
});

const FooterBrand = styled(View, {
  displayName: "FooterBrand",
  minWidth: 0,
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "5xl"
});

const FooterCopyright = styled(BodyText, {
  displayName: "FooterCopyright",
  render: "span",
  color: "accent",
  fontSize: "md",
  opacity: 0.85
});

const FooterLegalNavigation = styled(View, {
  displayName: "FooterLegalNavigation",
  render: "nav",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "5xl"
});

const FooterBackgroundLogo = styled(View, {
  displayName: "FooterBackgroundLogo",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  top: "2xl",
  zIndex: "40",
  paddingHorizontal: "9xl"
});

const FooterBackgroundLogoImpl = createStyledHOC(
  FooterBackgroundLogo,
  ({ children, ...props }, forwardedRef) => (
    <FooterBackgroundLogo ref={forwardedRef} {...props}>
      <View opacity={0.075} display="flex" alignItems="center">
        {children}
      </View>
    </FooterBackgroundLogo>
  ),
  { displayName: "FooterBackgroundLogo" }
);

const FooterNoise = styled(View, {
  displayName: "FooterNoise",
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: "30",
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

const FooterLinkImpl = createStyledHOC(
  FooterLink,
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
        {...(hovered && {
          color: active ? "accentActive" : "accentInactive"
        })}
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
  { displayName: "FooterLink" }
);

const FooterRailLink = styled(FooterLinkImpl, {
  displayName: "FooterRailLink",
  // v2 had `underline: true`, which matches no LinkText underline variant and
  // so rendered without an underline (FooterLink sets `textDecorationLine:
  // "none"`). v3 rejects the value; "none" keeps the rendered result.
  underline: "none"
});

const FooterFrameImpl = createStyledHOC(
  FooterFrame,
  (
    {
      children,
      animate = true,
      noise = true,
      ...props
    }: GetProps<typeof FooterFrame> & FooterProps,
    forwardedRef
  ) => {
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
  { displayName: "Footer" }
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
