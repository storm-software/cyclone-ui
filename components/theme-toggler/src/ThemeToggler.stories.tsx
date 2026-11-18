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

import type { ColorThemeMode } from "@cyclone-ui/state/theme";
import { useThemeMode } from "@cyclone-ui/state/theme";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Theme, View } from "@tamagui/core";
import type { ReactNode } from "react";
import { useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import type { ThemeTogglerProps } from "./ThemeToggler";
import { ThemeToggler } from "./ThemeToggler";

const Page = ({ mode, children }: { mode: string; children: ReactNode }) => (
  <Theme name={`${mode === "light" ? "light" : "dark"}_base`}>
    <View
      alignSelf="stretch"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundColor="canvas">
      {children}
    </View>
  </Theme>
);

// Storybook pins stories to the toolbar mode. Follow the Cyclone theme state,
// which the toggler changes, like an app's root `ThemeProvider` does.
const StatePage = ({ children }: { children: ReactNode }) => (
  <Page mode={useThemeMode()}>{children}</Page>
);

const meta: Meta<typeof ThemeToggler> = {
  title: "Triggers/ThemeToggler",
  component: ThemeToggler,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  },
  args: {
    shape: "circle",
    duration: 400,
    fromCenter: false
  },
  argTypes: {
    shape: {
      control: "select",
      options: [
        "circle",
        "square",
        "triangle",
        "diamond",
        "hexagon",
        "rectangle",
        "star"
      ]
    }
  },
  decorators: [
    Story => (
      <StatePage>
        <Story />
      </StatePage>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const root = canvasElement.ownerDocument.documentElement;
    const button = within(canvasElement).getByRole("button", {
      name: "Toggle theme"
    });
    const initial = root.classList.contains("t_light") ? "light" : "dark";
    const toggled = initial === "light" ? "dark" : "light";
    const revealEnded = () =>
      waitFor(() =>
        expect(
          canvasElement.ownerDocument.getElementById("cyclone-ui-theme-toggler")
        ).toBeNull()
      );

    await userEvent.click(button);
    await waitFor(() => expect(root).toHaveClass(`t_${toggled}`));
    await revealEnded();
    await userEvent.click(button);
    await waitFor(() => expect(root).toHaveClass(`t_${initial}`));
    await revealEnded();
  }
};

export const Star: Story = {
  args: {
    shape: "star",
    duration: 600
  }
};

export const FromCenter: Story = {
  args: {
    shape: "hexagon",
    fromCenter: true
  }
};

const ControlledThemeToggler = (args: ThemeTogglerProps) => {
  const [mode, setMode] = useState<ColorThemeMode>("light");

  return (
    <Page mode={mode}>
      <ThemeToggler {...args} mode={mode} onModeChange={setMode} />
    </Page>
  );
};

/** The toggler only reports the new mode; the story's own state applies it. */
export const Controlled: Story = {
  render: args => <ControlledThemeToggler {...args} />
};
