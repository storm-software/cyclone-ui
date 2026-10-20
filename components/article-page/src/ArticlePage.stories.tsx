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
import { Breadcrumb } from "@cyclone-ui/breadcrumb";
import { Button } from "@cyclone-ui/button";
import { Divider } from "@cyclone-ui/divider";
import {
  HeadingLargeText,
  HeadingMediumText,
  HeadingTitleText
} from "@cyclone-ui/heading-text";
import {
  BookOpen,
  CaretDown,
  CaretRight,
  CaretUpDown,
  ChatCircle,
  Code,
  Copy,
  Cube,
  DotsThree,
  GithubLogo,
  Lightning,
  MagnifyingGlass,
  Package,
  PuzzlePiece,
  Translate,
  TreeStructure,
  Wrench
} from "@cyclone-ui/icons";
import { InlineCodeText } from "@cyclone-ui/inline-code-text";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { styled, View } from "@tamagui/core";
import type { ReactNode } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { ArticlePage } from "./ArticlePage";

const StoryNavItemFrame = styled(View, {
  render: "a",
  flexDirection: "row",
  alignItems: "center",
  gap: "2xl",
  paddingHorizontal: "2xl",
  paddingVertical: "xl",
  borderRadius: "lg",
  backgroundColor: "transparent hover:secondary",
  variants: {
    active: {
      true: {
        backgroundColor: "secondary"
      }
    }
  } as const
});

const StoryNavItem = ({
  icon,
  end,
  active,
  children
}: {
  icon?: ReactNode;
  end?: ReactNode;
  active?: boolean;
  children: string;
}) => (
  <StoryNavItemFrame
    {...{ href: `#${children.toLowerCase().replace(/\s+/g, "-")}` }}
    style={{ textDecorationLine: "none" }}
    active={active}
    aria-current={active ? "page" : undefined}>
    {icon}
    <BodyText
      render="span"
      size="sm"
      flexGrow={1}
      color={active ? "primary" : "ink"}
      fontWeight={active ? "600" : undefined}>
      {children}
    </BodyText>
    {end}
  </StoryNavItemFrame>
);

const StoryNavGroupLabel = styled(BodyText, {
  render: "span",
  size: "sm",
  color: "ink",
  fontWeight: "600",
  paddingHorizontal: "2xl",
  paddingTop: "7xl",
  paddingBottom: "md"
});

const StoryNavFolderItems = styled(View, {
  marginLeft: "4xl",
  paddingLeft: "lg",
  borderLeftWidth: 1,
  borderLeftColor: "hairline"
});

const StoryBoxButton = styled(View, {
  render: "button",
  flexDirection: "row",
  alignItems: "center",
  gap: "2xl",
  height: 40,
  paddingHorizontal: "2xl",
  cursor: "pointer",
  backgroundColor: "surface hover:secondary",
  borderWidth: 1,
  borderColor: "hairline",
  borderRadius: "xl"
});

const StoryKey = styled(BodyText, {
  render: "kbd",
  size: "sm",
  color: "ink",
  paddingHorizontal: "md",
  borderWidth: 1,
  borderColor: "hairline",
  borderRadius: "sm"
});

const StoryIconButton = ({
  label,
  children
}: {
  label: string;
  children: ReactNode;
}) => (
  <Button
    aria-label={label}
    variant="ghost"
    circular={true}
    flexGrow={0}
    size="9xl">
    <Button.Icon>{children}</Button.Icon>
  </Button>
);

