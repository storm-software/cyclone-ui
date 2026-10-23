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
import { Card } from "@cyclone-ui/card";
import { Feedback } from "@cyclone-ui/feedback";
import { Footer } from "@cyclone-ui/footer";
import {
  HeadingHeroText,
  HeadingLargeText,
  HeadingMediumText
} from "@cyclone-ui/heading-text";
import { CalendarBlank, Clock } from "@cyclone-ui/icons";
import { InlineCodeText } from "@cyclone-ui/inline-code-text";
import { Link } from "@cyclone-ui/link";
import { Tag } from "@cyclone-ui/tag";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import type { ReactNode } from "react";
import { expect, waitFor, within } from "storybook/test";
import { ArticlePage } from "./ArticlePage";

const storyArticle = {
  title: "Shipping design tokens to every platform at once",
  url: "https://stormsoftware.com/blog/shipping-design-tokens",
  summary:
    "We moved every color, space and type token in Cyclone UI to a single source. Here's how one build now feeds the web, native apps and the docs without anyone copying a value by hand.",
  author: "Morgan Reyes",
  published: "October 21, 2026",
  readingTime: 8,
  tags: ["Design systems", "Tokens", "Theming", "Engineering"]
};

const storySections = [
  {
    id: "where-we-started",
    title: "Where we started",
    body: [
      "Two years ago, a color lived in four places: a Figma library, a CSS file, a TypeScript theme and a hand-written table in the docs. Every change meant four pull requests, and every audit found a value that had drifted.",
      "We didn't need more process. We needed one file that every platform could read, and a build that turned it into whatever each platform expected."
    ]
  },
  {
    id: "one-source",
    title: "One source for every token",
    body: [
      "Tokens now live as JSON in the tokens package, split into primitives and semantic roles. Primitives name raw values; semantic tokens name what a value is for, such as a page canvas or a hairline border.",
      "Components only ever read semantic tokens. That rule is what lets a dark theme, or a whole new brand, ship without touching a single component."
    ]
  },
  {
    id: "the-build",
    title: "The build",
    body: [
      "A single generate step reads the JSON and writes the Tamagui config, CSS variables and the documentation tables. The outputs are checked in, so a review shows exactly which values changed.",
      "When a token is renamed, the build fails on the first component that still uses the old name, long before a user could see a missing color."
    ]
  },
  {
    id: "what-comes-next",
    title: "What comes next",
    body: [
      "Next we're moving motion and elevation into the same pipeline, so durations and shadows get the same review as colors. If you build on Cyclone UI, nothing changes for you: your components keep reading the same semantic names."
    ]
  }
];

const storyToc = storySections.map(({ id, title }) => ({
  title,
  url: `#${id}`,
  depth: 2
}));

const storyRecommendations = [
  {
    category: "Engineering",
    title: "How we test every story in a real browser",
    summary:
      "Play functions run against a production build of Storybook on every pull request, so interaction bugs never reach a release."
  },
  {
    category: "Design systems",
    title: "Building a typeface for small screens",
    summary:
      "Why we drew our own sans, and the six masters it took to keep it readable at 12 pixels."
  },
  {
    category: "Accessibility",
    title: "Focus that follows the reader",
    summary:
      "Skip links, focus rings and the keyboard paths we check before a layout ships."
  }
];

/** A stand-in cover illustration: stacked tiles on a soft gradient. */
const StoryIllustration = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="100%"
    height="100%"
    viewBox="0 0 1600 900"
    preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="article-page-sky" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="oklch(0.93 0.05 190)" />
        <stop offset="1" stopColor="oklch(0.78 0.11 186)" />
      </linearGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#article-page-sky)" />
    {[
      // Back to front, so nearer tiles paint over farther ones.
      { x: 800, y: 380, top: "oklch(0.86 0.09 186)", tone: 0.52 },
      { x: 520, y: 520, top: "oklch(0.97 0.02 190)", tone: 0.62 },
      { x: 1080, y: 520, top: "oklch(0.7 0.12 186)", tone: 0.44 },
      { x: 800, y: 660, top: "oklch(0.6 0.12 200)", tone: 0.38 }
    ].map(({ x, y, top, tone }) => (
      <g key={`${x}-${y}`}>
        <path d={`M${x} ${y - 140}l240 140-240 140-240-140z`} fill={top} />
        <path
          d={`M${x - 240} ${y}l240 140v160l-240-140z`}
          fill={`oklch(${tone + 0.1} 0.1 190)`}
        />
        <path
          d={`M${x + 240} ${y}l-240 140v160l240-140z`}
          fill={`oklch(${tone} 0.1 195)`}
        />
      </g>
    ))}
  </svg>
);

