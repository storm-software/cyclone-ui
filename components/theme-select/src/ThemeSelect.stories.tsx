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

import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { ThemeSelect } from "./ThemeSelect";

const meta = {
  title: "Form/ThemeSelect",
  component: ThemeSelect,
  tags: ["autodocs"],
  render: (props, { id }) => (
    <Form name={`themeSelect-${id}`} initialValues={{ theme: "brand" }}>
      <Field name="theme">
        <Field.Label>Theme</Field.Label>
        <ThemeSelect {...props} />
      </Field>
    </Form>
  )
} satisfies Meta<typeof ThemeSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const trigger = canvasElement.querySelector<HTMLElement>(
      "[data-select-trigger]"
    )!;
    await userEvent.click(trigger);

    const options = await within(document.body).findAllByRole("option");
    await expect(options.map(option => option.textContent)).toEqual(
      expect.arrayContaining(["Base", "Brand", "Danger", "Success"])
    );
  }
};
