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
import { SidebarSimple } from "@cyclone-ui/icons";
import type { ScrollViewProps } from "@cyclone-ui/scroll-view";
import { ScrollView } from "@cyclone-ui/scroll-view";
import { AnimatePresence } from "@tamagui/animate-presence";
import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  useMedia,
  View,
  withStaticProperties
} from "@tamagui/core";
import type {
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  PointerEvent,
  ReactElement,
  ReactNode
} from "react";
import {
  Children,
  createContext,
  isValidElement,
  use,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState
} from "react";
import type {
  PageResizeEdge,
  PageShortcutEvent,
  PageSkipLink,
  PageWidth,
  PageWidthBounds
} from "./utilities";
import {
  clampPageWidth,
  getDraggedWidth,
  getKeyboardResizedWidth,
  getPanelWidthBounds,
  getSideNavWidthBounds,
  isSideNavShortcut,
  PAGE_BANNER_HEIGHT,
  PAGE_PANEL_DEFAULT_WIDTH,
  PAGE_SIDE_NAV_DEFAULT_WIDTH,
  PAGE_SIDE_NAV_MIN_WIDTH,
  PAGE_TOP_NAV_HEIGHT,
  sortSkipLinks
} from "./utilities";

/** Hover time on the toggle button before a collapsed side nav flies out. */
const PEEK_OPEN_DELAY = 200;

/** Time to move between the toggle button and the flyout before it closes. */
const PEEK_CLOSE_DELAY = 300;

/** Built-in skip links come first, in this order; custom ones follow. */
const SKIP_LINK_INDEX = {
  main: 0,
  sideNav: 1,
  panel: 2,
  topNav: 3,
  banner: 4
} as const;

export const PAGE_CUSTOM_SKIP_LINK_INDEX = 5;

interface PageBrowserKeyboardEvent extends PageShortcutEvent {
  defaultPrevented: boolean;
  preventDefault: () => void;
}

type PageKeyboardListener = (event: PageBrowserKeyboardEvent) => void;

interface PageBrowserElement {
  focus: () => void;
  hasAttribute: (name: string) => boolean;
  setAttribute: (name: string, value: string) => void;
}

interface PageBrowserWindow {
  innerWidth: number;
  requestAnimationFrame: (callback: () => void) => number;
  document: {
    getElementById: (id: string) => PageBrowserElement | null;
    addEventListener: (type: "keydown", listener: PageKeyboardListener) => void;
    removeEventListener: (
      type: "keydown",
      listener: PageKeyboardListener
    ) => void;
  };
}

/** Keeps a splitter drag going when the cursor outruns the handle. */
interface PagePointerCaptureTarget {
  setPointerCapture: (pointerId: number) => void;
  releasePointerCapture: (pointerId: number) => void;
  hasPointerCapture: (pointerId: number) => boolean;
}

const getBrowserWindow = () =>
  (globalThis as typeof globalThis & { window?: PageBrowserWindow }).window;

const getViewportWidth = () => getBrowserWindow()?.innerWidth ?? 0;

const containsFocus = (event: FocusEvent) =>
  (
    event.currentTarget as unknown as { contains: (node: unknown) => boolean }
  ).contains(event.relatedTarget);

/** A stable function that always calls the latest `callback` from props. */
const useEventCallback = <Args extends unknown[], Result>(
  callback: (...args: Args) => Result
) => {
  const callbackRef = useRef(callback);

  useIsomorphicLayoutEffect(() => {
    callbackRef.current = callback;
  });

  return useCallback((...args: Args) => callbackRef.current(...args), []);
};

export type PageScreen = "desktop" | "mobile";

export type PageSideNavTrigger =
  | "toggle-button"
  | "shortcut"
  | "splitter"
  | "skip-link"
  | "backdrop"
  | "escape"
  | "hook";

export interface PageSideNavChangeDetails {
  /**
   * The side nav keeps a separate state for desktop (inline) and mobile
   * (overlay) screens; this is the one that changed.
   */
  screen: PageScreen;
  trigger: PageSideNavTrigger;
}

interface PageContextValue {
  isDesktop: boolean;
  bannerHeight: number;
  /** Combined height of the fixed banner and top nav. */
  headerOffset: number;
  setBannerHeight: (height: number) => void;
  setTopNavHeight: (height: number) => void;
  sideNavId: string;
  mainId: string;
  panelId: string;
  hasSideNav: boolean;
  setHasSideNav: (hasSideNav: boolean) => void;
  sideNavWidth: number;
  setSideNavWidth: (width: number) => void;
  sideNavExpanded: Record<PageScreen, boolean>;
  updateSideNavExpanded: (
    expanded: boolean,
    trigger: PageSideNavTrigger
  ) => void;
  sideNavPeeking: boolean;
  startSideNavPeek: () => void;
  endSideNavPeek: () => void;
  holdSideNavPeek: () => void;
  panelOpen: boolean;
  setPanelOpen: (open: boolean) => void;
  registerSkipLink: (link: Omit<PageSkipLink, "order">) => () => void;
}

const PageContext = createContext<PageContextValue | null>(null);

const usePageContext = (consumer: string) => {
  const context = use(PageContext);

  if (!context) {
    throw new Error(`${consumer} must be rendered inside <Page>.`);
  }

  return context;
};

interface PageAreaContextValue {
  area: "sideNav" | "panel";
  areaId: string;
  edge: PageResizeEdge;
  width: number;
  setWidth: (width: number) => void;
  getBounds: () => PageWidthBounds;
}

const PageAreaContext = createContext<PageAreaContextValue | null>(null);

const PageMainContext = createContext({ fixed: false });

export interface PageSideNavState {
  /** Whether the side nav is expanded on the current screen size. */
  expanded: boolean;
  /** Whether the collapsed side nav is shown as a flyout on hover. */
  peeking: boolean;
  expand: () => void;
  collapse: () => void;
  toggle: () => void;
}

