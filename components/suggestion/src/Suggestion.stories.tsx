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

import { PromptMessage } from "@cyclone-ui/prompt-message";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type { SuggestionsProps } from "./Suggestion";
import { Suggestion, Suggestions } from "./Suggestion";

const meta: Meta<SuggestionsProps> = {
  title: "AI/Suggestion",
  component: Suggestions,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <View padding="xl" maxWidth={560} width="100%">
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<SuggestionsProps>;

const REPLIES: Record<string, string> = {
  "Add a dark mode toggle":
    "Added a ThemeToggler to the site header. It switches between the light and dark themes.",
  "Fix the failing build":
    "The build failed on a missing import in app/page.tsx. I added it and the build passes.",
  "Write tests for the form":
    "Added four tests in signup-form.test.tsx. They cover the empty, invalid and valid states.",
  "Upgrade to Next.js 16":
    "Ran the codemod and bumped next to 16. Two routes needed async params, so I updated them.",
  "Add a loading state":
    "Added a loading.tsx to the dashboard route. It shows skeletons while the data loads.",
  "Find unused dependencies":
    "Three packages are not imported anywhere: lodash, moment and classnames. Should I remove them?"
};

const SUGGESTIONS = Object.keys(REPLIES);

const onSend = fn();

// Pressing a suggestion sends it as the person's turn.
const SuggestionsDemo = () => {
  const [prompt, setPrompt] = useState<string>();
  const send = (suggestion: string) => {
    onSend(suggestion);
    setPrompt(suggestion);
  };

  return (
    <View gap="7xl">
      {prompt && (
        <View gap="6xl">
          <PromptMessage from="user">
            <PromptMessage.Content>{prompt}</PromptMessage.Content>
          </PromptMessage>
          <PromptMessage from="assistant">
            <PromptMessage.Content>{REPLIES[prompt]}</PromptMessage.Content>
          </PromptMessage>
        </View>
      )}
      <Suggestions aria-label="Suggestions" role="group">
        {SUGGESTIONS.map(suggestion => (
          <Suggestion key={suggestion} suggestion={suggestion} onClick={send} />
        ))}
      </Suggestions>
    </View>
  );
};

export const Base: Story = {
  render: () => <SuggestionsDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole("button", { name: "Fix the failing build" })
    );
    await expect(onSend).toHaveBeenLastCalledWith("Fix the failing build");
    await waitFor(async () =>
      expect(canvas.getByText(/missing import in app\/page\.tsx/)).toBeVisible()
    );
  }
};

const onClickScrolling = fn();

export const Scrolling: Story = {
  decorators: [
    Story => (
      <View maxWidth={320} width="100%">
        <Story />
      </View>
    )
  ],
  render: () => (
    <Suggestions>
      {SUGGESTIONS.map(suggestion => (
        <Suggestion
          key={suggestion}
          suggestion={suggestion}
          onClick={onClickScrolling}
        />
      ))}
    </Suggestions>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const first = canvas.getByRole("button", { name: SUGGESTIONS[0] });
    const last = canvas.getByRole("button", { name: SUGGESTIONS.at(-1) });
    const scroller = canvasElement.querySelector(".cyclone-suggestions")!;

    await expect(scroller.scrollWidth).toBeGreaterThan(scroller.clientWidth);
    await expect(scroller.scrollLeft).toBe(0);

    // Tabbing to the last suggestion scrolls it into view; Enter sends it.
    first.focus();
    for (let index = 1; index < SUGGESTIONS.length; index++) {
      await userEvent.tab();
    }
    await expect(last).toHaveFocus();
    await waitFor(async () => expect(scroller.scrollLeft).toBeGreaterThan(0));
    await userEvent.keyboard("{Enter}");
    await expect(onClickScrolling).toHaveBeenLastCalledWith(SUGGESTIONS.at(-1));
    // Leave the row scrolled back to the start for the screenshot.
    scroller.scrollLeft = 0;
  }
};

export const Fits: Story = {
  render: () => (
    <Suggestions>
      <Suggestion suggestion="Summarize this page" />
      <Suggestion suggestion="Explain the diff" />
    </Suggestions>
  )
};
