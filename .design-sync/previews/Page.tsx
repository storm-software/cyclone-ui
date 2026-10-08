// Owned: inlined copy of components/page/src/Page.stories.tsx (keep in sync). The
// story imports the `Folder` *icon*, but window.CycloneUI.Folder is the FileTree
// component, so it is taken from the `FolderIcon` alias instead.
import * as React from 'react';

import { BodyText } from "@ds-stories/components/body-text/src/index";
import { Button } from "@ds-stories/components/button/src/index";
import { HeadingLargeText, HeadingSmallText } from "@ds-stories/components/heading-text/src/index";
import {
  Bell,
  ChartBar,
  ClockCounterClockwise,
  FolderIcon as Folder,
  Gear,
  House,
  Info,
  Kanban,
  Lightning,
  MagnifyingGlass,
  Plus,
  Question,
  Tray,
  User,
  X
} from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { styled, View } from "@tamagui/core";
import type { ReactNode } from "react";
import { useId } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { Page, usePagePanel, usePageSideNav, usePageSkipLink } from "@ds-stories/components/page/src/index";

const StoryNavItemFrame = styled(View, {
  render: "a",
  flexDirection: "row",
  alignItems: "center",
  gap: "2xl",
  paddingHorizontal: "2xl",
  paddingVertical: "xl",
  borderRadius: "md",
  backgroundColor: "transparent hover:surfaceCanvas",
  variants: {
    active: {
      true: {
        backgroundColor: "surfaceCanvas"
      }
    }
  } as const
});

const StoryNavItem = ({
  icon,
  active,
  children
}: {
  icon: ReactNode;
  active?: boolean;
  children: ReactNode;
}) => (
  <StoryNavItemFrame
    {...{ href: `#${String(children).toLowerCase().replace(/\s+/g, "-")}` }}
    style={{ textDecorationLine: "none" }}
    active={active}
    aria-current={active ? "page" : undefined}>
    {icon}
    <BodyText
      render="span"
      size="sm"
      color={active ? "inkEmphasis" : "inkBody"}
      fontWeight={active ? "600" : undefined}>
      {children}
    </BodyText>
  </StoryNavItemFrame>
);

const StoryNavGroupLabel = styled(BodyText, {
  render: "span",
  size: "sm",
  color: "inkSubtle",
  paddingHorizontal: "2xl",
  paddingTop: "4xl",
  paddingBottom: "lg"
});

const StoryIconButton = ({
  label,
  children,
  onPress
}: {
  label: string;
  children: ReactNode;
  onPress?: () => void;
}) => (
  <Button
    aria-label={label}
    variant="ghost"
    circular={true}
    flexGrow={0}
    size="9xl"
    onPress={onPress}>
    <Button.Icon>{children}</Button.Icon>
  </Button>
);

const StoryLogo = () => (
  <View alignItems="center" flexDirection="row" gap="xl">
    <View
      width={28}
      height={28}
      alignItems="center"
      justifyContent="center"
      backgroundColor="accent"
      borderRadius="full">
      <Lightning size={14} color="onAccent" weight="fill" />
    </View>
    <BodyText render="span" color="inkEmphasis" fontWeight="700">
      Storm
    </BodyText>
  </View>
);

const StorySearch = () => (
  <View
    width="100%"
    maxWidth={520}
    height={36}
    alignItems="center"
    flexDirection="row"
    gap="xl"
    paddingHorizontal="3xl"
    backgroundColor="surfaceCanvas"
    borderWidth={1}
    borderColor="hairline"
    borderRadius={1000}
    display="flex max-md:none">
    <MagnifyingGlass aria-hidden={true} size={16} color="inkSubtle" />
    <BodyText render="span" size="sm" color="inkSubtle">
      Search
    </BodyText>
  </View>
);

