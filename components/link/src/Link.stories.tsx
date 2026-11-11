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
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";
import { expect, fn, userEvent, within } from "storybook/test";
import type { LinkProps } from "./Link";
import { Link } from "./Link";

type LinkStoryArgs = LinkProps;

const meta: Meta<LinkStoryArgs> = {
  title: "Triggers/Link",
  component: Link,
  tags: ["autodocs"],
  render: (args: any) => (
    <BodyText>
      Lorem ipsum <Link {...args}>dolor sit</Link> amet
    </BodyText>
  )
} satisfies Meta<LinkStoryArgs>;

export default meta;

type Story = StoryObj<LinkStoryArgs>;

export const Base: Story = {
  args: {
    href: "#"
  }
};

// Match Next's click contract: a prevented consumer event cancels navigation.
const navigate = fn();
const routerClick = fn();
const linkClick = fn();
const linkPress = fn();
const mouseEnter = fn();
const touchStart = fn();
const anchorRef = fn();
const RouterLink = ({ children, href, onClick, ...props }: ComponentProps<"a">) => (
  <a
    {...props}
    href={href}
    data-render="element"
    onClick={event => {
      onClick?.(event);
      if (!event.defaultPrevented) {
        navigate(href);
        event.preventDefault();
      }
    }}>
    {children}
  </a>
);

export const RenderElement: Story = {
  beforeEach: () => {
    for (const handler of [
      navigate,
      routerClick,
      linkClick,
      linkPress,
      mouseEnter,
      touchStart,
      anchorRef
    ]) {
      handler.mockClear();
    }
  },
  render: () => (
    <>
      <BodyText>
        Have an invitation?{" "}
        <Link href="/sign-up" size="sm">
          Plain nested
        </Link>{" "}
        <Link
          external
          ref={anchorRef}
          size="sm"
          onClick={linkClick}
          onPress={linkPress}
          render={
            <RouterLink
              href="/sign-up"
              target="_self"
              onClick={routerClick}
              onMouseEnter={mouseEnter}
              onTouchStart={touchStart}
            />
          }>
          Rendered nested
        </Link>
      </BodyText>
      <Link href="/sign-up" size="sm">
        Plain standalone
      </Link>{" "}
      <Link
        size="sm"
        onClick={linkClick}
        onPress={linkPress}
        render={
          <RouterLink
            href="/sign-up"
            target="_self"
            onClick={routerClick}
            onMouseEnter={mouseEnter}
            onTouchStart={touchStart}
          />
        }>
        Rendered standalone
      </Link>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    for (const placement of ["nested", "standalone"]) {
      const plain = canvas.getByRole("link", { name: `Plain ${placement}` });
      const rendered = canvas.getByRole("link", {
        name: `Rendered ${placement}`
      });
      await expect(plain.tagName).toBe("A");
      await expect(plain).toHaveAttribute("href", "/sign-up");
      await expect(plain).not.toHaveAttribute("data-render");
      await expect(rendered.querySelector("svg")).toBeNull();
      await expect(rendered).toHaveAttribute("data-render", "element");
      await expect(rendered).toHaveAttribute("href", "/sign-up");
      await expect(rendered).toHaveAttribute("target", "_self");
      for (const property of [
        "color",
        "fontSize",
        "fontWeight",
        "textDecorationLine",
        "cursor"
      ] as const) {
        await expect(getComputedStyle(rendered)[property]).toBe(
          getComputedStyle(plain)[property]
        );
      }
      await userEvent.hover(rendered);
      await expect(mouseEnter).toHaveBeenCalled();
      mouseEnter.mockClear();
      rendered.dispatchEvent(new Event("touchstart", { bubbles: true }));
      await expect(touchStart).toHaveBeenCalled();
      touchStart.mockClear();
      const click = new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      });
      rendered.dispatchEvent(click);
      await expect(navigate).toHaveBeenCalledExactlyOnceWith("/sign-up");
      await expect(click.defaultPrevented).toBe(true);
      await expect(routerClick).toHaveBeenCalledTimes(1);
      await expect(linkClick).toHaveBeenCalledTimes(1);
      await expect(linkPress).toHaveBeenCalledTimes(1);
      navigate.mockClear();
      routerClick.mockClear();
      linkClick.mockClear();
      linkPress.mockClear();
      await userEvent.unhover(rendered);
    }
    await expect(anchorRef).toHaveBeenCalledWith(
      canvas.getByRole("link", { name: "Rendered nested" })
    );
  }
};

export const Small: Story = {
  args: {
    href: "#",
    size: "sm"
  }
};

export const Large: Story = {
  args: {
    href: "#",
    size: "lg"
  }
};

export const Brand: Story = {
  args: {
    href: "#",
    theme: "brand"
  }
};

export const Mixed: Story = {
  args: {
    href: "#",
    variant: "emphasis",
    mixed: true
  }
};

export const MixedInverse: Story = {
  args: {
    href: "#",
    variant: "emphasis",
    mixed: true,
    inverse: true
  }
};

export const Subtle: Story = {
  args: {
    href: "#",
    variant: "subtle"
  }
};

export const SubtleExternal: Story = {
  args: {
    href: "#",
    variant: "subtle",
    external: true
  }
};

export const CallToAction: Story = {
  args: {
    href: "#",
    cta: true
  }
};

export const External: Story = {
  args: {
    href: "#",
    external: true
  }
};

export const UnderlineHover: Story = {
  args: {
    href: "#",
    underline: "hover"
  }
};

export const UnderlineInitial: Story = {
  args: {
    href: "#",
    underline: "initial"
  }
};

export const UnderlineStatic: Story = {
  args: {
    href: "#",
    underline: "static"
  }
};

export const UnderlineNone: Story = {
  args: {
    href: "#",
    underline: "none"
  }
};

export const Discovery: Story = {
  args: {
    href: "#",
    theme: "discovery"
  }
};

export const DiscoveryCallToAction: Story = {
  args: {
    href: "#",
    cta: true,
    theme: "discovery"
  }
};

export const DiscoveryExternal: Story = {
  args: {
    href: "#",
    external: true,
    theme: "discovery"
  }
};

export const Danger: Story = {
  args: {
    href: "#",
    theme: "danger"
  }
};

export const DangerCallToAction: Story = {
  args: {
    href: "#",
    cta: true,
    theme: "danger"
  }
};

export const DangerExternal: Story = {
  args: {
    href: "#",
    external: true,
    theme: "danger"
  }
};

export const Warning: Story = {
  args: {
    href: "#",
    theme: "warning"
  }
};

export const WarningCallToAction: Story = {
  args: {
    href: "#",
    cta: true,
    theme: "warning"
  }
};

export const WarningExternal: Story = {
  args: {
    href: "#",
    external: true,
    theme: "warning"
  }
};

export const Info: Story = {
  args: {
    href: "#",
    theme: "info"
  }
};

export const InfoCallToAction: Story = {
  args: {
    href: "#",
    cta: true,
    theme: "info"
  }
};

export const InfoExternal: Story = {
  args: {
    href: "#",
    external: true,
    theme: "info"
  }
};

export const Success: Story = {
  args: {
    href: "#",
    theme: "success"
  }
};

export const SuccessCallToAction: Story = {
  args: {
    href: "#",
    cta: true,
    theme: "success"
  }
};

export const SuccessExternal: Story = {
  args: {
    href: "#",
    external: true,
    theme: "success"
  }
};
