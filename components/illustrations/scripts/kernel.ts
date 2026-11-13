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

// cspell:ignore unproj rrect lerp retarget retargets tset tval tdone tweens

/**
 * The cyclone-ui-illustration skill's kernel: `src/engine` as
 * one plain script that defines a single global, `HL`, the way Hairline's
 * `scripts/kernel.mjs` builds its kernel (https://github.com/lucasmarkes/hairline,
 * MIT License). `node ./scripts/kernel.ts` writes
 * `skills/cyclone-ui-illustration/kernel.js`; with `--check` it writes nothing
 * and exits 1 when that file is not what the source gives now.
 *
 * The output is not minified: an agent reads the index at its top. Its first
 * line carries the hash of everything after it, which is how the skill's
 * validator knows the kernel was not edited.
 */

import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../../..", import.meta.url));
const OUT = join(ROOT, "skills/cyclone-ui-illustration/kernel.js");
const ENTRY = "components/illustrations/src/engine/index.ts";

const INDEX = `/*
 * HL: everything an illustration may call. Read this index; the code under it
 * is @cyclone-ui/illustrations' engine, and an illustration should not
 * need to read it. The engine is built on Hairline
 * (https://github.com/lucasmarkes/hairline) by Lucas Marques, MIT License.
 *
 * Every illustration is drawn in a 400 × 320 viewBox. World space is x/y on
 * the ground and z up. Plates are filled with the ground colour and painted
 * back to front, so a nearer one covers a farther one: append in that order.
 * At the default camera, Cam(45, 0.5, S), +x runs down to the right and +y
 * down to the left, so the corner with the largest x and y is nearest the
 * viewer: append by ascending x + y, from the far corner to it.
 *
 * The nodes an illustration makes are not DOM elements. They have the part of
 * the element API illustrations use, and nothing else: setAttribute,
 * getAttribute, removeAttribute, classList (add, remove, toggle, contains),
 * appendChild, append, insertBefore, before, after, remove, replaceChildren,
 * contains, parentNode, firstChild, lastChild, nextSibling, previousSibling.
 * On the bench they mirror real SVG elements; in the React component
 * react-native-svg draws them, on web and native; build.mjs writes them out
 * as a static SVG.
 *
 * Camera
 *   Cam(azDeg, k, S)                       a camera: azimuth in degrees, k = sin(elevation) (0.5 is the 2:1 view), S = scale
 *   fit(C, points, cx, cy)                 centres the box of [x, y, z] points on (cx, cy); call it once, before proj
 *                                          it only centres, it never scales: choose S by trying values, with the most extreme pose in points.
 *                                          Hairline's figures use S 1.42 to 2.12; the boxes they fit come out 230 to 310 wide and 180 to 245 tall
 *   proj(C)                                returns P(x, y, z), which gives [sx, sy]
 *   unproj(C, sx, sy, z)                   the world [x, y] under a screen point, on the plane at height z
 *   facing(C)                              returns front(sample): whether a ring sample faces the camera
 * Rounded solids
 *   rrect(u0, v0, u1, v1, r, n)            a rounded rectangle, as a ring of samples {u, v, nu, nv}
 *   circ(R, n)                             a circle, as a ring
 *   rings(x0, y0, x1, y1, r, b)            [ring, inner]: a rounded footprint and its crease ring, inset by b
 *                                          r, the corner radius, is cut to half the shorter side. b, the crease's inset in world units
 *                                          (0.6 to 2.2 in the examples), must stay under half the shorter side or the crease turns inside out
 *   prism(P, front, ring, inner, z0, z1)   {sil, crease}: a solid standing from z0 to z1, as two path strings
 *   ringAt(P, ring, z)                     the ring's points, projected at height z
 *   run(ring, keep)                        the one cyclic run of samples that pass keep
 *   hull(points)                           the convex hull of screen points
 *   extremes(P, ring)                      [left, right, nearest] samples: where dashed drops fall from
 *   fillet(points, radii, n)               rounds every vertex of a closed polygon; returns the new points
 *                                          radii is an array, one radius per vertex, each cut to half its shorter edge; a single number gives NaN.
 *                                          n is the steps round each corner, default 4: each vertex becomes n + 1 points
 *   ghost(P, front, ring, z0, depth)       a reflection's path {d, y0, y1}; reflect() draws it for you
 * Paths and numbers
 *   poly(points)                           a closed path string
 *   open(points)                           an open polyline string
 *   seg(a, b)                              one segment between two screen points [sx, sy], as its own subpath; project world points with P first
 *   clamp(v, a, b)
 *   lerp(a, b, t)
 *   rad(deg)
 *   r2(n)                                  two decimals
 * The continuous clock: one spring per moving number
 *   spring(x, opts)                        at rest on x; write .t to retarget; opts {k, c, m, eps}, default k 100, c 18, m 1
 *   stepS(sp, dt)                          advances by dt seconds; returns whether it is still moving
 * The discrete clock: a 700ms tween on (.32, .72, 0, 1)
 *   tween(v, dur)                          at rest on v; dur defaults to 700 (ms)
 *   tset(tw, to, now, delay)               retargets from where it is, after delay ms: the stagger
 *                                          the same target again does nothing, so calling it on every pointer move is safe
 *   tval(tw, now)                          its value at now
 *   tdone(tw, now)                         whether it has landed
 *   bezier(x1, y1, x2, y2)                 a CSS cubic-bezier, as a function of progress
 *   EASE_LIFT                              the lift curve itself
 *   reducedMotion()                        true when the reader asked for less motion; springs and tweens already land at once
 * Drawing
 *   mk(tag, attrs, parent)                 one svg node: the only way an illustration makes a node
 *   solid(parent)                          {g, sil, cr}: a group holding a silhouette path and a crease path
 *   put(solid, paths)                      writes prism()'s {sil, crease} into solid()'s {sil, cr}: sil into sil, crease into cr
 *   flatDot(parent, C, r, cls)             a dot lying on the ground plane; cls is "dot", "dot m" or "dot off"
 *   place(el, point)                       moves a dot or a circle to [sx, sy]
 *   reflect(svg, parent, P, front, ring, z0, depth)   a fading mirror under a solid
 *   fade(svg, y0, y1, a0)                  a vertical fade, as a mask; returns the value for a mask attribute
 * Life
 *   register(stage, tick)                  joins the one frame loop; tick(dt in seconds, now in ms) returns true to ask for another frame; gives {wake, unregister}
 *   pointer(stage, handlers)               {move(point), down(point), leave()}, points in viewBox units; returns its disposer
 *   disposer()                             {add, on, dispose}: collects tear-down, so destroy is bag.dispose
 *   performance.now()                      the clock tweens are set against; there is no window, document or DOM
 * The host's business, not an illustration's
 *   attach(el), mountIllustration(def, value, opts), start(stage), stop(stage), show(stage, visible), feed(stage, type, point, kind),
 *   focus(stage, on), reduceMotion(on), setReducedMotion(on), level(range, intensity), settle(stage), snapshot(def, value, mode),
 *   css(mode), paint(tag, cls, ghost, colors), markup(node), createStage(), Shape, tour(stage, stops, onStop), LAP,
 *   PALETTE_TOKENS, PALETTE_FALLBACKS, PALETTE_KEYS, PAINTED, STROKE_WIDTH, TRANSITION, EASE, SVG_NS
 *
 * Classes, on path, polygon, ellipse, line and circle. They are the whole
 * palette; an illustration sets no colour, width or fill of its own. Each
 * paints with a Cyclone UI theme token (light / dark):
 *     (none)   filled with the plate, medium stroke      plate canvas / canvas, stroke neutral7 / hairline
 *     sil      the silhouette's stroke                   subtle / neutral10
 *     hi       the bright stroke: the only highlight     primary / primary
 *     lo       the dim stroke                            hairline / neutral12
 *     nf       no fill        fo   fill only, no stroke  dash  a dashed guide
 *     dot      a bright dot   dot m  a medium dot        dot off  a dim dot
 */`;

