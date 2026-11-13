/* cyclone-ui-illustration kernel sha256:c020d33797e0f34cf448123d0b9dd726bfe46b692dd3f13fc1506f174b786437 */
/*
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
 */
"use strict";
var HL = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // components/illustrations/src/engine/index.ts
  var engine_exports = {};
  __export(engine_exports, {
    Cam: () => Cam,
    EASE: () => EASE,
    EASE_LIFT: () => EASE_LIFT,
    LAP: () => LAP,
    PAINTED: () => PAINTED,
    PALETTE_FALLBACKS: () => PALETTE_FALLBACKS,
    PALETTE_KEYS: () => PALETTE_KEYS,
    PALETTE_TOKENS: () => PALETTE_TOKENS,
    STROKE_WIDTH: () => STROKE_WIDTH,
    SVG_NS: () => SVG_NS,
    Shape: () => Shape,
    TRANSITION: () => TRANSITION,
    attach: () => attach,
    bezier: () => bezier,
    circ: () => circ,
    clamp: () => clamp,
    createStage: () => createStage,
    css: () => css,
    disposer: () => disposer,
    extremes: () => extremes,
    facing: () => facing,
    fade: () => fade,
    feed: () => feed,
    fillet: () => fillet,
    fit: () => fit,
    flatDot: () => flatDot,
    focus: () => focus,
    ghost: () => ghost,
    hull: () => hull,
    lerp: () => lerp,
    level: () => level,
    markup: () => markup,
    mk: () => mk,
    mountIllustration: () => mountIllustration,
    open: () => open,
    paint: () => paint,
    place: () => place,
    pointer: () => pointer,
    poly: () => poly,
    prism: () => prism,
    proj: () => proj,
    put: () => put,
    r2: () => r2,
    rad: () => rad,
    reduceMotion: () => reduceMotion,
    reducedMotion: () => reducedMotion,
    reflect: () => reflect,
    register: () => register,
    ringAt: () => ringAt,
    rings: () => rings,
    rrect: () => rrect,
    run: () => run,
    seg: () => seg,
    setReducedMotion: () => setReducedMotion,
    settle: () => settle,
    show: () => show,
    snapshot: () => snapshot,
    solid: () => solid,
    spring: () => spring,
    start: () => start,
    stepS: () => stepS,
    stop: () => stop,
    tdone: () => tdone,
    tour: () => tour,
    tset: () => tset,
    tval: () => tval,
    tween: () => tween,
    unproj: () => unproj,
    watch: () => watch
  });

  // components/illustrations/src/engine/iso.ts
  var clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  var lerp = (a, b, t) => a + (b - a) * t;
  var rad = (d) => d * Math.PI / 180;
  var r2 = (n) => Math.round(n * 100) / 100;
  var poly = (pts) => `M${pts.map((p) => `${r2(p[0])} ${r2(p[1])}`).join("L")}Z`;
  var seg = (a, b) => `M${r2(a[0])} ${r2(a[1])}L${r2(b[0])} ${r2(b[1])}`;
  var open = (pts) => pts.length < 2 ? "" : `M${pts.map((p) => `${r2(p[0])} ${r2(p[1])}`).join("L")}`;
  var Cam = (azDeg, k, S) => ({
    az: rad(azDeg),
    k,
    S,
    ox: 0,
    oy: 0
  });
  function proj(C) {
    const c = Math.cos(C.az);
    const s = Math.sin(C.az);
    const zf = Math.sqrt(1 - C.k * C.k);
    return (x, y, z) => {
      const X = x * c - y * s;
      const Y = x * s + y * c;
      return [C.ox + C.S * X, C.oy + C.S * (Y * C.k - z * zf)];
    };
  }
  function unproj(C, sx, sy, z) {
    const c = Math.cos(C.az);
    const s = Math.sin(C.az);
    const zf = Math.sqrt(1 - C.k * C.k);
    const X = (sx - C.ox) / C.S;
    const Y = ((sy - C.oy) / C.S + z * zf) / C.k;
    return [X * c + Y * s, -X * s + Y * c];
  }
  function fit(C, pts, cx, cy) {
    C.ox = 0;
    C.oy = 0;
    const P = proj(C);
    let a = 1e9;
    let b = -1e9;
    let c = 1e9;
    let d = -1e9;
    for (const p of pts) {
      const q = P(p[0], p[1], p[2]);
      a = Math.min(a, q[0]);
      b = Math.max(b, q[0]);
      c = Math.min(c, q[1]);
      d = Math.max(d, q[1]);
    }
    C.ox = cx - (a + b) / 2;
    C.oy = cy - (c + d) / 2;
  }
  function rrect(u0, v0, u1, v1, r, n = 4) {
    r = Math.max(0, Math.min(r, (u1 - u0) / 2, (v1 - v0) / 2));
    const out = [];
    for (const [cu, cv, a0] of [
      [u1 - r, v1 - r, 0],
      [u0 + r, v1 - r, 90],
      [u0 + r, v0 + r, 180],
      [u1 - r, v0 + r, 270]
    ]) {
      for (let k = 0; k <= n; k++) {
        const a = rad(a0 + 90 * k / n);
        const ca = Math.cos(a);
        const sa = Math.sin(a);
        out.push({ u: cu + r * ca, v: cv + r * sa, nu: ca, nv: sa });
      }
    }
    return out;
  }
  function circ(R, n = 96) {
    const out = [];
    for (let k = 0; k < n; k++) {
      const a = k / n * Math.PI * 2;
      const ca = Math.cos(a);
      const sa = Math.sin(a);
      out.push({ u: R * ca, v: R * sa, nu: ca, nv: sa });
    }
    return out;
  }
  function hull(input) {
    const pts = input.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const x = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lo = [];
    const up = [];
    for (const p of pts) {
      while (lo.length > 1 && x(lo.at(-2), lo.at(-1), p) <= 0)
        lo.pop();
      lo.push(p);
    }
    for (let i = pts.length - 1; i >= 0; i--) {
      const p = pts[i];
      while (up.length > 1 && x(up.at(-2), up.at(-1), p) <= 0)
        up.pop();
      up.push(p);
    }
    lo.pop();
    up.pop();
    return lo.concat(up);
  }
  var ringAt = (P, ring, z) => ring.map((q) => P(q.u, q.v, z));
  var facing = (C) => {
    const s = Math.sin(C.az);
    const c = Math.cos(C.az);
    return (q) => q.nu * s + q.nv * c >= -1e-6;
  };
  function run(ring, keep) {
    const n = ring.length;
    const at = (i) => ring[(i % n + n) % n];
    let s = -1;
    for (let i = 0; i < n; i++) {
      if (keep(at(i)) && !keep(at(i - 1))) {
        s = i;
        break;
      }
    }
    if (s < 0) {
      return n && keep(at(0)) ? ring.slice() : [];
    }
    const out = [];
    for (let k = 0; k < n && keep(at(s + k)); k++)
      out.push(at(s + k));
    return out;
  }
  function prism(P, front, ring, inner, z0, z1) {
    return {
      sil: poly(hull(ringAt(P, ring, z1).concat(ringAt(P, ring, z0)))),
      crease: inner ? open(ringAt(P, run(inner, front), z1)) : ""
    };
  }
  var rings = (x0, y0, x1, y1, r, b) => [
    rrect(x0, y0, x1, y1, r),
    rrect(x0 + b, y0 + b, x1 - b, y1 - b, Math.max(0.3, r - b))
  ];
  function extremes(P, ring) {
    const pr = ring.map((q) => P(q.u, q.v, 0));
    let a = 0;
    let b = 0;
    let c = 0;
    pr.forEach((p, k) => {
      if (p[0] < pr[a][0])
        a = k;
      if (p[0] > pr[b][0])
        b = k;
      if (p[1] > pr[c][1])
        c = k;
    });
    return [ring[a], ring[b], ring[c]];
  }
  function fillet(pts, rs, n = 4) {
    const m = pts.length;
    const out = [];
    for (let i = 0; i < m; i++) {
      const a = pts[(i + m - 1) % m];
      const p = pts[i];
      const b = pts[(i + 1) % m];
      const la = Math.hypot(a[0] - p[0], a[1] - p[1]);
      const lb = Math.hypot(b[0] - p[0], b[1] - p[1]);
      const t = Math.min(rs[i], la / 2, lb / 2);
      const p1 = [
        p[0] + (a[0] - p[0]) / la * t,
        p[1] + (a[1] - p[1]) / la * t
      ];
      const p2 = [
        p[0] + (b[0] - p[0]) / lb * t,
        p[1] + (b[1] - p[1]) / lb * t
      ];
      for (let k = 0; k <= n; k++) {
        const s = k / n;
        const w = 1 - s;
        out.push([
          w * w * p1[0] + 2 * w * s * p[0] + s * s * p2[0],
          w * w * p1[1] + 2 * w * s * p[1] + s * s * p2[1]
        ]);
      }
    }
    return out;
  }
  function ghost(P, front, ring, z0, depth) {
    const f = run(ring, front);
    const lowP = ringAt(P, f, z0 - depth);
    const ends = f.length ? [f[0], f.at(-1)] : [];
    return {
      d: open(lowP) + ends.map((q) => seg(P(q.u, q.v, z0), P(q.u, q.v, z0 - depth))).join(""),
      y0: Math.min(...ringAt(P, f, z0).map((p) => p[1])),
      y1: Math.max(...lowP.map((p) => p[1])) + 2
    };
  }

  // components/illustrations/src/engine/motion.ts
  var reduced = false;
  var setReducedMotion = (on) => {
    reduced = on;
  };
  var reducedMotion = () => reduced;
  function spring(x, o = {}) {
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
  function stepS(sp, dt) {
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
  function bezier(x1, y1, x2, y2) {
    const cx = 3 * x1;
    const bx = 3 * (x2 - x1) - cx;
    const ax = 1 - cx - bx;
    const cy = 3 * y1;
    const by = 3 * (y2 - y1) - cy;
    const ay = 1 - cy - by;
    const X = (u) => ((ax * u + bx) * u + cx) * u;
    const Y = (u) => ((ay * u + by) * u + cy) * u;
    const dX = (u) => (3 * ax * u + 2 * bx) * u + cx;
    return (t) => {
      if (t <= 0)
        return 0;
      if (t >= 1)
        return 1;
      let u = t;
      for (let i = 0; i < 8; i++) {
        const e = X(u) - t;
        if (Math.abs(e) < 1e-5)
          break;
        const d = dX(u);
        if (Math.abs(d) < 1e-6)
          break;
        u -= e / d;
      }
      if (!(u >= 0 && u <= 1) || Math.abs(X(u) - t) > 1e-4) {
        let lo = 0;
        let hi = 1;
        u = t;
        for (let i = 0; i < 24; i++) {
          if (X(u) < t)
            lo = u;
          else
            hi = u;
          u = (lo + hi) / 2;
        }
      }
      return Y(u);
    };
  }
  var EASE_LIFT = bezier(0.32, 0.72, 0, 1);
  var tween = (v, dur = 700) => ({
    from: v,
    to: v,
    t0: -1e9,
    dur
  });
  var tval = (tw, now2) => {
    const p = clamp((now2 - tw.t0) / tw.dur, 0, 1);
    return tw.from + (tw.to - tw.from) * (reduced ? 1 : EASE_LIFT(p));
  };
  var tset = (tw, to, now2, delay) => {
    if (tw.to === to)
      return;
    tw.from = tval(tw, now2);
    tw.to = to;
    tw.t0 = now2 + delay;
  };
  var tdone = (tw, now2) => reduced || now2 >= tw.t0 + tw.dur;

  // components/illustrations/src/engine/stage.ts
  var SVG_NS = "http://www.w3.org/2000/svg";
  var ids = 0;
  var Shape = class {
    constructor(tag) {
      __publicField(this, "id", ++ids);
      __publicField(this, "tag");
      __publicField(this, "attrs", {});
      __publicField(this, "children", []);
      __publicField(this, "parent", null);
      __publicField(this, "version", 0);
      /** Set on the root by the host: called after any change in the tree. */
      __publicField(this, "changed");
      /** The DOM element this node mirrors, on a page. */
      __publicField(this, "dom");
      /** The prefix of the ids the kernel writes (masks, gradients), unique per illustration. */
      __publicField(this, "idPrefix", "il");
      /** How many ids the kernel has written under this root. */
      __publicField(this, "ids", 0);
      __publicField(this, "classList", {
        contains: (name) => this.classes().includes(name),
        add: (...names) => {
          this.setClasses([.../* @__PURE__ */ new Set([...this.classes(), ...names])]);
        },
        remove: (...names) => {
          this.setClasses(this.classes().filter((c) => !names.includes(c)));
        },
        toggle: (name, force) => {
          const on = force ?? !this.classList.contains(name);
          if (on)
            this.classList.add(name);
          else
            this.classList.remove(name);
          return on;
        }
      });
      this.tag = tag;
    }
    classes() {
      return (this.attrs.class ?? "").split(/\s+/).filter(Boolean);
    }
    setClasses(names) {
      this.setAttribute("class", names.join(" "));
    }
    /** Bumps this node's and its ancestors' versions, and tells the root. */
    touch() {
      this.version++;
      if (this.parent)
        this.parent.touch();
      else
        this.changed?.();
    }
    getAttribute(name) {
      return this.attrs[name] ?? null;
    }
    setAttribute(name, value) {
      const v = String(value);
      if (this.attrs[name] === v)
        return;
      this.attrs[name] = v;
      this.dom?.setAttribute(name, v);
      this.touch();
    }
    removeAttribute(name) {
      if (!(name in this.attrs))
        return;
      delete this.attrs[name];
      this.dom?.removeAttribute(name);
      this.touch();
    }
    get parentNode() {
      return this.parent;
    }
    get firstChild() {
      return this.children[0] ?? null;
    }
    get lastChild() {
      return this.children.at(-1) ?? null;
    }
    get childElementCount() {
      return this.children.length;
    }
    get nextSibling() {
      const s = this.parent?.children;
      return s ? s[s.indexOf(this) + 1] ?? null : null;
    }
    get previousSibling() {
      const s = this.parent?.children;
      return s ? s[s.indexOf(this) - 1] ?? null : null;
    }
    contains(node) {
      for (let n = node; n; n = n.parent)
        if (n === this)
          return true;
      return false;
    }
    /** Puts `node` before `ref` (at the end when null), moving it from wherever it was. */
    insertBefore(node, ref) {
      if (node === ref || node.contains(this))
        return node;
      node.remove();
      const i = ref ? this.children.indexOf(ref) : -1;
      if (i < 0)
        this.children.push(node);
      else
        this.children.splice(i, 0, node);
      node.parent = this;
      if (this.dom) {
        this.dom.insertBefore(materialize(node, this.dom), ref?.dom ?? null);
      }
      this.touch();
      return node;
    }
    appendChild(node) {
      return this.insertBefore(node, null);
    }
    append(...nodes) {
      for (const n of nodes)
        this.insertBefore(n, null);
    }
    before(...nodes) {
      for (const n of nodes)
        this.parent?.insertBefore(n, this);
    }
    after(...nodes) {
      nodes.reduce((anchor, n) => {
        if (n === anchor || !anchor.parent)
          return anchor;
        n.remove();
        anchor.parent.insertBefore(n, anchor.nextSibling);
        return n;
      }, this);
    }
    remove() {
      const p = this.parent;
      if (!p)
        return;
      p.children.splice(p.children.indexOf(this), 1);
      this.parent = null;
      this.dom?.remove();
      p.touch();
    }
    replaceChildren(...nodes) {
      for (const c of [...this.children])
        c.remove();
      this.append(...nodes);
    }
  };
  function materialize(node, near) {
    if (!node.dom) {
      const el = near.ownerDocument.createElementNS(SVG_NS, node.tag);
      for (const [k, v] of Object.entries(node.attrs))
        el.setAttribute(k, v);
      node.dom = el;
      for (const c of node.children)
        el.insertBefore(materialize(c, el), null);
    }
    return node.dom;
  }
  function markup(node) {
    const attrs = Object.entries(node.attrs).map(
      ([k, v]) => ` ${k}="${v.replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`)}"`
    ).join("");
    const inner = node.children.map(markup).join("");
    return inner ? `<${node.tag}${attrs}>${inner}</${node.tag}>` : `<${node.tag}${attrs}/>`;
  }
  function mk(tag, attrs, parent) {
    const e = new Shape(tag);
    if (attrs)
      for (const k in attrs)
        e.setAttribute(k, attrs[k]);
    if (parent)
      parent.appendChild(e);
    return e;
  }
  function solid(parent) {
    const g = mk("g", {}, parent);
    return {
      g,
      sil: mk("path", { class: "sil" }, g),
      cr: mk("path", { class: "nf lo" }, g)
    };
  }
  var put = (el, s) => {
    el.sil.setAttribute("d", s.sil);
    el.cr.setAttribute("d", s.crease);
  };
  var flatDot = (parent, C, r, cls) => mk("ellipse", { rx: r2(r * C.S), ry: r2(r * C.S * C.k), class: cls }, parent);
  var place = (el, q) => {
    el.setAttribute("cx", String(r2(q[0])));
    el.setAttribute("cy", String(r2(q[1])));
  };
  var rootOf = (n) => {
    let r = n;
    while (r.parent)
      r = r.parent;
    return r;
  };
  function fade(svg, y0, y1, a0 = 0.7) {
    const root = rootOf(svg);
    const id = `${root.idPrefix}-fd${++root.ids}`;
    const defs = mk("defs", {}, svg);
    const lg = mk(
      "linearGradient",
      {
        id: `${id}g`,
        gradientUnits: "userSpaceOnUse",
        x1: 0,
        y1: r2(y0),
        x2: 0,
        y2: r2(y1)
      },
      defs
    );
    mk("stop", { offset: 0, "stop-color": "#fff", "stop-opacity": a0 }, lg);
    mk("stop", { offset: 1, "stop-color": "#fff", "stop-opacity": 0 }, lg);
    const m = mk(
      "mask",
      { id, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 400, height: 320 },
      defs
    );
    mk("rect", { x: 0, y: 0, width: 400, height: 320, fill: `url(#${id}g)` }, m);
    return `url(#${id})`;
  }
  function reflect(svg, parent, P, front, ring, z0, depth) {
    const r = ghost(P, front, ring, z0, depth);
    const gh = mk("g", { class: "ghost", mask: fade(svg, r.y0, r.y1) }, parent);
    mk("path", { d: r.d }, gh);
  }
  var createStage = () => ({
    live: false,
    visible: true,
    focused: false,
    boards: /* @__PURE__ */ new Set(),
    on: null,
    touring: null
  });
  var now = () => performance.now();
  var live = /* @__PURE__ */ new Set();
  var raf = 0;
  var last = 0;
  function frame() {
    const t = now();
    const dt = Math.min(0.05, Math.max(0, (t - last) / 1e3));
    last = t;
    let any = false;
    for (const b of [...live]) {
      if (!b.awake || !b.stage.visible)
        continue;
      try {
        b.awake = Boolean(b.tick(dt, t));
      } catch (err) {
        b.awake = false;
        setTimeout(() => {
          throw err;
        });
      }
      any = any || b.awake;
    }
    raf = any ? requestAnimationFrame(frame) : 0;
  }
  function wake(b) {
    b.awake = true;
    if (!raf && b.stage.live && b.stage.visible && typeof requestAnimationFrame === "function") {
      last = now();
      raf = requestAnimationFrame(frame);
    }
  }
  function register(stage, tick) {
    const b = { stage, tick, awake: true };
    stage.boards.add(b);
    if (stage.live)
      live.add(b);
    tick(0, now());
    if (stage.live)
      wake(b);
    return {
      wake: () => {
        if (stage.boards.has(b))
          wake(b);
      },
      unregister: () => {
        stage.boards.delete(b);
        live.delete(b);
      }
    };
  }
  function watch(root, fn) {
    root.changed = fn;
    return () => {
      if (root.changed === fn)
        root.changed = void 0;
    };
  }
  function start(stage) {
    stage.live = true;
    for (const b of stage.boards) {
      live.add(b);
      if (b.awake)
        wake(b);
    }
  }
  function stop(stage) {
    stage.live = false;
    clearTimeout(stage.timer);
    for (const b of stage.boards)
      live.delete(b);
  }
  function show(stage, visible) {
    stage.visible = visible;
    if (visible) {
      for (const b of stage.boards)
        if (b.awake)
          wake(b);
    }
  }
  function reduceMotion(on) {
    setReducedMotion(on);
    for (const b of live)
      wake(b);
  }
  function pointer(stage, on) {
    stage.on = on;
    return () => {
      if (stage.on === on)
        stage.on = null;
    };
  }
  function feed(stage, type, point, pointerType = "mouse") {
    clearTimeout(stage.timer);
    const e = { pointerType };
    if (type === "leave") {
      stage.timer = setTimeout(
        () => {
          stage.on?.leave(e);
          stage.touring?.release();
        },
        pointerType === "mouse" ? 0 : 1400
      );
      return;
    }
    stage.touring?.hold();
    if (!point || !stage.on)
      return;
    if (type === "down" && stage.on.down)
      stage.on.down(point, e);
    else
      stage.on.move(point, e);
  }
  function focus(stage, on) {
    stage.focused = on;
    stage.touring?.focus(on);
  }
  var LAP = [
    [128, 150],
    [200, 118],
    [272, 150],
    [200, 206],
    null
  ];
  var TRAVEL = 900;
  var DWELL = 1200;
  var REST = 1800;
  var RESUME = 1200;
  var STAGGER = 450;
  var GHOST = { pointerType: "ghost" };
  var started = 0;
  function entry([x, y]) {
    const dx = x - 200;
    const dy = y - 160;
    if (!dx && !dy)
      return [200, 320];
    const k = Math.min(
      dx ? (dx > 0 ? 200 : -200) / dx : Infinity,
      dy ? (dy > 0 ? 160 : -160) / dy : Infinity
    );
    return [200 + dx * k, 160 + dy * k];
  }
  function tour(stage, stops, onStop) {
    let i = 0;
    let wait = RESUME + STAGGER * (started++ % 4);
    let t = -1;
    let at = null;
    let origin = [200, 320];
    let hand = false;
    let gone = false;
    const leave = () => {
      at = null;
      t = -1;
      stage.on?.leave(GHOST);
    };
    const tick = (dt) => {
      if (hand || stage.focused || !stops.length)
        return false;
      if (reducedMotion()) {
        if (at)
          leave();
        return false;
      }
      if (wait > 0) {
        wait -= dt * 1e3;
        return true;
      }
      const next = stops[i];
      if (!next) {
        if (at)
          leave();
        onStop?.(i);
        i = (i + 1) % stops.length;
        wait = REST;
        return true;
      }
      if (!stage.on)
        return true;
      if (t < 0) {
        origin = at ?? entry(next);
        t = 0;
      }
      t = Math.min(TRAVEL, t + dt * 1e3);
      const k = EASE_LIFT(t / TRAVEL);
      at = [
        origin[0] + (next[0] - origin[0]) * k,
        origin[1] + (next[1] - origin[1]) * k
      ];
      stage.on.move(at, GHOST);
      if (t < TRAVEL)
        return true;
      onStop?.(i);
      i = (i + 1) % stops.length;
      t = -1;
      wait = DWELL;
      return true;
    };
    const take = () => {
      at = null;
      t = -1;
    };
    const give = () => {
      if (hand || stage.focused)
        return;
      i = 0;
      t = -1;
      wait = RESUME;
      board.wake();
    };
    const me = {
      hold: () => {
        hand = true;
        take();
      },
      release: () => {
        if (!hand)
          return;
        hand = false;
        give();
      },
      focus: (on) => on ? take() : give()
    };
    stage.touring = me;
    const board = register(stage, tick);
    return {
      stop: () => {
        if (gone)
          return;
        gone = true;
        board.unregister();
        if (stage.touring === me)
          stage.touring = null;
        if (at)
          leave();
      }
    };
  }
  function disposer() {
    let fns = [];
    return {
      add: (fn) => {
        fns.push(fn);
      },
      on: (target, type, fn, opts) => {
        target.addEventListener(type, fn, opts);
        fns.push(() => target.removeEventListener(type, fn, opts));
      },
      dispose: () => {
        const run2 = fns;
        fns = [];
        for (let i = run2.length - 1; i >= 0; i--)
          run2[i]();
      }
    };
  }
  function level(range, intensity) {
    const [lo = 0, mid = 0, hi = 0] = range;
    const i = Math.min(1, Math.max(0, intensity));
    return Math.round(
      (i <= 0.5 ? lo + i / 0.5 * (mid - lo) : mid + (i - 0.5) / 0.5 * (hi - mid)) * 1e3
    ) / 1e3;
  }
  function mountIllustration(def, value, options = {}) {
    const stage = options.stage ?? createStage();
    const svg = options.svg ?? new Shape("svg");
    if (options.idPrefix)
      svg.idPrefix = options.idPrefix;
    let text = null;
    const read = {
      get textContent() {
        return text;
      },
      set textContent(v) {
        const next = v == null ? "" : String(v);
        if (next === text)
          return;
        text = next;
        options.onRead?.(text);
      }
    };
    const rest = def.rest ?? "rest";
    const handle = def.mount({ stage, svg, read }, value);
    if (text === null)
      read.textContent = rest;
    let last2 = value;
    return {
      stage,
      svg,
      handle,
      set: (v) => {
        if (v === last2)
          return;
        last2 = v;
        handle.set(v);
      },
      read: () => text ?? rest
    };
  }
  function settle(stage, frames = 240) {
    const was = reducedMotion();
    setReducedMotion(true);
    try {
      for (let f = 0; f < frames; f++) {
        let moving = false;
        for (const b of stage.boards) {
          if (b.tick(1 / 60, now()))
            moving = true;
        }
        if (!moving)
          break;
      }
    } finally {
      setReducedMotion(was);
    }
  }

  // components/illustrations/src/engine/dom.ts
  function attach(el) {
    const win = el.ownerDocument.defaultView;
    const svg = new Shape("svg");
    svg.dom = el.ownerDocument.createElementNS(SVG_NS, "svg");
    svg.dom.setAttribute("viewBox", "0 0 400 320");
    svg.dom.setAttribute("aria-hidden", "true");
    el.insertBefore(svg.dom, null);
    const stage = createStage();
    const off = [];
    const on = (target, type, fn) => {
      target.addEventListener(type, fn);
      off.push(() => target.removeEventListener(type, fn));
    };
    const io = new win.IntersectionObserver(
      (entries) => {
        for (const e of entries)
          show(stage, e.isIntersecting);
      },
      { rootMargin: "80px" }
    );
    io.observe(el);
    off.push(() => io.disconnect());
    const rm = win.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion(rm.matches);
    on(rm, "change", () => reduceMotion(rm.matches));
    const at = (e) => {
      const r = el.getBoundingClientRect();
      return [
        (e.clientX - r.left) / r.width * 400,
        (e.clientY - r.top) / r.height * 320
      ];
    };
    on(
      el,
      "pointermove",
      (e) => feed(stage, "move", at(e), e.pointerType)
    );
    on(el, "pointerdown", (e) => {
      if (e.pointerType !== "mouse")
        el.releasePointerCapture?.(e.pointerId);
      feed(stage, "down", at(e), e.pointerType);
    });
    on(
      el,
      "pointerleave",
      (e) => feed(stage, "leave", null, e.pointerType)
    );
    on(el, "focusin", () => focus(stage, true));
    on(el, "focusout", (e) => {
      if (!el.contains(e.relatedTarget))
        focus(stage, false);
    });
    start(stage);
    return {
      stage,
      svg,
      detach: () => {
        stop(stage);
        for (const fn of off)
          fn();
        svg.dom?.remove();
      }
    };
  }

  // components/illustrations/src/engine/palette.ts
  var PALETTE_KEYS = [
    "plate",
    "hi",
    "edge",
    "mid",
    "lo"
  ];
  var PALETTE_TOKENS = {
    light: {
      plate: "canvas",
      hi: "primary",
      edge: "subtle",
      mid: "neutral7",
      lo: "hairline"
    },
    dark: {
      plate: "canvas",
      hi: "primary",
      edge: "neutral10",
      mid: "hairline",
      lo: "neutral12"
    }
  };
  var PALETTE_FALLBACKS = {
    light: {
      plate: "oklch(0.937 0 0)",
      hi: "oklch(0.2273 0.0038 286.09)",
      edge: "oklch(0.6729 0.0031 264.54)",
      mid: "oklch(0.7575 0.0014 286.37)",
      lo: "oklch(0.8579 0.0014 286.37)"
    },
    dark: {
      plate: "oklch(0.1971 0.006 285.84)",
      hi: "oklch(1 0 0)",
      edge: "oklch(0.4533 0.005 271.3)",
      mid: "oklch(0.3956 0.0067 286.09)",
      lo: "oklch(0.3022 0.0091 276.83)"
    }
  };
  var STROKE_WIDTH = 0.9;
  var EASE = "cubic-bezier(0.5,0,0.1,1)";
  var TRANSITION = `stroke 260ms ${EASE}, fill 260ms ${EASE}`;
  var vars = (mode) => PALETTE_KEYS.map(
    (k) => `--il-${k}:var(--illustration-${k},var(--${PALETTE_TOKENS[mode][k]},${PALETTE_FALLBACKS[mode][k]}));`
  ).join("");
  var SVG = ":where([data-illustration]>svg,svg[data-illustration])";
  function css(mode = "auto") {
    const own = mode === "auto" ? "light" : mode;
    return [
      `:where([data-illustration]){display:block;position:relative;aspect-ratio:5/4;touch-action:pan-y;user-select:none;-webkit-user-select:none;--il-sw:var(--illustration-stroke,${STROKE_WIDTH});${vars(own)}}`,
      mode === "auto" ? `@media (prefers-color-scheme:dark){:where([data-illustration]){${vars("dark")}}}:where(.t_light,[data-theme="light"]) :where([data-illustration]){${vars("light")}}:where(.t_dark,[data-theme="dark"]) :where([data-illustration]){${vars("dark")}}` : "",
      `:where([data-illustration]:focus-visible){outline:1.5px solid var(--il-hi);outline-offset:2px}`,
      `:where([data-illustration]>svg){position:absolute;inset:0;width:100%;height:100%;display:block}`,
      `${SVG} :where(path,polygon,ellipse,line,circle){fill:var(--il-plate);stroke:var(--il-mid);stroke-width:var(--il-sw);vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round;transition:${TRANSITION}}`,
      `${SVG} :where(.nf){fill:none}`,
      `${SVG} :where(.fo){stroke:none}`,
      `${SVG} :where(.sil){stroke:var(--il-edge)}`,
      `${SVG} :where(.hi){stroke:var(--il-hi)}`,
      `${SVG} :where(.lo){stroke:var(--il-lo)}`,
      `${SVG} :where(.dash){stroke-dasharray:1 3}`,
      `${SVG} :where(.dot){stroke:none;fill:var(--il-hi)}`,
      `${SVG} :where(.dot.m){fill:var(--il-edge)}`,
      `${SVG} :where(.dot.off){fill:var(--il-lo)}`,
      `${SVG} :where(.ghost path){fill:none;stroke:var(--il-mid)}`
    ].join("");
  }
  var PAINTED = /* @__PURE__ */ new Set([
    "path",
    "polygon",
    "ellipse",
    "line",
    "circle"
  ]);
  function paint(tag, cls, ghost2, colors) {
    const c = new Set((cls ?? "").split(/\s+/));
    if (!PAINTED.has(tag) && !c.has("dot"))
      return null;
    const out = { fill: colors.plate, stroke: colors.mid };
    if (c.has("nf"))
      out.fill = "none";
    if (c.has("fo"))
      out.stroke = "none";
    if (c.has("sil"))
      out.stroke = colors.edge;
    if (c.has("hi"))
      out.stroke = colors.hi;
    if (c.has("lo"))
      out.stroke = colors.lo;
    if (c.has("dash"))
      out.strokeDasharray = "1 3";
    if (c.has("dot")) {
      out.stroke = "none";
      out.fill = c.has("off") ? colors.lo : c.has("m") ? colors.edge : colors.hi;
    }
    if (ghost2 && tag === "path") {
      out.fill = "none";
      out.stroke = colors.mid;
    }
    return out;
  }
  var esc = (s) => s.replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`);
  function snapshot(def, value, mode = "auto") {
    const run2 = mountIllustration(def, value, {
      idPrefix: `il-${def.name}-${mode}`
    });
    settle(run2.stage);
    const label = esc(def.means);
    return `<svg xmlns="${SVG_NS}" viewBox="0 0 400 320" width="400" height="320" data-illustration="${esc(def.name)}" role="img" aria-label="${label}"><title>${label}</title><style>${css(mode)}</style>${run2.svg.children.map(markup).join("")}</svg>
`;
  }
  return __toCommonJS(engine_exports);
})();
/* /cyclone-ui-illustration kernel */
