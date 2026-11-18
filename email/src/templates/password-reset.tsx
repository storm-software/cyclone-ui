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

export interface PasswordResetEmailProps extends BaseEmailProps {
  /** The password reset link. */
  url: string;
}

export const PasswordResetEmail = ({
  url,
  ...layout
}: PasswordResetEmailProps) => (
  <EmailLayout preview="Reset your password" {...layout}>
    <Section className="px-6 pt-20 pb-14">
      <Section className="mb-12">
        <HeadingText level="hero">Password reset</HeadingText>
        <BodyText className="mt-8">
          We received a request to reset your password for {layout.companyName}.
        </BodyText>
        <BodyText size="sm" className="mt-5">
          If you didn&apos;t request a reset, you can safely ignore this email.
        </BodyText>
      </Section>
      <Button href={url} variant="primary">
        Create new password
      </Button>
    </Section>
  </EmailLayout>
);

PasswordResetEmail.PreviewProps = {
  companyName: previewProps.companyName,
  footer: previewProps.footer,
  url: previewProps.url
} satisfies PasswordResetEmailProps;

export default PasswordResetEmail;
