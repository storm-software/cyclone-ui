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

/*
 * The stage: the nodes an illustration draws into, the one frame loop, the
 * pointer and the tour. Adapted from Hairline's `src/core/stage.ts`
 * (https://github.com/lucasmarkes/hairline, © 2026 Lucas Marques, MIT License).
 *
 * Hairline draws into the DOM. Here an illustration draws into `Shape` nodes,
 * a small tree with the subset of the DOM element API illustrations use, so
 * the same illustration runs on a web page (the nodes mirror real SVG
 * elements), in React and React Native (react-native-svg renders the tree)
 * and in Node (the tree is written out as a static SVG).
 */

import type { Projector, Ring, Sample, Vec2 } from "./iso";
import { ghost, r2 } from "./iso";
import { EASE_LIFT, reducedMotion, setReducedMotion } from "./motion";

export const SVG_NS = "http://www.w3.org/2000/svg";

/** The part of a DOM element a mirrored node writes to. */
export interface DomElement {
  setAttribute: (name: string, value: string) => void;
  removeAttribute: (name: string) => void;
  insertBefore: (node: DomElement, ref: DomElement | null) => unknown;
  remove: () => void;
  ownerDocument: {
    createElementNS: (ns: string, tag: string) => DomElement;
  } | null;
}

let ids = 0;

/**
 * One SVG element of an illustration. It has the part of the DOM element API
 * illustrations use: attributes, `classList`, and moving nodes about with
 * `appendChild`, `append`, `insertBefore`, `before`, `after`, `remove` and
 * `replaceChildren`. Every change bumps `version` here and on every ancestor,
 * then calls the root's `changed`, so a renderer redraws only what changed.
 */
export class Shape {
  readonly id = ++ids;

  readonly tag: string;

  readonly attrs: Record<string, string> = {};

  readonly children: Shape[] = [];

  parent: Shape | null = null;

  version = 0;

  /** Set on the root by the host: called after any change in the tree. */
  changed?: () => void;

  /** The DOM element this node mirrors, on a page. */
  dom?: DomElement;

  /** The prefix of the ids the kernel writes (masks, gradients), unique per illustration. */
  idPrefix = "il";

  /** How many ids the kernel has written under this root. */
  ids = 0;

  readonly classList = {
    contains: (name: string) => this.classes().includes(name),
    add: (...names: string[]) => {
      this.setClasses([...new Set([...this.classes(), ...names])]);
    },
    remove: (...names: string[]) => {
      this.setClasses(this.classes().filter(c => !names.includes(c)));
    },
    toggle: (name: string, force?: boolean) => {
      const on = force ?? !this.classList.contains(name);
      if (on) this.classList.add(name);
      else this.classList.remove(name);

      return on;
    }
  };

  constructor(tag: string) {
    this.tag = tag;
  }

  private classes() {
    return (this.attrs.class ?? "").split(/\s+/).filter(Boolean);
  }

  private setClasses(names: string[]) {
    this.setAttribute("class", names.join(" "));
  }

  /** Bumps this node's and its ancestors' versions, and tells the root. */
  touch() {
    this.version++;
    if (this.parent) this.parent.touch();
    else this.changed?.();
  }

  getAttribute(name: string) {
    return this.attrs[name] ?? null;
  }

  setAttribute(name: string, value: unknown) {
    const v = String(value);
    if (this.attrs[name] === v) return;
    this.attrs[name] = v;
    this.dom?.setAttribute(name, v);
    this.touch();
  }

  removeAttribute(name: string) {
    if (!(name in this.attrs)) return;
    delete this.attrs[name];
    this.dom?.removeAttribute(name);
    this.touch();
  }

  get parentNode() {
    return this.parent;
  }

  get firstChild(): Shape | null {
    return this.children[0] ?? null;
  }

  get lastChild(): Shape | null {
    return this.children.at(-1) ?? null;
  }

  get childElementCount() {
    return this.children.length;
  }

  get nextSibling(): Shape | null {
    const s = this.parent?.children;

    return s ? (s[s.indexOf(this) + 1] ?? null) : null;
  }