const StoryPanelToggle = () => {
  const panel = usePagePanel();

  return (
    <StoryIconButton
      label={panel.open ? "Close details" : "Open details"}
      onPress={panel.toggle}>
      <Info aria-hidden={true} />
    </StoryIconButton>
  );
};

const StoryTopNav = ({ panelToggle = false }: { panelToggle?: boolean }) => (
  <Page.TopNav>
    <Page.TopNav.Start>
      <Page.SideNavToggle />
      <StoryLogo />
    </Page.TopNav.Start>
    <Page.TopNav.Middle>
      <StorySearch />
      <View display="flex max-md:none">
        <Button size="9xl" rounded={true} flexGrow={0}>
          <Button.Icon>
            <Plus aria-hidden={true} />
          </Button.Icon>
          <Button.Text>Create</Button.Text>
        </Button>
      </View>
      <View display="none max-md:flex">
        <StoryIconButton label="Create">
          <Plus aria-hidden={true} />
        </StoryIconButton>
      </View>
    </Page.TopNav.Middle>
    <Page.TopNav.End>
      {panelToggle ? <StoryPanelToggle /> : null}
      <StoryIconButton label="Notifications">
        <Bell aria-hidden={true} />
      </StoryIconButton>
      <StoryIconButton label="Help">
        <Question aria-hidden={true} />
      </StoryIconButton>
      <StoryIconButton label="Your profile">
        <User aria-hidden={true} />
      </StoryIconButton>
    </Page.TopNav.End>
  </Page.TopNav>
);

const storyProjects = [
  "Cyclone UI",
  "Storm Stack",
  "Acidic",
  "Power Plant",
  "Razorwind",
  "Shell Shock",
  "Mindctl",
  "Storm Ops"
];

const StorySideNav = () => (
  <Page.SideNav>
    <Page.SideNav.Header>
      <View alignItems="center" flexDirection="row" gap="2xl">
        <View
          width={32}
          height={32}
          alignItems="center"
          justifyContent="center"
          backgroundColor="muted"
          borderRadius="md">
          <Kanban aria-hidden={true} size={18} color="accent" />
        </View>
        <View>
          <BodyText
            render="span"
            size="sm"
            color="inkEmphasis"
            fontWeight="600">
            Cyclone UI
          </BodyText>
          <BodyText render="span" size="sm" color="inkSubtle">
            Design system
          </BodyText>
        </View>
      </View>
    </Page.SideNav.Header>
    <Page.SideNav.Body>
      <StoryNavItem icon={<House aria-hidden={true} size={18} />} active={true}>
        Overview
      </StoryNavItem>
      <StoryNavItem icon={<Tray aria-hidden={true} size={18} />}>
        Inbox
      </StoryNavItem>
      <StoryNavItem icon={<ChartBar aria-hidden={true} size={18} />}>
        Reports
      </StoryNavItem>
      <StoryNavItem
        icon={<ClockCounterClockwise aria-hidden={true} size={18} />}>
        Recent
      </StoryNavItem>
      <StoryNavGroupLabel>Projects</StoryNavGroupLabel>
      {storyProjects.map(project => (
        <StoryNavItem
          key={project}
          icon={<Folder aria-hidden={true} size={18} />}>
          {project}
        </StoryNavItem>
      ))}
    </Page.SideNav.Body>
    <Page.SideNav.Footer>
      <StoryNavItem icon={<Gear aria-hidden={true} size={18} />}>
        Settings
      </StoryNavItem>
    </Page.SideNav.Footer>
    <Page.SideNav.Splitter />
  </Page.SideNav>
);

const StorySection = styled(View, {
  flexDirection: "column",
  gap: "2xl",
  padding: "7xl max-md:4xl",
  backgroundColor: "surfaceElevated",
  borderWidth: 1,
  borderColor: "hairline",
  borderRadius: "container"
});

