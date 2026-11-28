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
import { ChatRound, ConfirmCircle, Console, Loading } from "@cyclone-ui/icons";
import type { PromptInputMessage } from "@cyclone-ui/prompt-input";
import { PromptInput } from "@cyclone-ui/prompt-input";
import { PromptMessage } from "@cyclone-ui/prompt-message";
import { Suggestion, Suggestions } from "@cyclone-ui/suggestion";
import { Trace } from "@cyclone-ui/trace";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { memo, useEffect, useState } from "react";
import { expect, spyOn, userEvent, waitFor, within } from "storybook/test";
import type { ChatMessage, ChatProps } from "./Chat";
import { Chat } from "./Chat";

type Part =
  | { type: "text"; text: string }
  | { type: "reasoning"; text: string; streaming?: boolean }
  | { type: "tool-runCommand"; command: string; output?: string };

interface Message extends ChatMessage {
  id: string;
  parts: Part[];
}

interface Script {
  prompt: string;
  thought: string;
  command: string;
  output: string;
  reply: string;
}

const textOf = (message: Message) =>
  message.parts.map(part => (part.type === "text" ? part.text : "")).join("");

const user = (id: string, text: string): Message => ({
  id,
  role: "user",
  parts: [{ type: "text", text }]
});

const assistant = (id: string, script: Script): Message => ({
  id,
  role: "assistant",
  parts: [
    { type: "reasoning", text: script.thought },
    { type: "tool-runCommand", command: script.command, output: script.output },
    { type: "text", text: script.reply }
  ]
});

const THEME: Script = {
  prompt: "Add a dark mode toggle to the settings page.",
  thought:
    "I need to know how themes are set up before I add a toggle. If next-themes is already in the layout, the toggle only has to call setTheme.",
  command: "rg -l ThemeProvider app",
  output: "app/layout.tsx",
  reply:
    "next-themes is already set up in app/layout.tsx, so the toggle only has to call setTheme.\n\nI added components/mode-toggle.tsx with a Light and a Dark option, and put <ModeToggle /> next to the Appearance heading in app/settings/page.tsx."
};

const SYSTEM: Script = {
  prompt: "Make it follow the system setting by default.",
  thought:
    "The default theme lives on the ThemeProvider. I should check what it is set to now.",
  command: "rg -n defaultTheme app/layout.tsx",
  output: '12:  <ThemeProvider attribute="class" defaultTheme="light">',
  reply:
    "It was set to light. I changed the ThemeProvider in app/layout.tsx to defaultTheme=\"system\" with enableSystem, so new visitors get the theme from their OS."
};

const BUILD: Script = {
  prompt: "Run the build before I ship it.",
  thought:
    "A production build catches type errors and broken imports that the dev server lets through.",
  command: "pnpm build",
  output:
    "▲ Next.js 16.0.0\n\n✓ Compiled successfully in 4.2s\n✓ Linting and checking validity of types\n✓ Generating static pages (12/12)",
  reply: [
    "The build passes, so it is ready to ship.",
    "It compiled in 4.2s with no lint or type errors, and generated all 12 static pages. The settings page is one of them, so the toggle is prerendered with the rest of the page and works before any JavaScript loads.",
    "Two things to check before you merge. First, the toggle reads the theme from next-themes, which only knows the resolved theme after it mounts, so the first render shows the Light option selected even for dark-mode visitors. I render the toggle's label after mount to avoid that flash, but if you add a server-rendered theme indicator anywhere else it will need the same treatment.",
    "Second, enableSystem listens for the OS setting changing while the page is open. That covers people whose OS switches to dark mode at sunset, but it also means a visitor who picked Light or Dark keeps that choice until they pick System again. That is the usual behavior, and the toggle shows the System option so they can switch back.",
    "If you want, I can add a test that renders the settings page in both themes and checks the toggle's selected option, so a future change to the ThemeProvider can't quietly break the default."
  ].join("\n\n")
};

const SCRIPTS = [THEME, SYSTEM, BUILD];

// Characters revealed per tick, and the ticks a step waits.
const CHARS = 24;
const TICK = 30;
const SUBMITTED_TICKS = 8;
const RUNNING_TICKS = 10;

// Story renders run React and Tamagui in development mode, several times
// slower than a production build, so the plays wait generously and poll
// less often.
const STREAM = { timeout: 25_000, interval: 200 };

