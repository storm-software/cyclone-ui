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
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type {
  SearchDialogResult,
  SearchDialogSearchOptions
} from "./SearchDialog";
import { SearchDialog } from "./SearchDialog";

type IndexEntry = SearchDialogResult & { page: string; section: string };

const page = (
  id: string,
  content: string,
  section: string,
  breadcrumbs: string[]
): IndexEntry => ({
  id,
  url: `/docs/${id}`,
  type: "page",
  content,
  breadcrumbs,
  page: content,
  section
});

const onPage = (
  parent: IndexEntry,
  id: string,
  type: "heading" | "text",
  content: string
): IndexEntry => ({
  id: `${parent.id}-${id}`,
  url: `${parent.url}#${id}`,
  type,
  content,
  page: parent.page,
  section: parent.section
});

const button = page("button", "Button", "components", ["Components", "Form"]);
const dialog = page("dialog", "Dialog", "components", [
  "Components",
  "Containers"
]);
const theming = page("theming", "Theming", "guides", ["Guides"]);
const installation = page("installation", "Installation", "guides", ["Guides"]);
const registry = page("registry", "Registry API", "api", ["API"]);

const index: IndexEntry[] = [
  button,
  onPage(button, "variants", "heading", "Variants"),
  onPage(
    button,
    "ghost",
    "text",
    "Ghost buttons draw no fill until they are hovered or pressed."
  ),
  dialog,
  onPage(dialog, "overlay", "heading", "Overlay"),
  onPage(
    dialog,
    "focus",
    "text",
    "Focus moves into the dialog when it opens and returns to the trigger when it closes."
  ),
  theming,
  onPage(theming, "dark-mode", "heading", "Dark mode"),
  onPage(
    theming,
    "tokens",
    "text",
    "Change design tokens in razorwind.config.ts, then regenerate the themes."
  ),
  installation,
  onPage(
    installation,
    "cli",
    "text",
    "Copy components into your repository with the Cyclone CLI."
  ),
  registry,
  onPage(registry, "endpoints", "heading", "Endpoints")
];

// Every word must appear in the result or its page's title.
const searchIndex = (
  query: string,
  { filters }: SearchDialogSearchOptions
): SearchDialogResult[] => {
  const words = query.toLocaleLowerCase().split(/\s+/);

  return index.filter(entry => {
    const text = `${entry.page} ${entry.content}`.toLocaleLowerCase();

    return (
      (!filters.section || entry.section === filters.section) &&
      words.every(word => text.includes(word))
    );
  });
};

const meta: Meta<typeof SearchDialog> = {
  title: "Blocks/SearchDialog",
  component: SearchDialog,
  tags: ["autodocs"],
  args: {
    search: searchIndex,
    filters: [
      {
        name: "section",
        label: "Section",
        options: [
          { label: "Components", value: "components" },
          { label: "Guides", value: "guides" },
          { label: "API", value: "api" }
        ]
      }
    ],
    defaultResults: [installation, theming, button],
    onSelect: fn()
  }
} satisfies Meta<typeof SearchDialog>;

export default meta;

type Story = StoryObj<typeof SearchDialog>;