  get previousSibling(): Shape | null {
    const s = this.parent?.children;

    return s ? (s[s.indexOf(this) - 1] ?? null) : null;
  }

  contains(node: Shape | null): boolean {
    for (let n = node; n; n = n.parent) if (n === this) return true;

    return false;
  }

  /** Puts `node` before `ref` (at the end when null), moving it from wherever it was. */
  insertBefore<T extends Shape>(node: T, ref: Shape | null): T {
    if (node === ref || node.contains(this)) return node;
    node.remove();
    const i = ref ? this.children.indexOf(ref) : -1;
    if (i < 0) this.children.push(node);
    else this.children.splice(i, 0, node);
    node.parent = this;
    if (this.dom) {
      this.dom.insertBefore(materialize(node, this.dom), ref?.dom ?? null);
    }
    this.touch();

    return node;
  }

  appendChild<T extends Shape>(node: T): T {
    return this.insertBefore(node, null);
  }

  append(...nodes: Shape[]) {
    for (const n of nodes) this.insertBefore(n, null);
  }

  before(...nodes: Shape[]) {
    for (const n of nodes) this.parent?.insertBefore(n, this);
  }

  after(...nodes: Shape[]) {
    nodes.reduce<Shape>((anchor, n) => {
      if (n === anchor || !anchor.parent) return anchor;
      n.remove();
      anchor.parent.insertBefore(n, anchor.nextSibling);

      return n;
    }, this);
  }

  remove() {
    const p = this.parent;
    if (!p) return;
    p.children.splice(p.children.indexOf(this), 1);
    this.parent = null;
    this.dom?.remove();
    p.touch();
  }

  replaceChildren(...nodes: Shape[]) {
    for (const c of [...this.children]) c.remove();
    this.append(...nodes);
  }
}

/** The DOM element for a node and everything under it, made the first time it is needed. */
function materialize(node: Shape, near: DomElement): DomElement {
  if (!node.dom) {
    const el = near.ownerDocument!.createElementNS(SVG_NS, node.tag);
    for (const [k, v] of Object.entries(node.attrs)) el.setAttribute(k, v);
    node.dom = el;
    for (const c of node.children) el.insertBefore(materialize(c, el), null);
  }

  return node.dom;
}

/** Writes a node and everything under it as SVG markup. */
export function markup(node: Shape): string {
  const attrs = Object.entries(node.attrs)
    .map(
      ([k, v]) =>
        ` ${k}="${v.replace(/[&<>"]/g, c => `&#${c.charCodeAt(0)};`)}"`
    )
    .join("");
  const inner = node.children.map(markup).join("");

  return inner
    ? `<${node.tag}${attrs}>${inner}</${node.tag}>`
    : `<${node.tag}${attrs}/>`;
}

/* ---------- drawing ---------- */

export type Attrs = Record<string, string | number>;

/** One svg element: the only way an illustration makes a node. */
export function mk(tag: string, attrs?: Attrs | null, parent?: Shape | null) {
  const e = new Shape(tag);
  if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(e);

  return e;
}

export interface Solid {
  g: Shape;
  sil: Shape;
  cr: Shape;
}

/** A group holding a silhouette path and a crease path. */
export function solid(parent: Shape): Solid {
  const g = mk("g", {}, parent);

  return {
    g,
    sil: mk("path", { class: "sil" }, g),
    cr: mk("path", { class: "nf lo" }, g)
  };
}

/** Writes `prism()`'s paths into `solid()`'s nodes. */
export const put = (el: Solid, s: { sil: string; crease: string }) => {
  el.sil.setAttribute("d", s.sil);
  el.cr.setAttribute("d", s.crease);
};

/** A dot lying on the ground plane; `cls` is "dot", "dot m" or "dot off". */
export const flatDot = (
  parent: Shape,
  C: { S: number; k: number },
  r: number,
  cls: string
) =>
  mk("ellipse", { rx: r2(r * C.S), ry: r2(r * C.S * C.k), class: cls }, parent);

/** Moves a dot or a circle to a screen point. */
export const place = (el: Shape, q: Vec2) => {
  el.setAttribute("cx", String(r2(q[0])));
  el.setAttribute("cy", String(r2(q[1])));
};

