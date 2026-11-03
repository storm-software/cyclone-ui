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

import type { FooterProps } from "@cyclone-ui/footer";
import { Footer, FooterContainer } from "@cyclone-ui/footer";
import { BackgroundNoise } from "@cyclone-ui/vectors";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { FooterTerrain } from "./FooterTerrain";

// Leaves headroom above the content so the terrain ridges stay visible.
const TerrainFooterContainer = styled(FooterContainer, {
  displayName: "TerrainFooterContainer",
  paddingTop: "300px max-md:160px"
});

const TerrainFooterNoise = styled(View, {
  displayName: "TerrainFooterNoise",
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: "30",
  opacity: 0.025,
  pointerEvents: "none"
});

export type TerrainFooterProps = FooterProps & {
  /** Enable the subtle terrain ripple. Respects reduced motion. Defaults to true. */
  animate?: boolean;
  /** Overlay a low-opacity noise texture over the footer. Defaults to true. */
  noise?: boolean;
};

export type TerrainFooterContainerProps = GetProps<
  typeof TerrainFooterContainer
>;

const TerrainFooterImpl = createStyledHOC(
  Footer,
  (
    { children, animate = true, noise = true, ...props }: TerrainFooterProps,
    forwardedRef
  ) => (
    <Footer ref={forwardedRef} {...props}>
      {children}
      <FooterTerrain animate={animate} />
      {noise ? (
        <TerrainFooterNoise>
          <BackgroundNoise />
        </TerrainFooterNoise>
      ) : null}
    </Footer>
  ),
  { displayName: "TerrainFooter" }
);

export const TerrainFooter = withStaticProperties(TerrainFooterImpl, {
  Container: TerrainFooterContainer,
  Main: Footer.Main,
  BackgroundLogo: Footer.BackgroundLogo,
  Introduction: Footer.Introduction,
  Statement: Footer.Statement,
  Description: Footer.Description,
  Action: Footer.Action,
  Navigation: Footer.Navigation,
  Section: Footer.Section,
  Link: Footer.Link,
  Rail: Footer.Rail,
  Brand: Footer.Brand,
  Copyright: Footer.Copyright,
  LegalNavigation: Footer.LegalNavigation
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module.
 */
export { TerrainFooterContainer };
export const TerrainFooterMain = Footer.Main;
export const TerrainFooterBackgroundLogo = Footer.BackgroundLogo;
export const TerrainFooterIntroduction = Footer.Introduction;
export const TerrainFooterStatement = Footer.Statement;
export const TerrainFooterDescription = Footer.Description;
export const TerrainFooterAction = Footer.Action;
export const TerrainFooterNavigation = Footer.Navigation;
export const TerrainFooterSection = Footer.Section;
export const TerrainFooterSectionTitle = Footer.Section.Title;
export const TerrainFooterSectionLinks = Footer.Section.Links;
export const TerrainFooterLink = Footer.Link;
export const TerrainFooterRail = Footer.Rail;
export const TerrainFooterRailLink = Footer.Rail.Link;
export const TerrainFooterBrand = Footer.Brand;
export const TerrainFooterCopyright = Footer.Copyright;
export const TerrainFooterLegalNavigation = Footer.LegalNavigation;
