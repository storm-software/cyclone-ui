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
import { HeadingHeroText, HeadingSmallText } from "@cyclone-ui/heading-text";
import { Link } from "@cyclone-ui/link";
import { StormLogoText } from "@cyclone-ui/vectors";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { styled, Text, View } from "@tamagui/core";
import { Zap } from "@tamagui/lucide-icons-2";
import type { ComponentProps, ReactNode } from "react";
import type { FooterProps } from "./Footer";
import { Footer } from "./Footer";

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
    <StoryContent>
      <StorySection>
        <Text color="$foreground" fontFamily="$display-lg">
          Build what matters
        </Text>
        <BodyText color="$foregroundBody" maxWidth={640}>
          Explore ideas, tools, and practical guidance for creating useful
          products with a thoughtful approach.
        </BodyText>
      </StorySection>
      <StorySection>
        <HeadingHeroText color="$foreground">
          Research and discovery
        </HeadingHeroText>
        <BodyText color="$foregroundBody" maxWidth={640}>
          Learn from new perspectives and turn early questions into clear
          directions through careful research and experimentation.
        </BodyText>
      </StorySection>
      <StorySection>
        <HeadingHeroText color="$foreground">
          Products for every team
        </HeadingHeroText>
        <BodyText color="$foregroundBody" maxWidth={640}>
          Flexible tools help teams move from a first sketch to a finished
          experience while keeping the important details in view.
        </BodyText>
      </StorySection>
      <StorySection>
        <HeadingHeroText color="$foreground">
          A long-term perspective
        </HeadingHeroText>
        <BodyText color="$foregroundBody" maxWidth={640}>
          We share what we learn, listen to the people who use our work, and
          keep improving the systems that support them.
        </BodyText>
      </StorySection>
    </StoryContent>
    {children}
  </StoryCanvas>
);

const StoryAction = styled(Link, {
  width: "fit-content",
  paddingVertical: "$5xl",
  paddingHorizontal: "$7xl",
  color: "$brand9",
  backgroundColor: "$brand1",
  maxWidth: "100%",
  textTransform: "uppercase",
  letterSpacing: 1.5,
  borderRadius: "$4xl",
  textDecorationLine: "none",

  hoverStyle: {
    x: 3,
    color: "$brand9",
    backgroundColor: "$brand2",
    textDecorationLine: "none"
  },

  focusVisibleStyle: {
    outlineColor: "$brand1",
    outlineOffset: 3,
    outlineStyle: "solid",
    outlineWidth: 2
  }
});

const StoryBrand = () => (
  <View alignItems="center" flexDirection="row" gap="$2xl">
    <View
      width="$8xl"
      height="$8xl"
      alignItems="center"
      justifyContent="center"
      backgroundColor="$background"
      borderRadius="$full">
      <Zap
        aria-hidden={true}
        size={16}
        color="$foreground"
        fill="$foreground"
      />
    </View>
    <HeadingSmallText color="$foreground" fontSize="$md">
      Cyclone UI
    </HeadingSmallText>
  </View>
);

const storySections = [
  {
    title: "Explore",
    links: [
      { label: "Components", href: "#components" },
      { label: "Documentation", href: "#documentation" }
    ]
  },
  {
    title: "Follow us",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/storm-software/cyclone-ui",
        external: true
      },
      {
        label: "Storm Software",
        href: "https://stormsoftware.com",
        external: true
      }
    ]
  }
] as const;

const storyAction = (
  <StoryAction
    group={false}
    href="https://stormsoftware.com/contact"
    underline="none">
    <HeadingSmallText>Let’s start a project →</HeadingSmallText>
  </StoryAction>
);

const FooterExample = (props: ComponentProps<typeof Footer>) => (
  <Footer {...props}>
    <Footer.Container>
      <Footer.BackgroundLogo>
        <StormLogoText width="100%" />
      </Footer.BackgroundLogo>
      <Footer.Main>
        <Footer.Introduction>
          <Footer.Statement>Contact us</Footer.Statement>
          <Footer.Description>
            Thoughtful interfaces. Shared foundations.
            <br />
            Built by Storm Software.
            <br />
            Let’s bring your next idea to life.
          </Footer.Description>
        </Footer.Introduction>

        <Footer.Action>{storyAction}</Footer.Action>

        <Footer.Navigation aria-label="Footer navigation">
          {storySections.map(section => (
            <Footer.Section key={section.title} render="section">
              <Footer.Section.Title>{section.title}</Footer.Section.Title>
              <Footer.Section.Links>
                {section.links.map(({ label, ...link }) => (
                  <Footer.Link key={link.href} {...link}>
                    {label}
                  </Footer.Link>
                ))}
              </Footer.Section.Links>
            </Footer.Section>
          ))}
        </Footer.Navigation>
      </Footer.Main>

      <Footer.Rail>
        <Footer.Brand>
          <StoryBrand />
          <Footer.Copyright>
            © {new Date().getFullYear()} Storm Software
          </Footer.Copyright>
        </Footer.Brand>

        <Footer.LegalNavigation aria-label="Legal">
          <Footer.Rail.Link href="#privacy">Privacy</Footer.Rail.Link>
          <Footer.Rail.Link href="#terms">Terms</Footer.Rail.Link>
          <Footer.Rail.Link href="#licenses">Licenses</Footer.Rail.Link>
        </Footer.LegalNavigation>
      </Footer.Rail>
    </Footer.Container>
  </Footer>
);

const meta = {
  title: "Blocks/Footer",
  component: Footer,
  tags: ["autodocs"],
  args: {},
  parameters: {
    layout: "fullscreen"
  },
  render: args => (
    <StoryPage>
      <FooterExample {...args} />
    </StoryPage>
  )
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Brand: Story = {
  args: {
    theme: "brand"
  }
};

export const Compact: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
};

export const Wireframe: Story = {
  render: (args: FooterProps) => <FooterExample {...args} />
};

export const Unanimated: Story = {
  ...Wireframe,
  args: { animate: false }
};

export const NoNoise: Story = {
  ...Wireframe,
  args: { noise: false }
};
