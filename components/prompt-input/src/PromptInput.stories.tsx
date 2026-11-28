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
import { Context } from "@cyclone-ui/context";
import { ModelSelector } from "@cyclone-ui/model-selector";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  expect,
  fn,
  userEvent,
  waitFor,
  within
} from "storybook/test";
import type { ChatStatus, PromptInputProps } from "./PromptInput";
import { PromptInput } from "./PromptInput";

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

const file = (name: string, type: string, body = "contents") =>
  new File([body], name, { type });

const PDF = file("brief.pdf", "application/pdf");
const PNG = file("screenshot.png", "image/png");

// Pastes or drops files. Dispatched directly: testing-library's `fireEvent`
// copies a `DataTransfer`'s own properties into a new one, and it has none.
const transfer = (
  target: Element,
  type: "paste" | "dragover" | "drop",
  ...files: File[]
) => {
  const data = new DataTransfer();
  for (const item of files) data.items.add(item);
  const init = { bubbles: true, cancelable: true };
  target.dispatchEvent(
    type === "paste"
      ? new ClipboardEvent(type, { ...init, clipboardData: data })
      : new DragEvent(type, { ...init, dataTransfer: data })
  );
};

const drop = (target: Element, ...files: File[]) => {
  transfer(target, "dragover", ...files);
  transfer(target, "drop", ...files);
};

const getFileInput = (canvasElement: HTMLElement) =>
  canvasElement.querySelector<HTMLInputElement>('input[type="file"]')!;

const meta: Meta<PromptInputProps> = {
  title: "AI/PromptInput",
  component: PromptInput,
  tags: ["autodocs"],
  args: { onSubmit: fn(), onStop: fn(), onError: fn() },
  decorators: [
    Story => (
      <View padding="xl" maxWidth={640} width="100%">
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<PromptInputProps>;

export const Base: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const message = canvas.getByRole("textbox", { name: "Message" });
    const send = canvas.getByRole("button", { name: "Send" });

    // Nothing to send yet.
    await expect(send).toBeDisabled();

    // Shift+Enter adds a line; Enter sends.
    await userEvent.click(message);
    await userEvent.keyboard("Hello{Shift>}{Enter}{/Shift}world");
    await expect(message).toHaveValue("Hello\nworld");
    await expect(args.onSubmit).not.toHaveBeenCalled();
    await expect(send).toBeEnabled();
    await userEvent.keyboard("{Enter}");
    await waitFor(async () =>
      expect(args.onSubmit).toHaveBeenCalledWith(
        { text: "Hello\nworld", files: [] },
        expect.anything()
      )
    );

    // The input clears and keeps focus for the next message.
    await waitFor(async () => expect(message).toHaveValue(""));
    await expect(message).toHaveFocus();

    // The send button sends too, and focus goes back to the text.
    await userEvent.keyboard("Again");
    await userEvent.click(send);
    await waitFor(async () =>
      expect(args.onSubmit).toHaveBeenLastCalledWith(
        { text: "Again", files: [] },
        expect.anything()
      )
    );
    await waitFor(async () => expect(message).toHaveFocus());
  }
};

export const Attachments: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const message = canvas.getByRole("textbox", { name: "Message" });

    // Picked with the file dialog.
    await userEvent.upload(getFileInput(canvasElement), [PDF, PNG]);
    await expect(await canvas.findByText("brief.pdf")).toBeVisible();
    await expect(canvas.getByText("screenshot.png")).toBeVisible();

    // Removed with its button; focus moves to the text.
    await userEvent.click(
      canvas.getByRole("button", { name: "Remove brief.pdf" })
    );
    await waitFor(
      async () => expect(canvas.queryByText("brief.pdf")).not.toBeInTheDocument(),
      { timeout: 3000 }
    );
    await expect(message).toHaveFocus();
    await expect(canvas.getByText("screenshot.png")).toBeVisible();

    // Pasted into the text.
    transfer(message, "paste", file("pasted.png", "image/png"));
    await expect(await canvas.findByText("pasted.png")).toBeVisible();

    // Dropped on the input.
    drop(canvasElement.querySelector("form")!, file("notes.txt", "text/plain"));
    await expect(await canvas.findByText("notes.txt")).toBeVisible();
    await expect(canvas.getByText("screenshot.png")).toBeVisible();
    await expect(canvas.getByText("pasted.png")).toBeVisible();
    await expect(args.onError).not.toHaveBeenCalled();
  }
};