// The assistant message `tick` ticks into a scripted reply.
const frame = (script: Script, tick: number) => {
  const thoughtTicks = Math.ceil(script.thought.length / CHARS);
  if (tick < thoughtTicks) {
    return {
      done: false,
      parts: [
        {
          type: "reasoning",
          text: script.thought.slice(0, (tick + 1) * CHARS),
          streaming: true
        }
      ] satisfies Part[]
    };
  }
  const rest = tick - thoughtTicks;
  if (rest < RUNNING_TICKS) {
    return {
      done: false,
      parts: [
        { type: "reasoning", text: script.thought },
        { type: "tool-runCommand", command: script.command }
      ] satisfies Part[]
    };
  }
  const replyTick = rest - RUNNING_TICKS;

  return {
    done: (replyTick + 1) * CHARS >= script.reply.length,
    parts: assistant("", {
      ...script,
      reply: script.reply.slice(0, (replyTick + 1) * CHARS)
    }).parts
  };
};

// A conversation that replies with the next script, streaming it in.
const useScriptedChat = (initial: Message[]) => {
  const [messages, setMessages] = useState(initial);
  const [pending, setPending] = useState<{ script: Script; tick: number }>();
  const current = pending && pending.tick >= 0 ? frame(pending.script, pending.tick) : undefined;

  useEffect(() => {
    if (!pending) return;
    const timer = setTimeout(() => {
      const shown = pending.tick >= 0 ? frame(pending.script, pending.tick) : undefined;
      if (shown?.done) {
        setMessages(list => [
          ...list,
          { id: `a${list.length}`, role: "assistant", parts: shown.parts }
        ]);
        setPending(undefined);
      } else {
        setPending({ ...pending, tick: pending.tick + 1 });
      }
    }, TICK);

    return () => clearTimeout(timer);
  }, [pending]);

  const turns = messages.filter(message => message.role === "user").length;
  const next = SCRIPTS[turns] ?? SCRIPTS.at(-1)!;

  return {
    messages: current
      ? [...messages, { id: "streaming", role: "assistant" as const, parts: current.parts }]
      : messages,
    status: pending ? (current ? "streaming" : "submitted") : ("ready" as const),
    next,
    send: (text: string) => {
      setMessages(list => [...list, user(`u${list.length}`, text)]);
      setPending({ script: next, tick: -SUBMITTED_TICKS });
    }
  };
};

const ReasoningLine = ({ text, running }: { text: string; running: boolean }) => {
  const [open, setOpen] = useState<boolean>();

  return (
    <Trace.Collapsible open={open ?? running} onOpenChange={setOpen}>
      <Trace.Collapsible.Trigger>
        <Trace.Line status={running ? "running" : undefined}>
          <Trace.Icon>{running ? <Loading /> : <ConfirmCircle />}</Trace.Icon>
          <Trace.Title>{running ? "Thinking" : "Thought"}</Trace.Title>
        </Trace.Line>
      </Trace.Collapsible.Trigger>
      <Trace.Collapsible.Content>{text}</Trace.Collapsible.Content>
    </Trace.Collapsible>
  );
};

const ToolLine = ({ command, output }: { command: string; output?: string }) =>
  output === undefined ? (
    <Trace.Line status="running">
      <Trace.Icon>
        <Console />
      </Trace.Icon>
      <Trace.Title>Running {command}</Trace.Title>
    </Trace.Line>
  ) : (
    <Trace.Collapsible>
      <Trace.Collapsible.Trigger>
        <Trace.Line>
          <Trace.Icon>
            <Console />
          </Trace.Icon>
          <Trace.Title>Ran {command}</Trace.Title>
        </Trace.Line>
      </Trace.Collapsible.Trigger>
      <Trace.Collapsible.Content fontFamily="code">{output}</Trace.Collapsible.Content>
    </Trace.Collapsible>
  );