/** The kernel's text, from the source as it is now. */
export function kernel() {
  const built = spawnSync(
    join(ROOT, "node_modules/.bin/esbuild"),
    [
      ENTRY,
      "--bundle",
      "--format=iife",
      "--global-name=HL",
      "--target=es2020",
      "--charset=utf8",
      "--legal-comments=none"
    ],
    { cwd: ROOT, encoding: "utf8" }
  );
  if (built.status !== 0) {
    throw new Error(built.stderr || "esbuild failed");
  }
  const body = `${INDEX}\n${built.stdout.trimEnd()}\n/* /cyclone-ui-illustration kernel */\n`;

  return `/* cyclone-ui-illustration kernel sha256:${createHash("sha256").update(body).digest("hex")} */\n${body}`;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const text = kernel();
  if (process.argv.includes("--check")) {
    let have = "";
    try {
      have = readFileSync(OUT, "utf8");
    } catch {
      // not generated yet: stale
    }
    if (have !== text) {
      console.error(
        "skills/cyclone-ui-illustration/kernel.js is stale: run `node ./scripts/kernel.ts` in components/illustrations."
      );
      process.exit(1);
    }
    console.log("kernel is current");
  } else {
    writeFileSync(OUT, text);
    console.log(
      `wrote skills/cyclone-ui-illustration/kernel.js: ${text.split("\n").length} lines`
    );
  }
}
