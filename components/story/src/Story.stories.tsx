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
import { Button } from "@cyclone-ui/button";
import type { KbdProps } from "@cyclone-ui/kbd";
import { Kbd } from "@cyclone-ui/kbd";
import { Skeleton } from "@cyclone-ui/skeleton";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { lazy, useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { Story } from "./Story";

const meta: Meta<typeof Story> = {
  title: "Docs/Story",
  component: Story,
  tags: ["autodocs"],
  decorators: [
    Render => (
      <View width={720} maxWidth="100%">
        <Render />
      </View>
    )
  ],
  parameters: {
    layout: "centered"
  }
};

export default meta;
type StoryType = StoryObj<typeof meta>;

const sizes = ["sm", "md", "lg"] as const;

/**
 * A component with its controls inferred from `args`: a text input for
 * `children`, and a declared select for `size`.
 */
export const Base: StoryType = {
  render: () => (
    <Story<KbdProps>
      title="Kbd"
      description="A keyboard key cap. Edit its props below."
      component={Kbd}
      args={{ children: "Esc", size: "md" }}
      controls={{
        children: {
          type: "text",
          label: "Label",
          description: "The key label."
        },
        size: {
          type: "select",
          options: sizes,
          description: "The key size."
        }
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const document = within(canvasElement.ownerDocument.body);
    const preview = () =>
      canvasElement.querySelector<HTMLElement>("kbd")?.textContent;

    await expect(canvas.getByText("Kbd")).toBeInTheDocument();
    await expect(preview()).toBe("Esc");
    await expect(canvas.getByText("The key label.")).toBeInTheDocument();

    const input = canvas.getByLabelText("Label");
    await userEvent.clear(input);
    await userEvent.type(input, "Tab");
    await waitFor(async () => expect(preview()).toBe("Tab"));

    await userEvent.click(
      canvasElement.querySelector<HTMLElement>("[data-select-trigger]")!
    );
    await userEvent.click(await document.findByRole("option", { name: "lg" }));
    await waitFor(
      async () =>
        expect(document.queryByRole("listbox")).not.toBeInTheDocument(),
      { timeout: 3000 }
    );

    // Reset restores the initial args and the controls showing them.
    await userEvent.click(canvas.getByRole("button", { name: "Reset" }));
    await waitFor(async () => expect(preview()).toBe("Esc"));
    await expect(canvas.getByLabelText("Label")).toHaveValue("Esc");
  }
};

interface DemoButtonProps {
  label: string;
  variant: "primary" | "outlined" | "ghost";
  size: (typeof sizes)[number];
  disabled: boolean;
}

/**
 * A compound component shown through `render`, with variants: presets of
 * args, and a fixed `variant` prop that gets no control.
 */
export const Variants: StoryType = {
  render: () => (
    <Story<DemoButtonProps>
      title="Button"
      description="A pressable button. Pick a variant, then edit its props."
      render={({ label, ...props }) => (
        <Button {...props}>
          <Button.Text>{label}</Button.Text>
        </Button>
      )}
      args={{ label: "Save changes", size: "md", disabled: false }}
      controls={{
        size: { type: "select", options: sizes },
        disabled: {
          type: "boolean",
          description: "Whether the button can be pressed."
        }
      }}
      variants={[
        {
          name: "Primary",
          description: "The main action of a view.",
          fixed: { variant: "primary" }
        },
        {
          name: "Outlined",
          description: "A secondary action.",
          args: { label: "Cancel" },
          fixed: { variant: "outlined" }
        },
        {
          name: "Ghost",
          description: "A low-emphasis action.",
          args: { label: "Learn more", size: "sm" },
          fixed: { variant: "ghost" }
        }
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const document = within(canvasElement.ownerDocument.body);

    await expect(
      canvas.getByRole("button", { name: "Save changes" })
    ).toBeInTheDocument();
    await expect(canvas.queryByLabelText("variant")).not.toBeInTheDocument();

    await userEvent.click(
      canvasElement.querySelector<HTMLElement>("[data-select-trigger]")!
    );
    await userEvent.click(
      await document.findByRole("option", { name: "Outlined" })
    );
    await waitFor(async () =>
      expect(canvas.getByRole("button", { name: "Cancel" })).toBeInTheDocument()
    );
    await expect(canvas.getByText("A secondary action.")).toBeInTheDocument();
    await expect(canvas.getByLabelText("label")).toHaveValue("Cancel");

    // The controls stay mounted after the variant change, so a select opens.
    await userEvent.click(
      canvasElement.querySelectorAll<HTMLElement>("[data-select-trigger]")[1]!
    );
    await userEvent.click(await document.findByRole("option", { name: "lg" }));
    await waitFor(
      async () =>
        expect(document.queryByRole("listbox")).not.toBeInTheDocument(),
      { timeout: 3000 }
    );
    await expect(canvas.getByLabelText("label")).toHaveValue("Cancel");
  }
};

/**
 * `themeSelect` adds a theme select over the display, which renders the
 * preview in the selected color theme.
 */
export const Themes: StoryType = {
  render: () => (
    <Story<DemoButtonProps>
      title="Button"
      description="Pick a theme to see the button in it."
      themeSelect
      render={({ label, ...props }) => (
        <Button {...props}>
          <Button.Text>{label}</Button.Text>
        </Button>
      )}
      args={{ label: "Save changes", variant: "primary" }}
      controls={{
        variant: { type: "select", options: ["primary", "outlined", "ghost"] }
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const document = within(canvasElement.ownerDocument.body);
    const button = () =>
      within(canvasElement).getByRole("button", { name: "Save changes" });
    const themeOf = () =>
      button().closest<HTMLElement>('[class*="t_light_"], [class*="t_dark_"]')
        ?.className;

    await expect(themeOf()).toMatch(/_base\b/);

    // The header's theme select is the first select of the story.
    await userEvent.click(
      canvasElement.querySelector<HTMLElement>("[data-select-trigger]")!
    );
    await userEvent.click(
      await document.findByRole("option", { name: "Danger" })
    );
    await waitFor(async () => expect(themeOf()).toMatch(/_danger\b/));
  }
};

interface MeterProps {
  value: number;
  max: number;
  caption: string;
}

const Meter = ({ value, max, caption }: MeterProps) => (
  <View width={240} gap="md">
    <View height={8} borderRadius={4} backgroundColor="hairline">
      <View
        height={8}
        borderRadius={4}
        backgroundColor="primary"
        width={`${Math.min(100, Math.max(0, (value / max) * 100))}%`}
      />
    </View>
    <BodyText size="sm" color="subtle">
      {`${caption}: ${value} of ${max}`}
    </BodyText>
  </View>
);

/**
 * Number args get number inputs. `fixed` props get no control, and neither
 * does a prop whose control is `false`.
 */
export const Numbers: StoryType = {
  render: () => (
    <Story<MeterProps>
      title="Meter"
      component={Meter}
      args={{ value: 40, caption: "Storage" }}
      fixed={{ max: 100 }}
      controls={{ caption: false }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("Storage: 40 of 100")).toBeInTheDocument();
    await expect(canvas.queryByLabelText("max")).not.toBeInTheDocument();
    await expect(canvas.queryByLabelText("caption")).not.toBeInTheDocument();

    const input = canvas.getByLabelText("value");
    await userEvent.clear(input);
    await userEvent.type(input, "75");
    await waitFor(async () =>
      expect(canvas.getByText("Storage: 75 of 100")).toBeInTheDocument()
    );
  }
};

// The meter's layout as placeholders: its bar, then its caption.
const MeterSkeleton = () => (
  <View width={240} gap="md">
    <Skeleton height={8} borderRadius={4} />
    <Skeleton width={140} height={14} />
  </View>
);

/**
 * `loading` shows the skeleton in place of the component, such as while data
 * it needs loads. Pass a `skeleton` shaped like the component.
 */
export const Loading: StoryType = {
  render: () => (
    <Story<MeterProps>
      title="Meter"
      description="Waiting for the storage usage."
      component={Meter}
      args={{ value: 40, max: 100, caption: "Storage" }}
      loading={true}
      skeleton={<MeterSkeleton />}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvasElement.querySelector("[aria-busy=true]")
    ).toBeInTheDocument();
    await expect(canvas.queryByText(/Storage:/)).not.toBeInTheDocument();
    // The controls still show, ready for when the component loads.
    await expect(canvas.getByLabelText("value")).toHaveValue(40);
  }
};

const LazyMeterStory = () => {
  // A new lazy component per mount, so each visit shows it loading.
  const [LazyMeter] = useState(() =>
    lazy(
      async () =>
        new Promise<{ default: typeof Meter }>(resolve => {
          setTimeout(resolve, 1500, { default: Meter });
        })
    )
  );

  return (
    <Story<MeterProps>
      title="Meter"
      description="Loaded on demand: the default skeleton shows until it is ready."
      component={LazyMeter}
      args={{ value: 40, max: 100, caption: "Storage" }}
    />
  );
};

/**
 * A component that suspends, such as a `lazy` one, shows the skeleton until
 * it is ready.
 */
export const Lazy: StoryType = {
  render: () => <LazyMeterStory />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(
      async () =>
        expect(canvas.getByText("Storage: 40 of 100")).toBeInTheDocument(),
      { timeout: 5000 }
    );
  }
};

const Fragile = ({ broken }: { broken: boolean }) => {
  if (broken) {
    throw new Error("The demo was asked to break.");
  }

  return <BodyText>Rendered without errors.</BodyText>;
};

/**
 * A component that throws is caught inside the preview, and renders again
 * once the args change.
 */
export const RenderError: StoryType = {
  render: () => (
    <Story
      title="Error boundary"
      component={Fragile}
      args={{ broken: false }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole("switch");

    await expect(
      canvas.getByText("Rendered without errors.")
    ).toBeInTheDocument();

    await userEvent.click(toggle);
    await waitFor(async () =>
      expect(canvas.getByRole("alert")).toHaveTextContent(
        "The demo was asked to break."
      )
    );
    await expect(
      canvas.getByRole("alert").querySelector("svg")
    ).toBeInTheDocument();

    await userEvent.click(toggle);
    await waitFor(async () =>
      expect(canvas.getByText("Rendered without errors.")).toBeInTheDocument()
    );
  }
};