// Memoized, so only the streaming turn renders as its reply comes in.
const Turn = memo(({ message, streaming }: { message: Message; streaming: boolean }) => {
  const text = textOf(message);

  if (message.role === "user") {
    return (
      <Chat.Item scrollAnchor={true}>
        <PromptMessage from="user">
          <PromptMessage.Content>{text}</PromptMessage.Content>
        </PromptMessage>
      </Chat.Item>
    );
  }

  return (
    <Chat.Item>
      <PromptMessage from="assistant">
        <Trace>
          {message.parts.map(part =>
            part.type === "reasoning" ? (
              <ReasoningLine
                key={part.type}
                text={part.text}
                running={part.streaming === true}
              />
            ) : part.type === "tool-runCommand" ? (
              <ToolLine key={part.type} command={part.command} output={part.output} />
            ) : null
          )}
        </Trace>
        {text ? <PromptMessage.Content>{text}</PromptMessage.Content> : null}
        {streaming ? null : (
          <PromptMessage.Actions>
            <PromptMessage.Copy value={text} />
          </PromptMessage.Actions>
        )}
      </PromptMessage>
    </Chat.Item>
  );
});

const ScriptedChat = ({ initial, draft = true }: { initial: Message[]; draft?: boolean }) => {
  const { messages, status, next, send } = useScriptedChat(initial);
  const [text, setText] = useState<string>();
  const busy = status !== "ready";

  return (
    <View height={640}>
      <View
        flexDirection="row"
        alignItems="center"
        gap="xl"
        padding="4xl"
        borderBottomWidth={1}
        borderColor="hairline">
        <View flex={1}>
          <BodyText size="sm" color="emphasis" fontWeight="semibold">
            New thread
          </BodyText>
          <BodyText size="xs" color="subtle">
            Ask the agent to change your code.
          </BodyText>
        </View>
        <Chat.Download messages={messages} disabled={messages.length === 0} />
      </View>
      <Chat>
        {messages.length === 0 ? (
          <Chat.EmptyState
            icon={<ChatRound size={32} />}
            title="What should we build?"
            description="The agent can read your code, run commands and make changes."
          />
        ) : (
          <Chat.Content aria-busy={busy}>
            {messages.map(message => (
              <Turn
                key={message.id}
                message={message}
                streaming={message.id === "streaming"}
              />
            ))}
          </Chat.Content>
        )}
        <Chat.ScrollButton />
      </Chat>
      <View gap="xl" paddingHorizontal="4xl" paddingBottom="4xl">
        {messages.length === 0 ? (
          <Suggestions>
            {SCRIPTS.map(script => (
              <Suggestion
                key={script.prompt}
                suggestion={script.prompt}
                onClick={send}
              />
            ))}
          </Suggestions>
        ) : null}
        <PromptInput
          value={text ?? (draft && !busy ? next.prompt : "")}
          onValueChange={setText}
          status={status}
          onSubmit={(message: PromptInputMessage) => {
            send(message.text);
            setText(undefined);
          }}
        />
      </View>
    </View>
  );
};

const meta: Meta<ChatProps> = {
  title: "AI/Chat",
  component: Chat,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <View padding="xl" maxWidth={720} width="100%">
        <View
          borderWidth={1}
          borderColor="hairline"
          borderRadius="container">
          <Story />
        </View>
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<ChatProps>;

// The distance from the transcript's top to an element's top.
const topIn = (scroller: HTMLElement, element: HTMLElement) =>
  element.getBoundingClientRect().top - scroller.getBoundingClientRect().top;
const distanceToEnd = (scroller: HTMLElement) =>
  scroller.scrollHeight - scroller.clientHeight - scroller.scrollTop;

const SAVED = [
  user("u0", THEME.prompt),
  assistant("a1", THEME),
  user("u2", SYSTEM.prompt),
  assistant("a3", SYSTEM),
  user("u4", BUILD.prompt),
  assistant("a5", BUILD)
];

/** A saved thread opens at the start of its last turn. */
export const Base: Story = {
  render: () => <ScriptedChat initial={SAVED} draft={false} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const scroller = canvas.getByRole("region", { name: "Messages" });
    await expect(canvas.getByRole("log")).toBeInTheDocument();

    // The last turn starts near the top, under a peek of the one before.
    const last = canvas.getByText(BUILD.prompt).closest<HTMLElement>("[data-scroll-anchor]")!;
    await waitFor(async () => {
      const top = topIn(scroller, last);
      await expect(top).toBeGreaterThan(42);
      await expect(top).toBeLessThan(54);
    });

    // The reply runs past the end, so the scroll button shows.
    const scrollButton = canvas.getByRole("button", { name: "Scroll to end" });
    await waitFor(async () => expect(scrollButton.closest("[inert]")).toBeNull());
    await userEvent.click(scrollButton);
    await waitFor(async () => expect(distanceToEnd(scroller)).toBeLessThan(9));
    await waitFor(async () =>
      expect(scrollButton.closest("[inert]")).not.toBeNull()
    );

    // Download saves the thread as Markdown.
    const createObjectURL = spyOn(URL, "createObjectURL").mockReturnValue("blob:chat");
    const click = spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(() => {});
    await userEvent.click(canvas.getByRole("button", { name: "Download conversation" }));
    const blob = createObjectURL.mock.calls[0]![0] as Blob;
    await expect(await blob.text()).toMatch(
      /^\*\*User:\*\* Add a dark mode toggle to the settings page\.\n\n\*\*Assistant:\*\* next-themes/
    );
    await expect(click).toHaveBeenCalled();
    createObjectURL.mockRestore();
    click.mockRestore();
  }
};

