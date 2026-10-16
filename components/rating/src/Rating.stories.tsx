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
import { Heart } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text, Theme, View } from "@tamagui/core";
import { useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import type { RatingProps } from "./Rating";
import { Rating } from "./Rating";

type RatingStoryArgs = RatingProps &
  Pick<
    FieldProps<number>,
    "required" | "theme" | "validate" | "showErrorsBeforeBlur"
  >;

const meta: Meta<RatingStoryArgs> = {
  title: "Form/Rating",
  component: Rating,
  tags: ["autodocs"],
  args: {
    defaultValue: 2,
    max: 5,
    precision: 1,
    size: "md",
    readOnly: false,
    disabled: false,
    highlightSelectedOnly: false
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"]
    },
    precision: {
      control: "inline-radio",
      options: [1, 0.5, 0.25, 0.1]
    }
  },
  render: (
    {
      defaultValue,
      disabled,
      required,
      size,
      theme,
      showErrorsBeforeBlur,
      validate,
      ...control
    }: RatingStoryArgs,
    { id }: { id: string }
  ) => (
    <Form name={`formName-${id}`} initialValues={{ ratingName: defaultValue }}>
      <Field
        name="ratingName"
        disabled={disabled}
        required={required}
        size={size}
        theme={theme}
        showErrorsBeforeBlur={showErrorsBeforeBlur}
        validate={validate}>
        <Field.Label>Label Text</Field.Label>
        <Rating {...control} />
      </Field>
    </Form>
  )
};

export default meta;
type Story = StoryObj<RatingStoryArgs>;

const validation = (
  type:
    | "danger"
    | "warning"
    | "info"
    | "discovery"
    | "success"
    | "positive"
    | "negative"
): NonNullable<FieldProps["validate"]> => ({
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
  play: async ({ canvasElement }) => {
    const rating = within(canvasElement).getByRole("slider");

    await expect(rating).toHaveAttribute("aria-valuenow", "2");

    await userEvent.tab();
    await expect(rating).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(rating).toHaveAttribute("aria-valuenow", "3");
    await expect(
      within(rating).queryByTestId("rating-penultimate-confetti")
    ).toBeInTheDocument();
    await expect(
      within(rating).queryByTestId("rating-highest-confetti")
    ).toBeInTheDocument();

    await userEvent.keyboard("{ArrowRight}");
    await expect(rating).toHaveAttribute("aria-valuenow", "4");
    await expect(
      within(rating).getByTestId("rating-penultimate-confetti")
    ).not.toBeEmptyDOMElement();
    await expect(
      within(rating).getByTestId("rating-highest-confetti")
    ).toBeEmptyDOMElement();

    await userEvent.keyboard("{End}");
    await expect(rating).toHaveAttribute("aria-valuenow", "5");
    await expect(
      within(rating).getByTestId("rating-highest-confetti")
    ).not.toBeEmptyDOMElement();

    await userEvent.keyboard("{Home}");
    await expect(rating).toHaveAttribute("aria-valuenow", "0");
  }
};

export const Required: Story = {
  args: {
    required: true
  }
};

export const DefaultValue: Story = {
  args: {
    defaultValue: 3
  },
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByRole("slider")).toHaveAttribute(
      "aria-valuenow",
      "3"
    );
  }
};

const ControlledRating = (args: RatingProps) => {
  const [value, setValue] = useState<number | null>(2);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <View flexDirection="row" alignItems="center" gap="md">
      <Rating
        {...args}
        value={value}
        onChange={setValue}
        onChangeActive={setHover}
      />
      <Text color="color">{hover ?? value ?? "No rating"}</Text>
    </View>
  );
};

/** Click the selected value again to clear it. */
export const HoverFeedback: Story = {
  render: args => <ControlledRating {...args} />
};

export const HalfRatings: Story = {
  args: {
    defaultValue: 2.5,
    precision: 0.5
  },
  play: async ({ canvasElement }) => {
    const rating = within(canvasElement).getByRole("slider");
    rating.focus();
    await userEvent.keyboard(
      "{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}"
    );
    await expect(rating).toHaveAttribute("aria-valuenow", "4.5");
    await expect(
      within(rating).getByTestId("rating-penultimate-confetti")
    ).not.toBeEmptyDOMElement();
    await expect(
      within(rating).getByTestId("rating-highest-confetti")
    ).toBeEmptyDOMElement();
  }
};

export const ReadOnly: Story = {
  args: {
    value: 3.5,
    precision: 0.5,
    readOnly: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const NoRating: Story = {
  args: {
    defaultValue: null
  }
};

export const Sizes: Story = {
  render: args => (
    <View gap="md">
      <Rating {...args} size="sm" />
      <Rating {...args} size="md" />
      <Rating {...args} size="lg" />
    </View>
  )
};

export const CustomIcon: Story = {
  args: {
    icon: Heart,
    defaultValue: 3,
    precision: 0.5
  },
  render: args => (
    <Theme name="danger">
      <Rating {...args} />
    </Theme>
  )
};

export const CustomMax: Story = {
  args: {
    max: 10,
    defaultValue: 7
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
    await expect(canvas.queryByText("Please select at least 3 stars")).toBe(
      null
    );
    await userEvent.tab();
    await waitFor(async () =>
      expect(canvas.getByText("Please select at least 3 stars")).toBeVisible()
    );
  }
};

export const HighlightSelectedOnly: Story = {
  args: {
    highlightSelectedOnly: true,
    defaultValue: 3
  }
};

export const WarningTheme: Story = {
  render: args => (
    <Theme name="warning">
      <Rating {...args} />
    </Theme>
  )
};

export const Discovery: Story = {
  args: {
    validate: validation("discovery")
  }
};

export const Error: Story = {
  args: {
    showErrorsBeforeBlur: true,
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
