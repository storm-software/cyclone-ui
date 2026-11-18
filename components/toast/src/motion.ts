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

// The toast motion, ported from Ding (https://github.com/YusufCeng1z/ding,
// MIT). Web only: it drives the rendered DOM nodes directly every frame,
// because a per-frame prop would re-render and restyle through Tamagui.

import type { ToastSpringConfig, ToastStore } from "./store";
import { toast } from "./store";

/** A closed-form damped spring from 0 to 1 with no initial velocity, at `t` seconds. */
const springAt = (t: number, k: number, c: number, m: number): number => {
  const w0 = Math.sqrt(k / m);
  const z = c / (2 * Math.sqrt(k * m));
  if (z < 1) {
    const wd = w0 * Math.sqrt(1 - z * z);

    return (
      1 -
      Math.exp(-z * w0 * t) *
        (Math.cos(wd * t) + ((z * w0) / wd) * Math.sin(wd * t))
    );
  }
  if (z === 1) {
    return 1 - Math.exp(-w0 * t) * (1 + w0 * t);
  }

  const s = w0 * Math.sqrt(z * z - 1);
  const r1 = -z * w0 + s;
  const r2 = -z * w0 - s;

  return 1 - (r2 * Math.exp(r1 * t) - r1 * Math.exp(r2 * t)) / (r2 - r1);
};

/**
 * Bakes a spring into a CSS `linear()` easing, so the browser runs it in
 * transitions and keyframes with no per-frame script.
 */
export const springEasing = (
  config: ToastSpringConfig = {}
): { easing: string; duration: number } => {
  const { stiffness = 170, damping = 18, mass = 1 } = config;
  const at = (t: number) => springAt(t, stiffness, damping, mass);
  const dt = 1 / 120;
  // The settle time is the last moment the spring is more than 0.1% from rest.
  let settle = 0;
  for (let t = 0; t <= 5; t += dt) {
    if (Math.abs(1 - at(t)) > 0.001) {
      settle = t;
    }
  }
  settle = Math.max(settle + dt, 0.05);

  const steps = Math.max(2, Math.ceil(settle * 60));
  const points: string[] = [];
  for (let i = 0; i <= steps; i++) {
    points.push(String(+at((i / steps) * settle).toFixed(4)));
  }
  points[steps] = "1";

  return {
    easing: `linear(${points.join(",")})`,
    duration: Math.round(settle * 1000)
  };
};

/**
 * A mass-spring-damper on one number. It keeps its velocity when the target
 * moves, so an interrupted animation carries its momentum.
 */
export class Spring {
  v = 0;

  to: number;

  config: Required<ToastSpringConfig>;

  constructor(
    public x: number,
    config: ToastSpringConfig
  ) {
    this.to = x;
    this.config = { stiffness: 170, damping: 18, mass: 1, ...config };
  }

  tune(config: ToastSpringConfig) {
    Object.assign(this.config, config);
  }

  /** Advances `dt` seconds. Returns `true` while still moving. */
  step(dt: number): boolean {
    const { stiffness: k, damping: c, mass: m } = this.config;
    const h = 1 / 240;
    for (let t = 0; t < dt; t += h) {
      this.v += ((-k * (this.x - this.to) - c * this.v) / m) * h;
      this.x += this.v * h;
    }
    if (Math.abs(this.v) < 0.05 && Math.abs(this.x - this.to) < 0.05) {
      this.x = this.to;
      this.v = 0;

      return false;
    }

    return true;
  }
}

type Task = (dt: number) => boolean;

// One shared animation frame loop for every moving toast.
const tasks = new Set<Task>();
let frame = 0;
let last = 0;
const tick = (now: number) => {
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  for (const task of tasks) {
    if (!task(dt)) {
      tasks.delete(task);
    }
  }
  frame = tasks.size ? requestAnimationFrame(tick) : 0;
};

const run = (task: Task) => {
  tasks.add(task);
  if (!frame) {
    last = performance.now();
    frame = requestAnimationFrame(tick);
  }
};

const stop = (task: Task) => {
  tasks.delete(task);
  if (!tasks.size && frame) {
    cancelAnimationFrame(frame);
    frame = 0;
  }
};

const reduced = () =>
  typeof matchMedia === "function" &&
  matchMedia("(prefers-reduced-motion: reduce)").matches;

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

