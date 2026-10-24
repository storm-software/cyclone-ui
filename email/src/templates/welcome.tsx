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
import { BodyText, EmailLayout, HeadingText } from "../components";

export interface WelcomeEmailProps extends BaseEmailProps {
  /** The app, where the workspace setup and invites live. */
  url: string;
  helpUrl: string;
  heroImageUrl?: string;
}

export const WelcomeEmail = ({
  url,
  helpUrl,
  heroImageUrl,
  ...layout
}: WelcomeEmailProps) => (
  <EmailLayout preview={`Welcome to ${layout.companyName}`} {...layout}>
    <Section className="px-6 pt-16 pb-12">
      <HeadingText level="hero" className="max-w-[490px]">
        Welcome to {layout.companyName}
      </HeadingText>
      <BodyText className="mt-10 max-w-[490px]">
        You can start exploring right away, set up your workspace, and invite
        your team if you&apos;re working with others.
      </BodyText>
    </Section>
    <Hero src={heroImageUrl} />
    <Section className="pt-14">
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
    </Section>
    <NeedHelp href={helpUrl} />
  </EmailLayout>
);

WelcomeEmail.PreviewProps = {
  companyName: previewProps.companyName,
  footer: {
    ...previewProps.footer,
    unsubscribeUrl: "https://stormsoftware.com/unsubscribe"
  },
  heroImageUrl: previewProps.heroImageUrl,
  helpUrl: previewProps.helpUrl,
  url: previewProps.url
} satisfies WelcomeEmailProps;

export default WelcomeEmail;