const storySections = [
  {
    title: "Release readiness",
    body: "Track the components that are ready to publish, the ones still in review, and anything blocked on an upstream fix."
  },
  {
    title: "Design tokens",
    body: "Colors, typography and spacing come from the shared token set, so every application built on this layout looks and feels the same."
  },
  {
    title: "Accessibility",
    body: "Every layout area is a landmark, and the skip links at the top of the page jump straight to each one. Press Tab to see them."
  },
  {
    title: "Responsive behavior",
    body: "Below 1024px the side nav and panel become overlays, and main always scrolls with the document."
  },
  {
    title: "Resizing",
    body: "Drag the edge of the side nav or panel, or focus the edge and use the arrow keys. Double-click the side nav's edge to collapse it."
  },
  {
    title: "Recent activity",
    body: "Pull requests, releases and comments from across the workspace appear here as they happen."
  }
];

const StoryMain = ({
  fixed,
  children
}: {
  fixed?: boolean;
  children?: ReactNode;
}) => (
  <Page.Main fixed={fixed}>
    <Page.Main.Header>
      <HeadingLargeText flexGrow={1}>Overview</HeadingLargeText>
      <Button variant="ghost" size="9xl" flexGrow={0}>
        <Button.Text>Share</Button.Text>
      </Button>
    </Page.Main.Header>
    <Page.Main.Content>
      {children}
      {storySections.map(section => (
        <StorySection key={section.title}>
          <HeadingSmallText>{section.title}</HeadingSmallText>
          <BodyText>{section.body}</BodyText>
        </StorySection>
      ))}
    </Page.Main.Content>
  </Page.Main>
);

const StoryPanel = () => {
  const panel = usePagePanel();

  return (
    <Page.Panel label="Details">
      <Page.Panel.Header>
        <View alignItems="center" flexDirection="row" gap="2xl">
          <HeadingSmallText flexGrow={1}>Details</HeadingSmallText>
          <StoryIconButton
            label="Close details"
            onPress={() => panel.setOpen(false)}>
            <X aria-hidden={true} />
          </StoryIconButton>
        </View>
      </Page.Panel.Header>
      <Page.Panel.Body>
        <BodyText size="sm">
          The panel sits beside main on desktop and over it on smaller screens.
          Drag its edge to resize it.
        </BodyText>
        {storySections.map(section => (
          <View key={section.title} gap="md" paddingTop="4xl">
            <BodyText size="sm" color="inkEmphasis" fontWeight="600">
              {section.title}
            </BodyText>
            <BodyText size="sm">{section.body}</BodyText>
          </View>
        ))}
      </Page.Panel.Body>
      <Page.Panel.Splitter />
    </Page.Panel>
  );
};

const StoryBanner = () => (
  <Page.Banner>
    <BodyText render="span" size="sm" color="onAccent">
      Scheduled maintenance starts Saturday at 02:00 UTC.
    </BodyText>
  </Page.Banner>
);

const meta = {
  title: "Layouts/Page",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    // The layout is fixed to the viewport, so each docs example needs its own frame.
    docs: {
      story: {
        inline: false,
        iframeHeight: 640
      }
    }
  },
  args: {
    children: null
  },
  render: args => (
    <Page {...args}>
      <StoryTopNav />
      <StorySideNav />
      <StoryMain />
    </Page>
  )
} satisfies Meta<typeof Page>;



type Story = StoryObj<typeof meta>;

// The side nav starts expanded on desktop and collapsed below 1024px.
const isDesktopCanvas = () =>
  (
    globalThis as unknown as {
      matchMedia: (query: string) => { matches: boolean };
    }
  ).matchMedia("(min-width: 1024px)").matches;