const VIEWPORT = ".cyclone-toast-viewport";
const SLOT = ".cyclone-toast-slot";
const BUTTONS = ".cyclone-toast-action, .cyclone-toast-close";

const phaseOf = (slot: HTMLElement) =>
  slot.firstElementChild?.getAttribute("data-phase");

// A held toast stays while quick ones come and go, so several can be on
// screen at once. They sit in one column, the newest by the screen edge and
// older ones pushed away, as `--toast-ey` on each slot. Measured once a frame.
const layoutPending = new Set<Element>();
let layoutQueued = false;
const scheduleLayout = (viewport: Element | null) => {
  if (!viewport) {
    return;
  }

  layoutPending.add(viewport);
  if (layoutQueued) {
    return;
  }

  layoutQueued = true;
  requestAnimationFrame(() => {
    layoutQueued = false;
    for (const item of layoutPending) {
      if (!item.isConnected) {
        continue;
      }

      const gap =
        Number.parseFloat(
          getComputedStyle(item).getPropertyValue("--toast-gap")
        ) || 8;
      const slots = [...item.querySelectorAll<HTMLElement>(SLOT)]
        .map(
          slot =>
            [
              Number(slot.style.getPropertyValue("--toast-i")) || 0,
              slot
            ] as const
        )
        .sort((a, b) => a[0] - b[0]);
      const open = slots.filter(
        ([, slot]) => phaseOf(slot) === "enter" || phaseOf(slot) === "open"
      ).length;
      if (open > 1) {
        item.setAttribute("data-list", "");
      } else if (slots.length <= 1) {
        item.removeAttribute("data-list");
      }

      let offset = 0;
      for (const [, slot] of slots) {
        const value = `${offset}px`;
        if (!slot.style.getPropertyValue("--toast-ey")) {
          // The first placement doesn't glide in from the edge: the toast
          // appears where it belongs.
          slot.setAttribute("data-new", "");
          requestAnimationFrame(() =>
            requestAnimationFrame(() => slot.removeAttribute("data-new"))
          );
        }
        if (slot.style.getPropertyValue("--toast-ey") !== value) {
          slot.style.setProperty("--toast-ey", value);
        }
        // A closing toast gives up its room, so the ones behind glide in
        // while it leaves.
        if (phaseOf(slot) !== "closing" && phaseOf(slot) !== "exit") {
          offset += slot.offsetHeight + gap;
        }
      }
    }
    layoutPending.clear();
  });
};