/** Reads and changes the side nav state from anywhere inside `<Page>`. */
export const usePageSideNav = (): PageSideNavState => {
  const { isDesktop, sideNavExpanded, sideNavPeeking, updateSideNavExpanded } =
    usePageContext("usePageSideNav");
  const expanded = sideNavExpanded[isDesktop ? "desktop" : "mobile"];

  return useMemo(
    () => ({
      expanded,
      peeking: sideNavPeeking,
      expand: () => updateSideNavExpanded(true, "hook"),
      collapse: () => updateSideNavExpanded(false, "hook"),
      toggle: () => updateSideNavExpanded(!expanded, "hook")
    }),
    [expanded, sideNavPeeking, updateSideNavExpanded]
  );
};

export interface PagePanelState {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
}

/** Opens and closes `Page.Panel` from any trigger inside `<Page>`. */
export const usePagePanel = (): PagePanelState => {
  const { panelOpen, setPanelOpen } = usePageContext("usePagePanel");

  return useMemo(
    () => ({
      open: panelOpen,
      setOpen: setPanelOpen,
      toggle: () => setPanelOpen(!panelOpen)
    }),
    [panelOpen, setPanelOpen]
  );
};

/**
 * Adds a link to the page's skip links that moves focus to the element with
 * `id`. Pass `undefined` to remove it while the target is not rendered.
 */
export const usePageSkipLink = (
  id: string | undefined,
  label: string,
  index: number = PAGE_CUSTOM_SKIP_LINK_INDEX
) => {
  const { registerSkipLink } = usePageContext("usePageSkipLink");

  useIsomorphicLayoutEffect(
    () => (id ? registerSkipLink({ id, label, index }) : undefined),
    [id, label, index, registerSkipLink]
  );
};

const PageFrame = styled(View, {
  displayName: "Page",
  position: "relative",
  width: "100%",
  minHeight: "100dvh",
  boxSizing: "border-box",
  // One row holds the inline areas; each claims its own column, so they can
  // be written in any order. The banner, top nav and overlays are fixed and
  // take no cell.
  display: "grid",
  gridTemplateColumns: "auto minmax(0, 1fr) auto",
  alignItems: "flex-start",
  backgroundColor: "surfaceCanvas"
});

const PageSkipLinksFrame = styled(View, {
  displayName: "PageSkipLinks",
  position: "fixed",
  top: "2xl",
  left: "2xl",
  zIndex: "90",
  flexDirection: "column",
  gap: "md",
  variants: {
    visible: {
      true: {
        padding: "2xl",
        backgroundColor: "surfaceFloating",
        borderWidth: 1,
        borderColor: "hairline",
        borderRadius: "md",
        boxShadow: "lg"
      },
      // The links stay in the tab order, so the first Tab on the page reveals them.
      false: {
        width: 1,
        height: 1,
        overflow: "hidden",
        opacity: 0.00000001,
        pointerEvents: "none"
      }
    }
  } as const,
  defaultVariants: {
    visible: false
  }
});

const PageSkipLinksLabel = styled(BodyText, {
  displayName: "PageSkipLinksLabel",
  render: "span",
  color: "inkSubtle",
  size: "sm",
  fontWeight: "600"
});

const PageSkipLinkItem = styled(View, {
  displayName: "PageSkipLink",
  render: "a",
  paddingVertical: "lg",
  paddingHorizontal: "xl",
  borderRadius: "md",
  backgroundColor: "transparent hover:muted",
  boxShadow: "none focus-visible:ringOffset",
  outlineWidth: 0
});

const PageSkipLinkText = styled(BodyText, {
  displayName: "PageSkipLinkText",
  render: "span",
  color: "link",
  size: "sm",
  textDecorationLine: "underline"
});

interface PageSkipLinksProps {
  label: string;
  links: PageSkipLink[];
  onNavigate: (id: string) => void;
}

const PageSkipLinks = ({ label, links, onNavigate }: PageSkipLinksProps) => {
  const [visible, setVisible] = useState(false);

  if (!links.length) {
    return null;
  }

  return (
    <PageSkipLinksFrame
      visible={visible}
      onFocus={() => setVisible(true)}
      onBlur={event => {
        if (!containsFocus(event)) {
          setVisible(false);
        }
      }}>
      <PageSkipLinksLabel>{label}</PageSkipLinksLabel>
      {links.map(link => (
        <PageSkipLinkItem
          key={link.id}
          {...{ href: `#${link.id}` }}
          onClick={(event: MouseEvent) => {
            event.preventDefault();
            onNavigate(link.id);
          }}>
          <PageSkipLinkText>{link.label}</PageSkipLinkText>
        </PageSkipLinkItem>
      ))}
    </PageSkipLinksFrame>
  );
};

const PageBackdrop = styled(View, {
  displayName: "PageBackdrop",
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: "20",
  display: "flex lg:none",
  backgroundColor: "overlayBackdrop",
  opacity: "1 enter:0 exit:0",
  transition: {
    duration: "200ms",
    easing: "ease-out",
    enter: "200ms ease-out"
  }
});

export interface PageRootProps {
  children?: ReactNode;
  /**
   * Starts the side nav collapsed on desktop. It always starts collapsed on
   * mobile, where it opens as an overlay.
   *
   * @default false
   */
  defaultSideNavCollapsed?: boolean;
  /**
   * Lets `Ctrl` + `[` toggle the side nav.
   *
   * @default false
   */
  sideNavShortcutEnabled?: boolean;
  /** Runs before each shortcut toggle; return `false` to ignore the key press. */
  canToggleSideNavWithShortcut?: () => boolean;
  /** Called when the side nav expands or collapses; persist it to restore `defaultSideNavCollapsed`. */
  onSideNavExpandedChange?: (
    expanded: boolean,
    details: PageSideNavChangeDetails
  ) => void;
  /** Controls whether `Page.Panel` is open. */
  panelOpen?: boolean;
  /** @default true */
  defaultPanelOpen?: boolean;
  onPanelOpenChange?: (open: boolean) => void;
  /**
   * Heading shown above the skip links.
   *
   * @default "Skip to"
   */
  skipLinksLabel?: string;
}