/**
 * A new turn scrolls near the top and its reply streams in below it, without
 * moving the view.
 */
export const Conversation: Story = {
  render: () => (
    <ScriptedChat initial={[user("u0", THEME.prompt), assistant("a1", THEME)]} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const scroller = canvas.getByRole("region", { name: "Messages" });

    await userEvent.click(canvas.getByRole("button", { name: "Send" }));
    const turn = (await canvas.findByText(SYSTEM.prompt)).closest<HTMLElement>("[data-scroll-anchor]")!;
    await waitFor(async () =>
      expect(canvas.getByRole("log")).toHaveAttribute("aria-busy", "true")
    );
    await waitFor(async () => {
      const top = topIn(scroller, turn);
      await expect(top).toBeGreaterThan(42);
      await expect(top).toBeLessThan(54);
    });

    // The reply finishes under it, and the turn has not moved.
    await waitFor(
      async () => expect(canvas.getByRole("log")).toHaveAttribute("aria-busy", "false"),
      STREAM
    );
    await expect(canvas.getByText(/new visitors get the theme from their OS/)).toBeVisible();
    const top = topIn(scroller, turn);
    await expect(top).toBeGreaterThan(42);
    await expect(top).toBeLessThan(54);
  }
};

/**
 * A reply taller than the view is followed while the reader stays at the
 * end. Scrolling up leaves them there; the scroll button follows it again.
 */
export const Following: Story = {
  render: () => (
    <ScriptedChat
      initial={[
        user("u0", THEME.prompt),
        assistant("a1", THEME),
        user("u2", SYSTEM.prompt),
        assistant("a3", SYSTEM)
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const scroller = canvas.getByRole("region", { name: "Messages" });
    const scrollButton = canvas.getByRole("button", { name: "Scroll to end" });

    await userEvent.click(canvas.getByRole("button", { name: "Send" }));

    // Once the reply fills the view, the view follows it.
    await waitFor(
      async () => {
        await expect(canvas.getByText(/Two things to check/)).toBeInTheDocument();
        await expect(distanceToEnd(scroller)).toBeLessThan(9);
      },
      STREAM
    );

    // Scrolling up releases it: the reply keeps streaming below.
    scroller.scrollTop -= 200;
    const held = scroller.scrollTop;
    await new Promise(resolve => {
      setTimeout(resolve, 300);
    });
    await expect(scroller.scrollTop).toBe(held);
    await expect(distanceToEnd(scroller)).toBeGreaterThan(100);
    await waitFor(async () => expect(scrollButton.closest("[inert]")).toBeNull());

    // The scroll button goes back to the end and follows again.
    await userEvent.click(scrollButton);
    await waitFor(
      async () => {
        await expect(canvas.getByText(/add a test that renders/)).toBeInTheDocument();
        await expect(canvas.getByRole("log")).toHaveAttribute("aria-busy", "false");
        await expect(distanceToEnd(scroller)).toBeLessThan(9);
      },
      STREAM
    );
  }
};

/** An empty thread shows what the agent can do, and suggestions to start. */
export const Empty: Story = {
  render: () => <ScriptedChat initial={[]} draft={false} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("What should we build?")).toBeVisible();
    await userEvent.click(canvas.getByRole("button", { name: THEME.prompt }));
    await expect(await canvas.findByRole("log")).toBeInTheDocument();
    await expect(canvas.queryByText("What should we build?")).toBeNull();
    await waitFor(
      async () => expect(canvas.getByRole("log")).toHaveAttribute("aria-busy", "false"),
      STREAM
    );
    await expect(canvas.getByText(/I added components\/mode-toggle\.tsx/)).toBeVisible();
  }
};