export const Base: Story = {
  // Starts without the history of earlier runs.
  beforeEach: () => {
    globalThis.localStorage.removeItem("cyclone-ui:search-dialog-history");
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await userEvent.click(canvas.getByRole("button", { name: "Search" }));
    const input = await body.findByRole("combobox", { name: "Search" });
    await waitFor(async () => expect(input).toHaveFocus());
    // Before typing, the default results are listed (once faded in).
    await waitFor(async () =>
      expect(body.getByRole("option", { name: /Installation/ })).toBeVisible()
    );

    await userEvent.type(input, "button");
    await waitFor(async () =>
      expect(body.getByRole("option", { name: /Variants/ })).toBeVisible()
    );
    await expect(
      body.queryByRole("option", { name: /Installation/ })
    ).not.toBeInTheDocument();

    // No guide mentions buttons; deselecting the filter brings them back.
    await userEvent.click(body.getByRole("button", { name: "Guides" }));
    await expect(await body.findByRole("status")).toHaveTextContent(
      'No results for "button"'
    );
    await userEvent.click(body.getByRole("button", { name: "Guides" }));
    await waitFor(async () =>
      expect(body.getByRole("option", { name: /Variants/ })).toBeVisible()
    );

    // Back in the text box (the toggle kept focus), the first result starts
    // active; ArrowDown moves on to "Variants".
    await userEvent.click(input);
    await userEvent.keyboard("{ArrowDown}{Enter}");
    await expect(args.onSelect).toHaveBeenCalledWith(
      expect.objectContaining({ id: "button-variants" })
    );
    await waitFor(async () =>
      expect(body.queryByRole("combobox")).not.toBeInTheDocument()
    );

    // Reopened, the chosen result is listed first, under "Recent".
    await userEvent.keyboard("{Control>}k{/Control}");
    await waitFor(async () =>
      expect(body.getByRole("combobox", { name: "Search" })).toHaveValue("")
    );
    const recent = await body.findByRole("group", { name: "Recent" });
    await waitFor(async () =>
      expect(within(recent).getByRole("option", { name: /Variants/ })).toBe(
        body.getAllByRole("option")[0]
      )
    );
    await userEvent.keyboard("{Enter}");
    await expect(args.onSelect).toHaveBeenLastCalledWith(
      expect.objectContaining({ id: "button-variants" })
    );
  }
};

// Results chosen before are listed under "Recent", saved under `historyKey`.
export const History: Story = {
  args: { historyKey: "search-dialog-story-history" },
  beforeEach: () => {
    globalThis.localStorage.setItem(
      "search-dialog-story-history",
      JSON.stringify([dialog, theming, registry])
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const recentOptions = () =>
      within(body.getByRole("group", { name: "Recent" })).getAllByRole(
        "option"
      );

    await userEvent.click(canvas.getByRole("button", { name: "Search" }));
    await waitFor(async () => expect(recentOptions()).toHaveLength(3));
    // Theming is a default result too, but listed once.
    await expect(body.getAllByRole("option", { name: /Theming/ })).toHaveLength(
      1
    );

    // Shift+Delete forgets the active one, and the next takes its place.
    await waitFor(async () =>
      expect(body.getByRole("combobox", { name: "Search" })).toHaveFocus()
    );
    await userEvent.keyboard("{Shift>}{Delete}{/Shift}");
    await waitFor(async () => expect(recentOptions()).toHaveLength(2));
    await expect(
      body.getByRole("option", { selected: true })
    ).toHaveTextContent("Theming");

    // With the pointer, the active one's remove button forgets it.
    const registryOption = body.getByRole("option", { name: /Registry API/ });
    await userEvent.hover(registryOption);
    await userEvent.click(
      within(registryOption).getByRole("button", { hidden: true })
    );
    await waitFor(async () => expect(recentOptions()).toHaveLength(1));
    await expect(
      body.getByRole("combobox", { name: "Search" })
    ).toBeInTheDocument();

    await userEvent.click(
      body.getByRole("button", { name: "Clear recent results" })
    );
    await waitFor(async () =>
      expect(
        body.queryByRole("group", { name: "Recent" })
      ).not.toBeInTheDocument()
    );
    await expect(body.getByRole("combobox", { name: "Search" })).toHaveFocus();
    await expect(
      globalThis.localStorage.getItem("search-dialog-story-history")
    ).toBe("[]");
    await userEvent.keyboard("{Escape}");
  }
};

// A search API: results arrive after a delay, with a spinner meanwhile.
export const Remote: Story = {
  args: {
    search: async (query, options) => {
      await new Promise(resolve => {
        setTimeout(resolve, 800);
      });
      return searchIndex(query, options);
    }
  }
};

export const NoFilters: Story = {
  args: {
    filters: undefined,
    defaultResults: undefined
  }
};
