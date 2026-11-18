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
import { Hero, NeedHelp, NextSteps, previewProps } from "../blocks";
import {
  BodyText,
  Button,
  EmailLayout,
  HeadingText,
  LinkText
} from "../components";

export interface SubscriptionConfirmationEmailProps extends BaseEmailProps {
  /** The app. */
  url: string;
  billingUrl: string;
  helpUrl: string;
  userName: string;
  planName: string;
  nextBillingDate: string;
  heroImageUrl?: string;
}

export const SubscriptionConfirmationEmail = ({
  url,
  billingUrl,
  helpUrl,
  userName,
  planName,
  nextBillingDate,
  heroImageUrl,
  ...layout
}: SubscriptionConfirmationEmailProps) => (
  <EmailLayout
    preview={`You're on ${planName} with ${layout.companyName}`}
    {...layout}>
    <Hero src={heroImageUrl} />
    <Section className="px-6 pt-16 pb-20">
      <Section className="mb-12 max-w-[490px]">
        <HeadingText level="hero">Welcome to {planName}</HeadingText>
        <BodyText className="mt-6">
          Thanks for starting your {planName} subscription, {userName}.
        </BodyText>
        <BodyText className="mt-5">
          Your payment method has been charged. The next charge will be on{" "}
          <strong className="font-semibold text-emphasis">
            {nextBillingDate}
          </strong>
          .
        </BodyText>
        <BodyText className="mt-5">
          You can modify your payment method or cancel your subscription anytime
          from the {layout.companyName}{" "}
          <LinkText href={billingUrl}>billing settings</LinkText>.
        </BodyText>
      </Section>
      <Button href={url} variant="primary">
        Open {layout.companyName}
      </Button>
    </Section>
    <NextSteps
      steps={[
        {
          title: "Set up your workspace",
          body: "Complete the basics to get the most out of your account.",
          label: "Complete setup",
          href: url
        },
        {
          title: "Invite your team",
          body: "Collaboration works best when everyone's in.",
          label: "Invite teammates",
          href: url
        }
      ]}
    />
    <NeedHelp href={helpUrl} />
  </EmailLayout>
);

SubscriptionConfirmationEmail.PreviewProps = {
  companyName: previewProps.companyName,
  footer: previewProps.footer,
  heroImageUrl: previewProps.heroImageUrl,
  helpUrl: previewProps.helpUrl,
  url: previewProps.url,
  billingUrl: "https://stormsoftware.com/billing",
  userName: "Alex",
  planName: "Pro",
  nextBillingDate: "November 24, 2026"
} satisfies SubscriptionConfirmationEmailProps;

export default SubscriptionConfirmationEmail;