// Drives the pill. The width, height and entrance are springs; the text and
// button reveals (`--toast-tp`, `--toast-ap`) are derived from the live width,
// so the box and its content stay locked together.
const watchMotion = (slot: HTMLElement, id: string, store: ToastStore) => {
  const pill = slot.firstElementChild;
  if (!(pill instanceof HTMLElement)) {
    return () => undefined;
  }

  const viewport = slot.closest(VIEWPORT);
  const body = pill.querySelector<HTMLElement>(".cyclone-toast-body");
  const styles = getComputedStyle(pill);
  const read = (name: string, fallback: number) => {
    const value = Number.parseFloat(styles.getPropertyValue(name));

    return Number.isNaN(value) ? fallback : value;
  };
  const SIZE = read("--toast-size", 44);
  const dir = read("--toast-dir", -1);
  const Y0 = dir * (SIZE + read("--toast-pad", 16) + 24);
  // Where the entrance starts, as a scale (1 is a pure slide).
  const s0 = read("--toast-enter-scale", 0.5);
  // 0 turns off the stretch along the direction of travel.
  const stretchOn = read("--toast-stretch", 1);
  const springs = store.getState().springs;
  const find = () => store.getState().toasts.find(item => item.id === id);

  const w = new Spring(SIZE, springs.morph);
  const h = new Spring(SIZE, springs.morph);
  const y = new Spring(Y0, springs.enter);
  y.to = 0;
  // The sideways head shake of an error.
  const x = new Spring(0, { stiffness: 520, damping: 13 });
  let phase = find()?.phase ?? "enter";
  let copyEnd = SIZE;
  let actionW = 0;
  let fullW = SIZE;
  let fullH = SIZE;

  const apply = () => {
    const tp = clamp((w.x - SIZE) / Math.max(1, copyEnd - SIZE));
    // A button beside the copy appears as the width reaches it; buttons
    // stacked below follow the text a beat later.
    const ap =
      actionW > 2
        ? clamp((w.x - copyEnd) / actionW)
        : clamp((tp - 0.45) / 0.55);
    // The entrance progress, which overshoots slightly past 1.
    const entered = (y.x - Y0) / -Y0;
    const stretch = clamp(Math.abs(y.v) / 6000, 0, 0.18) * stretchOn;
    const squash = clamp(Math.abs(w.v) / 20000, 0, 0.05);
    const k = s0 + (1 - s0) * entered;
    pill.style.width = `${w.x}px`;
    pill.style.height = `${h.x}px`;
    // Re-read each frame, so a changed radius shows on an open toast. 0 is a
    // valid radius (square corners).
    pill.style.setProperty(
      "--toast-r",
      `${Math.min(h.x / 2, read("--toast-radius", 22))}px`
    );
    pill.style.translate = `${x.x}px ${y.x}px`;
    pill.style.scale = `${k * (1 - stretch * 0.7) * (1 + squash * 0.5)} ${
      k * (1 + stretch) * (1 - squash)
    }`;
    pill.style.opacity = String(clamp(entered * 2));
    pill.style.setProperty("--toast-tp", tp.toFixed(3));
    pill.style.setProperty("--toast-ap", ap.toFixed(3));
    // Text is only crisp when nothing resamples it: once fully open, drop the
    // blur, the nudge and the layer hint.
    pill.toggleAttribute("data-settled", tp >= 1);
  };

  const task: Task = dt => {
    const moving = [w.step(dt), h.step(dt), y.step(dt), x.step(dt)].some(
      Boolean
    );
    apply();
    if (!moving && phase !== "exit") {
      // At rest there is no transform at all, so the browser never resamples
      // the text at a fractional scale.
      pill.style.translate = "none";
      pill.style.scale = "none";
    }

    return moving;
  };

  const kick = () => {
    if (reduced()) {
      for (const spring of [w, h, y, x]) {
        spring.x = spring.to;
        spring.v = 0;
      }
      apply();
    } else {
      run(task);
    }
  };

  const aim = () => {
    const open = phase === "open";
    w.to = open ? fullW : SIZE;
    h.to = open ? fullH : SIZE;
  };

  const measure = () => {
    if (!body) {
      return;
    }

    const copy = body.querySelector<HTMLElement>(".cyclone-toast-copy");
    const action = body.querySelector<HTMLElement>(BUTTONS);
    // Buttons that wrapped onto their own row need room under them.
    const wrapped =
      !!copy &&
      [...body.querySelectorAll<HTMLElement>(BUTTONS)].some(
        button => button.offsetTop >= copy.offsetTop + copy.offsetHeight
      );
    body.toggleAttribute("data-wrapped", wrapped);
    // An even width, so centering by -50% lands on whole pixels.
    fullW = Math.ceil((SIZE + body.offsetWidth) / 2) * 2;
    fullH = Math.max(SIZE, body.offsetHeight);
    // The button sits below the copy (checked in a direction-safe way).
    const stacked =
      !!action &&
      !!copy &&
      action.offsetTop >= copy.offsetTop + copy.offsetHeight;
    copyEnd = action && copy && !stacked ? SIZE + copy.offsetWidth + 6 : fullW;
    actionW = fullW - copyEnd;
    if (phase === "open") {
      aim();
      kick();
    }
  };

  const layoutObserver = new ResizeObserver(() => scheduleLayout(viewport));
  layoutObserver.observe(slot);
  scheduleLayout(viewport);
  const bodyObserver = new ResizeObserver(measure);
  if (body) {
    bodyObserver.observe(body);
  }
  measure();
  if (phase === "open") {
    w.x = fullW;
    h.x = fullH;
  }
  kick();

  // Content-aware motion: an error shakes its head, a warning hops.
  let reactTimer: ReturnType<typeof setTimeout> | undefined;
  const react = (type: string) => {
    if (reduced()) {
      return;
    }

    if (type === "error") {
      x.v = 380;
    } else if (type === "warning") {
      y.v = -dir * 200;
    } else {
      return;
    }
    kick();
  };

  let lastType = find()?.type;
  let count = find()?.count ?? 1;
  const unsubscribe = store.subscribe(() => {
    scheduleLayout(viewport);
    const item = find();
    if (!item) {
      return;
    }

    if (item.count > count && phase === "open") {
      // A repeat nudges the pill and lets it settle.
      y.v = -dir * 240;
      kick();
    }
    count = item.count;
    if (item.type !== lastType) {
      lastType = item.type;
      if (phase === "open") {
        react(item.type);
      }
    }
    if (item.phase === phase) {
      return;
    }

    phase = item.phase;
    if (phase === "closing") {
      // Closing has its own motion: firmer, no overshoot, and a small swell
      // before it collapses.
      w.tune({ stiffness: 380, damping: 36 });
      h.tune({ stiffness: 380, damping: 36 });
      w.v = 320;
    } else {
      w.tune(springs.morph);
      h.tune(springs.morph);
      if (phase === "open") {
        // Anticipation: the dot squeezes in, then springs open.
        w.v = -260;
        clearTimeout(reactTimer);
        reactTimer = setTimeout(() => lastType && react(lastType), 200);
      }
    }
    if (phase !== "exit") {
      aim();
      kick();
    }
  });

  // New text: the old line rolls up and out while the new one rolls in. The
  // width springs on its own through the resize observer.
  const copy = body?.querySelector<HTMLElement>(".cyclone-toast-copy");
  const titleOf = () =>
    copy?.querySelector(".cyclone-toast-title")?.textContent;
  const kindOf = () =>
    `${pill.dataset.type}|${!!pill.querySelector(".cyclone-toast-progress")}`;
  let snapshot = copy
    ? {
        html: copy.innerHTML,
        width: copy.offsetWidth,
        title: titleOf(),
        kind: kindOf()
      }
    : undefined;
  let ghost: HTMLElement | undefined;
  let lastRoll = 0;
  const textObserver = new MutationObserver(() => {
    if (!copy || !body) {
      return;
    }

    const previous = snapshot;
    snapshot = {
      html: copy.innerHTML,
      width: copy.offsetWidth,
      title: titleOf(),
      kind: kindOf()
    };
    // A ticking description under a steady title (a download %) swaps in
    // place, and so does a progress toast that keeps its type: rolling them
    // would make the title flicker.
    if (
      !previous ||
      previous.html === snapshot.html ||
      previous.title === snapshot.title ||
      (previous.kind === snapshot.kind && snapshot.kind.endsWith("true")) ||
      phase !== "open" ||
      reduced()
    ) {
      return;
    }
    // Fast tickers would stay blurred forever: roll at most every 450ms and
    // swap instantly in between.
    if (performance.now() - lastRoll < 450) {
      return;
    }

    lastRoll = performance.now();
    ghost?.remove();
    const next = document.createElement("div");
    next.className = "cyclone-toast-copy cyclone-toast-ghost";
    next.setAttribute("aria-hidden", "true");
    next.style.width = `${previous.width}px`;
    next.innerHTML = previous.html;
    body.append(next);
    ghost = next;
    const easing = "cubic-bezier(.2,.8,.2,1)";
    next.animate(
      [
        { opacity: 1, transform: "none", filter: "blur(0)" },
        { opacity: 0, transform: "translateY(-12px)", filter: "blur(4px)" }
      ],
      { duration: 280, easing, fill: "forwards" }
    ).onfinish = () => next.remove();
    copy.animate(
      [
        { opacity: 0, transform: "translateY(12px)", filter: "blur(4px)" },
        { opacity: 1, transform: "none", filter: "blur(0)" }
      ],
      { duration: 380, easing }
    );
  });
  if (copy) {
    textObserver.observe(copy, {
      childList: true,
      characterData: true,
      subtree: true
    });
  }

  // The spinner turns by script, so it can be caught mid-turn and eased to
  // rest as the arc closes into the result's ring. The svg is looked up each
  // time: an image toast has none, and the renderer may swap the element.
  const getSvg = () => pill.querySelector<SVGElement>(".cyclone-toast-svg");
  let spin: Animation | undefined;
  let spinOn: SVGElement | null = null;
  const startSpin = () => {
    spin?.cancel();
    spin = undefined;
    spinOn = getSvg();
    if (spinOn && !reduced()) {
      spin = spinOn.animate([{ rotate: "0deg" }, { rotate: "360deg" }], {
        duration: 800,
        iterations: Number.POSITIVE_INFINITY
      });
    }
  };
  let currentType = pill.dataset.type;
  if (currentType === "loading") {
    startSpin();
  }

  // After the first draw-in, marks drawn by an in-place change don't wait for
  // a ring that is already there.
  const ready = setTimeout(() => pill.setAttribute("data-ready", ""), 900);
  const typeObserver = new MutationObserver(() => {
    const next = pill.dataset.type;
    if (next === currentType) {
      return;
    }

    const was = currentType;
    currentType = next;
    if (next === "loading") {
      startSpin();

      return;
    }

    // A status change pops the icon in place: the ring stays and the glyph
    // inside redraws.
    const svg = getSvg();
    if (svg && was !== "loading" && !reduced()) {
      const { easing, duration } = springEasing(springs.stack);
      svg.animate(
        [
          { scale: 0.6, opacity: 0.3 },
          { scale: 1, opacity: 1 }
        ],
        { duration, easing }
      );
    }

    const spinning = spinOn;
    if (was === "loading" && spin && spinning?.isConnected) {
      const deg = ((Number(spin.currentTime) % 800) / 800) * 360;
      spin.cancel();
      spin = undefined;
      spinning.animate([{ rotate: `${deg}deg` }, { rotate: "360deg" }], {
        duration: 650,
        easing: "cubic-bezier(.2,.7,.2,1)"
      });
    }
  });
  // The icon element can be replaced (an image and the status icon, or a
  // loading state arriving on an image toast).
  const iconObserver = new MutationObserver(() => {
    if (
      currentType === "loading" &&
      (!spinOn?.isConnected || spinOn !== getSvg())
    ) {
      startSpin();
    }
  });
  iconObserver.observe(pill, { childList: true, subtree: true });
  typeObserver.observe(pill, {
    attributes: true,
    attributeFilter: ["data-type"]
  });

  return () => {
    stop(task);
    clearTimeout(reactTimer);
    clearTimeout(ready);
    iconObserver.disconnect();
    typeObserver.disconnect();
    spin?.cancel();
    bodyObserver.disconnect();
    layoutObserver.disconnect();
    textObserver.disconnect();
    unsubscribe();
    ghost?.remove();
  };
};