export type PageProps = GetProps<typeof PageFrame> & PageRootProps;

interface PageSeed {
  bannerHeight: number;
  topNavHeight: number;
  hasSideNav: boolean;
  sideNavWidth: number;
}

const findChild = <Props,>(children: ReactNode, type: unknown) =>
  Children.toArray(children).find(
    (child): child is ReactElement<Props> =>
      isValidElement<Props>(child) && child.type === type
  );

/**
 * Areas register themselves once mounted, which is too late for the server
 * render. Reading the root's direct children first keeps the SSR markup from
 * shifting on hydration; wrapped areas still register as usual.
 */
const getPageSeed = (children: ReactNode): PageSeed => {
  const banner = findChild<PageBannerProps>(children, PageBanner);
  const topNav = findChild<PageTopNavProps>(children, PageTopNav);
  const sideNav = findChild<PageSideNavProps>(children, PageSideNav);

  return {
    bannerHeight: banner ? (banner.props.height ?? PAGE_BANNER_HEIGHT) : 0,
    topNavHeight: topNav ? (topNav.props.height ?? PAGE_TOP_NAV_HEIGHT) : 0,
    hasSideNav: Boolean(sideNav),
    sideNavWidth: sideNav?.props.defaultWidth ?? PAGE_SIDE_NAV_DEFAULT_WIDTH
  };
};

const PageRoot = createStyledHOC(
  PageFrame,
  (
    {
      children,
      defaultSideNavCollapsed = false,
      sideNavShortcutEnabled = false,
      canToggleSideNavWithShortcut,
      onSideNavExpandedChange,
      panelOpen: panelOpenProp,
      defaultPanelOpen = true,
      onPanelOpenChange,
      skipLinksLabel = "Skip to",
      ...props
    }: PageProps,
    forwardedRef
  ) => {
    // Matches the `lg:` / `max-lg:` style clauses that switch the side nav
    // and panel between inline and overlay.
    const isDesktop = useMedia().lg ?? false;
    const screen: PageScreen = isDesktop ? "desktop" : "mobile";
    const [seed] = useState(() => getPageSeed(children));
    const [bannerHeight, setBannerHeight] = useState(seed.bannerHeight);
    const [topNavHeight, setTopNavHeight] = useState(seed.topNavHeight);
    const [hasSideNav, setHasSideNav] = useState(seed.hasSideNav);
    const [sideNavWidth, setSideNavWidth] = useState(seed.sideNavWidth);
    const [sideNavExpanded, setSideNavExpanded] = useState<
      Record<PageScreen, boolean>
    >({ desktop: !defaultSideNavCollapsed, mobile: false });
    const [sideNavPeeking, setSideNavPeeking] = useState(false);
    const [previousScreen, setPreviousScreen] = useState(screen);
    const [uncontrolledPanelOpen, setUncontrolledPanelOpen] =
      useState(defaultPanelOpen);
    const [skipLinks, setSkipLinks] = useState<PageSkipLink[]>([]);
    const skipLinkOrderRef = useRef(0);
    const peekTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
      undefined
    );
    const baseId = useId();
    const sideNavId = `${baseId}-side-nav`;
    const mainId = `${baseId}-main`;
    const panelId = `${baseId}-panel`;
    const panelOpen = panelOpenProp ?? uncontrolledPanelOpen;
    const notifySideNavChange = useEventCallback(
      (expanded: boolean, details: PageSideNavChangeDetails) =>
        onSideNavExpandedChange?.(expanded, details)
    );
    const notifyPanelOpenChange = useEventCallback((open: boolean) =>
      onPanelOpenChange?.(open)
    );
    const canToggleWithShortcut = useEventCallback(
      () => canToggleSideNavWithShortcut?.() ?? true
    );

    // Crossing the breakpoint closes the overlays, so a mobile side nav
    // left open doesn't reappear the next time the window narrows.
    if (previousScreen !== screen) {
      setPreviousScreen(screen);
      setSideNavPeeking(false);
      setSideNavExpanded(current =>
        current.mobile ? { ...current, mobile: false } : current
      );
    }

    const clearPeekTimer = useCallback(() => {
      if (peekTimerRef.current !== undefined) {
        clearTimeout(peekTimerRef.current);
        peekTimerRef.current = undefined;
      }
    }, []);

    useEffect(() => clearPeekTimer, [clearPeekTimer]);

    const updateSideNavExpanded = useCallback(
      (expanded: boolean, trigger: PageSideNavTrigger) => {
        clearPeekTimer();
        setSideNavPeeking(false);

        if (sideNavExpanded[screen] !== expanded) {
          setSideNavExpanded(current => ({
            ...current,
            [screen]: expanded
          }));
          notifySideNavChange(expanded, { screen, trigger });
        }
      },
      [clearPeekTimer, notifySideNavChange, screen, sideNavExpanded]
    );

    const startSideNavPeek = useCallback(() => {
      clearPeekTimer();

      if (isDesktop && !sideNavExpanded.desktop && !sideNavPeeking) {
        peekTimerRef.current = setTimeout(
          () => setSideNavPeeking(true),
          PEEK_OPEN_DELAY
        );
      }
    }, [clearPeekTimer, isDesktop, sideNavExpanded.desktop, sideNavPeeking]);

    // Also cancels a flyout that hasn't opened yet.
    const endSideNavPeek = useCallback(() => {
      clearPeekTimer();
      peekTimerRef.current = setTimeout(
        () => setSideNavPeeking(false),
        PEEK_CLOSE_DELAY
      );
    }, [clearPeekTimer]);

    const setPanelOpen = useCallback(
      (open: boolean) => {
        if (open !== panelOpen) {
          setUncontrolledPanelOpen(open);
          notifyPanelOpenChange(open);
        }
      },
      [notifyPanelOpenChange, panelOpen]
    );

    const registerSkipLink = useCallback(
      (link: Omit<PageSkipLink, "order">) => {
        const entry = { ...link, order: skipLinkOrderRef.current++ };

        setSkipLinks(current => [
          ...current.filter(({ id }) => id !== link.id),
          entry
        ]);

        return () =>
          setSkipLinks(current => current.filter(item => item !== entry));
      },
      []
    );

    const navigateToSkipLink = useCallback(
      (id: string) => {
        if (id === sideNavId) {
          updateSideNavExpanded(true, "skip-link");
        }

        const browserWindow = getBrowserWindow();

        // Wait for a collapsed side nav to render before focusing it.
        browserWindow?.requestAnimationFrame(() => {
          const target = browserWindow.document.getElementById(id);

          if (target) {
            if (!target.hasAttribute("tabindex")) {
              target.setAttribute("tabindex", "-1");
            }

            target.focus();
          }
        });
      },
      [updateSideNavExpanded, sideNavId]
    );

    const overlayOpen = hasSideNav && sideNavExpanded.mobile && !isDesktop;
    const sideNavExpandedOnScreen = sideNavExpanded[screen];

    useEffect(() => {
      const browserDocument = getBrowserWindow()?.document;

      if (!browserDocument || !hasSideNav || !sideNavShortcutEnabled) {
        return;
      }

      const handleKeyDown = (event: PageBrowserKeyboardEvent) => {
        if (
          !event.defaultPrevented &&
          isSideNavShortcut(event) &&
          canToggleWithShortcut()
        ) {
          event.preventDefault();
          updateSideNavExpanded(!sideNavExpandedOnScreen, "shortcut");
        }
      };

      browserDocument.addEventListener("keydown", handleKeyDown);

      return () =>
        browserDocument.removeEventListener("keydown", handleKeyDown);
    }, [
      canToggleWithShortcut,
      hasSideNav,
      updateSideNavExpanded,
      sideNavExpandedOnScreen,
      sideNavShortcutEnabled
    ]);

    useEffect(() => {
      const browserDocument = getBrowserWindow()?.document;

      if (!browserDocument || !(overlayOpen || sideNavPeeking)) {
        return;
      }

      const handleKeyDown = (event: PageBrowserKeyboardEvent) => {
        if (event.key !== "Escape" || event.defaultPrevented) {
          return;
        }

        if (overlayOpen) {
          updateSideNavExpanded(false, "escape");
        } else {
          clearPeekTimer();
          setSideNavPeeking(false);
        }
      };

      browserDocument.addEventListener("keydown", handleKeyDown);

      return () =>
        browserDocument.removeEventListener("keydown", handleKeyDown);
    }, [clearPeekTimer, overlayOpen, updateSideNavExpanded, sideNavPeeking]);

    const headerOffset = bannerHeight + topNavHeight;

    const context = useMemo<PageContextValue>(
      () => ({
        isDesktop,
        bannerHeight,
        headerOffset,
        setBannerHeight,
        setTopNavHeight,
        sideNavId,
        mainId,
        panelId,
        hasSideNav,
        setHasSideNav,
        sideNavWidth,
        setSideNavWidth,
        sideNavExpanded,
        updateSideNavExpanded,
        sideNavPeeking,
        startSideNavPeek,
        endSideNavPeek,
        holdSideNavPeek: clearPeekTimer,
        panelOpen,
        setPanelOpen,
        registerSkipLink
      }),
      [
        bannerHeight,
        clearPeekTimer,
        endSideNavPeek,
        hasSideNav,
        headerOffset,
        isDesktop,
        mainId,
        panelId,
        panelOpen,
        registerSkipLink,
        setPanelOpen,
        updateSideNavExpanded,
        sideNavExpanded,
        sideNavId,
        sideNavPeeking,
        sideNavWidth,
        startSideNavPeek
      ]
    );

    return (
      <PageContext.Provider value={context}>
        <PageFrame ref={forwardedRef} {...props} paddingTop={headerOffset}>
          <PageSkipLinks
            label={skipLinksLabel}
            links={sortSkipLinks(skipLinks)}
            onNavigate={navigateToSkipLink}
          />
          {children}
          <AnimatePresence>
            {overlayOpen ? (
              <PageBackdrop
                key="backdrop"
                aria-hidden={true}
                top={headerOffset}
                onPress={() => updateSideNavExpanded(false, "backdrop")}
              />
            ) : null}
          </AnimatePresence>
        </PageFrame>
      </PageContext.Provider>
    );
  },
  { displayName: "Page" }
);

