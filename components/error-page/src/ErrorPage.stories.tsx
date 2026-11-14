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

import { Link } from "@cyclone-ui/link";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import type { ErrorPageProps } from "./ErrorPage";
import { ErrorPage, getErrorPageCopy } from "./ErrorPage";

const CODES = [400, 401, 403, 404, 408, 410, 429, 500, 502, 503, 504];

const ErrorPageExample = (args: ErrorPageProps) => (
  <ErrorPage {...args}>
    <ErrorPage.Introduction>
      <ErrorPage.Message />
      <ErrorPage.Description />
      <Link href="#home">Let’s get you back on track.</Link>
    </ErrorPage.Introduction>
    <ErrorPage.Actions aria-label="Ways out">
      <ErrorPage.Action href="#home" description="Back to the homepage">
        Go home
      </ErrorPage.Action>
      <ErrorPage.Action href="#docs" description="Browse the documentation">
        Read the docs
      </ErrorPage.Action>
      <ErrorPage.Action
        href="#contact"
        description="Tell us what you were looking for">
        Get in touch
      </ErrorPage.Action>
    </ErrorPage.Actions>
  </ErrorPage>
);

const meta = {
  title: "Blocks/ErrorPage",
  component: ErrorPage,
  tags: ["autodocs"],
  args: { code: 404 },
  argTypes: {
    code: { control: "select", options: CODES }
  },
  parameters: { layout: "fullscreen" },
  render: (args: ErrorPageProps) => <ErrorPageExample {...args} />
} satisfies Meta<typeof ErrorPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NotFound: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("404")).toBeVisible();
    await expect(
      canvas.getByRole("heading", { level: 1, name: "Not found" })
    ).toBeVisible();
    await expect(
      canvas.getByRole("img", {
        name: getErrorPageCopy(404).Illustration.definition.means
      })
    ).toBeVisible();
    await expect(
      canvas.getByRole("heading", {
        level: 2,
        name: getErrorPageCopy(404).message
      })
    ).toBeVisible();
    await expect(canvas.getByRole("link", { name: /Go home/ })).toHaveAttribute(
      "href",
      "#home"
    );

    // The title sits on one line, and the line holds it.
    const title = canvas.getByRole("heading", { level: 1 }) as unknown as {
      scrollWidth: number;
      clientWidth: number;
      getBoundingClientRect: () => { height: number };
    };
    const { fontSize } = (
      globalThis as unknown as {
        getComputedStyle: (el: unknown) => { fontSize: string };
      }
    ).getComputedStyle(title);
    await expect(title.scrollWidth).toBeLessThanOrEqual(title.clientWidth);
    await expect(title.getBoundingClientRect().height).toBeLessThan(
      Number.parseFloat(fontSize) * 1.2
    );
  }
};

export const ServerError: Story = { args: { code: 500 } };

export const Unauthorized: Story = { args: { code: 401 } };

export const Forbidden: Story = { args: { code: 403 } };

export const ServiceUnavailable: Story = { args: { code: 503 } };

export const TooManyRequests: Story = { args: { code: 429 } };

/** Without children, the introduction shows the code's own message. */
export const Minimal: Story = {
  args: { code: 500 },
  render: (args: ErrorPageProps) => <ErrorPage {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("heading", { name: "Server error" })
    ).toBeVisible();
    await expect(
      canvas.getByText(getErrorPageCopy(500).description)
    ).toBeVisible();
  }
};

/** Override the copy, for a custom code or another language. */
export const CustomCopy: Story = {
  args: { code: 418, title: "Teapot" },
  render: (args: ErrorPageProps) => (
    <ErrorPage {...args}>
      <ErrorPage.Introduction>
        <ErrorPage.Message>I’m a teapot.</ErrorPage.Message>
        <ErrorPage.Description>
          This server brews tea, not coffee.
        </ErrorPage.Description>
      </ErrorPage.Introduction>
    </ErrorPage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("heading", { level: 1, name: "Teapot" })
    ).toBeVisible();
    // A 4xx without its own entry falls back to the 400 illustration.
    await expect(
      canvas.getByRole("img", {
        name: getErrorPageCopy(400).Illustration.definition.means
      })
    ).toBeVisible();
  }
};

const retry = fn();

/** An action without `href` is a button. */
export const RetryAction: Story = {
  args: { code: 503 },
  render: (args: ErrorPageProps) => (
    <ErrorPage {...args}>
      <ErrorPage.Introduction>
        <ErrorPage.Message />
        <ErrorPage.Description />
      </ErrorPage.Introduction>
      <ErrorPage.Actions aria-label="Ways out">
        <ErrorPage.Action description="Reload the page" onPress={retry}>
          Try again
        </ErrorPage.Action>
      </ErrorPage.Actions>
    </ErrorPage>
  ),
  play: async ({ canvasElement }) => {
    await userEvent.click(
      within(canvasElement).getByRole("button", { name: /Try again/ })
    );
    await expect(retry).toHaveBeenCalledOnce();
  }
};
