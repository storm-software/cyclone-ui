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

"use client";

import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled, View } from "@tamagui/core";
import { useLayoutEffect, useRef, useSyncExternalStore } from "react";

const reducedMotionMediaQuery = "(prefers-reduced-motion: reduce)";

interface ReducedMotionMediaQuery {
  matches: boolean;
  addEventListener: (type: "change", listener: () => void) => void;
  removeEventListener: (type: "change", listener: () => void) => void;
}

const getBrowserWindow = () =>
  (
    globalThis as typeof globalThis & {
      window?: {
        matchMedia?: (query: string) => ReducedMotionMediaQuery;
      };
    }
  ).window;

const subscribeToReducedMotion = (onStoreChange: () => void) => {
  const mediaQuery = getBrowserWindow()?.matchMedia?.(reducedMotionMediaQuery);

  if (!mediaQuery) {
    return () => {};
  }

  mediaQuery.addEventListener("change", onStoreChange);

  return () => mediaQuery.removeEventListener("change", onStoreChange);
};

const getPrefersReducedMotion = () =>
  getBrowserWindow()?.matchMedia?.(reducedMotionMediaQuery).matches ?? false;

const usePrefersReducedMotion = () =>
  useSyncExternalStore(
    subscribeToReducedMotion,
    getPrefersReducedMotion,
    () => false
  );

const ScrambleAnimationFrame = styled(View, {
  displayName: "ScrambleAnimation",

  position: "relative",
  alignSelf: "flex-start",
  maxWidth: "100%"
});

const ScrambleOverlay = styled(View, {
  displayName: "ScrambleAnimationOverlay",
  position: "absolute",
  top: 0,
  left: 0,
  pointerEvents: "none"
});

const splitGraphemes = (text: string) =>
  typeof Intl.Segmenter === "function"
    ? Array.from(new Intl.Segmenter().segment(text), ({ segment }) => segment)
    : Array.from(text);

interface Glyph {
  element: HTMLElement;
  char: string;
  x: number;
  y: number;
  /** `performance.now()` time at which the original character is shown again. */
  until: number;
}

export type ScrambleAnimationProps = GetProps<typeof ScrambleAnimationFrame> & {
  /** Distance in px from the pointer within which characters scramble. */
  radius?: number;
  /** Seconds a character directly under the pointer stays scrambled. */
  duration?: number;
  /** How often scrambled characters change; `1` is every frame. */
  speed?: number;
  /** Characters used while scrambling. */
  scrambleChars?: string;
  /** Decode the text from scrambled characters when the component mounts. */
  intro?: boolean;
};