const StorySideNav = () => (
  <ArticlePage.SideNav>
    <ArticlePage.SideNav.Header>
      <View alignItems="center" flexDirection="row" gap="xl">
        <View
          width={24}
          height={24}
          alignItems="center"
          justifyContent="center"
          backgroundColor="primary"
          borderRadius="full">
          <Lightning size={12} color="on-primary" weight="fill" />
        </View>
        <BodyText render="span" color="emphasis" fontWeight="700" flexGrow={1}>
          Cyclone UI
        </BodyText>
        <ArticlePage.SideNavToggle />
      </View>
      <StoryBoxButton aria-label="Switch documentation">
        <Cube aria-hidden={true} size={16} color="primary" />
        <BodyText render="span" size="sm" color="emphasis" flexGrow={1}>
          Cyclone Core
        </BodyText>
        <CaretUpDown aria-hidden={true} size={14} color="ink" />
      </StoryBoxButton>
      <StoryBoxButton aria-label="Search">
        <MagnifyingGlass aria-hidden={true} size={16} color="ink" />
        <BodyText render="span" size="sm" color="ink" flexGrow={1}>
          Search
        </BodyText>
        <StoryKey>Ctrl</StoryKey>
        <StoryKey>K</StoryKey>
      </StoryBoxButton>
    </ArticlePage.SideNav.Header>
    <ArticlePage.SideNav.Body>
      <StoryNavGroupLabel paddingTop="md">Guide</StoryNavGroupLabel>
      <StoryNavItem icon={<BookOpen aria-hidden={true} size={16} />}>
        Introduction
      </StoryNavItem>
      <StoryNavItem
        icon={<MagnifyingGlass aria-hidden={true} size={16} />}
        end={<CaretRight aria-hidden={true} size={14} color="ink" />}>
        Search
      </StoryNavItem>
      <StoryNavGroupLabel>API References</StoryNavGroupLabel>
      <StoryNavItem icon={<TreeStructure aria-hidden={true} size={16} />}>
        Page Tree
      </StoryNavItem>
      <StoryNavItem
        icon={<Translate aria-hidden={true} size={16} />}
        end={<CaretRight aria-hidden={true} size={14} color="ink" />}>
        Internationalization
      </StoryNavItem>
      <StoryNavItem
        icon={<PuzzlePiece aria-hidden={true} size={16} />}
        end={<CaretRight aria-hidden={true} size={14} color="ink" />}>
        Components
      </StoryNavItem>
      <StoryNavItem
        icon={<Wrench aria-hidden={true} size={16} />}
        end={<CaretRight aria-hidden={true} size={14} color="ink" />}>
        Utilities
      </StoryNavItem>
      <StoryNavItem
        icon={<Code aria-hidden={true} size={16} />}
        end={<CaretDown aria-hidden={true} size={14} color="ink" />}>
        MDX Plugins
      </StoryNavItem>
      <StoryNavFolderItems>
        <StoryNavItem active={true}>Headings</StoryNavItem>
        {storyPlugins.map(plugin => (
          <StoryNavItem key={plugin}>{plugin}</StoryNavItem>
        ))}
      </StoryNavFolderItems>
      <StoryNavGroupLabel>Packages</StoryNavGroupLabel>
      <StoryNavItem icon={<Package aria-hidden={true} size={16} />}>
        Installation
      </StoryNavItem>
    </ArticlePage.SideNav.Body>
  </ArticlePage.SideNav>
);

const storyPlugins = [
  "Package Install",
  "Rehype Code",
  "Remark Admonition",
  "Remark Image",
  "Remark LLMs",
  "Remark Files",
  "Remark NPM",
  "Remark Steps",
  "Remark TS to JS"
];

const storySections = [
  {
    id: "remark-heading",
    title: "Remark Heading",
    depth: 2,
    body: "Applies ids to headings, so every section of the document can be linked to directly. The plugin is included by default."
  },
  {
    id: "extract-toc",
    title: "Extract TOC",
    depth: 3,
    body: "By default, it extracts the headings of a document to the table of contents. Disable it when the page builds its own list of headings, or when the document is too short to need one."
  },
  {
    id: "custom-ids",
    title: "Custom Ids",
    depth: 3,
    body: "Add an explicit id after a heading to keep its link stable when the heading text changes. Custom ids take priority over the generated ones and must be unique within the page."
  },
  {
    id: "output",
    title: "Output",
    depth: 3,
    body: "Each heading is rendered with its id, and the extracted items include the title, the hash URL and the depth of every heading, ready to pass to the table of contents."
  },
  {
    id: "rehype-toc",
    title: "Rehype TOC",
    depth: 2,
    body: "Exports the table of contents from the compiled document, so the page can render it without parsing the source a second time."
  },
  {
    id: "usage",
    title: "Usage",
    depth: 3,
    body: "Add the plugin after the heading plugin, so the ids it reads are already applied. It runs on the compiled output and doesn't change how headings render."
  },
  {
    id: "rehype-output",
    title: "Output",
    depth: 3,
    body: "The document exports a list of headings with their titles, URLs and depths. Pass it to the toc prop of ArticlePage.Content to show it beside the article on wide screens."
  }
];

const storyToc = storySections.map(({ id, title, depth }) => ({
  title,
  url: `#${id}`,
  depth
}));