const PageBannerFrame = styled(View, {
  displayName: "PageBanner",
  role: "region",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: "40",
  boxSizing: "border-box",
  overflow: "hidden",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "2xl",
  paddingHorizontal: "4xl max-md:2xl",
  backgroundColor: "accent",
  outlineWidth: 0
});

export interface PageBannerExtraProps {
  /** @default 48 */
  height?: number;
  /**
   * Accessible name of the banner region.
   *
   * @default "Banner"
   */
  label?: string;
  /** Defaults to `label`. */
  skipLinkLabel?: string;
}

export type PageBannerProps = GetProps<typeof PageBannerFrame> &
  PageBannerExtraProps;

const PageBanner = createStyledHOC(
  PageBannerFrame,
  (
    {
      children,
      height = PAGE_BANNER_HEIGHT,
      label = "Banner",
      skipLinkLabel,
      ...props
    }: PageBannerProps,
    forwardedRef
  ) => {
    const { setBannerHeight } = usePageContext("Page.Banner");
    const id = useId();

    useIsomorphicLayoutEffect(() => {
      setBannerHeight(height);

      return () => setBannerHeight(0);
    }, [height, setBannerHeight]);

    usePageSkipLink(id, skipLinkLabel ?? label, SKIP_LINK_INDEX.banner);

    return (
      <PageBannerFrame
        ref={forwardedRef}
        id={id}
        tabIndex={-1}
        aria-label={label}
        {...props}
        height={height}>
        {children}
      </PageBannerFrame>
    );
  },
  { displayName: "PageBanner" }
);