// Drag toward the screen edge (or sideways) to dismiss; it springs back
// otherwise.
const watchDrag = (slot: HTMLElement, id: string, store: ToastStore) => {
  let startX = 0;
  let startY = 0;
  let startedAt = 0;
  let active = false;
  const edge = () =>
    slot.closest<HTMLElement>(VIEWPORT)?.dataset.position?.startsWith("top")
      ? -1
      : 1;
  const reset = () => {
    slot.removeAttribute("data-dragging");
    slot.style.removeProperty("--toast-dx");
    slot.style.removeProperty("--toast-dy");
  };

  const down = (event: PointerEvent) => {
    if (event.button !== 0 || (event.target as Element).closest("button")) {
      return;
    }

    startX = event.clientX;
    startY = event.clientY;
    startedAt = event.timeStamp;
    active = true;
    slot.setPointerCapture(event.pointerId);
    slot.setAttribute("data-dragging", "");
  };
  const move = (event: PointerEvent) => {
    if (!active) {
      return;
    }

    let dy = event.clientY - startY;
    // Resist dragging into the screen.
    if (dy * edge() < 0) {
      dy *= 0.2;
    }
    slot.style.setProperty("--toast-dx", `${event.clientX - startX}px`);
    slot.style.setProperty("--toast-dy", `${dy}px`);
  };
  const up = (event: PointerEvent) => {
    if (!active) {
      return;
    }

    active = false;
    const dx = event.clientX - startX;
    const rawDy = event.clientY - startY;
    // Positive is toward the screen edge.
    const dy = rawDy * edge();
    const speed = Math.hypot(dx, dy) / Math.max(1, event.timeStamp - startedAt);
    const away =
      dy > 40 ||
      Math.abs(dx) > 80 ||
      (speed > 0.5 && (dy > 15 || Math.abs(dx) > 15));
    if (!away) {
      reset();

      return;
    }

    // A fling keeps going in the throw direction, as far as the release
    // speed says.
    slot.removeAttribute("data-dragging");
    const length = Math.hypot(dx, rawDy) || 1;
    const reach = Math.max(160, speed * 320);
    slot.setAttribute("data-flung", "");
    slot.style.setProperty("--toast-dx", `${(dx / length) * reach}px`);
    slot.style.setProperty("--toast-dy", `${(rawDy / length) * reach}px`);
    store.close(id, { immediate: true });
  };
  const cancel = () => {
    if (active) {
      active = false;
      reset();
    }
  };

  slot.addEventListener("pointerdown", down);
  slot.addEventListener("pointermove", move);
  slot.addEventListener("pointerup", up);
  slot.addEventListener("pointercancel", cancel);

  return () => {
    slot.removeEventListener("pointerdown", down);
    slot.removeEventListener("pointermove", move);
    slot.removeEventListener("pointerup", up);
    slot.removeEventListener("pointercancel", cancel);
  };
};