const expectSideNavExpanded = async (
  canvasElement: HTMLElement,
  expanded: boolean
) => {
  const canvas = within(canvasElement);

  // `useMedia` reports mobile on the first render, so the toggle settles
  // into the desktop state just after mount.
  await waitFor(async () =>
    expect(canvas.getByRole("button", { name: /sidebar$/ })).toHaveAttribute(
      "aria-expanded",
      String(expanded)
    )
  );
  // A hidden element has no accessible name, so the collapsed side nav can
  // only be found without one.
  await waitFor(async () =>
    expanded
      ? expect(
          canvas.getByRole("navigation", { name: "Sidebar" })
        ).toBeVisible()
      : expect(
          canvas.getByRole("navigation", { hidden: true })
        ).not.toBeVisible()
  );
};

const __Default: Story = {
  play: async ({ canvasElement }) => {
    const expanded = isDesktopCanvas();

    await expectSideNavExpanded(canvasElement, expanded);

    const toggle = within(canvasElement).getByRole("button", {
      name: /sidebar$/
    });

    await expect(toggle).toHaveAccessibleName(
      expanded ? "Collapse sidebar" : "Expand sidebar"
    );

    await userEvent.click(toggle);
    await expectSideNavExpanded(canvasElement, !expanded);
    await expect(toggle).toHaveAccessibleName(
      expanded ? "Expand sidebar" : "Collapse sidebar"
    );

    await userEvent.click(toggle);
    await expectSideNavExpanded(canvasElement, expanded);
  }
};

const __WithBanner: Story = {
  render: args => (
    <Page {...args}>
      <StoryBanner />
      <StoryTopNav />
      <StorySideNav />
      <StoryMain />
    </Page>
  )
};

const __WithPanel: Story = {
  render: args => (
    <Page {...args}>
      <StoryTopNav panelToggle={true} />
      <StorySideNav />
      <StoryMain />
      <StoryPanel />
    </Page>
  )
};

/** Hover the toggle button to open the collapsed side nav as a flyout. */
const __CollapsedSideNav: Story = {
  args: {
    defaultSideNavCollapsed: true
  }
};

/** Press `Ctrl` + `[` to toggle the side nav. */
const __KeyboardShortcut: Story = {
  args: {
    sideNavShortcutEnabled: true
  },
  play: async ({ canvasElement }) => {
    const expanded = isDesktopCanvas();

    await expectSideNavExpanded(canvasElement, expanded);

    // `[[` types a literal `[`; a single one opens a key code descriptor.
    await userEvent.keyboard("{Control>}[[{/Control}");
    await expectSideNavExpanded(canvasElement, !expanded);

    await userEvent.keyboard("{Control>}[[{/Control}");
    await expectSideNavExpanded(canvasElement, expanded);
  }
};

/** On desktop, main has its own scroll container instead of scrolling the document. */
const __FixedMain: Story = {
  render: args => (
    <Page {...args}>
      <StoryTopNav />
      <StorySideNav />
      <StoryMain fixed={true} />
    </Page>
  )
};

const StoryCustomSkipLink = () => {
  const id = useId();

  usePageSkipLink(id, "Release checklist");

  return (
    <StorySection id={id}>
      <HeadingSmallText>Release checklist</HeadingSmallText>
      <BodyText>
        This section registered its own skip link. Press Tab to see it at the
        end of the list.
      </BodyText>
    </StorySection>
  );
};

const __CustomSkipLink: Story = {
  render: args => (
    <Page {...args}>
      <StoryTopNav />
      <StorySideNav />
      <StoryMain>
        <StoryCustomSkipLink />
      </StoryMain>
    </Page>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.tab();
    await expect(
      await canvas.findByRole("link", { name: "Main content" })
    ).toHaveFocus();
    await expect(
      canvas.getByRole("link", { name: "Release checklist" })
    ).toBeVisible();
  }
};

const StoryExpandSideNavButton = () => {
  const sideNav = usePageSideNav();

  return (
    <StorySection>
      <HeadingSmallText>Take the tour</HeadingSmallText>
      <BodyText>
        Starting the tour expands the side nav first, so its first step can
        point at it.
      </BodyText>
      <Button flexGrow={0} alignSelf="flex-start" onPress={sideNav.expand}>
        <Button.Text>Start tour</Button.Text>
      </Button>
    </StorySection>
  );
};