export const SendFiles: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // A file alone can be sent; it arrives as a data URL.
    await userEvent.upload(getFileInput(canvasElement), PNG);
    await userEvent.click(await canvas.findByRole("button", { name: "Send" }));
    await waitFor(async () =>
      expect(args.onSubmit).toHaveBeenCalledWith(
        {
          text: "",
          files: [
            {
              type: "file",
              mediaType: "image/png",
              filename: "screenshot.png",
              url: expect.stringMatching(/^data:image\/png;base64,/)
            }
          ]
        },
        expect.anything()
      )
    );
    await waitFor(async () =>
      expect(canvas.queryByText("screenshot.png")).not.toBeInTheDocument()
    );
  }
};

export const AcceptImages: Story = {
  args: { accept: "image/*", maxFiles: 2, maxFileSize: 1024 },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const form = canvasElement.querySelector("form")!;

    drop(form, PDF);
    await expect(args.onError).toHaveBeenLastCalledWith(
      expect.objectContaining({ code: "accept" })
    );
    drop(form, file("huge.png", "image/png", "x".repeat(2048)));
    await expect(args.onError).toHaveBeenLastCalledWith(
      expect.objectContaining({ code: "max_file_size" })
    );
    drop(
      form,
      PNG,
      file("second.png", "image/png"),
      file("third.png", "image/png")
    );
    await expect(args.onError).toHaveBeenLastCalledWith(
      expect.objectContaining({ code: "max_files" })
    );
    await expect(await canvas.findByText("second.png")).toBeVisible();
    await expect(canvas.queryByText("third.png")).not.toBeInTheDocument();
    await expect(canvas.queryByText("brief.pdf")).not.toBeInTheDocument();
  }
};

export const Submitted: Story = {
  args: { status: "submitted", defaultValue: "Why is the build slow?" }
};

export const Streaming: Story = {
  args: { status: "streaming", defaultValue: "Why is the build slow?" },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // Enter doesn't send while a reply streams; the button stops it.
    await userEvent.click(canvas.getByRole("textbox", { name: "Message" }));
    await userEvent.keyboard("{Enter}");
    await expect(args.onSubmit).not.toHaveBeenCalled();
    await userEvent.click(canvas.getByRole("button", { name: "Stop" }));
    await expect(args.onStop).toHaveBeenCalledTimes(1);
    await expect(args.onSubmit).not.toHaveBeenCalled();
  }
};

// Not `Error`: an export of that name shadows the global.
export const ErrorStatus: Story = {
  name: "Error",
  args: { status: "error", defaultValue: "Why is the build slow?" }
};

// A chat that answers after a short wait, then streams for a while.
const SimulatedChat = (args: PromptInputProps) => {
  const [status, setStatus] = useState<ChatStatus>("ready");
  const [sent, setSent] = useState<{ id: number; text: string }[]>([]);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const stop = () => {
    timersRef.current.forEach(clearTimeout);
    setStatus("ready");
  };

  useEffect(() => () => timersRef.current.forEach(clearTimeout), []);

  return (
    <View gap="xl">
      {sent.map(message => (
        <BodyText key={message.id} size="sm" alignSelf="flex-end">
          {message.text}
        </BodyText>
      ))}
      <PromptInput
        {...args}
        status={status}
        onStop={() => {
          args.onStop?.();
          stop();
        }}
        onSubmit={(message, event) => {
          void args.onSubmit?.(message, event);
          setSent(current => [
            ...current,
            { id: current.length, text: message.text }
          ]);
          setStatus("submitted");
          timersRef.current = [
            setTimeout(() => setStatus("streaming"), 400),
            setTimeout(() => setStatus("ready"), 4000)
          ];
        }}
      />
    </View>
  );
};

