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
import { tailwindConfig, themes } from "../theme";
import type { FooterProps } from "./Footer";
import { Footer } from "./Footer";

/**
 * Where `static/` is hosted. Empty in development, where the React Email
 * preview server serves `src/templates/static`.
 */
export const assetsUrl = process.env.EMAIL_ASSETS_URL ?? "";

/**
 * Markup only Outlook for Windows reads. React can't render a bare comment,
 * so it sits in an empty `div` (like the `mso` comments in React Email's
 * `Button`).
 */
const Outlook = ({ html }: { html: string }) => (
  <div
    dangerouslySetInnerHTML={{ __html: `<!--[if mso]>${html}<![endif]-->` }}
  />
);

/**
 * The colors under `static/topography.png`. The image is 50% gray with its
 * opacity taken from the light `@cyclone-ui/topographic-background` image,
 * `(252 - gray) / 124`, so over these colors it matches the light and dark
 * images. When a mail client darkens the light color in dark mode, the image
 * goes dark with it.
 */
const topographyColors = {
  light: "#fcfcfb",
  dark: "#030304"
} satisfies Record<EmailMode, string>;

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
    <Tailwind config={tailwindConfig} theme={themes[mode]}>
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
      {/* React Email's `Body` would wrap the Outlook background in a table
          cell, so the body and its full-width table are written out here. */}
      <body className="m-0 bg-canvas p-0">
        {/* Outlook for Windows ignores CSS backgrounds but tiles a VML one
            placed right after `<body>`. Its image is mirrored both ways, so
            the tiles meet without a seam. */}
        <Outlook
          html={`<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"><v:fill type="tile" src="${assetsUrl}/static/topography-${mode}-tile.jpg" color="${themes[mode].match(/--color-canvas:\s*([^\s;][^;]*);/)?.[1]}"/></v:background>`}
        />
        <table
          role="presentation"
          width="100%"
          border={0}
          cellPadding="0"
          cellSpacing="0">
          <tbody>
            <tr>
              <td
                className="px-4 py-10 font-body"
                style={{
                  backgroundColor: topographyColors[mode],
                  backgroundImage: `url(${assetsUrl}/static/topography.png)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}>
                <Preview>{preview}</Preview>
                {/* Outlook ignores `max-width` and would stretch the card
                    across the background, so a 640px table holds it there.
                    The table opens and closes in separate comments; Outlook
                    drops the stray `</div>` in between. */}
                <Outlook html='<table role="presentation" align="center" width="640" border="0" cellpadding="0" cellspacing="0"><tr><td>' />
                <Container className="mx-auto w-full max-w-[640px] rounded-2xl border border-solid border-hairline bg-surface">
                  <Section className="px-6 py-6">
                    <Img
                      src={`${assetsUrl}/static/logo.webp`}
                      alt={companyName}
                      width="32"
                      height="32"
                      className="block"
                    />
                  </Section>
                  {children}
                  <Footer companyName={companyName} {...footer} />
                </Container>
                <Outlook html="</td></tr></table>" />
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </Tailwind>
  </Html>
);
