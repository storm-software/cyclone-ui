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

import type { DomElement, Stage } from "./stage";
import {
  createStage,
  feed,
  focus,
  reduceMotion,
  Shape,
  show,
  start,
  stop,
  SVG_NS
} from "./stage";

type Listener = (e: never) => void;
interface Listening {
  addEventListener: (type: string, fn: Listener) => void;
  removeEventListener: (type: string, fn: Listener) => void;
}
interface PagePointer {
  clientX: number;
  clientY: number;
  pointerType: string;
  pointerId: number;
}
/** The part of a page element `attach` uses. */
export type PageElement = DomElement &
  Listening & {
    getBoundingClientRect: () => {
      left: number;
      top: number;
      width: number;
      height: number;
    };
    contains: (node: unknown) => boolean;
    releasePointerCapture?: (id: number) => void;
    ownerDocument: DomElement["ownerDocument"] & {
      defaultView: {
        IntersectionObserver: new (
          cb: (entries: { isIntersecting: boolean }[]) => void,
          options: { rootMargin: string }
        ) => { observe: (el: unknown) => void; disconnect: () => void };
        matchMedia: (q: string) => Listening & { matches: boolean };
      } | null;
    };
  };

/**
 * Puts a live stage on a page element: an `<svg>` inside it that the
 * illustration's nodes mirror, the pointer, focus, visibility and reduced
 * motion. Mount the illustration with `mountIllustration(def, value, { stage, svg })`.
 * `detach()` stops it and removes the `<svg>`.
 */
export function attach(el: PageElement): {
  stage: Stage;
  svg: Shape;
  detach: () => void;
} {
  const win = el.ownerDocument.defaultView!;
  const svg = new Shape("svg");
  svg.dom = el.ownerDocument.createElementNS(SVG_NS, "svg");
  svg.dom.setAttribute("viewBox", "0 0 400 320");
  svg.dom.setAttribute("aria-hidden", "true");
  el.insertBefore(svg.dom, null);

  const stage = createStage();
  const off: (() => void)[] = [];
  const on = (target: Listening, type: string, fn: Listener) => {
    target.addEventListener(type, fn);
    off.push(() => target.removeEventListener(type, fn));
  };

  const io = new win.IntersectionObserver(
    entries => {
      for (const e of entries) show(stage, e.isIntersecting);
    },
    { rootMargin: "80px" }
  );
  io.observe(el);
  off.push(() => io.disconnect());

  const rm = win.matchMedia("(prefers-reduced-motion: reduce)");
  reduceMotion(rm.matches);
  on(rm, "change", () => reduceMotion(rm.matches));

  const at = (e: PagePointer): [number, number] => {
    const r = el.getBoundingClientRect();

    return [
      ((e.clientX - r.left) / r.width) * 400,
      ((e.clientY - r.top) / r.height) * 320
    ];
  };
  on(el, "pointermove", (e: PagePointer) =>
    feed(stage, "move", at(e), e.pointerType)
  );
  on(el, "pointerdown", (e: PagePointer) => {
    if (e.pointerType !== "mouse") el.releasePointerCapture?.(e.pointerId);
    feed(stage, "down", at(e), e.pointerType);
  });
  on(el, "pointerleave", (e: PagePointer) =>
    feed(stage, "leave", null, e.pointerType)
  );
  on(el, "focusin", () => focus(stage, true));
  on(el, "focusout", (e: { relatedTarget: unknown }) => {
    if (!el.contains(e.relatedTarget)) focus(stage, false);
  });

  start(stage);

  return {
    stage,
    svg,
    detach: () => {
      stop(stage);
      for (const fn of off) fn();
      svg.dom?.remove();
    }
  };
}