const PageTopNavFrame = styled(View, {
  displayName: "PageTopNav",
  render: "header",
  position: "fixed",
  left: 0,
  right: 0,
  zIndex: "40",
  boxSizing: "border-box",
  flexDirection: "row",
  alignItems: "stretch",
  backgroundColor: "surfaceElevated",
  borderBottomWidth: 1,
  borderBottomColor: "hairline",
  outlineWidth: 0
});

export interface PageTopNavExtraProps {
  /** @default 56 */
  height?: number;
  /** @default "Top navigation" */
  label?: string;
  /** Defaults to `label`. */
  skipLinkLabel?: string;
}

export type PageTopNavProps = GetProps<typeof PageTopNavFrame> &
  PageTopNavExtraProps;

const PageTopNavImpl = createStyledHOC(
  PageTopNavFrame,
  (
    {
      children,
      height = PAGE_TOP_NAV_HEIGHT,
      label = "Top navigation",
      skipLinkLabel,
      ...props
    }: PageTopNavProps,
    forwardedRef
  ) => {
    const { bannerHeight, setTopNavHeight } = usePageContext("Page.TopNav");
    const id = useId();

    useIsomorphicLayoutEffect(() => {
      setTopNavHeight(height);

      return () => setTopNavHeight(0);
    }, [height, setTopNavHeight]);

    usePageSkipLink(id, skipLinkLabel ?? label, SKIP_LINK_INDEX.topNav);

    return (
      <PageTopNavFrame
        ref={forwardedRef}
        id={id}
        tabIndex={-1}
        aria-label={label}
        {...props}
        top={bannerHeight}
        height={height}>
        {children}
      </PageTopNavFrame>
    );
  },
  { displayName: "PageTopNav" }
);

const PageTopNavStartFrame = styled(View, {
  displayName: "PageTopNavStart",
  boxSizing: "border-box",
  flexShrink: 0,
  flexDirection: "row",
  alignItems: "center",
  gap: "2xl",
  paddingHorizontal: "4xl max-md:2xl",
  // Matches the side nav, so the strip of top nav border it covers vanishes.
  backgroundColor: "surfaceElevated",
  variants: {
    // Lines up with an expanded inline side nav and covers the top nav's
    // bottom border above it, so the side nav reads as full height.
    aligned: {
      true: {
        marginBottom: "0px lg:-1px",
        borderRightWidth: "0px lg:1px",
        borderRightColor: "hairline"
      }
    }
  } as const
});

const PageTopNavStart = createStyledHOC(
  PageTopNavStartFrame,
  (props, forwardedRef) => {
    const { hasSideNav, sideNavExpanded, sideNavWidth } =
      usePageContext("Page.TopNav.Start");
    const aligned = hasSideNav && sideNavExpanded.desktop;

    return (
      <PageTopNavStartFrame
        ref={forwardedRef}
        aligned={aligned}
        width={aligned ? `auto lg:${sideNavWidth}px` : undefined}
        {...props}
      />
    );
  },
  { displayName: "PageTopNavStart" }
);

const PageTopNavMiddle = styled(View, {
  displayName: "PageTopNavMiddle",
  flexGrow: 1,
  flexShrink: 1,
  minWidth: 0,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "2xl",
  paddingHorizontal: "4xl max-md:2xl"
});

const PageTopNavEnd = styled(View, {
  displayName: "PageTopNavEnd",
  flexShrink: 0,
  // Stays on the end edge when there's no `Page.TopNav.Middle`.
  marginLeft: "auto",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "lg",
  paddingRight: "4xl max-md:2xl"
});

const PageTopNav = withStaticProperties(PageTopNavImpl, {
  Start: PageTopNavStart,
  Middle: PageTopNavMiddle,
  End: PageTopNavEnd
});

const PageSideNavToggleFrame = styled(View, {
  displayName: "PageSideNavToggle",
  render: "button",
  role: "button",
  width: 36,
  height: 36,
  flexShrink: 0,
  padding: 0,
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  backgroundColor: "transparent hover:mutedHover press:mutedActive",
  borderWidth: 0,
  borderRadius: "full",
  boxShadow: "focus-visible:ringOffset"
});

export interface PageSideNavToggleExtraProps {
  /** @default "Expand sidebar" */
  expandLabel?: string;
  /** @default "Collapse sidebar" */
  collapseLabel?: string;
}

export type PageSideNavToggleProps = GetProps<typeof PageSideNavToggleFrame> &
  PageSideNavToggleExtraProps;

/**
 * Expands and collapses the side nav. Hovering it while the side nav is
 * collapsed on desktop opens the side nav as a flyout.
 */
const PageSideNavToggle = createStyledHOC(
  PageSideNavToggleFrame,
  (
    {
      expandLabel = "Expand sidebar",
      collapseLabel = "Collapse sidebar",
      onPress,
      onMouseEnter,
      onMouseLeave,
      ...props
    }: PageSideNavToggleProps,
    forwardedRef
  ) => {
    const page = usePageContext("Page.SideNavToggle");
    const expanded =
      page.sideNavExpanded[page.isDesktop ? "desktop" : "mobile"];

    if (!page.hasSideNav) {
      return null;
    }

    return (
      <PageSideNavToggleFrame
        ref={forwardedRef}
        aria-controls={page.sideNavId}
        aria-expanded={expanded}
        aria-label={expanded ? collapseLabel : expandLabel}
        {...props}
        onPress={event => {
          onPress?.(event);
          page.updateSideNavExpanded(!expanded, "toggle-button");
        }}
        onMouseEnter={event => {
          onMouseEnter?.(event);
          page.startSideNavPeek();
        }}
        onMouseLeave={event => {
          onMouseLeave?.(event);
          page.endSideNavPeek();
        }}>
        <SidebarSimple aria-hidden={true} size={20} color="inkBody" />
      </PageSideNavToggleFrame>
    );
  },
  { displayName: "PageSideNavToggle" }
);

