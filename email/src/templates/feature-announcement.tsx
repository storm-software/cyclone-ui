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

import { Section } from "react-email";
import type { BaseEmailProps } from "../blocks";
import { Hero, NeedHelp, previewProps } from "../blocks";
import {
  BodyText,
  Button,
  Callout,
  Card,
  EmailLayout,
  EyebrowText,
  HeadingText
} from "../components";

export interface FeatureAnnouncementEmailProps extends BaseEmailProps {
  /** The feature's page. */
  url: string;
  helpUrl: string;
  featureName: string;
  heroImageUrl?: string;
}

const highlights = [
  {
    title: "Auto-prioritization",
    body: "All your tasks for the week are surfaced based on urgency and impact."
  },
  {
    title: "Less manual work",
    body: "Fewer status updates, more automated work."
  },
  {
    title: "Clear focus",
    body: "Always know what to do next, with less thrash and more momentum."
  },
  {
    title: "Better alignment",
    body: "Your team stays in sync automatically."
  }
];

export const FeatureAnnouncementEmail = ({
  url,
  helpUrl,
  featureName,
  heroImageUrl,
  ...layout
}: FeatureAnnouncementEmailProps) => (
  <EmailLayout preview={`Meet ${featureName}`} {...layout}>
    <Hero src={heroImageUrl} />
    <Section className="px-6 pt-14 pb-12">
      <EyebrowText variant="ink">New in {layout.companyName}</EyebrowText>
      <HeadingText level="hero" className="mt-4 max-w-[490px]">
        Meet a new way to manage work
      </HeadingText>
      <BodyText className="mt-8 max-w-[490px]">
        Introducing {featureName}: a calmer way to organize work, surface what
        matters next, and keep your team aligned without the noise.
      </BodyText>
      <Section className="mt-10">
        <Button href={url} variant="primary">
          Explore {featureName}
        </Button>
      </Section>
    </Section>

    <Section className="px-6 pt-10 pb-4">
      <HeadingText level="lg">What&apos;s inside</HeadingText>
      {highlights.map((highlight, index) => (
        <Card key={highlight.title} className="mt-6">
          <EyebrowText>{String(index + 1).padStart(2, "0")}</EyebrowText>
          <HeadingText level="sm" className="mt-3">
            {highlight.title}
          </HeadingText>
          <BodyText className="mt-2">{highlight.body}</BodyText>
        </Card>
      ))}

      <BodyText size="lg" variant="emphasis" className="mt-12 max-w-[456px]">
        {featureName} analyzes your projects in real time and helps organize{" "}
        <span className="text-ink">
          your workload automatically. As things change, your task list updates
          so you&apos;re always focused on what matters most.
        </span>
      </BodyText>

      <Callout theme="brand" className="mt-12 text-center">
        <BodyText variant="emphasis" className="px-6 pt-8">
          &ldquo;{featureName} helps me know what to do next without thinking
          about it.&rdquo;
        </BodyText>
        <BodyText size="sm" className="mt-4 px-6 pb-8">
          Alex, Product Designer at Studio
        </BodyText>
      </Callout>

      <HeadingText level="lg" className="mt-16">
        Try {featureName}
      </HeadingText>
      <BodyText className="mt-5">See how much easier work can be.</BodyText>
      <Section className="mt-8">
        <Button href={url} variant="outlined">
          Explore {featureName}
        </Button>
      </Section>
    </Section>

    <NeedHelp href={helpUrl} />
  </EmailLayout>
);

FeatureAnnouncementEmail.PreviewProps = {
  companyName: previewProps.companyName,
  footer: {
    ...previewProps.footer,
    unsubscribeUrl: "https://stormsoftware.com/unsubscribe"
  },
  heroImageUrl: previewProps.heroImageUrl,
  helpUrl: previewProps.helpUrl,
  url: previewProps.url,
  featureName: "Smart Tasks"
} satisfies FeatureAnnouncementEmailProps;

export default FeatureAnnouncementEmail;