/**
 * Binds the motion and drag-to-dismiss to a rendered toast slot (whose first
 * child is the pill). Returns the cleanup.
 */
export const bindToast = (
  slot: HTMLElement,
  id: string,
  store: ToastStore = toast
): (() => void) => {
  const stopDrag = watchDrag(slot, id, store);
  const stopMotion = watchMotion(slot, id, store);

  return () => {
    stopDrag();
    stopMotion();
  };
};

// Escape belongs to what the user is working in: a dialog, menu or text field
// closes or clears itself first.
const BUSY =
  "dialog,[role=dialog],[aria-modal=true],[role=menu],[role=listbox],input,textarea,select,[contenteditable]";

/** Escape dismisses the toasts; Alt + T moves focus into the newest one (and pauses it). */
export const onToastKey = (event: KeyboardEvent): void => {
  if (event.defaultPrevented || !toast.getState().toasts.length) {
    return;
  }

  if (event.key === "Escape") {
    const active = document.activeElement;
    if (active?.closest(BUSY)) {
      return;
    }

    const slot = active?.closest<HTMLElement>(`${VIEWPORT} ${SLOT}`);
    const slots = slot?.closest(VIEWPORT)?.querySelectorAll<HTMLElement>(SLOT);
    const focused =
      slot && slots && toast.getState().toasts[[...slots].indexOf(slot)];
    const id =
      focused && (focused.phase === "enter" || focused.phase === "open")
        ? focused.id
        : undefined;
    if (slot && !id) {
      return;
    }

    event.preventDefault();
    if (id) {
      toast.close(id);
    } else {
      toast.dismiss();
    }
  } else if (
    event.altKey &&
    (event.code === "KeyT" || event.key.toLowerCase() === "t")
  ) {
    // A button if the toast has one, otherwise the newest toast itself.
    const slots = document.querySelectorAll<HTMLElement>(`${VIEWPORT} ${SLOT}`);
    const newest = slots[slots.length - 1];
    const target =
      newest?.querySelector<HTMLElement>('button:not([tabindex="-1"])') ??
      newest;
    if (!target) {
      return;
    }

    event.preventDefault();
    const slot = target.closest<HTMLElement>(SLOT);
    if (slot && !slot.hasAttribute("data-shortcut-focus")) {
      slot.setAttribute("data-shortcut-focus", "");
      const clear = (focusEvent: FocusEvent) => {
        if (slot.contains(focusEvent.relatedTarget as Node | null)) {
          return;
        }

        slot.removeAttribute("data-shortcut-focus");
        slot.removeEventListener("focusout", clear);
      };
      slot.addEventListener("focusout", clear);
    }
    target.focus();
    toast.pause();
  }
};

let keyboardMounts = 0;

/**
 * Keeps the shared document key listener while at least one `Toaster` is
 * mounted. Returns an idempotent release.
 */
export const retainToastKeys = (): (() => void) => {
  if (typeof document === "undefined") {
    return () => undefined;
  }

  if (keyboardMounts++ === 0) {
    document.addEventListener("keydown", onToastKey);
  }

  let released = false;

  return () => {
    if (released) {
      return;
    }

    released = true;
    if (--keyboardMounts === 0) {
      document.removeEventListener("keydown", onToastKey);
    }
  };
};