/** The root a node hangs from. */
const rootOf = (n: Shape) => {
  let r = n;
  while (r.parent) r = r.parent;

  return r;
};

/** A vertical fade, as a mask; returns the value for a `mask` attribute. */
export function fade(svg: Shape, y0: number, y1: number, a0 = 0.7) {
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

/** A fading mirror under a solid. */
export function reflect(
  svg: Shape,
  parent: Shape,
  P: Projector,
  front: (q: Sample) => boolean,
  ring: Ring,
  z0: number,
  depth: number
) {
  const r = ghost(P, front, ring, z0, depth);
  const gh = mk("g", { class: "ghost", mask: fade(svg, r.y0, r.y1) }, parent);
  mk("path", { d: r.d }, gh);
}

/* ---------- life: one frame loop for every illustration ---------- */

/** The pointer as an illustration hears it. `pointerType` is "mouse", "touch", "pen" or "ghost" (the tour). */
export interface PointerInfo {
  pointerType: string;
}
export interface PointerHandlers {
  move: (point: Vec2, e: PointerInfo) => void;
  down?: (point: Vec2, e: PointerInfo) => void;
  leave: (e?: PointerInfo) => void;
}
export type Tick = (dt: number, now: number) => boolean | void;
interface Board {
  stage: Stage;
  tick: Tick;
  awake: boolean;
}
interface Touring {
  hold: () => void;
  release: () => void;
  focus: (on: boolean) => void;
}

/**
 * What an illustration is mounted on. The host owns it: it starts and stops
 * it, says when it is visible, and feeds it the pointer. An illustration only
 * hands it to `register`, `pointer` and `tour`.
 */
export interface Stage {
  /** The host has started it: its boards join the frame loop. */
  live: boolean;
  /** It is on screen. A stage that is not visible sleeps. */
  visible: boolean;
  /** Something has focus inside it: the tour gives way. */
  focused: boolean;
  boards: Set<Board>;
  on: PointerHandlers | null;
  touring: Touring | null;
  timer?: ReturnType<typeof setTimeout>;
}

export const createStage = (): Stage => ({
  live: false,
  visible: true,
  focused: false,
  boards: new Set(),
  on: null,
  touring: null
});

const now = () => performance.now();
const live = new Set<Board>();
let raf = 0;
let last = 0;

function frame() {
  const t = now();
  const dt = Math.min(0.05, Math.max(0, (t - last) / 1000));
  last = t;
  let any = false;
  for (const b of [...live]) {
    if (!b.awake || !b.stage.visible) continue;
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

function wake(b: Board) {
  b.awake = true;
  if (
    !raf &&
    b.stage.live &&
    b.stage.visible &&
    typeof requestAnimationFrame === "function"
  ) {
    last = now();
    raf = requestAnimationFrame(frame);
  }
}

/** Joins the frame loop. `tick(dt in seconds, now in ms)` returns true to ask for another frame. */
export function register(stage: Stage, tick: Tick) {
  const b: Board = { stage, tick, awake: true };
  stage.boards.add(b);
  if (stage.live) live.add(b);
  tick(0, now());
  if (stage.live) wake(b);

  return {
    wake: () => {
      if (stage.boards.has(b)) wake(b);
    },
    unregister: () => {
      stage.boards.delete(b);
      live.delete(b);
    }
  };
}

/** Calls `fn` after any change under a root; returns the unsubscribe. The host's business. */
export function watch(root: Shape, fn: () => void) {
  root.changed = fn;

  return () => {
    if (root.changed === fn) root.changed = undefined;
  };
}

/** Starts a stage: its boards join the frame loop. The host's business. */
export function start(stage: Stage) {
  stage.live = true;
  for (const b of stage.boards) {
    live.add(b);
    if (b.awake) wake(b);
  }
}

/** Stops a stage: its boards leave the frame loop, and it can be started again. The host's business. */
export function stop(stage: Stage) {
  stage.live = false;
  clearTimeout(stage.timer);
  for (const b of stage.boards) live.delete(b);
}

/** Says whether a stage is on screen; one that is not sleeps. The host's business. */
export function show(stage: Stage, visible: boolean) {
  stage.visible = visible;
  if (visible) for (const b of stage.boards) if (b.awake) wake(b);
}

/** Sets reduced motion for every illustration and wakes them, so what is moving lands. The host's business. */
export function reduceMotion(on: boolean) {
  setReducedMotion(on);
  for (const b of live) wake(b);
}

/** Listens to the pointer on a stage, in viewBox units. Returns its disposer. */
export function pointer(stage: Stage, on: PointerHandlers) {
  stage.on = on;

  return () => {
    if (stage.on === on) stage.on = null;
  };
}

/**
 * The host's pointer, in viewBox units, given to the illustration. A leave is
 * held for 1.4s after a touch, so a tap's answer can be seen; the tour gives
 * way while a hand is on the stage.
 */
export function feed(
  stage: Stage,
  type: "move" | "down" | "leave",
  point: Vec2 | null,
  pointerType = "mouse"
) {
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
  if (!point || !stage.on) return;
  if (type === "down" && stage.on.down) stage.on.down(point, e);
  else stage.on.move(point, e);
}

/** Says when focus enters or leaves the stage: the tour gives way while it is inside. The host's business. */
export function focus(stage: Stage, on: boolean) {
  stage.focused = on;
  stage.touring?.focus(on);
}

/* ---------- the tour: an unseen pointer that walks the stops ---------- */

/** The default stops: a diamond around the centre, then a leave. */
export const LAP: (Vec2 | null)[] = [
  [128, 150],
  [200, 118],
  [272, 150],
  [200, 206],
  null
];
const TRAVEL = 900;
const DWELL = 1200;
const REST = 1800;
const RESUME = 1200;
const STAGGER = 450;
const GHOST = { pointerType: "ghost" };
let started = 0;

/** Where the unseen pointer comes in from: the frame's edge, on the line from the centre through the stop. */
function entry([x, y]: Vec2): Vec2 {
  const dx = x - 200;
  const dy = y - 160;
  if (!dx && !dy) return [200, 320];
  const k = Math.min(
    dx ? (dx > 0 ? 200 : -200) / dx : Infinity,
    dy ? (dy > 0 ? 160 : -160) / dy : Infinity
  );

  return [200 + dx * k, 160 + dy * k];
}

/**
 * Walks the stops ([x, y] in viewBox units, or null to leave) and gives way to
 * a real pointer or to focus. `onStop(i)` on each arrival. Returns `{ stop }`.
 */
export function tour(
  stage: Stage,
  stops: readonly (Vec2 | null)[],
  onStop?: (i: number) => void
) {
  let i = 0;
  let wait = RESUME + STAGGER * (started++ % 4);
  let t = -1;
  let at: Vec2 | null = null;
  let origin: Vec2 = [200, 320];
  let hand = false;
  let gone = false;
  const leave = () => {
    at = null;
    t = -1;
    stage.on?.leave(GHOST);
  };
  const tick = (dt: number) => {
    if (hand || stage.focused || !stops.length) return false;
    if (reducedMotion()) {
      if (at) leave();

      return false;
    }
    if (wait > 0) {
      wait -= dt * 1000;

      return true;
    }
    const next = stops[i];
    if (!next) {
      if (at) leave();
      onStop?.(i);
      i = (i + 1) % stops.length;
      wait = REST;

      return true;
    }
    if (!stage.on) return true;
    if (t < 0) {
      origin = at ?? entry(next);
      t = 0;
    }
    t = Math.min(TRAVEL, t + dt * 1000);
    const k = EASE_LIFT(t / TRAVEL);
    at = [
      origin[0] + (next[0] - origin[0]) * k,
      origin[1] + (next[1] - origin[1]) * k
    ];
    stage.on.move(at, GHOST);
    if (t < TRAVEL) return true;
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
    if (hand || stage.focused) return;
    i = 0;
    t = -1;
    wait = RESUME;
    board.wake();
  };
  const me: Touring = {
    hold: () => {
      hand = true;
      take();
    },
    release: () => {
      if (!hand) return;
      hand = false;
      give();
    },
    focus: on => (on ? take() : give())
  };
  stage.touring = me;
  const board = register(stage, tick);

  return {
    stop: () => {
      if (gone) return;
      gone = true;
      board.unregister();
      if (stage.touring === me) stage.touring = null;
      if (at) leave();
    }
  };
}

/** Something `disposer().on` can listen to. */
export interface DisposerTarget {
  addEventListener: (type: string, fn: never, opts?: unknown) => void;
  removeEventListener: (type: string, fn: never, opts?: unknown) => void;
}

/** Collects tear-down, so an illustration's `destroy` is `bag.dispose`. */
export function disposer() {
  let fns: (() => void)[] = [];

  return {
    add: (fn: () => void) => {
      fns.push(fn);
    },
    on: (target: DisposerTarget, type: string, fn: unknown, opts?: unknown) => {
      target.addEventListener(type, fn as never, opts);
      fns.push(() => target.removeEventListener(type, fn as never, opts));
    },
    dispose: () => {
      const run = fns;
      fns = [];
      for (let i = run.length - 1; i >= 0; i--) run[i]!();
    }
  };
}

/* ---------- an illustration, mounted with no page ---------- */

/** The read-out: an illustration writes what is under the pointer to `textContent`, and "rest" when nothing is. */
export interface Read {
  textContent: string | null;
}
export interface IllustrationHandle {
  set: (value: number) => void;
  destroy: () => void;
}
/** What an illustration file declares: its `illustration({ … })` call. */
export interface IllustrationDefinition {
  name: string;
  means: string;
  rules: readonly number[];
  range: readonly [number, number, number];
  tour: readonly (Vec2 | null)[] | null;
  mount: (
    ctx: { stage: Stage; svg: Shape; read: Read },
    value: number
  ) => IllustrationHandle;
  /** The read-out at rest, when it is not "rest". */
  rest?: string;
  answer?: readonly number[];
  edge?: readonly number[] | readonly (readonly number[])[];
}

/** The illustration's own number for a slider at `intensity`: two straight lines through `range`, meeting at 0.5. */
export function level(range: readonly number[], intensity: number) {
  const [lo = 0, mid = 0, hi = 0] = range;
  const i = Math.min(1, Math.max(0, intensity));

  return (
    Math.round(
      (i <= 0.5
        ? lo + (i / 0.5) * (mid - lo)
        : mid + ((i - 0.5) / 0.5) * (hi - mid)) * 1000
    ) / 1000
  );
}

export interface Mounted {
  stage: Stage;
  svg: Shape;
  handle: IllustrationHandle;
  /** Gives the illustration a new value, when it differs from the last one. */
  set: (value: number) => void;
  read: () => string;
}

/**
 * Mounts an illustration on a new stage and a new root, with no page. The
 * stage is not started: the host starts it. `onRead` hears the read-out.
 */
export function mountIllustration(
  def: IllustrationDefinition,
  value: number,
  options: {
    idPrefix?: string;
    onRead?: (text: string) => void;
    svg?: Shape;
    stage?: Stage;
  } = {}
): Mounted {
  const stage = options.stage ?? createStage();
  const svg = options.svg ?? new Shape("svg");
  if (options.idPrefix) svg.idPrefix = options.idPrefix;
  let text: string | null = null;
  const read: Read = {
    get textContent() {
      return text;
    },
    set textContent(v) {
      const next = v == null ? "" : String(v);
      if (next === text) return;
      text = next;
      options.onRead?.(text);
    }
  };
  const rest = def.rest ?? "rest";
  const handle = def.mount({ stage, svg, read }, value);
  if (text === null) read.textContent = rest;

  let last = value;

  return {
    stage,
    svg,
    handle,
    set: v => {
      if (v === last) return;
      last = v;
      handle.set(v);
    },
    read: () => text ?? rest
  };
}

/** Runs every board of a stage until it holds still, with motion reduced, so the drawing lands on its pose. */
export function settle(stage: Stage, frames = 240) {
  const was = reducedMotion();
  setReducedMotion(true);
  try {
    for (let f = 0; f < frames; f++) {
      let moving = false;
      for (const b of stage.boards) {
        if (b.tick(1 / 60, now())) moving = true;
      }
      if (!moving) break;
    }
  } finally {
    setReducedMotion(was);
  }
}