const StoryMain = () => (
  <ArticlePage.Main>
    <ArticlePage.Header>
      <Breadcrumb currentName="Headings">
        <Breadcrumb.Item href="#">MDX Plugins</Breadcrumb.Item>
      </Breadcrumb>
      <ArticlePage.Header.End>
        <View display="flex max-md:none">
          <Button variant="ghost" size="9xl" flexGrow={0}>
            <Button.Icon>
              <ChatCircle aria-hidden={true} />
            </Button.Icon>
            <Button.Text>Ask AI</Button.Text>
          </Button>
        </View>
        <View display="none max-md:flex">
          <StoryIconButton label="Ask AI">
            <ChatCircle aria-hidden={true} />
          </StoryIconButton>
        </View>
        <StoryIconButton label="GitHub">
          <GithubLogo aria-hidden={true} />
        </StoryIconButton>
        <StoryIconButton label="More options">
          <DotsThree aria-hidden={true} />
        </StoryIconButton>
      </ArticlePage.Header.End>
    </ArticlePage.Header>
    <ArticlePage.Content toc={storyToc}>
      <View gap="2xl">
        <HeadingTitleText>Headings</HeadingTitleText>
        <BodyText color="ink">Process headings from your document</BodyText>
      </View>
      <View flexDirection="row" flexWrap="wrap" gap="xl">
        <Button variant="outlined" size="9xl" flexGrow={0}>
          <Button.Icon>
            <Copy aria-hidden={true} />
          </Button.Icon>
          <Button.Text>Copy Markdown</Button.Text>
        </Button>
        <Button variant="outlined" size="9xl" flexGrow={0}>
          <Button.Text>Open</Button.Text>
          <Button.Icon>
            <CaretDown aria-hidden={true} />
          </Button.Icon>
        </Button>
      </View>
      <Divider />
      {storySections.map(section => (
        <View key={section.id} gap="2xl" paddingTop="4xl">
          {section.depth === 2 ? (
            <HeadingLargeText id={section.id}>{section.title}</HeadingLargeText>
          ) : (
            <HeadingMediumText id={section.id}>
              {section.title}
            </HeadingMediumText>
          )}
          <BodyText>{section.body}</BodyText>
          <BodyText>
            The extracted headings are written to{" "}
            <InlineCodeText>vfile.data.toc</InlineCodeText>, where the page
            reads them at build time. Every heading keeps the order it has in
            the document, and nested headings keep their depth.
          </BodyText>
        </View>
      ))}
    </ArticlePage.Content>
  </ArticlePage.Main>
);

const meta = {
  title: "Layouts/ArticlePage",
  component: ArticlePage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    // The layout fills the viewport, so each docs example needs its own frame.
    docs: {
      story: {
        inline: false,
        iframeHeight: 720
      }
    }
  },
  args: {
    children: null
  },
  render: args => (
    <ArticlePage {...args}>
      <StorySideNav />
      <StoryMain />
    </ArticlePage>
  )
} satisfies Meta<typeof ArticlePage>;

export default meta;

type Story = StoryObj<typeof meta>;

const matchesMedia = (query: string) =>
  (
    globalThis as unknown as {
      matchMedia: (query: string) => { matches: boolean };
    }
  ).matchMedia(query).matches;

/**
 * On desktop, the side nav's toggle collapses it and the panel header's
 * toggle brings it back. Wide screens show the table of contents.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    if (!matchesMedia("(min-width: 1024px)")) {
      return;
    }

    const canvas = within(canvasElement);
    const main = canvas.getByRole("main") as unknown as {
      scrollHeight: number;
      clientHeight: number;
    };

    // Only the content scrolls, so the header and table of contents stay put.
    await expect(main.scrollHeight).toBe(main.clientHeight);

    if (matchesMedia("(min-width: 1280px)")) {
      await expect(
        canvas.getByRole("navigation", { name: "Table of contents" })
      ).toBeVisible();
    }

    // `useMedia` reports mobile on the first render, so wait for the
    // desktop state to settle.
    await userEvent.click(
      await canvas.findByRole("button", { name: "Collapse sidebar" })
    );
    await waitFor(async () =>
      expect(
        canvas.queryByRole("navigation", { name: "Sidebar" })
      ).not.toBeInTheDocument()
    );

    await userEvent.click(
      await canvas.findByRole("button", { name: "Expand sidebar" })
    );
    await expect(
      await canvas.findByRole("navigation", { name: "Sidebar" })
    ).toBeVisible();
    await waitFor(async () =>
      expect(
        canvas.queryByRole("button", { name: "Expand sidebar" })
      ).not.toBeInTheDocument()
    );
  }
};

/** Hovering the panel header's toggle doesn't open the side nav; click it. */
export const CollapsedSideNav: Story = {
  args: {
    defaultSideNavCollapsed: true
  }
};
