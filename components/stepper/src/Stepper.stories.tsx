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

import type { IconProps } from "@cyclone-ui/icons";
import { Briefcase, ClipboardList, Cog, Confirm } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "@tamagui/core";
import { XStack } from "@tamagui/stacks";
import type { ComponentType } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import type { StepperLineStyle } from "./Stepper";
import { Stepper } from "./Stepper";

const steps: {
  value: string;
  name: string;
  description: string;
  icon: ComponentType<IconProps>;
  content: string;
}[] = [
  {
    value: "tab1",
    name: "Step One",
    description: "Pick the items to order.",
    icon: ClipboardList,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    value: "tab2",
    name: "Step Two",
    description: "Choose how they are packed.",
    icon: Cog,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    value: "tab3",
    name: "Step Three",
    description: "Enter the shipping details.",
    icon: Briefcase,
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    value: "tab4",
    name: "Step Four",
    description: "Review and place the order.",
    icon: Confirm,
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

const renderStepper =
  ({
    descriptions = false,
    markers = false,
    lineStyle
  }: {
    descriptions?: boolean;
    markers?: boolean;
    lineStyle?: (index: number) => StepperLineStyle;
  } = {}) =>
  ({ children: _children, ...rest }: any) => (
    <Stepper gap="xl" {...rest}>
      <Stepper.Header>
        {steps.map((step, index) => (
          <Stepper.Header.Item
            key={step.value}
            value={step.value}
            lineStyle={lineStyle?.(index)}
            description={descriptions ? step.description : undefined}
            marker={
              markers
                ? ({ color }) => (
                    <Stepper.Marker>
                      <step.icon color={color} size={20} />
                    </Stepper.Marker>
                  )
                : undefined
            }>
            {step.name}
          </Stepper.Header.Item>
        ))}
      </Stepper.Header>

      <Stepper.Content>
        {steps.map(step => (
          <Stepper.Content.Item key={step.value} value={step.value}>
            <Text color="ink">{step.content}</Text>
          </Stepper.Content.Item>
        ))}
      </Stepper.Content>

      <XStack gap="xl">
        <Stepper.PreviousButton />
        <Stepper.NextButton />
      </XStack>
    </Stepper>
  );

const meta: Meta<typeof Stepper> = {
  title: "Containers/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  render: renderStepper()
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Base: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
};

export const Brand: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "brand"
  }
};

export const Numbered: Story = {
  args: {
    numbered: true,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
};

export const Small: Story = {
  args: {
    size: "sm"
  }
};

export const Horizontal: Story = {
  args: {
    orientation: "horizontal"
  },
  render: renderStepper({ descriptions: true })
};

export const Descriptions: Story = {
  args: {
    showDescription: "always"
  },
  render: renderStepper({ descriptions: true })
};

export const ActiveDescription: Story = {
  args: {
    showDescription: "active"
  },
  render: renderStepper({ descriptions: true })
};

export const CurrentDetails: Story = {
  args: {
    details: "current"
  },
  render: renderStepper({ descriptions: true })
};

export const CurrentDetailsNumbered: Story = {
  args: {
    details: "current",
    numbered: true,
    orientation: "horizontal"
  },
  render: renderStepper({ descriptions: true }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // NumberFlow labels its value.
    await expect(canvas.getByRole("img", { name: "1" })).toBeInTheDocument();
    await expect(canvas.getByText("Step One")).toBeVisible();
    await expect(canvas.getByText("Step Two")).not.toBeVisible();

    await userEvent.click(canvas.getByRole("button", { name: /next/i }));
    await expect(canvas.getByRole("tab", { name: "Step Two" })).toHaveAttribute(
      "aria-selected",
      "true"
    );
    await expect(canvas.getByRole("img", { name: "2" })).toBeInTheDocument();
    await waitFor(async () =>
      expect(canvas.getByText("Step One")).not.toBeVisible()
    );
    await waitFor(async () =>
      expect(canvas.getByText("Step Two")).toBeVisible()
    );
  }
};

export const DashedLines: Story = {
  render: renderStepper({ lineStyle: () => "dashed" })
};

export const DashedHorizontal: Story = {
  args: {
    orientation: "horizontal"
  },
  render: renderStepper({ lineStyle: () => "dashed" })
};

export const MixedLines: Story = {
  render: renderStepper({
    descriptions: true,
    // Only the line into the last (optional) step is dashed
    lineStyle: index => (index === steps.length - 1 ? "dashed" : "solid")
  })
};

export const CustomMarkers: Story = {
  render: renderStepper({ descriptions: true, markers: true })
};

export const Themed: Story = {
  args: {
    themed: true,
    orientation: "horizontal"
  },
  render: renderStepper({ descriptions: true }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const next = canvas.getByRole("button", { name: /next/i });

    await userEvent.click(next);
    await userEvent.click(next);
  }
};

export const Navigation: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tab = (name: string) => canvas.getByRole("tab", { name });

    await userEvent.click(canvas.getByRole("button", { name: /next/i }));
    await expect(tab("Step Two")).toHaveAttribute("aria-selected", "true");

    // Steps that haven't been reached are locked.
    await expect(tab("Step Four")).toHaveAttribute("aria-disabled", "true");
    await userEvent.click(tab("Step Four"));
    await expect(tab("Step Two")).toHaveAttribute("aria-selected", "true");

    // Visited steps can be selected again, earlier or later.
    await userEvent.click(tab("Step One"));
    await expect(tab("Step One")).toHaveAttribute("aria-selected", "true");
    await userEvent.click(tab("Step Two"));
    await expect(tab("Step Two")).toHaveAttribute("aria-selected", "true");
  }
};

export const Discovery: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "discovery"
  }
};

export const Error: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "danger"
  }
};

export const Warning: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "warning"
  }
};

export const Info: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "info"
  }
};

export const Success: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "success"
  }
};
