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

import { Img, Section } from "react-email";
import type { EmailLayoutProps } from "./components";
import {
  assetsUrl,
  BodyText,
  Divider,
  EyebrowText,
  HeadingText,
  LinkText
} from "./components";

/** The layout props every template accepts. */
export type BaseEmailProps = Pick<
  EmailLayoutProps,
  "companyName" | "mode" | "footer"
>;

/** Shared `PreviewProps` for the React Email preview server. */
export const previewProps = {
  companyName: "Storm Software",
  footer: {
    tagline: "Build faster with a design system that works everywhere.",
    links: [
      { label: "Website", href: "https://stormsoftware.com" },
      { label: "Docs", href: "https://docs.stormsoftware.com" },
      { label: "GitHub", href: "https://github.com/storm-software" }
    ],
    address: "123 Market Street, Floor 1, Tech City, CA 94102"
  },
  heroImageUrl: `${assetsUrl}/static/hero.webp`,
  helpUrl: "https://stormsoftware.com/support",
  url: "https://stormsoftware.com"
} satisfies BaseEmailProps & Record<string, unknown>;

export const Hero = ({ src }: { src?: string }) =>
  src ? (
    <Section className="px-6">
      <Img
        src={src}
        alt=""
        width="592"
        className="block h-auto w-full max-w-[592px] rounded-2xl"
      />
    </Section>
  ) : null;

export interface NextStep {
  title: string;
  body: string;
  label: string;
  href: string;
}

export const NextSteps = ({ steps }: { steps: NextStep[] }) => (
  <Section className="px-6 pt-4">
    <HeadingText level="lg">Get started</HeadingText>
    {steps.map(step => (
      <Section key={step.title}>
        <Section className="py-10">
          <HeadingText level="sm">{step.title}</HeadingText>
          <BodyText className="my-3">{step.body}</BodyText>
          <LinkText href={step.href} size="md">
            {step.label}
          </LinkText>
        </Section>
        <Divider size="sm" />
      </Section>
    ))}
  </Section>
);

export const NeedHelp = ({ href }: { href: string }) => (
  <Section className="px-6 pt-12 pb-16">
    <EyebrowText variant="ink">Need help?</EyebrowText>
    <BodyText size="sm" className="mt-3 max-w-[490px]">
      Find guides, tips, and best practices anytime in our{" "}
      <LinkText href={href}>Help Center</LinkText>.
    </BodyText>
  </Section>
);