/** `usePageSideNav` controls the side nav from anywhere inside `<Page>`. */
const __ExpandSideNavFromHook: Story = {
  args: {
    defaultSideNavCollapsed: true
  },
  render: args => (
    <Page {...args}>
      <StoryTopNav />
      <StorySideNav />
      <StoryMain>
        <StoryExpandSideNavButton />
      </StoryMain>
    </Page>
  )
};

/** Below 1024px the side nav and panel open over main. */
const __Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile2"
    }
  },
  render: args => (
    <Page {...args}>
      <StoryTopNav panelToggle={true} />
      <StorySideNav />
      <StoryMain />
      <StoryPanel />
    </Page>
  ),
  args: {
    defaultPanelOpen: false
  }
};

const S: any = { default: meta, Default: __Default, WithBanner: __WithBanner, WithPanel: __WithPanel, CollapsedSideNav: __CollapsedSideNav, KeyboardShortcut: __KeyboardShortcut, FixedMain: __FixedMain, CustomSkipLink: __CustomSkipLink, ExpandSideNavFromHook: __ExpandSideNavFromHook, Mobile: __Mobile };

function compose(S: any, key: string) {
  const meta: any = S.default ?? {};
  const st: any = S[key];
  const args: any = { ...(meta.args ?? {}), ...(st && st.args ? st.args : {}) };
  // Storybook resolves argTypes.mapping (control value -> real arg) before
  // rendering; mirror that so mapped args don't render raw.
  const at: any = { ...(meta.argTypes ?? {}), ...(st && st.argTypes ? st.argTypes : {}) };
  for (const k of Object.keys(args)) {
    const m = at[k] && at[k].mapping;
    if (m && typeof m === 'object' && args[k] in m) args[k] = m[args[k]];
  }
  const title: string = typeof meta.title === 'string' ? meta.title : '';
  const ctx: any = {
    args, name: key, title, kind: title, id: title + '--' + key, componentId: title,
    globals: {}, viewMode: 'story',
    parameters: (st && st.parameters) ?? meta.parameters ?? {},
  };
  let render: (() => any) | null = null;
  if (st && typeof st.render === 'function') render = () => st.render(args, ctx);
  else if (typeof st === 'function') render = () => st(args, ctx);
  else if (typeof meta.render === 'function') render = () => meta.render(args, ctx);
  else {
    const C = (st && st.component) || meta.component;
    if (C) render = () => React.createElement(C, args);
  }
  if (!render) return () => null;
  // [].concat: a single function is legal CSF decorator shorthand. A
  // decorator returning undefined (stubbed addon) falls through to the inner
  // render — otherwise one unrecognized addon blanks the cell silently.
  const decorators: any[] = ([] as any[]).concat((st && st.decorators) ?? []).concat(meta.decorators ?? []);
  return decorators.reduce((inner: any, dec: any) => () => {
    const out = dec(inner, ctx);
    return out === undefined ? inner() : out;
  }, render);
}

export const Default = /* Default */ compose(S, "Default");
export const WithBanner = /* With Banner */ compose(S, "WithBanner");
export const WithPanel = /* With Panel */ compose(S, "WithPanel");
export const CollapsedSideNav = /* Collapsed Side Nav */ compose(S, "CollapsedSideNav");
export const KeyboardShortcut = /* Keyboard Shortcut */ compose(S, "KeyboardShortcut");
export const FixedMain = /* Fixed Main */ compose(S, "FixedMain");
export const CustomSkipLink = /* Custom Skip Link */ compose(S, "CustomSkipLink");
export const ExpandSideNavFromHook = /* Expand Side Nav From Hook */ compose(S, "ExpandSideNavFromHook");
export const Mobile = /* Mobile */ compose(S, "Mobile");
