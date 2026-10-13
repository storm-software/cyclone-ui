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

import type { FieldProps } from "@cyclone-ui/field";
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { RadioGroup } from "./RadioGroup";

// Story args configure the wrapping `Field`, not the `RadioGroup` itself.
type RadioGroupStoryArgs = Omit<FieldProps<string>, "children" | "name">;

const options: {
  name: string;
  value: string;
  description: string;
  disabled?: boolean;
}[] = [
  {
    name: "Apple",
    value: "Apple",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    name: "Pear",
    value: "Pear",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
  {
    name: "Blackberry",
    value: "Blackberry",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
  },
  {
    name: "Peach",
    value: "Peach",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  }
];

const renderGroup =
  (items = options) =>
  ({ defaultValue, ...props }: any, { id }: { id: string }) => (
    <Form name={`formName-${id}`} initialValues={{ selectName: defaultValue }}>
      <Field name="selectName" {...props}>
        <Field.Label>Label Text</Field.Label>
        <RadioGroup size={props.size} width="500px">
          {items.map(option => (
            <RadioGroup.Item
              key={option.value}
              value={option.value}
              description={option.description}
              disabled={option.disabled}>
              {option.name}
            </RadioGroup.Item>
          ))}
        </RadioGroup>
      </Field>
    </Form>
  );

const meta: Meta<RadioGroupStoryArgs> = {
  title: "Form/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  render: renderGroup()
} satisfies Meta<RadioGroupStoryArgs>;

export default meta;

type Story = StoryObj<RadioGroupStoryArgs>;

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
  args: {}
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

export const DefaultValue: Story = {
  args: {
    defaultValue: "Blackberry"
  }
};

export const DisabledItem: Story = {
  args: {
    defaultValue: "Apple"
  },
  render: renderGroup(
    options.map(option => ({
      ...option,
      disabled: option.value === "Blackberry"
    }))
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    // Story tsconfigs have no DOM lib, so `Element` is not typed here.
    const radios = () =>
      canvas.getAllByRole("radio") as unknown as {
        getAttribute: (name: string) => string | null;
      }[];
    const checked = () =>
      radios()
        .filter(radio => radio.getAttribute("aria-checked") === "true")
        .map(radio => radio.getAttribute("value"));

    await waitFor(async () => expect(checked()).toEqual(["Apple"]));

    // Pressing an item's text selects it and only it.
    await userEvent.click(canvas.getByText("Pear"));
    await waitFor(async () => expect(checked()).toEqual(["Pear"]));

    // A disabled item can't be selected.
    await userEvent.click(canvas.getByText("Blackberry"), {
      pointerEventsCheck: 0
    });
    await expect(checked()).toEqual(["Pear"]);
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