const PageSideNavFrame = styled(View, {
  displayName: "PageSideNav",
  render: "nav",
  gridColumn: "1",
  gridRow: "1",
  position: "sticky max-lg:fixed",
  left: 0,
  zIndex: "30",
  alignSelf: "flex-start",
  flexShrink: 0,
  boxSizing: "border-box",
  maxWidth: "90vw",
  flexDirection: "column",
  backgroundColor: "surfaceElevated",
  borderRightWidth: 1,
  borderRightColor: "hairline",
  boxShadow: "none max-lg:lg",
  outlineWidth: 0,
  variants: {
    peeking: {
      true: {
        position: "fixed",
        boxShadow: "lg"
      }
    }
  } as const
});

export interface PageSideNavExtraProps {
  /**
   * Starting width in pixels. Resizing changes it until the side nav
   * remounts; persist `Page.SideNav.Splitter`'s `onResizeEnd` to restore it.
   *
   * @default 320
   */
  defaultWidth?: number;
  /** @default 240 */
  minWidth?: PageWidth;
  /** @default "50vw" */
  maxWidth?: PageWidth;
  /**
   * Accessible name of the navigation landmark.
   *
   * @default "Sidebar"
   */
  label?: string;
  /** Defaults to `label`. */
  skipLinkLabel?: string;
}

export type PageSideNavProps = Omit<
  GetProps<typeof PageSideNavFrame>,
  "minWidth" | "maxWidth"
> &
  PageSideNavExtraProps;

const PageSideNavImpl = createStyledHOC(
  PageSideNavFrame,
  (
    {
      children,
      defaultWidth = PAGE_SIDE_NAV_DEFAULT_WIDTH,
      minWidth = PAGE_SIDE_NAV_MIN_WIDTH,
      maxWidth = "50vw",
      label = "Sidebar",
      skipLinkLabel,
      onMouseEnter,
      onMouseLeave,
      ...props
    }: PageSideNavProps,
    forwardedRef
  ) => {
    const page = usePageContext("Page.SideNav");
    const { setHasSideNav, setSideNavWidth } = page;

    // `defaultWidth` only seeds the width, so a later change doesn't discard
    // the user's resize.
    useIsomorphicLayoutEffect(() => {
      setHasSideNav(true);
      setSideNavWidth(defaultWidth);

      return () => setHasSideNav(false);
    }, [setHasSideNav, setSideNavWidth]);

    usePageSkipLink(
      page.sideNavId,
      skipLinkLabel ?? label,
      SKIP_LINK_INDEX.sideNav
    );

    const getBounds = useCallback(
      () => getSideNavWidthBounds(getViewportWidth(), minWidth, maxWidth),
      [maxWidth, minWidth]
    );

    const area = useMemo<PageAreaContextValue>(
      () => ({
        area: "sideNav",
        areaId: page.sideNavId,
        edge: "end",
        width: page.sideNavWidth,
        setWidth: setSideNavWidth,
        getBounds
      }),
      [getBounds, page.sideNavId, page.sideNavWidth, setSideNavWidth]
    );

    const desktopDisplay =
      page.sideNavExpanded.desktop || page.sideNavPeeking ? "flex" : "none";
    const mobileDisplay = page.sideNavExpanded.mobile ? "flex" : "none";

    return (
      <PageAreaContext.Provider value={area}>
        <PageSideNavFrame
          ref={forwardedRef}
          id={page.sideNavId}
          tabIndex={-1}
          aria-label={label}
          {...props}
          peeking={page.sideNavPeeking}
          display={`${desktopDisplay} max-lg:${mobileDisplay}`}
          top={page.headerOffset}
          height={`calc(100dvh - ${page.headerOffset}px)`}
          width={page.sideNavWidth}
          onMouseEnter={event => {
            onMouseEnter?.(event);

            if (page.sideNavPeeking) {
              page.holdSideNavPeek();
            }
          }}
          onMouseLeave={event => {
            onMouseLeave?.(event);

            if (page.sideNavPeeking) {
              page.endSideNavPeek();
            }
          }}>
          {children}
        </PageSideNavFrame>
      </PageAreaContext.Provider>
    );
  },
  { displayName: "PageSideNav" }
);

const PageSectionHeader = styled(View, {
  displayName: "PageSectionHeader",
  flexShrink: 0,
  flexDirection: "column",
  gap: "2xl",
  padding: "4xl",
  paddingBottom: "2xl"
});

const PageSectionBodyContent = styled(View, {
  displayName: "PageSectionBodyContent",
  flexDirection: "column",
  gap: "md",
  paddingHorizontal: "4xl",
  paddingVertical: "2xl"
});

/** The scroll container between the header and footer. */
const PageSectionBody = ({ children, ...props }: ScrollViewProps) => (
  <ScrollView size="lg" flex={1} minHeight={0} {...props}>
    <PageSectionBodyContent>{children}</PageSectionBodyContent>
  </ScrollView>
);

const PageSectionFooter = styled(View, {
  displayName: "PageSectionFooter",
  flexShrink: 0,
  flexDirection: "column",
  gap: "2xl",
  padding: "4xl",
  borderTopWidth: 1,
  borderTopColor: "hairline"
});

const PageSplitterFrame = styled(View, {
  displayName: "PageSplitter",
  role: "separator",
  position: "absolute",
  top: 0,
  bottom: 0,
  zIndex: "10",
  width: 9,
  alignItems: "center",
  cursor: "ew-resize",
  display: "flex max-lg:none",
  outlineWidth: 0,
  variants: {
    // Centered on the area's border.
    edge: {
      end: {
        right: -5
      },
      start: {
        left: -5
      }
    }
  } as const
});

const PageSplitterLine = styled(View, {
  displayName: "PageSplitterLine",
  width: 2,
  height: "100%",
  backgroundColor: "transparent",
  transition: "100ms",
  variants: {
    active: {
      true: {
        backgroundColor: "accent"
      }
    }
  } as const
});

export interface PageResizeStartDetails {
  initialWidth: number;
}

export interface PageResizeEndDetails {
  initialWidth: number;
  finalWidth: number;
}

