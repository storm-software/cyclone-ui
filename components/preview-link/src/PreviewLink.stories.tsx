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

import { BodyText } from "@cyclone-ui/body-text";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { PreviewLinkProps } from "./PreviewLink";
import { PreviewLink } from "./PreviewLink";

const meta: Meta<PreviewLinkProps> = {
  title: "Triggers/PreviewLink",
  component: PreviewLink,
  tags: ["autodocs"],
  render: (args: any) => (
    <BodyText>
      Lorem ipsum <PreviewLink {...args}>dolor sit</PreviewLink> amet
    </BodyText>
  )
} satisfies Meta<PreviewLinkProps>;

export default meta;

type Story = StoryObj<PreviewLinkProps>;

export const Base: Story = {
  args: {
    href: "#",
    preview: "Dolor sit: a short description of the linked page."
  }
};

export const Brand: Story = {
  args: {
    href: "#",
    theme: "brand",
    preview: "Dolor sit: a short description of the linked page."
  }
};

export const External: Story = {
  args: {
    href: "https://stormsoftware.com",
    external: true,
    preview: "Opens stormsoftware.com in a new tab."
  }
};

export const Subtle: Story = {
  args: {
    href: "#",
    variant: "subtle",
    preview: "Dolor sit: a short description of the linked page."
  }
};
