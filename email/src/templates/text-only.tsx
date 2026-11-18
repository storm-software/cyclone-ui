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
import { BodyText, EmailLayout, HeadingText, LinkText } from "../components";

export interface TextOnlyEmailProps extends BaseEmailProps {
  url: string;
}

export const TextOnlyEmail = ({ url, ...layout }: TextOnlyEmailProps) => (
  <EmailLayout
    preview={`A short note from the ${layout.companyName} team`}
    {...layout}>
    <Section className="px-6 pt-20 pb-14">
      <Section className="max-w-[490px]">
        <HeadingText level="title" variant="editorial" className="mb-8">
          A note from us
        </HeadingText>
        <BodyText>
          We don&apos;t send long emails often. When we do, we keep them plain
          (no hero, no clutter), just a direct word from the team behind{" "}
          {layout.companyName}.
        </BodyText>
        <BodyText className="mt-5">
          We&apos;re building {layout.companyName} so your team can see what
          matters, drop what doesn&apos;t, and ship without living in fifteen
          tabs. If you&apos;ve been in the product lately, thank you. Your
          feedback sharpens what we ship next.
        </BodyText>
        <BodyText className="mt-5">
          Here&apos;s to clearer priorities and less noise. When you&apos;re
          ready to jump back in, we&apos;ll be there.
        </BodyText>
        <BodyText className="mt-5">— The {layout.companyName} team</BodyText>
        <BodyText className="mt-5">
          <LinkText href={url} variant="emphasis">
            Open {layout.companyName}
          </LinkText>
        </BodyText>
      </Section>
    </Section>
  </EmailLayout>
);

TextOnlyEmail.PreviewProps = {
  companyName: previewProps.companyName,
  footer: {
    ...previewProps.footer,
    unsubscribeUrl: "https://stormsoftware.com/unsubscribe"
  },
  url: previewProps.url
} satisfies TextOnlyEmailProps;

export default TextOnlyEmail;