export interface PageSplitterProps {
  /** Accessible name; defaults to "Resize sidebar" or "Resize panel". */
  label?: string;
  onResizeStart?: (details: PageResizeStartDetails) => void;
  /** Persist `finalWidth` to restore it with the area's `defaultWidth`. */
  onResizeEnd?: (details: PageResizeEndDetails) => void;
}

interface PageSplitterDrag {
  pointerId: number;
  startX: number;
  initialWidth: number;
  width: number;
}

/**
 * Resizes `Page.SideNav` or `Page.Panel` by dragging or with the arrow,
 * `Home` and `End` keys. Double-clicking the side nav's splitter collapses it.
 */
const PageSplitter = ({
  label,
  onResizeStart,
  onResizeEnd
}: PageSplitterProps) => {
  const area = use(PageAreaContext);
  const { updateSideNavExpanded } = usePageContext("Page splitter");
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dragging, setDragging] = useState(false);
  // Read from the viewport, so it is only known once the user interacts.
  const [bounds, setBounds] = useState<PageWidthBounds>();
  const dragRef = useRef<PageSplitterDrag | null>(null);

  if (!area) {
    throw new Error(
      "Page.SideNav.Splitter and Page.Panel.Splitter must be rendered inside Page.SideNav or Page.Panel."
    );
  }

  const handlePointerDown = (event: PointerEvent) => {
    if (event.button !== 0) {
      return;
    }

    // Stops the drag from selecting text.
    event.preventDefault();
    (
      event.currentTarget as unknown as PagePointerCaptureTarget
    ).setPointerCapture(event.pointerId);
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      initialWidth: area.width,
      width: area.width
    };
    setBounds(area.getBounds());
    setDragging(true);
    onResizeStart?.({ initialWidth: area.width });
  };

  const handlePointerMove = (event: PointerEvent) => {
    const drag = dragRef.current;

    if (drag?.pointerId !== event.pointerId) {
      return;
    }

    drag.width = clampPageWidth(
      getDraggedWidth(
        drag.initialWidth,
        event.clientX - drag.startX,
        area.edge
      ),
      area.getBounds()
    );
    area.setWidth(drag.width);
  };

  const handlePointerEnd = (event: PointerEvent) => {
    const drag = dragRef.current;

    if (drag?.pointerId !== event.pointerId) {
      return;
    }

    const target = event.currentTarget as unknown as PagePointerCaptureTarget;

    if (target.hasPointerCapture(event.pointerId)) {
      target.releasePointerCapture(event.pointerId);
    }

    dragRef.current = null;
    setDragging(false);
    onResizeEnd?.({ initialWidth: drag.initialWidth, finalWidth: drag.width });
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const nextBounds = area.getBounds();
    const width = getKeyboardResizedWidth(
      area.width,
      event.key,
      area.edge,
      nextBounds
    );

    if (width === undefined) {
      return;
    }

    event.preventDefault();
    setBounds(nextBounds);
    area.setWidth(width);
    onResizeEnd?.({ initialWidth: area.width, finalWidth: width });
  };

  return (
    <PageSplitterFrame
      edge={area.edge}
      style={{ touchAction: "none" }}
      tabIndex={0}
      aria-controls={area.areaId}
      aria-label={
        label ?? (area.area === "sideNav" ? "Resize sidebar" : "Resize panel")
      }
      aria-orientation="vertical"
      aria-valuenow={area.width}
      aria-valuemin={bounds?.min}
      aria-valuemax={bounds === undefined ? undefined : Math.round(bounds.max)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onDoubleClick={() => {
        if (area.area === "sideNav") {
          updateSideNavExpanded(false, "splitter");
        }
      }}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => {
        setBounds(area.getBounds());
        setFocused(true);
      }}
      onBlur={() => setFocused(false)}>
      <PageSplitterLine active={hovered || focused || dragging} />
    </PageSplitterFrame>
  );
};

const PageSideNav = withStaticProperties(PageSideNavImpl, {
  Header: PageSectionHeader,
  Body: PageSectionBody,
  Footer: PageSectionFooter,
  Splitter: PageSplitter
});

const PageMainFrame = styled(View, {
  displayName: "PageMain",
  render: "main",
  gridColumn: "2",
  gridRow: "1",
  minWidth: 0,
  alignSelf: "stretch",
  flexDirection: "column",
  outlineWidth: 0,
  variants: {
    // On desktop, main scrolls on its own instead of with the document.
    fixed: {
      true: {
        position: "relative lg:sticky",
        alignSelf: "stretch lg:flex-start",
        overflowY: "visible lg:auto"
      }
    }
  } as const
});

export interface PageMainExtraProps {
  /**
   * Gives main its own scroll container on desktop, so only its content
   * scrolls. Smaller screens always scroll the document.
   *
   * @default false
   */
  fixed?: boolean;
  /** @default "Main content" */
  skipLinkLabel?: string;
}

export type PageMainProps = GetProps<typeof PageMainFrame> & PageMainExtraProps;

const PageMainImpl = createStyledHOC(
  PageMainFrame,
  (
    {
      children,
      fixed = false,
      skipLinkLabel = "Main content",
      ...props
    }: PageMainProps,
    forwardedRef
  ) => {
    const { headerOffset, mainId } = usePageContext("Page.Main");
    const mainContext = useMemo(() => ({ fixed }), [fixed]);

    usePageSkipLink(mainId, skipLinkLabel, SKIP_LINK_INDEX.main);

    return (
      <PageMainContext.Provider value={mainContext}>
        <PageMainFrame
          ref={forwardedRef}
          id={mainId}
          tabIndex={-1}
          {...props}
          fixed={fixed}
          top={fixed ? `0px lg:${headerOffset}px` : undefined}
          height={
            fixed ? `auto lg:calc(100dvh - ${headerOffset}px)` : undefined
          }>
          {children}
        </PageMainFrame>
      </PageMainContext.Provider>
    );
  },
  { displayName: "PageMain" }
);

