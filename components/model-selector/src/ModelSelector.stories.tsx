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
import { View } from "@tamagui/core";
import { Fragment, useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type { ModelSelectorProps } from "./ModelSelector";
import { ModelSelector } from "./ModelSelector";

const PROVIDERS = [
  {
    name: "OpenAI",
    models: [
      { id: "gpt-5", name: "GPT-5", description: "Best for multi-step work" },
      {
        id: "gpt-5-mini",
        name: "GPT-5 mini",
        description: "Fast and affordable"
      }
    ]
  },
  {
    name: "Anthropic",
    models: [
      {
        id: "claude-sonnet-4-5",
        name: "Claude Sonnet 4.5",
        description: "Best for coding and agents"
      },
      {
        id: "claude-haiku-4-5",
        name: "Claude Haiku 4.5",
        description: "Fastest, for quick answers"
      }
    ]
  }
];

const MODELS = PROVIDERS.flatMap(provider => provider.models);

const EFFORTS = [
  { id: "low", name: "Low" },
  { id: "medium", name: "Medium" },
  { id: "high", name: "High" }
];

const ModelMenu = (props: ModelSelectorProps) => {
  const [model, setModel] = useState("gpt-5");
  const current = MODELS.find(item => item.id === model) ?? MODELS[0]!;

  return (
    <ModelSelector
      {...props}
      value={model}
      onValueChange={value => {
        setModel(value);
        props.onValueChange?.(value);
      }}>
      <ModelSelector.Trigger aria-label={`Model: ${current.name}`}>
        {current.name}
      </ModelSelector.Trigger>
      <ModelSelector.Content>
        {PROVIDERS.map((provider, index) => (
          <Fragment key={provider.name}>
            {index > 0 && <ModelSelector.Separator />}
            <ModelSelector.Group heading={provider.name}>
              {provider.models.map(item => (
                <ModelSelector.Item
                  key={item.id}
                  value={item.id}
                  description={item.description}>
                  {item.name}
                </ModelSelector.Item>
              ))}
            </ModelSelector.Group>
          </Fragment>
        ))}
      </ModelSelector.Content>
    </ModelSelector>
  );
};

const EffortMenu = (props: ModelSelectorProps) => {
  const [effort, setEffort] = useState("medium");
  const current = EFFORTS.find(item => item.id === effort) ?? EFFORTS[1]!;

  return (
    <ModelSelector
      {...props}
      value={effort}
      onValueChange={value => {
        setEffort(value);
        props.onValueChange?.(value);
      }}>
      <ModelSelector.Trigger label="Effort">{current.name}</ModelSelector.Trigger>
      <ModelSelector.Content>
        <ModelSelector.Group heading="Effort">
          {EFFORTS.map(item => (
            <ModelSelector.Item key={item.id} value={item.id}>
              {item.name}
            </ModelSelector.Item>
          ))}
        </ModelSelector.Group>
      </ModelSelector.Content>
    </ModelSelector>
  );
};

const meta: Meta<ModelSelectorProps> = {
  title: "AI/ModelSelector",
  component: ModelSelector,
  tags: ["autodocs"],
  args: { onValueChange: fn() },
  decorators: [
    Story => (
      // Tall enough for the open menu in screenshots.
      <View
        padding="xl"
        maxWidth={480}
        width="100%"
        minHeight={420}
        alignItems="flex-start">
        <Story />
      </View>
    )
  ],
  render: args => <ModelMenu {...args} />
};

export default meta;
type Story = StoryObj<ModelSelectorProps>;

export const Base: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await userEvent.click(canvas.getByRole("button", { name: "Model: GPT-5" }));
    await expect(
      await body.findByRole("group", { name: "Anthropic" })
    ).toBeInTheDocument();
    await userEvent.click(
      await body.findByRole("button", { name: /Claude Sonnet 4\.5/ })
    );
    await expect(args.onValueChange).toHaveBeenCalledWith("claude-sonnet-4-5");

    // Picking a model closes the menu.
    await waitFor(
      async () =>
        expect(
          body.queryByRole("group", { name: "Anthropic" })
        ).not.toBeInTheDocument(),
      { timeout: 3000 }
    );

    // Reopened, the selected model shows a check mark.
    await userEvent.click(
      canvas.getByRole("button", { name: "Model: Claude Sonnet 4.5" })
    );
    const selected = (
      await body.findAllByRole("button", { name: /Claude Sonnet 4\.5/ })
    ).find(element => element.hasAttribute("data-context-menu-item"));
    await expect(selected).toHaveAttribute("data-context-menu-item-adorned");
  }
};

export const Open: Story = {
  args: { defaultOpen: true }
};

export const Effort: Story = {
  render: args => <EffortMenu {...args} />,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole("button", { name: "Effort: Medium" });

    // Keyboard: Enter opens the menu, the arrows move and Enter picks.
    trigger.focus();
    await userEvent.keyboard("{Enter}");
    const high = await body.findByRole("button", { name: "High" });
    await waitFor(async () =>
      expect(body.getByRole("button", { name: "Low" })).toHaveFocus()
    );
    await userEvent.keyboard("{ArrowDown}{ArrowDown}");
    await expect(high).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onValueChange).toHaveBeenCalledWith("high");
    await expect(
      await canvas.findByRole("button", { name: "Effort: High" })
    ).toBeInTheDocument();

    // Escape closes the menu without picking.
    await userEvent.click(canvas.getByRole("button", { name: "Effort: High" }));
    await body.findByRole("button", { name: "Low" });
    await userEvent.keyboard("{Escape}");
    await waitFor(
      async () =>
        expect(
          body.queryByRole("button", { name: "Low" })
        ).not.toBeInTheDocument(),
      { timeout: 3000 }
    );
    await expect(args.onValueChange).toHaveBeenCalledTimes(1);
  }
};

export const EffortOpen: Story = {
  args: { defaultOpen: true },
  render: args => <EffortMenu {...args} />
};

export const Toolbar: Story = {
  render: args => (
    <View flexDirection="row" justifyContent="flex-end" gap="md">
      <ModelMenu {...args} />
      <EffortMenu {...args} />
    </View>
  )
};
