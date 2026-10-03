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

import { Form } from "@cyclone-ui/form";
import { Heart } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { RatingField } from "./RatingField";

const meta: Meta<typeof RatingField> = {
  title: "Form/RatingField",
  component: RatingField,
  tags: ["autodocs"],
  // `control` holds props for `RatingField.Control`, such as `precision`.
  render: ({ defaultValue, control, ...props }: any, { id }: { id: string }) => (
    <Form
      name={`formName-${id}`}
      initialValues={{ ratingFieldName: defaultValue }}>
      <RatingField name="ratingFieldName" {...props}>
        <RatingField.Label>Label Text</RatingField.Label>
        <RatingField.Control {...control} />
      </RatingField>
    </Form>
  )
} satisfies Meta<typeof RatingField>;

export default meta;

type Story = StoryObj<typeof RatingField>;

const validation = (
  type:
    | "danger"
    | "warning"
    | "info"
    | "discovery"
    | "success"
    | "positive"
    | "negative"
) => ({
  onChange: [
    () => [
      {
        message: "This is an example validation message",
        type
      }
    ]
  ]
});

export const Base: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const rating = await within(canvasElement).findByRole("slider", {
      name: /Label Text/
    });

    await expect(rating).toHaveAttribute("aria-valuenow", "0");

    // The rating is controlled by the form, so the value only moves if the
    // change reaches the form state.
    await userEvent.tab();
    await expect(rating).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}{ArrowRight}");
    await waitFor(() => expect(rating).toHaveAttribute("aria-valuenow", "2"));
  }
};

export const Required: Story = {
  args: {
    required: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 3
  }
};

export const DefaultValue: Story = {
  args: {
    defaultValue: 3
  },
  play: async ({ canvasElement }) => {
    const rating = await within(canvasElement).findByRole("slider");

    await expect(rating).toHaveAttribute("aria-valuenow", "3");
  }
};

export const HalfRatings: Story = {
  args: {
    defaultValue: 2.5,
    control: { precision: 0.5 }
  }
};

export const ReadOnly: Story = {
  args: {
    defaultValue: 3.5,
    control: { precision: 0.5, readOnly: true }
  }
};

export const CustomIcon: Story = {
  args: {
    defaultValue: 3,
    control: { icon: Heart, max: 10 }
  }
};

/** Shows an error until at least three stars are selected. */
export const MinimumRating: Story = {
  args: {
    defaultValue: 4,
    validate: {
      onChange: [
        (value: number | null) =>
          (value ?? 0) < 3
            ? [{ message: "Please select at least 3 stars", type: "danger" }]
            : []
      ]
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = await canvas.findByRole("slider");

    await expect(canvas.queryByText("Please select at least 3 stars")).toBe(
      null
    );

    await userEvent.tab();
    await userEvent.keyboard("{ArrowLeft}{ArrowLeft}");
    await waitFor(() => expect(rating).toHaveAttribute("aria-valuenow", "2"));
    await expect(
      await canvas.findByText("Please select at least 3 stars")
    ).toBeVisible();
  }
};

export const Brand: Story = {
  args: {
    theme: "brand",
    defaultValue: 3
  }
};

export const Discovery: Story = {
  args: {
    validate: validation("discovery")
  }
};

export const Error: Story = {
  args: {
    validate: validation("danger")
  }
};

export const Warning: Story = {
  args: {
    validate: validation("warning")
  }
};

export const Info: Story = {
  args: {
    validate: validation("info")
  }
};

export const Success: Story = {
  args: {
    validate: validation("success")
  }
};

export const SmallSize: Story = { args: { size: "sm", defaultValue: 3 } };

export const MediumSize: Story = { args: { size: "md", defaultValue: 3 } };

export const LargeSize: Story = { args: { size: "lg", defaultValue: 3 } };
