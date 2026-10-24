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

import type { ReactNode } from "react";
import {
  Body,
  Container,
  Font,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Tailwind
} from "react-email";
import type { EmailMode } from "../theme";
import { getTailwindConfig } from "../theme";
import type { FooterProps } from "./Footer";
import { Footer } from "./Footer";

/**
 * Where `static/` is hosted. Empty in development, where the React Email
 * preview server serves `src/templates/static`.
 */
export const assetsUrl = process.env.EMAIL_ASSETS_URL ?? "";

const fontsUrl = "https://public.storm-cdn.com/fonts";

const fontFaces = {
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold"
} as const;

export interface EmailLayoutProps {
  /** The inbox preview text. */
  preview: string;
  companyName: string;
  mode?: EmailMode;
  footer?: Omit<FooterProps, "companyName">;
  children: ReactNode;
}

export const EmailLayout = ({
  preview,
  companyName,
  mode = "light",
  footer,
  children
}: EmailLayoutProps) => (
  <Html lang="en">
    <Tailwind config={getTailwindConfig(mode)}>
      <Head>
        {/* Each `Font` also sets `* { font-family }`, so Storm Sans goes last */}
        <Font
          fontFamily="Storm Serif"
          fallbackFontFamily="Georgia"
          webFont={{
            url: `${fontsUrl}/storm-serif/SemiBold.otf`,
            format: "opentype"
          }}
          fontWeight={600}
          fontStyle="normal"
        />
        {Object.entries(fontFaces).map(([weight, face]) => (
          <Font
            key={weight}
            fontFamily="Storm Sans"
            fallbackFontFamily={["Helvetica", "sans-serif"]}
            webFont={{
              url: `${fontsUrl}/storm-sans/${face}.otf`,
              format: "opentype"
            }}
            fontWeight={Number(weight)}
            fontStyle="normal"
          />
        ))}
      </Head>
      <Body className="m-0 bg-canvas p-0 font-body">
        <Preview>{preview}</Preview>
        <Container className="mx-auto w-full max-w-[640px] bg-surface">
          <Section className="px-6 py-6">
            <Img
              src={`${assetsUrl}/static/logo.png`}
              alt={companyName}
              width="32"
              height="32"
              className="block"
            />
          </Section>
          {children}
          <Footer companyName={companyName} {...footer} />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