export const Chat: Story = {
  render: args => <SimulatedChat {...args} />,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("textbox", { name: "Message" }));
    await userEvent.keyboard("Summarize the deploy log{Enter}");
    await expect(
      await canvas.findByText("Summarize the deploy log")
    ).toBeVisible();

    // Submitted, then streaming: the button stops the reply.
    const stop = await canvas.findByRole("button", { name: "Stop" });
    await waitFor(async () =>
      expect(canvas.getByRole("button", { name: "Stop" })).toBeEnabled()
    );
    await userEvent.click(stop);
    await expect(args.onStop).toHaveBeenCalledTimes(1);
    await expect(
      await canvas.findByRole("button", { name: "Send" })
    ).toBeInTheDocument();
  }
};

export const Controlled: Story = {
  render: function Render(args) {
    const [text, setText] = useState("");

    return (
      <View gap="xl">
        <View flexDirection="row" gap="md">
          {["Explain this error", "Write a test"].map(suggestion => (
            <BodyText
              key={suggestion}
              render="button"
              size="sm"
              color="primary"
              cursor="pointer"
              onPress={() => setText(suggestion)}>
              {suggestion}
            </BodyText>
          ))}
        </View>
        <PromptInput {...args} value={text} onValueChange={setText} />
      </View>
    );
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const message = canvas.getByRole("textbox", { name: "Message" });

    await userEvent.click(canvas.getByText("Write a test"));
    await expect(message).toHaveValue("Write a test");
    await userEvent.type(message, " for Trace{Enter}");
    await waitFor(async () =>
      expect(args.onSubmit).toHaveBeenCalledWith(
        { text: "Write a test for Trace", files: [] },
        expect.anything()
      )
    );
    await waitFor(async () => expect(message).toHaveValue(""));
  }
};

const ModelMenu = () => {
  const [model, setModel] = useState("gpt-5");
  const current = MODELS.find(item => item.id === model) ?? MODELS[0]!;

  return (
    <ModelSelector value={model} onValueChange={setModel}>
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

const EffortMenu = () => {
  const [effort, setEffort] = useState("medium");
  const current = EFFORTS.find(item => item.id === effort) ?? EFFORTS[1]!;

  return (
    <ModelSelector value={effort} onValueChange={setEffort}>
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

export const WithTools: Story = {
  render: args => (
    <PromptInput {...args}>
      <PromptInput.Header />
      <PromptInput.Textarea placeholder="Ask the agent to change your code..." />
      <PromptInput.Footer>
        <PromptInput.Tools>
          <PromptInput.AddAttachments />
          <Context
            usedTokens={10_660}
            maxTokens={128_000}
            usage={{
              inputTokens: 8420,
              outputTokens: 1260,
              reasoningTokens: 980
            }}
          />
        </PromptInput.Tools>
        <PromptInput.Tools>
          <ModelMenu />
          <EffortMenu />
          <PromptInput.Submit />
        </PromptInput.Tools>
      </PromptInput.Footer>
    </PromptInput>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    // Picking a model doesn't send the message.
    await userEvent.type(
      canvas.getByRole("textbox", { name: "Message" }),
      "Add a dark mode toggle"
    );
    await userEvent.click(canvas.getByRole("button", { name: "Model: GPT-5" }));
    await userEvent.click(
      await body.findByRole("button", { name: /Claude Haiku 4\.5/ })
    );
    await expect(
      await canvas.findByRole("button", { name: "Model: Claude Haiku 4.5" })
    ).toBeInTheDocument();
    await expect(args.onSubmit).not.toHaveBeenCalled();
    await waitFor(
      async () =>
        expect(
          body.queryByRole("group", { name: "Anthropic" })
        ).not.toBeInTheDocument(),
      { timeout: 3000 }
    );
  }
};

