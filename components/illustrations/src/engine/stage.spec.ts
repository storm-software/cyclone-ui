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

import { describe, expect, it } from "vitest";
import type { IllustrationDefinition } from ".";
import {
  level,
  mk,
  mountIllustration,
  paint,
  PALETTE_KEYS,
  Shape,
  snapshot
} from ".";

const colors = Object.fromEntries(PALETTE_KEYS.map(k => [k, k])) as Record<
  (typeof PALETTE_KEYS)[number],
  string
>;

describe("Shape", () => {
  it("moves nodes like the DOM, and bumps versions up to the root", () => {
    const root = new Shape("svg");
    let changes = 0;
    root.changed = () => changes++;
    const g = mk("g", {}, root);
    const [a, b, c] = ["a", "b", "c"].map(id => mk("path", { id }, g));
    const order = () => g.children.map(n => n.attrs.id).join("");
    expect(order()).toBe("abc");
    a!.after(c!);
    expect(order()).toBe("acb");
    b!.before(a!);
    expect(order()).toBe("cab");
    g.insertBefore(b!, c!);
    expect(order()).toBe("bca");
    const before = root.version;
    c!.classList.toggle("hi", true);
    expect(c!.attrs.class).toBe("hi");
    expect(root.version).toBeGreaterThan(before);
    c!.classList.toggle("hi", true);
    expect(changes).toBeGreaterThan(0);
    g.replaceChildren();
    expect(g.childElementCount).toBe(0);
  });
});

describe("paint", () => {
  it("applies the classes in the stylesheet's order", () => {
    expect(paint("path", undefined, false, colors)).toEqual({
      fill: "plate",
      stroke: "mid"
    });
    expect(paint("path", "sil hi", false, colors)?.stroke).toBe("hi");
    expect(paint("path", "lo hi", false, colors)?.stroke).toBe("lo");
    expect(paint("path", "nf lo", false, colors)).toEqual({
      fill: "none",
      stroke: "lo"
    });
    expect(paint("circle", "dot m", false, colors)).toEqual({
      fill: "edge",
      stroke: "none"
    });
    expect(paint("path", "sil", true, colors)).toEqual({
      fill: "none",
      stroke: "mid"
    });
    expect(paint("rect", undefined, false, colors)).toBeNull();
  });
});

describe("an illustration with no page", () => {
  const dot: IllustrationDefinition = {
    name: "dot",
    means: "A dot.",
    rules: [4],
    range: [1, 2, 4],
    tour: null,
    mount: ({ svg, read }, value) => {
      const c = mk("circle", { r: value, class: "dot" }, svg);
      read.textContent = "rest";

      return {
        set: v => c.setAttribute("r", v),
        destroy: () => svg.replaceChildren()
      };
    }
  };

  it("maps intensity onto its range", () => {
    expect([0, 0.25, 0.5, 1].map(i => level(dot.range, i))).toEqual([
      1, 1.5, 2, 4
    ]);
  });

  it("mounts, reads rest, and writes a static SVG with the token palette", () => {
    const run = mountIllustration(dot, 2);
    expect(run.read()).toBe("rest");
    expect(run.svg.children[0]?.attrs.r).toBe("2");
    const svg = snapshot(dot, 2, "dark");
    expect(svg).toContain('<circle r="2" class="dot"/>');
    expect(svg).toContain("var(--primary,oklch(1 0 0))");
    expect(svg).not.toContain("prefers-color-scheme");
  });
  it("rests on its own caption, and hears only changes", () => {
    const heard: string[] = [];
    let say: (text: string) => void = () => {};
    const quiet: IllustrationDefinition = {
      ...dot,
      rest: "loop",
      mount: ({ read }) => {
        say = text => {
          read.textContent = text;
        };

        return { set: () => {}, destroy: () => {} };
      }
    };
    const run = mountIllustration(quiet, 2, { onRead: t => heard.push(t) });
    say("loop");
    say("a");
    say("a");
    expect(run.read()).toBe("a");
    expect(heard).toEqual(["loop", "a"]);
  });
});
