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
import { Hero, previewProps } from "../blocks";
import { BodyText, Button, EmailLayout, HeadingText } from "../components";

export interface ActivationEmailProps extends BaseEmailProps {
  /** The email confirmation link. */
  url: string;
  heroImageUrl?: string;
}

export const ActivationEmail = ({
  url,
  heroImageUrl,
  ...layout
}: ActivationEmailProps) => (
  <EmailLayout preview="Confirm your email address" {...layout}>
    <Hero src={heroImageUrl} />
    <Section className="px-6 py-14">
      <Section className="mb-12">
        <HeadingText level="hero">Almost there</HeadingText>
        <BodyText className="mt-5">
          Thank you for signing up for {layout.companyName}. To verify your
          account, we just need to confirm your email.
        </BodyText>
        <BodyText size="sm" className="mt-5">
          If you didn&apos;t create an account, you can safely ignore this
          email.
        </BodyText>
      </Section>
      <Button href={url} variant="primary">
        Confirm email
      </Button>
    </Section>
  </EmailLayout>
);

ActivationEmail.PreviewProps = {
  companyName: previewProps.companyName,
  footer: previewProps.footer,
  heroImageUrl: previewProps.heroImageUrl,
  url: previewProps.url
} satisfies ActivationEmailProps;

export default ActivationEmail;