export const ScrambleAnimation = createStyledHOC(
  ScrambleAnimationFrame,
  (
    {
      children,
      radius = 100,
      duration = 1.2,
      speed = 0.5,
      scrambleChars = ".:",
      intro = true,
      ...props
    }: ScrambleAnimationProps,
    forwardedRef
  ) => {
    const contentRef = useRef<HTMLElement>(null);
    const overlayRef = useRef<HTMLElement>(null);
    const prefersReducedMotion = usePrefersReducedMotion();
    const settings = { radius, duration, speed, scrambleChars, intro };
    const settingsRef = useRef(settings);
    settingsRef.current = settings;

    useLayoutEffect(() => {
      const content = contentRef.current;
      const overlay = overlayRef.current;
      if (prefersReducedMotion || typeof document === "undefined") {
        return;
      }
      if (!content || !overlay) {
        return;
      }

      let glyphs: Glyph[] = [];
      let frame = 0;
      let lastSwap = 0;

      // Draws a copy of every character on top of its (now transparent)
      // original, so the copies can be swapped without touching React's DOM.
      const build = () => {
        const origin = overlay.getBoundingClientRect();
        const styles = new Map<Element, CSSStyleDeclaration>();
        const range = document.createRange();
        const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT);
        const fragment = document.createDocumentFragment();
        const previous = glyphs;
        glyphs = [];

        while (walker.nextNode()) {
          const node = walker.currentNode as Text;
          const parent = node.parentElement;
          if (!parent || parent.closest("style, script")) {
            continue;
          }

          let style = styles.get(parent);
          if (!style) {
            style = getComputedStyle(parent);
            styles.set(parent, style);
          }

          let offset = 0;
          for (const char of splitGraphemes(node.data)) {
            range.setStart(node, offset);
            offset += char.length;
            range.setEnd(node, offset);
            const rect = range.getClientRects()[0];
            if (/^\s+$/.test(char) || !rect?.width) {
              continue;
            }

            const element = document.createElement("span");
            Object.assign(element.style, {
              position: "absolute",
              left: `${rect.left - origin.left}px`,
              top: `${rect.top - origin.top}px`,
              width: `${rect.width}px`,
              lineHeight: `${rect.height}px`,
              textAlign: "center",
              whiteSpace: "pre",
              color: style.color,
              fontFamily: style.fontFamily,
              fontSize: style.fontSize,
              fontStyle: style.fontStyle,
              fontWeight: style.fontWeight
            });
            element.textContent = char;
            fragment.append(element);
            glyphs.push({
              element,
              char,
              x: rect.left - origin.left + rect.width / 2,
              y: rect.top - origin.top + rect.height / 2,
              until: previous[glyphs.length]?.until ?? 0
            });
          }
        }

        overlay.replaceChildren(fragment);
        refresh();
      };

      const tick = (now: number) => {
        frame = 0;
        const { scrambleChars, speed } = settingsRef.current;
        const swap = now - lastSwap >= 1000 / 60 / Math.max(speed, 0.01);
        if (swap) {
          lastSwap = now;
        }

        let busy = false;
        for (const glyph of glyphs) {
          if (glyph.until <= now) {
            if (glyph.element.textContent !== glyph.char) {
              glyph.element.textContent = glyph.char;
            }
          } else {
            busy = true;
            if (swap && scrambleChars) {
              glyph.element.textContent = scrambleChars.charAt(
                Math.floor(Math.random() * scrambleChars.length)
              );
            }
          }
        }

        if (busy) {
          frame = requestAnimationFrame(tick);
        }
      };

      const wake = () => {
        if (!frame) {
          frame = requestAnimationFrame(tick);
        }
      };

      // Paint scrambled characters right away instead of on the next frame.
      const refresh = () => {
        cancelAnimationFrame(frame);
        lastSwap = 0;
        tick(performance.now());
      };

      const handlePointerMove = (event: PointerEvent) => {
        const { radius, duration } = settingsRef.current;
        const origin = overlay.getBoundingClientRect();
        const x = event.clientX - origin.left;
        const y = event.clientY - origin.top;
        const now = performance.now();
        for (const glyph of glyphs) {
          const distance = Math.hypot(x - glyph.x, y - glyph.y);
          if (distance < radius) {
            glyph.until = Math.max(
              glyph.until,
              now + duration * 1000 * (1 - distance / radius)
            );
          }
        }
        wake();
      };

      // Inherited by the children, so only text is hidden: images, borders
      // and the accessibility tree are left alone.
      content.style.setProperty("-webkit-text-fill-color", "transparent");
      build();

      if (settingsRef.current.intro) {
        const { duration } = settingsRef.current;
        const now = performance.now();
        glyphs.forEach((glyph, index) => {
          glyph.until =
            now +
            (0.15 +
              duration *
                (0.75 * (index / glyphs.length) + 0.25 * Math.random())) *
              1000;
        });
        refresh();
      }

      const mutationObserver = new MutationObserver(build);
      mutationObserver.observe(content, {
        characterData: true,
        childList: true,
        subtree: true
      });
      const resizeObserver = new ResizeObserver(build);
      resizeObserver.observe(content);
      void document.fonts?.ready.then(build);
      content.addEventListener("pointermove", handlePointerMove);

      return () => {
        content.removeEventListener("pointermove", handlePointerMove);
        resizeObserver.disconnect();
        mutationObserver.disconnect();
        cancelAnimationFrame(frame);
        overlay.replaceChildren();
        content.style.removeProperty("-webkit-text-fill-color");
      };
    }, [prefersReducedMotion]);

    return (
      <ScrambleAnimationFrame ref={forwardedRef} {...props}>
        <View ref={contentRef as any}>{children}</View>
        <ScrambleOverlay ref={overlayRef as any} aria-hidden={true} />
      </ScrambleAnimationFrame>
    );
  },
  { displayName: "ScrambleAnimation" }
);
