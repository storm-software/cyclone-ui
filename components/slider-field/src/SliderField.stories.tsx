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
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { SliderField } from "./SliderField";

const meta: Meta<typeof SliderField> = {
  title: "Form/SliderField",
  component: SliderField,
  tags: ["autodocs"],
  args: {
    defaultValue: 30
  },
  // `control` holds props for `SliderField.Control`, such as `marks`.
  render: ({ defaultValue, control, ...props }: any, { id }: { id: string }) => (
    <Form
      name={`formName-${id}`}
      initialValues={{ sliderFieldName: defaultValue }}>
      <SliderField name="sliderFieldName" maxWidth="500px" {...props}>
        <SliderField.Label>Label Text</SliderField.Label>
        <SliderField.Control {...control} />
      </SliderField>
    </Form>
  )
} satisfies Meta<typeof SliderField>;

export default meta;

type Story = StoryObj<typeof SliderField>;

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
    const slider = await within(canvasElement).findByRole("slider", {
      name: /Label Text/
    });

    await expect(slider).toHaveAttribute("aria-valuenow", "30");

    // The slider is controlled by the form, so the value only moves if the
    // change reaches the form state.
    await userEvent.tab();
    await expect(slider).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    await waitFor(() => expect(slider).toHaveAttribute("aria-valuenow", "31"));
  }
};

export const Range: Story = {
  args: {
    defaultValue: [20, 37]
  },
  play: async ({ canvasElement }) => {
    const thumbs = await within(canvasElement).findAllByRole("slider", {
      name: /Label Text/
    });

    await expect(thumbs).toHaveLength(2);
    await expect(thumbs[0]).toHaveAttribute("aria-valuenow", "20");
    await expect(thumbs[1]).toHaveAttribute("aria-valuenow", "37");
  }
};

export const NoInitialValue: Story = {
  args: {
    defaultValue: undefined
  }
};

export const Required: Story = {
  args: {
    required: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Marks: Story = {
  args: {
    defaultValue: 20,
    control: {
      step: 10,
      marks: true,
      valueLabelDisplay: "auto"
    }
  }
};

export const LabelledMarks: Story = {
  args: {
    defaultValue: 37,
    control: {
      marks: [
        { value: 0, label: "0°C" },
        { value: 20, label: "20°C" },
        { value: 37, label: "37°C" },
        { value: 100, label: "100°C" }
      ],
      valueLabelDisplay: "auto",
      valueLabelFormat: (value: number) => `${value}°C`
    }
  }
};

/** Shows a warning above 80. */
export const MaximumValue: Story = {
  args: {
    defaultValue: 80,
    validate: {
      onChange: [
        (value: number) =>
          value > 80
            ? [{ message: "Values above 80 may be unstable", type: "warning" }]
            : []
      ]
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = await canvas.findByRole("slider");

    await expect(canvas.queryByText("Values above 80 may be unstable")).toBe(
      null
    );

    await userEvent.tab();
    await userEvent.keyboard("{ArrowRight}");
    await waitFor(() => expect(slider).toHaveAttribute("aria-valuenow", "81"));
    // The message fades in, so wait for it to finish appearing.
    await waitFor(() =>
      expect(canvas.getByText("Values above 80 may be unstable")).toBeVisible()
    );
  }
};

export const Brand: Story = {
  args: {
    theme: "brand"
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

export const SmallSize: Story = { args: { size: "sm" } };

export const MediumSize: Story = { args: { size: "md" } };

export const LargeSize: Story = { args: { size: "lg" } };
