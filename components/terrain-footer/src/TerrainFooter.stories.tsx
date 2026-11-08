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
import { Lightning } from "@cyclone-ui/icons";
import { Link } from "@cyclone-ui/link";
import { StormLogoText } from "@cyclone-ui/icons/vectors";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { styled, Text, View } from "@tamagui/core";
import type { ComponentProps, ReactNode } from "react";
import type { TerrainFooterProps } from "./TerrainFooter";
import { TerrainFooter } from "./TerrainFooter";

const StoryCanvas = styled(View, {
  minHeight: "100vh",
  backgroundColor: "canvas"
});

const StoryContent = styled(View, {
  width: "100%",
  maxWidth: 1200,
  marginHorizontal: "auto",
  paddingHorizontal: "4xl max-md:2xl",
  paddingVertical: "10xl",
  gap: "10xl"
});

const StorySection = styled(View, {
  minHeight: 320,
  padding: "7xl",
  justifyContent: "center",
  gap: "xl",
  backgroundColor: "canvas",
  borderRadius: "lg",
  borderWidth: 1,
  borderColor: "hairline",
  variants: {
    light: {
      true: {
        backgroundColor: "primary"
      }
    }
  }
});

const StoryPage = ({ children }: { children: ReactNode }) => (
  <StoryCanvas>
    <StoryContent>
      <StorySection>
        <Text
          color="primary"
          fontFamily="display"
          fontSize="3xl"
          fontWeight="600">
          Build what matters
        </Text>
        <BodyText color="ink" maxWidth={640}>
          Explore ideas, tools, and practical guidance for creating useful
          products with a thoughtful approach.
        </BodyText>
      </StorySection>
      <StorySection>
        <HeadingHeroText color="primary">
          Research and discovery
        </HeadingHeroText>
        <BodyText color="ink" maxWidth={640}>
          Learn from new perspectives and turn early questions into clear
          directions through careful research and experimentation.
        </BodyText>
      </StorySection>
      <StorySection>
        <HeadingHeroText color="primary">
          Products for every team
        </HeadingHeroText>
        <BodyText color="ink" maxWidth={640}>
          Flexible tools help teams move from a first sketch to a finished
          experience while keeping the important details in view.
        </BodyText>
      </StorySection>
      <StorySection>
        <HeadingHeroText color="primary">
          A long-term perspective
        </HeadingHeroText>
        <BodyText color="ink" maxWidth={640}>
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
  paddingVertical: "5xl",
  paddingHorizontal: "7xl",
  color: "brand9 hover:brand9",
  backgroundColor: "brand1 hover:brand2",
  maxWidth: "100%",
  textTransform: "uppercase",
  letterSpacing: 1.5,
  borderRadius: "4xl",
  textDecorationLine: "none hover:none",
  x: "hover:3px",
  outlineColor: "focus-visible:brand1",
  outlineOffset: "focus-visible:3px",
  outlineStyle: "focus-visible:solid",
  outlineWidth: "focus-visible:2px"
});

const StoryBrand = () => (
  <View alignItems="center" flexDirection="row" gap="2xl">
    <View
      width="8xl"
      height="8xl"
      alignItems="center"
      justifyContent="center"
      backgroundColor="secondary"
      borderRadius="full">
      <Lightning
        aria-hidden={true}
        size={16}
        color="primary"
        variant="filled"
      />
    </View>
    <HeadingSmallText color="primary" fontSize="md">
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

const TerrainFooterExample = (props: ComponentProps<typeof TerrainFooter>) => (
  <TerrainFooter {...props}>
    <TerrainFooter.Container>
      <TerrainFooter.BackgroundLogo>
        <StormLogoText width="100%" />
      </TerrainFooter.BackgroundLogo>
      <TerrainFooter.Main>
        <TerrainFooter.Introduction>
          <TerrainFooter.Statement>Contact us</TerrainFooter.Statement>
          <TerrainFooter.Description>
            Thoughtful interfaces. Shared foundations.
            <br />
            Built by Storm Software.
            <br />
            Let’s bring your next idea to life.
          </TerrainFooter.Description>
        </TerrainFooter.Introduction>

        <TerrainFooter.Action>{storyAction}</TerrainFooter.Action>

        <TerrainFooter.Navigation aria-label="Footer navigation">
          {storySections.map(section => (
            <TerrainFooter.Section key={section.title} render="section">
              <TerrainFooter.Section.Title>
                {section.title}
              </TerrainFooter.Section.Title>
              <TerrainFooter.Section.Links>
                {section.links.map(({ label, ...link }) => (
                  <Link group={false} key={link.href} {...link}>
                    {label}
                  </Link>
                ))}
              </TerrainFooter.Section.Links>
            </TerrainFooter.Section>
          ))}
        </TerrainFooter.Navigation>
      </TerrainFooter.Main>

      <TerrainFooter.Rail>
        <TerrainFooter.Brand>
          <StoryBrand />
          <TerrainFooter.Copyright>
            © {new Date().getFullYear()} Storm Software
          </TerrainFooter.Copyright>
        </TerrainFooter.Brand>

        <TerrainFooter.LegalNavigation aria-label="Legal">
          <Link group={false} href="#privacy">
            Privacy
          </Link>
          <Link group={false} href="#terms">
            Terms
          </Link>
          <Link group={false} href="#licenses">
            Licenses
          </Link>
        </TerrainFooter.LegalNavigation>
      </TerrainFooter.Rail>
    </TerrainFooter.Container>
  </TerrainFooter>
);

const meta = {
  title: "Blocks/TerrainFooter",
  component: TerrainFooter,
  tags: ["autodocs"],
  args: {},
  parameters: {
    layout: "fullscreen"
  },
  render: args => (
    <StoryPage>
      <TerrainFooterExample {...args} />
    </StoryPage>
  )
} satisfies Meta<typeof TerrainFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Compact: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
};

export const Wireframe: Story = {
  render: (args: TerrainFooterProps) => <TerrainFooterExample {...args} />
};

export const Unanimated: Story = {
  ...Wireframe,
  args: { animate: false }
};

export const NoNoise: Story = {
  ...Wireframe,
  args: { noise: false }
};
