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

import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type { PrivacyChoicesCategory } from "./PrivacyChoices";
import { PrivacyChoices } from "./PrivacyChoices";

const categories: PrivacyChoicesCategory[] = [
  {
    id: "advertising",
    label: "Advertising and Marketing Cookies",
    description:
      "These cookies may be set by our advertising partners to build a profile of your interests and show you relevant ads on other sites. Turning them off means you will still see ads, but they will be less relevant to you."
  },
  {
    id: "functional",
    label: "Functional Cookies",
    description:
      "These cookies remember the choices you make, such as your language or region, to provide a more personal experience. Turning them off may stop some of these features from working."
  },
  {
    id: "necessary",
    label: "Strictly Necessary Cookies",
    required: true,
    description:
      "These cookies are needed for the website to work and to keep it secure, so they can't be turned off. They are usually set in response to your actions, such as signing in or filling in forms."
  }
];

const meta = {
  title: "Blocks/PrivacyChoices",
  component: PrivacyChoices,
  tags: ["autodocs"],
  args: {
    categories,
    description:
      "Depending on where you live, you may have the right to opt out of certain sharing of your personal information with third-party advertising partners. Choose which categories of cookies we may use below. Strictly necessary cookies keep the site working and secure, so they are always active.",
    onValueChange: fn()
  }
} satisfies Meta<typeof PrivacyChoices>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await userEvent.click(
      canvas.getByRole("button", { name: "Your Privacy Choices" })
    );
    await userEvent.click(
      await body.findByRole("tab", { name: "Functional Cookies" })
    );
    const functional = await body.findByRole("switch", {
      name: "Functional Cookies"
    });
    await expect(functional).toBeChecked();
    await userEvent.click(functional);
    await waitFor(async () => expect(functional).not.toBeChecked());

    await userEvent.click(
      body.getByRole("tab", { name: "Strictly Necessary Cookies" })
    );
    await expect(await body.findByText("Always Active")).toBeVisible();

    await userEvent.click(
      body.getByRole("button", { name: "Confirm My Choices" })
    );
    await expect(args.onValueChange).toHaveBeenLastCalledWith({
      advertising: true,
      functional: false,
      necessary: true
    });
  }
};

export const RejectAll: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await userEvent.click(
      canvas.getByRole("button", { name: "Your Privacy Choices" })
    );
    await userEvent.click(
      await body.findByRole("button", { name: "Reject All But Necessary" })
    );
    await expect(args.onValueChange).toHaveBeenLastCalledWith({
      advertising: false,
      functional: false,
      necessary: true
    });
  }
};

export const OptIn: Story = {
  args: {
    defaultValue: { advertising: false, functional: false }
  }
};