const StoryMeta = ({
  icon,
  children
}: {
  icon: ReactNode;
  children: string;
}) => (
  <View flexDirection="row" alignItems="center" gap="md">
    {icon}
    <BodyText render="span" size="sm" color="ink">
      {children}
    </BodyText>
  </View>
);

const StoryHeader = () => (
  <ArticlePage.Header>
    <Breadcrumb currentName="Design systems" size="lg">
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Engineering</Breadcrumb.Item>
    </Breadcrumb>
    <View gap="4xl">
      <HeadingHeroText
        maxWidth={880}
        fontSize="5xl max-md:3xl"
        lineHeight="5xl max-md:3xl">
        {storyArticle.title}
      </HeadingHeroText>
      <BodyText size="lg" color="subtle">
        {storyArticle.summary}
      </BodyText>
    </View>
    <ArticlePage.Media>
      <StoryIllustration />
    </ArticlePage.Media>
    <ArticlePage.Details>
      <View gap="md">
        <BodyText render="span" color="emphasis" fontWeight="600">
          {storyArticle.author}
        </BodyText>
        <View flexDirection="row" flexWrap="wrap" columnGap="4xl" rowGap="md">
          <StoryMeta
            icon={<CalendarBlank aria-hidden={true} size={16} color="ink" />}>
            {storyArticle.published}
          </StoryMeta>
          <StoryMeta icon={<Clock aria-hidden={true} size={16} color="ink" />}>
            {`${storyArticle.readingTime} min read`}
          </StoryMeta>
        </View>
      </View>
      <ArticlePage.Share url={storyArticle.url} title={storyArticle.title}>
        <BodyText render="span" size="sm" color="ink" marginRight="md">
          Share
        </BodyText>
      </ArticlePage.Share>
      <View
        render="ul"
        aria-label="Tags"
        flexBasis="100%"
        flexDirection="row"
        flexWrap="wrap"
        gap="xl"
        margin={0}
        padding={0}>
        {storyArticle.tags.map(tag => (
          <View key={tag} render="li" style={{ listStyle: "none" }}>
            <Tag variant="secondary">
              <Tag.Text>{tag}</Tag.Text>
            </Tag>
          </View>
        ))}
      </View>
    </ArticlePage.Details>
  </ArticlePage.Header>
);

const StoryMain = () => (
  <ArticlePage.Main>
    <ArticlePage.Content
      toc={storyToc}
      share={{ url: storyArticle.url, title: storyArticle.title }}>
      {storySections.map(section => (
        <View key={section.id} gap="4xl">
          <HeadingLargeText id={section.id}>{section.title}</HeadingLargeText>
          {section.body.map(paragraph => (
            <BodyText key={paragraph}>{paragraph}</BodyText>
          ))}
          {section.id === "the-build" ? (
            <BodyText>
              Run{" "}
              <InlineCodeText>
                pnpm nx run monorepo:generate-themes
              </InlineCodeText>{" "}
              after editing a token, and commit the generated files with it.
            </BodyText>
          ) : null}
        </View>
      ))}
    </ArticlePage.Content>

    <ArticlePage.Section
      aria-labelledby="article-feedback"
      maxWidth={900}
      alignItems="center">
      <HeadingMediumText id="article-feedback" textAlign="center">
        Was this article helpful?
      </HeadingMediumText>
      <Feedback alignSelf="center" />
    </ArticlePage.Section>

    <ArticlePage.Section aria-labelledby="article-recommendations">
      <HeadingLargeText id="article-recommendations">
        Keep reading
      </HeadingLargeText>
      <View flexDirection="row" flexWrap="wrap" gap="4xl">
        {storyRecommendations.map(article => (
          // `Card` fills its parent's width, so a wrapper sizes each column.
          <View key={article.title} flexBasis={300} flexGrow={1} minWidth={0}>
            <Card height="100%">
              <Card.Header>
                <View gap="md" flexShrink={1} minWidth={0}>
                  <Card.Header.Eyebrow>{article.category}</Card.Header.Eyebrow>
                  <Card.Header.Heading size="xl">
                    {article.title}
                  </Card.Header.Heading>
                </View>
              </Card.Header>
              <Card.Body>{article.summary}</Card.Body>
              <Card.Footer>
                <Card.Footer.Link href="#">Read article</Card.Footer.Link>
              </Card.Footer>
            </Card>
          </View>
        ))}
      </View>
    </ArticlePage.Section>
  </ArticlePage.Main>
);

