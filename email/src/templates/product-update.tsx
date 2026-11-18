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

import { Column, Row, Section } from "react-email";
import type { BaseEmailProps } from "../blocks";
import { Hero, NeedHelp, previewProps } from "../blocks";
import {
  BodyText,
  Card,
  EmailLayout,
  EyebrowText,
  HeadingText,
  LinkText
} from "../components";

export interface ProductUpdateEmailProps extends BaseEmailProps {
  /** The changelog or blog. */
  url: string;
  helpUrl: string;
  heroImageUrl?: string;
}

const articles = [
  {
    title: "Less manual work",
    body: "Fewer status updates, more automated work."
  },
  {
    title: "Clearer priorities",
    body: "How we rebuilt the inbox around what matters next."
  }
];

export const ProductUpdateEmail = ({
  url,
  helpUrl,
  heroImageUrl,
  ...layout
}: ProductUpdateEmailProps) => (
  <EmailLayout preview={`What's new in ${layout.companyName}`} {...layout}>
    <Hero src={heroImageUrl} />
    <Section className="px-6 pt-12 pb-10">
      <EyebrowText variant="ink">Product update</EyebrowText>
      <HeadingText level="hero" className="mt-4 max-w-[480px]">
        What&apos;s new in {layout.companyName}
      </HeadingText>
    </Section>

    <Section className="px-6 pb-16">
      <BodyText className="mb-4">
        Hello from the {layout.companyName} team.
      </BodyText>
      <BodyText className="mb-4">
        This month was about making {layout.companyName} feel smoother, faster,
        and easier to use in everyday work.
      </BodyText>
      <BodyText className="mb-4">
        We shipped new features, improved key workflows, and made small but
        meaningful updates that reduce friction across the product.
      </BodyText>
      <BodyText>
        We&apos;re continuing to shape {layout.companyName} around real
        workflows, not just features, so everything feels more connected over
        time.
      </BodyText>
    </Section>

    <Section className="px-6 pb-12">
      <HeadingText level="lg">We launched Smart Tasks</HeadingText>
      <Card className="mt-8">
        <HeadingText level="sm">Auto-prioritization</HeadingText>
        <BodyText className="mt-3">
          All your tasks for the week are surfaced based on urgency and impact.
        </BodyText>
        <BodyText className="mt-4">
          <LinkText href={url}>Explore Smart Tasks</LinkText>
        </BodyText>
      </Card>
      <BodyText size="lg" variant="emphasis" className="mt-12 max-w-[456px]">
        Smart Tasks analyzes your projects in real time and helps organize{" "}
        <span className="text-ink">
          your workload automatically. As things change, your task list updates
          so you&apos;re always focused on what matters most.
        </span>
      </BodyText>
    </Section>

    <Section className="px-6 pb-4">
      <HeadingText level="lg">Read more on our blog</HeadingText>
      <Row className="mt-8">
        {articles.map((article, index) => (
          <Column
            key={article.title}
            className={`w-1/2 align-top ${index === 0 ? "pr-2" : "pl-2"}`}>
            <Card>
              <HeadingText level="sm">{article.title}</HeadingText>
              <BodyText className="mt-2">{article.body}</BodyText>
              <BodyText className="mt-4">
                <LinkText href={url}>Read more</LinkText>
              </BodyText>
            </Card>
          </Column>
        ))}
      </Row>
    </Section>

    <NeedHelp href={helpUrl} />
  </EmailLayout>
);

ProductUpdateEmail.PreviewProps = {
  companyName: previewProps.companyName,
  footer: {
    ...previewProps.footer,
    unsubscribeUrl: "https://stormsoftware.com/unsubscribe"
  },
  heroImageUrl: previewProps.heroImageUrl,
  helpUrl: previewProps.helpUrl,
  url: previewProps.url
} satisfies ProductUpdateEmailProps;

export default ProductUpdateEmail;
