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

import { Button } from "@cyclone-ui/button";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { styled, View } from "@tamagui/core";
import { UserRound, Zap } from "@tamagui/lucide-icons-2";
import { SizableText } from "@tamagui/text";
import type { ReactNode } from "react";
import { NavigationHeader } from "./NavigationHeader";

const StoryCanvas = styled(View, {
  minHeight: "100vh",
  backgroundColor: "$backgroundSubtle"
});

const StoryContent = styled(View, {
  width: "100%",
  maxWidth: 1200,
  marginHorizontal: "auto",
  paddingHorizontal: "$4xl",
  paddingVertical: "$10xl",
  gap: "$10xl",

  "$max-md": {
    paddingHorizontal: "$2xl"
  }
});

const StorySection = styled(View, {
  minHeight: 320,
  padding: "$7xl",
  justifyContent: "center",
  gap: "$xl",
  backgroundColor: "$backgroundPage",
  borderRadius: "$lg",
  borderWidth: 1,
  borderColor: "$borderSubtle",

  variants: {
    light: {
      true: {
        backgroundColor: "$foreground"
      }
    }
  }
});

const StoryPage = ({ children }: { children: ReactNode }) => (
  <StoryCanvas>
    {children}
    <StoryContent>
      <StorySection id="hero">
        <SizableText color="$foreground" fontSize="$10xl" fontWeight="$bold">
          Build what matters
        </SizableText>
        <SizableText color="$foregroundBody" fontSize="$lg" maxWidth={640}>
          Explore ideas, tools, and practical guidance for creating useful
          products with a thoughtful approach.
        </SizableText>
      </StorySection>
      <StorySection id="research" light={true}>
        <SizableText color="$foreground" fontSize="$7xl" fontWeight="$bold">
          Research and discovery
        </SizableText>
        <SizableText color="$foregroundBody" fontSize="$md" maxWidth={640}>
          Learn from new perspectives and turn early questions into clear
          directions through careful research and experimentation.
        </SizableText>
      </StorySection>
      <StorySection id="products">
        <SizableText color="$foreground" fontSize="$7xl" fontWeight="$bold">
          Products for every team
        </SizableText>
        <SizableText color="$foregroundBody" fontSize="$md" maxWidth={640}>
          Flexible tools help teams move from a first sketch to a finished
          experience while keeping the important details in view.
        </SizableText>
      </StorySection>
      <StorySection id="company">
        <SizableText color="$foreground" fontSize="$7xl" fontWeight="$bold">
          A long-term perspective
        </SizableText>
        <SizableText color="$foregroundBody" fontSize="$md" maxWidth={640}>
          We share what we learn, listen to the people who use our work, and
          keep improving the systems that support them.
        </SizableText>
      </StorySection>
    </StoryContent>
  </StoryCanvas>
);

const StoryLogo = () => (
  <View alignItems="center" flexDirection="row" gap="$2xl">
    <View
      width="$8xl"
      height="$8xl"
      alignItems="center"
      justifyContent="center"
      backgroundColor="$foreground"
      borderRadius="$full">
      <Zap size={16} color="$background" fill="$background" />
    </View>
    <SizableText color="$foreground" fontWeight="$bold" fontSize="$md">
      Storm
    </SizableText>
  </View>
);

const storyActions = (
  <>
    <Button
      variant="ghost"
      bordered={false}
      flexGrow={0}
      width={96}
      size="$10xl">
      <Button.Text>Log in</Button.Text>
    </Button>
    <Button
      variant="diagonal-cascade"
      rounded={true}
      flexGrow={0}
      width={128}
      size="$10xl">
      <Button.Text>Get started</Button.Text>
    </Button>
  </>
);

const storyItems = [
  {
    label: "Research",
    href: "#research",
    children: [
      {
        label: "Overview",
        group: "Explore Research",
        featured: true,
        href: "#research-overview"
      },
      {
        label: "Research index",
        group: "Explore Research",
        featured: true,
        href: "#research-index"
      },
      { label: "GPT-5", group: "Latest advances", href: "#gpt-5" },
      { label: "Reasoning", group: "Latest advances", href: "#reasoning" },
      { label: "Safety approach", group: "Safety", href: "#safety" },
      { label: "Preparedness", group: "Safety", href: "#preparedness" }
    ]
  },
  {
    label: "Products",
    href: "#products",
    children: [
      {
        label: "Overview",
        group: "Explore Products",
        featured: true,
        href: "#products-overview"
      },
      {
        label: "ChatGPT",
        group: "Explore Products",
        featured: true,
        href: "#chatgpt",
        active: true
      },
      {
        label: "Sora",
        group: "Explore Products",
        featured: true,
        href: "#sora"
      },
      { label: "ChatGPT", group: "Products", href: "#chatgpt-product" },
      { label: "Codex", group: "Products", href: "#codex" },
      { label: "API platform", group: "Products", href: "#api-platform" },
      { label: "Enterprise", group: "Solutions", href: "#enterprise" },
      { label: "Education", group: "Solutions", href: "#education" },
      { label: "Startups", group: "Solutions", href: "#startups" }
    ]
  },
  { label: "Business", href: "#business" },
  { label: "Developers", href: "#developers" },
  { label: "Company", href: "#company" }
];

const meta = {
  title: "Blocks/NavigationHeader",
  component: NavigationHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  },
  args: {
    logo: "Storm",
    items: storyItems
  },
  render: args => (
    <StoryPage>
      <NavigationHeader {...args} logo={<StoryLogo />} actions={storyActions} />
    </StoryPage>
  )
} satisfies Meta<typeof NavigationHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Brand: Story = {
  args: {
    theme: "brand"
  }
};

export const SignedIn: Story = {
  render: args => (
    <StoryPage>
      <NavigationHeader
        {...args}
        logo={<StoryLogo />}
        actions={
          <Button
            aria-label="Open profile"
            variant="ghost"
            bordered={false}
            circular={true}
            flexGrow={0}
            size="$10xl">
            <Button.Icon>
              <UserRound aria-hidden={true} />
            </Button.Icon>
          </Button>
        }
      />
    </StoryPage>
  )
};

export const Compact: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile2"
    }
  }
};