const StoryFooter = () => (
  <Footer>
    <Footer.Container>
      <Footer.Main>
        <Footer.Introduction>
          <Footer.Statement>The Storm blog</Footer.Statement>
          <Footer.Description>
            Notes from the people building Cyclone UI.
          </Footer.Description>
        </Footer.Introduction>
        <Footer.Navigation aria-label="Footer navigation">
          <Footer.Section render="section">
            <Footer.Section.Title>Explore</Footer.Section.Title>
            <Footer.Section.Links>
              <Link group={false} href="#components">
                Components
              </Link>
              <Link group={false} href="#documentation">
                Documentation
              </Link>
            </Footer.Section.Links>
          </Footer.Section>
        </Footer.Navigation>
      </Footer.Main>
      <Footer.Rail>
        <Footer.Brand>
          <Footer.Copyright>© 2026 Storm Software</Footer.Copyright>
        </Footer.Brand>
        <Footer.LegalNavigation aria-label="Legal">
          <Link group={false} href="#privacy">
            Privacy
          </Link>
          <Link group={false} href="#terms">
            Terms
          </Link>
        </Footer.LegalNavigation>
      </Footer.Rail>
    </Footer.Container>
  </Footer>
);

const meta = {
  title: "Layouts/ArticlePage",
  component: ArticlePage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    // The header sticks to the viewport, so each docs example needs its own
    // frame to scroll.
    docs: {
      story: {
        inline: false,
        iframeHeight: 720
      }
    }
  },
  render: args => (
    <ArticlePage {...args}>
      <StoryHeader />
      <StoryMain />
      <StoryFooter />
    </ArticlePage>
  )
} satisfies Meta<typeof ArticlePage>;

export default meta;

type Story = StoryObj<typeof meta>;

const browserWindow = globalThis as unknown as {
  scrollY: number;
  scrollTo: (x: number, y: number) => void;
  matchMedia: (query: string) => { matches: boolean };
};

const getTop = (element: unknown) =>
  (
    element as { getBoundingClientRect: () => { top: number } }
  ).getBoundingClientRect().top;

/**
 * The content scrolls up over the header. On screens 1024px and wider, the
 * table of contents and share links stay beside the article as it scrolls.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getAllByRole("link", { name: "Share on X" })[0]
    ).toHaveAttribute(
      "href",
      `https://x.com/intent/tweet?url=${encodeURIComponent(storyArticle.url)}&text=${encodeURIComponent(storyArticle.title)}`
    );

    if (!browserWindow.matchMedia("(min-width: 1024px)").matches) {
      return;
    }

    const toc = canvas.getByRole("navigation", { name: "Table of contents" });
    const heading = canvas.getByRole("heading", {
      name: "One source for every token"
    });

    // The top of the article has scrolled away, but not its end, which takes
    // the aside with it.
    browserWindow.scrollTo(0, browserWindow.scrollY + getTop(heading) - 100);
    await waitFor(async () => expect(getTop(toc)).toBeGreaterThanOrEqual(0));
    await expect(
      canvas.getAllByRole("link", { name: "Share on X" })
    ).toHaveLength(2);
  }
};
