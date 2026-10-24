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
import { previewProps } from "../blocks";
import { BodyText, Button, EmailLayout, HeadingText } from "../components";

export interface SubscriptionUpdateEmailProps extends BaseEmailProps {
  /** The subscription management page. */
  url: string;
  userName: string;
  planName: string;
  nextBillingDate: string;
}

export const SubscriptionUpdateEmail = ({
  url,
  userName,
  planName,
  nextBillingDate,
  ...layout
}: SubscriptionUpdateEmailProps) => (
  <EmailLayout
    preview={`Your ${planName} plan with ${layout.companyName} renewed`}
    {...layout}>
    <Section className="px-6 pt-20 pb-14">
      <Section className="mb-12 max-w-[480px]">
        <HeadingText level="hero">Plan renewed</HeadingText>
        <BodyText className="mt-8">
          Hi {userName}, your {planName} subscription has been renewed.
        </BodyText>
        <BodyText className="mt-5">
          Your payment method has been charged. The next charge will be on{" "}
          <strong className="font-semibold text-emphasis">
            {nextBillingDate}
          </strong>
          . You can modify your payment method or cancel your subscription
          anytime from the {layout.companyName} billing settings.
        </BodyText>
      </Section>
      <Button href={url} variant="primary">
        Manage subscription
      </Button>
    </Section>
  </EmailLayout>
);

SubscriptionUpdateEmail.PreviewProps = {
  companyName: previewProps.companyName,
  footer: previewProps.footer,
  url: previewProps.url,
  userName: "Alex",
  planName: "Pro",
  nextBillingDate: "November 24, 2026"
} satisfies SubscriptionUpdateEmailProps;

export default SubscriptionUpdateEmail;
