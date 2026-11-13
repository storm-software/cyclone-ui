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

// cspell:ignore tweens tval tset tdone retargets

/*
 * The two clocks, with no DOM. Ported from Hairline's `src/core/motion.ts`
 * (https://github.com/lucasmarkes/hairline, © 2026 Lucas Marques, MIT License).
 *
 * A discrete change (which item) gets a long ease-out on a tween; a continuous
 * input (where the pointer is) gets a spring, because its target moves every
 * frame and a timed ease would always be chasing it. Reduced motion is one
 * flag that the host writes; with it on, springs and tweens land at once.
 */

import { clamp } from "./iso";

let reduced = false;
export const setReducedMotion = (on: boolean) => {
  reduced = on;
};
export const reducedMotion = () => reduced;

export interface Spring {
  x: number;
  v: number;
  t: number;
  k: number;
  c: number;
  m: number;
  eps: number;
}
export interface SpringOptions {
  k?: number;
  c?: number;
  m?: number;
  eps?: number;
}

/** A spring at rest on x. k 100 · c 18 · m 1 unless told otherwise; `eps` is when it counts as settled. */
export function spring(x: number, o: SpringOptions = {}): Spring {
  return {
    x,
    v: 0,
    t: x,
    k: o.k ?? 100,
    c: o.c ?? 18,
    m: o.m ?? 1,
    eps: o.eps ?? 0.01
  };
}

/** Advances a spring by dt seconds toward `sp.t`, substepped at 240 Hz. Returns whether it is still moving. */
export function stepS(sp: Spring, dt: number): boolean {
  if (reduced) {
    sp.x = sp.t;
    sp.v = 0;

    return false;
  }
  const n = Math.max(1, Math.ceil(dt * 240));
  const h = dt / n;
  for (let i = 0; i < n; i++) {
    const a = (-sp.k * (sp.x - sp.t) - sp.c * sp.v) / sp.m;
    sp.v += a * h;
    sp.x += sp.v * h;
  }
  if (Math.abs(sp.x - sp.t) < sp.eps && Math.abs(sp.v) < sp.eps * 10) {
    sp.x = sp.t;
    sp.v = 0;

    return false;
  }

  return true;
}

/** A CSS cubic-bezier as a function of progress: Newton first, bisection if it strays. */
export function bezier(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): (t: number) => number {
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;
  const X = (u: number) => ((ax * u + bx) * u + cx) * u;
  const Y = (u: number) => ((ay * u + by) * u + cy) * u;
  const dX = (u: number) => (3 * ax * u + 2 * bx) * u + cx;

  return t => {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    let u = t;
    for (let i = 0; i < 8; i++) {
      const e = X(u) - t;
      if (Math.abs(e) < 1e-5) break;
      const d = dX(u);
      if (Math.abs(d) < 1e-6) break;
      u -= e / d;
    }
    if (!(u >= 0 && u <= 1) || Math.abs(X(u) - t) > 1e-4) {
      let lo = 0;
      let hi = 1;
      u = t;
      for (let i = 0; i < 24; i++) {
        if (X(u) < t) lo = u;
        else hi = u;
        u = (lo + hi) / 2;
      }
    }

    return Y(u);
  };
}

/** The lift curve, 700ms on (.32, .72, 0, 1): the discrete clock. */
export const EASE_LIFT = bezier(0.32, 0.72, 0, 1);

/** A tween on EASE_LIFT. `t0` is when it starts (a stagger puts it in the future), `dur` how long it runs, in ms. */
export interface Tween {
  from: number;
  to: number;
  t0: number;
  dur: number;
}
export const tween = (v: number, dur = 700): Tween => ({
  from: v,
  to: v,
  t0: -1e9,
  dur
});
/** Where the tween is at `now`. */
export const tval = (tw: Tween, now: number) => {
  const p = clamp((now - tw.t0) / tw.dur, 0, 1);

  return tw.from + (tw.to - tw.from) * (reduced ? 1 : EASE_LIFT(p));
};
/** Retargets from wherever it is now, starting after `delay` ms. A no-op if the target is unchanged. */
export const tset = (tw: Tween, to: number, now: number, delay: number) => {
  if (tw.to === to) return;
  tw.from = tval(tw, now);
  tw.to = to;
  tw.t0 = now + delay;
};
export const tdone = (tw: Tween, now: number) =>
  reduced || now >= tw.t0 + tw.dur;