const PageMainHeaderFrame = styled(View, {
  displayName: "PageMainHeader",
  render: "header",
  position: "sticky",
  zIndex: "10",
  flexShrink: 0,
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "4xl",
  paddingHorizontal: "8xl max-md:4xl",
  paddingVertical: "4xl",
  backgroundColor: "surfaceCanvas",
  borderBottomWidth: 1,
  borderBottomColor: "hairline"
});

/** Stays at the top of main while its content scrolls. */
const PageMainHeader = createStyledHOC(
  PageMainHeaderFrame,
  (props, forwardedRef) => {
    const { headerOffset } = usePageContext("Page.Main.Header");
    const { fixed } = use(PageMainContext);

    return (
      <PageMainHeaderFrame
        ref={forwardedRef}
        top={fixed ? `${headerOffset}px lg:0px` : headerOffset}
        {...props}
      />
    );
  },
  { displayName: "PageMainHeader" }
);

const PageMainContent = styled(View, {
  displayName: "PageMainContent",
  width: "100%",
  maxWidth: 1440,
  marginHorizontal: "auto",
  boxSizing: "border-box",
  flexDirection: "column",
  gap: "7xl",
  paddingHorizontal: "8xl max-md:4xl",
  paddingVertical: "7xl max-md:4xl"
});

const PageMain = withStaticProperties(PageMainImpl, {
  Header: PageMainHeader,
  Content: PageMainContent
});

const PagePanelFrame = styled(View, {
  displayName: "PagePanel",
  render: "aside",
  gridColumn: "3",
  gridRow: "1",
  position: "sticky max-lg:fixed",
  right: 0,
  zIndex: "30",
  alignSelf: "flex-start",
  flexShrink: 0,
  boxSizing: "border-box",
  maxWidth: "90vw",
  flexDirection: "column",
  backgroundColor: "surfaceElevated",
  borderLeftWidth: 1,
  borderLeftColor: "hairline",
  boxShadow: "none max-lg:lg",
  outlineWidth: 0,
  opacity: "1 enter:0 exit:0",
  x: "0 enter:24 exit:24",
  // Only the presence animation; resizing must follow the pointer.
  transition: {
    duration: "200ms",
    easing: "ease-out",
    properties: "opacity, transform",
    enter: "200ms ease-out"
  }
});

export interface PagePanelExtraProps {
  /**
   * Starting width in pixels. It is also the minimum resize width, up to
   * 400px.
   *
   * @default 365
   */
  defaultWidth?: number;
  /** Defaults to half of the space beside an inline side nav. */
  maxWidth?: PageWidth;
  /**
   * Accessible name of the complementary landmark.
   *
   * @default "Panel"
   */
  label?: string;
  /** Defaults to `label`. */
  skipLinkLabel?: string;
}

export type PagePanelProps = Omit<GetProps<typeof PagePanelFrame>, "maxWidth"> &
  PagePanelExtraProps;

/**
 * Sits beside main on desktop and over it on smaller screens. Open and close
 * it with `usePagePanel` or the `panelOpen` prop on `<Page>`.
 */
const PagePanelImpl = createStyledHOC(
  PagePanelFrame,
  (
    {
      children,
      defaultWidth = PAGE_PANEL_DEFAULT_WIDTH,
      maxWidth,
      label = "Panel",
      skipLinkLabel,
      ...props
    }: PagePanelProps,
    forwardedRef
  ) => {
    const page = usePageContext("Page.Panel");
    // Kept here rather than in the frame so it survives closing the panel.
    const [width, setWidth] = useState(defaultWidth);
    const inlineSideNavWidth =
      page.isDesktop && page.hasSideNav && page.sideNavExpanded.desktop
        ? page.sideNavWidth
        : 0;

    usePageSkipLink(
      page.panelOpen ? page.panelId : undefined,
      skipLinkLabel ?? label,
      SKIP_LINK_INDEX.panel
    );

    const getBounds = useCallback(
      () =>
        getPanelWidthBounds(
          getViewportWidth(),
          inlineSideNavWidth,
          defaultWidth,
          maxWidth
        ),
      [defaultWidth, inlineSideNavWidth, maxWidth]
    );

    const area = useMemo<PageAreaContextValue>(
      () => ({
        area: "panel",
        areaId: page.panelId,
        edge: "start",
        width,
        setWidth,
        getBounds
      }),
      [getBounds, page.panelId, width]
    );

    return (
      <PageAreaContext.Provider value={area}>
        <AnimatePresence>
          {page.panelOpen ? (
            <PagePanelFrame
              key="panel"
              ref={forwardedRef}
              id={page.panelId}
              tabIndex={-1}
              aria-label={label}
              {...props}
              top={page.headerOffset}
              height={`calc(100dvh - ${page.headerOffset}px)`}
              width={width}>
              {children}
            </PagePanelFrame>
          ) : null}
        </AnimatePresence>
      </PageAreaContext.Provider>
    );
  },
  { displayName: "PagePanel" }
);

const PagePanel = withStaticProperties(PagePanelImpl, {
  Header: PageSectionHeader,
  Body: PageSectionBody,
  Footer: PageSectionFooter,
  Splitter: PageSplitter
});

/**
 * The base layout of an application page. Compose its areas as direct
 * children, in any order:
 *
 * - `Page.Banner`: a fixed strip at the very top for announcements.
 * - `Page.TopNav`: fixed below the banner, with `Start`, `Middle` and `End` slots.
 * - `Page.SideNav`: inline on desktop, an overlay on smaller screens, with
 *   `Header`, `Body` (scrolls), `Footer` and a resize `Splitter`.
 * - `Page.Main`: the page content, with a sticky `Header` and padded `Content`.
 * - `Page.Panel`: an optional resizable area beside main.
 *
 * Every area is reachable through the page's skip links.
 */
export const Page = withStaticProperties(PageRoot, {
  Banner: PageBanner,
  TopNav: PageTopNav,
  SideNav: PageSideNav,
  SideNavToggle: PageSideNavToggle,
  Main: PageMain,
  Panel: PagePanel
});
