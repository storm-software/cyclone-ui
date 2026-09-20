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
  backgroundColor: "$muted"
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
  backgroundColor: "$surfaceCanvas",
  borderRadius: "$lg",
  borderWidth: 1,
  borderColor: "$hairline",

  variants: {
    light: {
      true: {
        backgroundColor: "$accent"
      }
    }
  }
});

const StoryPage = ({ children }: { children: ReactNode }) => (
  <StoryCanvas>
    {children}
    <StoryContent>
      <StorySection id="hero">
        <SizableText color="$accent" fontSize="$10xl" fontWeight="$bold">
          Build what matters
        </SizableText>
        <SizableText color="$inkBody" fontSize="$lg" maxWidth={640}>
          Explore ideas, tools, and practical guidance for creating useful
          products with a thoughtful approach.
        </SizableText>
      </StorySection>
      <StorySection id="research" light={true}>
        <SizableText color="$accent" fontSize="$7xl" fontWeight="$bold">
          Research and discovery
        </SizableText>
        <SizableText color="$inkBody" fontSize="$md" maxWidth={640}>
          Learn from new perspectives and turn early questions into clear
          directions through careful research and experimentation.
        </SizableText>
      </StorySection>
      <StorySection id="products">
        <SizableText color="$accent" fontSize="$7xl" fontWeight="$bold">
          Products for every team
        </SizableText>
        <SizableText color="$inkBody" fontSize="$md" maxWidth={640}>
          Flexible tools help teams move from a first sketch to a finished
          experience while keeping the important details in view.
        </SizableText>
      </StorySection>
      <StorySection id="company">
        <SizableText color="$accent" fontSize="$7xl" fontWeight="$bold">
          A long-term perspective
        </SizableText>
        <SizableText color="$inkBody" fontSize="$md" maxWidth={640}>
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
      backgroundColor="$accent"
      borderRadius="$full">
      <Zap size={16} color="$muted" fill="$muted" />
    </View>
    <SizableText color="$accent" fontWeight="$bold" fontSize="$md">
      Storm
    </SizableText>
  </View>
);

const storyActions = (
  <>
    <Button
      variant="ghost"
      ghostOpacity={0.6}
      bordered={false}
      flexGrow={0}
      width={96}
      size="$10xl">
      <Button.Text>Log in</Button.Text>
    </Button>
    <Button
      variant="reverse-diagonal-cascade"
      rounded={true}
      flexGrow={0}
      width={128}
      size="$10xl">
      <Button.Text>Get started</Button.Text>
    </Button>
  </>
);

const storyNavigation = (
  <NavigationHeader.Navigation>
    <NavigationHeader.Navigation.Item href="#research">
      Research
      <NavigationHeader.Navigation.Item.Group
        label="Explore Research"
        featured={true}>
        <NavigationHeader.Navigation.Item.Link href="#research-overview">
          Overview
        </NavigationHeader.Navigation.Item.Link>
        <NavigationHeader.Navigation.Item.Link href="#research-index">
          Research index
        </NavigationHeader.Navigation.Item.Link>
      </NavigationHeader.Navigation.Item.Group>
      <NavigationHeader.Navigation.Item.Group label="Latest advances">
        <NavigationHeader.Navigation.Item.Link href="#gpt-5">
          GPT-5
        </NavigationHeader.Navigation.Item.Link>
        <NavigationHeader.Navigation.Item.Link href="#reasoning">
          Reasoning
        </NavigationHeader.Navigation.Item.Link>
      </NavigationHeader.Navigation.Item.Group>
      <NavigationHeader.Navigation.Item.Group label="Safety">
        <NavigationHeader.Navigation.Item.Link href="#safety">
          Safety approach
        </NavigationHeader.Navigation.Item.Link>
        <NavigationHeader.Navigation.Item.Link href="#preparedness">
          Preparedness
        </NavigationHeader.Navigation.Item.Link>
      </NavigationHeader.Navigation.Item.Group>
    </NavigationHeader.Navigation.Item>
    <NavigationHeader.Navigation.Item href="#products">
      Products
      <NavigationHeader.Navigation.Item.Group
        label="Explore Products"
        featured={true}>
        <NavigationHeader.Navigation.Item.Link href="#products-overview">
          Overview
        </NavigationHeader.Navigation.Item.Link>
        <NavigationHeader.Navigation.Item.Link href="#chatgpt" active={true}>
          ChatGPT
        </NavigationHeader.Navigation.Item.Link>
        <NavigationHeader.Navigation.Item.Link href="#sora">
          Sora
        </NavigationHeader.Navigation.Item.Link>
      </NavigationHeader.Navigation.Item.Group>
      <NavigationHeader.Navigation.Item.Group label="Products">
        <NavigationHeader.Navigation.Item.Link href="#chatgpt-product">
          ChatGPT
        </NavigationHeader.Navigation.Item.Link>
        <NavigationHeader.Navigation.Item.Link href="#codex">
          Codex
        </NavigationHeader.Navigation.Item.Link>
        <NavigationHeader.Navigation.Item.Link href="#api-platform">
          API platform
        </NavigationHeader.Navigation.Item.Link>
      </NavigationHeader.Navigation.Item.Group>
      <NavigationHeader.Navigation.Item.Group label="Solutions">
        <NavigationHeader.Navigation.Item.Link href="#enterprise">
          Enterprise
        </NavigationHeader.Navigation.Item.Link>
        <NavigationHeader.Navigation.Item.Link href="#education">
          Education
        </NavigationHeader.Navigation.Item.Link>
        <NavigationHeader.Navigation.Item.Link href="#startups">
          Startups
        </NavigationHeader.Navigation.Item.Link>
      </NavigationHeader.Navigation.Item.Group>
    </NavigationHeader.Navigation.Item>
    <NavigationHeader.Navigation.Item href="#business">
      Business
    </NavigationHeader.Navigation.Item>
    <NavigationHeader.Navigation.Item href="#developers">
      Developers
    </NavigationHeader.Navigation.Item>
    <NavigationHeader.Navigation.Item href="#company">
      Company
    </NavigationHeader.Navigation.Item>
  </NavigationHeader.Navigation>
);

const meta = {
  title: "Blocks/NavigationHeader",
  component: NavigationHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  },
  args: {
    children: null
  },
  render: args => (
    <StoryPage>
      <NavigationHeader {...args}>
        <NavigationHeader.Logo>
          <StoryLogo />
        </NavigationHeader.Logo>
        {storyNavigation}
        <NavigationHeader.Actions>{storyActions}</NavigationHeader.Actions>
      </NavigationHeader>
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
      <NavigationHeader {...args}>
        <NavigationHeader.Logo>
          <StoryLogo />
        </NavigationHeader.Logo>
        {storyNavigation}
        <NavigationHeader.Actions>
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
        </NavigationHeader.Actions>
      </NavigationHeader>
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
