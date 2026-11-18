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

// The toast store, ported from Ding (https://github.com/YusufCeng1z/ding, MIT).
// One toast morphs in place: a new call reuses the quick toast on screen
// instead of stacking another one.

export type ToastType = "success" | "error" | "warning" | "info" | "loading";

/**
 * `enter`: the round shape arrives. `open`: the pill is expanded. `closing`:
 * the text is erased and the pill shrinks. `exit`: the shape leaves.
 */
export type ToastPhase = "enter" | "open" | "closing" | "exit";

export type ToastPosition =
  | "top-center"
  | "top-left"
  | "top-right"
  | "bottom-center"
  | "bottom-left"
  | "bottom-right";

/**
 * What happens to a toast that stays until closed (an error, a toast with a
 * button, `duration: 0`) when another toast is shown.
 *
 * - `list` (default): the held toast keeps its place and the new one opens in
 *   its own slot beside it.
 * - `queue`: new toasts wait in line and show one after another once the held
 *   toast is gone.
 * - `replace`: the new toast morphs the one on screen, held or not.
 */
export type ToastHeldMode = "list" | "queue" | "replace";

/** Accessible names read by screen readers. */
export interface ToastLabels {
  /** The name of the notifications region. Defaults to `Notifications`. */
  region: string;
  /** The name of the close button on held toasts. Defaults to `Dismiss notification`. */
  dismiss: string;
}

export interface ToastAction {
  label: string;
  /** Return a patch to morph the toast in place; anything else closes it. */
  onClick: () => void | ToastPatch | Promise<void | ToastPatch>;
}

export interface ToastOptions {
  /** Reuse an id so repeated calls from one place stay one caller. */
  id?: string;
  /** A second line of text. */
  description?: string;
  /** The main button. */
  action?: ToastAction;
  /** A quieter button beside the action, such as Snooze beside Reply. */
  secondary?: ToastAction;
  /** Small trailing text beside the title, such as `now` or `⌘V`. */
  meta?: string;
  /** An avatar or thumbnail URL, shown in a circle in place of the status icon. */
  image?: string;
  /**
   * Milliseconds before the toast closes, or `0` to keep it until dismissed.
   * Defaults to 5000; errors, loading toasts and toasts with a button stay.
   */
  duration?: number;
  /** `0` to `1`. Draws a thin progress bar along the bottom of the pill. */
  progress?: number;
  /** An extra class on the toast pill (`.cyclone-toast`), to style one toast. */
  className?: string;
}

export interface ToastPatch {
  title?: string;
  description?: string;
  type?: ToastType;
  duration?: number;
  /** `0` to `1`, or `null` to remove the bar. */
  progress?: number | null;
  /** `null` removes the button. */
  action?: ToastAction | null;
  secondary?: ToastAction | null;
  /** `null` removes it. */
  meta?: string | null;
  /** `null` brings back the status icon. */
  image?: string | null;
  /** `null` removes it. */
  className?: string | null;
}

export interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  phase: ToastPhase;
  /** Milliseconds until the toast closes; `0` keeps it until dismissed. */
  duration: number;
  action?: ToastAction;
  secondary?: ToastAction;
  meta?: string;
  image?: string;
  progress?: number;
  /** Identical toasts shown again collapse into one with a counter (×2). */
  count: number;
  className?: string;
}

export interface ToastSpringConfig {
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export interface ToastSprings {
  /** The toast arriving. */
  enter: ToastSpringConfig;
  /** The pill opening and morphing. */
  morph: ToastSpringConfig;
  /** Shuffling the stack, and folding and unfolding. */
  stack: ToastSpringConfig;
}

/**
 * Status icons as lists of SVG path `d` strings on a 24×24 grid, drawn as
 * strokes. The first path is the outer ring; `warning` and `info` animate
 * their second and third paths.
 */
export type ToastIcons = Record<ToastType, string[]>;

/** `true` plays the built-in tones; a function plays your own. */
export type ToastSound = boolean | ((type: ToastType) => void);

export interface ToasterState {
  toasts: ToastItem[];
  position: ToastPosition;
  /** A Tamagui theme name for the toasts, or `undefined` to follow the page. */
  theme?: string;
  labels: ToastLabels;
  /** The text of the polite live region (`role="status"`). */
  status: string;
  /** The text of the assertive live region (`role="alert"`). */
  alert: string;
  springs: ToastSprings;
  icons: ToastIcons;
}

export interface ToasterConfig {
  position?: ToastPosition;
  theme?: string;
  /** Keys you leave out keep their current value. */
  labels?: Partial<ToastLabels>;
  sound?: ToastSound;
  /** `0` to `1`. Defaults to `0.5`. */
  volume?: number;
  /** Retune the springs. Applies to toasts shown afterwards. */
  springs?: Partial<ToastSprings>;
  /** Replace status icons. Applies to toasts shown afterwards. */
  icons?: Partial<ToastIcons>;
  held?: ToastHeldMode;
}

export interface ToastPromiseMessages<T> {
  loading: string;
  success: string | ((value: T) => string);
  error: string | ((error: unknown) => string);
}

export const TOAST_TIMING = {
  /** The shape arrives, then the pill opens. */
  openDelay: 450,
  /** The text is erased and the pill shrinks back to the shape. */
  closing: 340,
  /** The shape leaves the screen. */
  exit: 220,
  duration: 5000
};

// The ring is the first path of every icon: loading shows it as an arc, so it
// can close into the full circle of the result in place.
const RING = "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18";

export const TOAST_ICONS: ToastIcons = {
  success: [RING, "M7.9 12.4l3 3 5.3-6"],
  error: [RING, "M9.3 9.3l5.4 5.4", "M14.7 9.3l-5.4 5.4"],
  warning: [RING, "M12 7.6v5.2", "M12 16.3h.01"],
  info: [RING, "M12 11v5.2", "M12 7.8h.01"],
  loading: [RING]
};

export const TOAST_SPRINGS: ToastSprings = {
  // Arrival: quick, lands with a hint of overshoot.
  enter: { stiffness: 320, damping: 26 },
  // The pill opening: liquid but controlled.
  morph: { stiffness: 340, damping: 27 },
  // Stack shuffles and folding: tight, no wobble.
  stack: { stiffness: 400, damping: 36 }
};

const DEFAULT_LABELS: ToastLabels = {
  region: "Notifications",
  dismiss: "Dismiss notification"
};

let audio: AudioContext | undefined;

// [frequency Hz, start offset s, level]: rising is good news, falling is bad.
const CUES: Partial<Record<ToastType, [number, number, number][]>> = {
  success: [
    [392, 0, 1],
    [523.3, 0.1, 1]
  ],
  error: [
    [233.1, 0, 1],
    [185, 0.13, 1]
  ],
  warning: [
    [349.2, 0, 0.8],
    [349.2, 0.16, 0.6]
  ],
  info: [[466.2, 0, 0.9]]
};

// A soft mallet: a warm low tone with a faint octave, slightly off pitch each
// time like a real strike.
const tone = (
  context: AudioContext,
  out: AudioNode,
  frequency: number,
  at: number,
  level: number
) => {
  const time = context.currentTime + at;
  const pitch = frequency * (1 + (Math.random() - 0.5) * 0.008);
  for (const [multiple, gain, decay] of [
    [1, 0.6, 0.5],
    [2, 0.06, 0.15]
  ] as const) {
    const oscillator = context.createOscillator();
    const envelope = context.createGain();
    oscillator.frequency.value = pitch * multiple;
    envelope.gain.setValueAtTime(0.0001, time);
    envelope.gain.linearRampToValueAtTime(gain * level, time + 0.015);
    envelope.gain.exponentialRampToValueAtTime(0.0001, time + decay);
    oscillator.connect(envelope).connect(out);
    oscillator.start(time);
    oscillator.stop(time + decay + 0.05);
  }
};

/**
 * Plays the built-in tone for a toast type: success rises, error falls,
 * warning taps twice and info is a single note. Silent for loading, and
 * wherever Web Audio is missing or still locked by the browser (until the
 * first click or key press).
 */
export const chime = (type: ToastType, volume = 0.5): void => {
  const cue = CUES[type];
  if (!cue || typeof AudioContext === "undefined") {
    return;
  }

  try {
    audio ??= new AudioContext();
    if (audio.state === "suspended") {
      // The autoplay policy may reject this; sound stays optional.
      audio.resume().catch(() => undefined);
    }
    if (audio.state === "closed") {
      return;
    }

    const master = audio.createGain();
    master.gain.value = Math.min(1, Math.max(0, volume)) * 0.45;
    // Rounded-off highs, and one faint echo so it sounds like a room.
    const soften = audio.createBiquadFilter();
    soften.type = "lowpass";
    soften.frequency.value = 1300;
    const echo = audio.createDelay();
    echo.delayTime.value = 0.11;
    const wet = audio.createGain();
    wet.gain.value = 0.1;
    master.connect(soften);
    soften.connect(audio.destination);
    soften.connect(echo).connect(wet).connect(audio.destination);
    for (const [frequency, at, level] of cue) {
      tone(audio, master, frequency, at, level);
    }
  } catch {
    // Audio is a nicety: never let it break a toast.
  }
};

interface Entry {
  phaseTimer?: ReturnType<typeof setTimeout>;
  lifeTimer?: ReturnType<typeof setTimeout>;
  startedAt: number;
  /** Milliseconds left before the toast closes; `0` keeps it. */
  remaining: number;
  /** The full duration, restored when a repeat bumps the toast. */
  base: number;
  paused: boolean;
}

interface Pending {
  id: string;
  type: ToastType;
  title: string;
  opts: ToastOptions;
  holds: boolean;
}

// Errors, loading toasts and toasts with a button stay until dismissed
// (WCAG 2.2.2).
const autoDuration = (type: ToastType, hasAction: boolean) =>
  type === "loading" || type === "error" || hasAction
    ? 0
    : TOAST_TIMING.duration;

const definedOnly = <T extends object>(value: T): Partial<T> =>
  Object.fromEntries(
    Object.entries(value).filter(([, item]) => item !== undefined)
  ) as Partial<T>;

const isLive = (item: ToastItem) =>
  item.phase === "enter" || item.phase === "open";

/**
 * Creates a toast store. Most apps use the shared `toast` store instead; a
 * second store is useful for tests or an isolated region.
 */
export const createToastStore = () => {
  let state: ToasterState = {
    toasts: [],
    position: "top-center",
    theme: undefined,
    labels: DEFAULT_LABELS,
    status: "",
    alert: "",
    springs: TOAST_SPRINGS,
    icons: TOAST_ICONS
  };
  let flip = false;
  let counter = 0;
  let sound: ToastSound = false;
  let volume = 0.5;
  let held: ToastHeldMode = "list";
  // `flush()` is showing a waiting toast, which must not wait again.
  let releasing = false;
  const subscribers = new Set<() => void>();
  const entries = new Map<string, Entry>();
  const pending: Pending[] = [];
  // Each caller keeps its own id, but only the newest caller may update the
  // shared toast, so a slow loading → success cannot overwrite a newer one.
  const live = new Map<string, string>(); // caller id → toast id
  const owner = new Map<string, string>(); // toast id → newest caller id

  const emit = () => subscribers.forEach(subscriber => subscriber());
  const setToasts = (toasts: ToastItem[]) => {
    state = { ...state, toasts };
    emit();
  };
  const find = (id: string) => state.toasts.find(item => item.id === id);
  const patch = (id: string, value: Partial<ToastItem>) =>
    setToasts(
      state.toasts.map(item => (item.id === id ? { ...item, ...value } : item))
    );

  // The text goes into stable, always-mounted live regions. A trailing NBSP
  // that toggles each time makes identical text announce again.
  const announce = (type: ToastType, title: string, description?: string) => {
    try {
      if (typeof sound === "function") {
        sound(type);
      } else if (sound) {
        chime(type, volume);
      }
    } catch {
      // A broken custom player must not keep the toast from opening.
    }

    flip = !flip;
    const text =
      (description ? `${title}. ${description}` : title) + (flip ? " " : "");
    state = { ...state, [type === "error" ? "alert" : "status"]: text };
    emit();
  };

  const startLife = (id: string) => {
    const entry = entries.get(id);
    if (!entry) {
      return;
    }

    clearTimeout(entry.lifeTimer);
    entry.lifeTimer = undefined;
    if (find(id)?.phase !== "open" || entry.paused || entry.remaining <= 0) {
      return;
    }

    entry.startedAt = Date.now();
    entry.lifeTimer = setTimeout(() => close(id), entry.remaining);
  };

  const bump = (id: string) => {
    const entry = entries.get(id);
    const item = find(id);
    if (!entry || !item) {
      return;
    }

    patch(id, { count: item.count + 1 });
    entry.remaining = entry.base;
    startLife(id);
  };

  const apply = (id: string, value: ToastPatch) => {
    const item = find(id);
    const entry = entries.get(id);
    if (!item || !entry) {
      return;
    }

    patch(id, {
      ...(value.title !== undefined && { title: value.title }),
      ...(value.description !== undefined && {
        description: value.description
      }),
      ...(value.progress !== undefined && {
        progress: value.progress ?? undefined
      }),
      ...(value.action !== undefined && { action: value.action ?? undefined }),
      ...(value.secondary !== undefined && {
        secondary: value.secondary ?? undefined
      }),
      ...(value.meta !== undefined && { meta: value.meta ?? undefined }),
      ...(value.image !== undefined && { image: value.image ?? undefined }),
      ...(value.className !== undefined && {
        className: value.className ?? undefined
      }),
      ...(value.type !== undefined && { type: value.type })
    });

    if (value.duration !== undefined) {
      entry.remaining = value.duration;
    } else if (
      value.type !== undefined ||
      value.action !== undefined ||
      value.secondary !== undefined
    ) {
      const next = find(id)!;
      entry.remaining = autoDuration(
        next.type,
        !!(next.action ?? next.secondary)
      );
    }
    if (
      value.duration !== undefined ||
      value.type !== undefined ||
      value.action !== undefined ||
      value.secondary !== undefined
    ) {
      entry.base = entry.remaining;
      patch(id, { duration: entry.remaining });
    }
    startLife(id);

    // Progress ticks stay silent, but a finished bar with new copy is a
    // result worth announcing.
    const quiet =
      value.progress !== undefined &&
      value.type === undefined &&
      !(
        value.progress === 1 &&
        ((value.title !== undefined && value.title !== item.title) ||
          (value.description !== undefined &&
            value.description !== item.description))
      );
    if (
      !quiet &&
      (value.title !== undefined ||
        value.description !== undefined ||
        value.type !== undefined)
    ) {
      announce(
        value.type ?? item.type,
        value.title ?? item.title,
        value.description ?? item.description
      );
    }
  };

  const show = (
    type: ToastType,
    title: string,
    opts: ToastOptions = {}
  ): string => {
    if (
      opts.id === undefined &&
      !opts.action &&
      !opts.secondary &&
      !opts.image &&
      !opts.meta &&
      !opts.className
    ) {
      // Only a repeat of the newest toast collapses into a counter; an older
      // identical one stays separate.
      const duplicate = state.toasts.at(-1);
      if (
        duplicate &&
        duplicate.type === type &&
        duplicate.title === title &&
        // A morphed slot holds `""` for "no description" (that's how the
        // morph clears it), so compare the two the same way.
        (duplicate.description ?? "") === (opts.description ?? "") &&
        duplicate.duration === (opts.duration ?? autoDuration(type, false)) &&
        duplicate.progress === opts.progress &&
        isLive(duplicate)
      ) {
        bump(duplicate.id);

        return owner.get(duplicate.id) ?? duplicate.id;
      }
    }

    let id = opts.id ?? `toast-${++counter}`;
    if (opts.id === undefined) {
      while (
        entries.has(id) ||
        live.has(id) ||
        pending.some(item => item.id === id)
      ) {
        id = `toast-${++counter}`;
      }
    }

    const open = state.toasts.filter(isLive);
    const holds =
      (opts.duration ??
        autoDuration(type, !!(opts.action ?? opts.secondary))) === 0;
    const isHeld = (item: ToastItem) =>
      entries.get(item.id)?.base === 0 && item.type !== "loading";

    const waiting =
      opts.id === undefined ? undefined : pending.find(item => item.id === id);
    if (waiting) {
      Object.assign(waiting, { type, title, opts, holds });

      return id;
    }

    const same = opts.id === undefined ? undefined : find(live.get(id) ?? id);
    if (
      held === "queue" &&
      !releasing &&
      !same &&
      (open.some(isHeld) || pending.length)
    ) {
      // A real queue: everything waits its turn, in order.
      pending.push({ id, type, title, opts, holds });

      return id;
    }

    let current = same ?? open.at(-1);
    if (held === "list" && !same) {
      // A held toast keeps its own slot. A quick toast reuses the newest quick
      // slot, or opens one next to the held ones.
      if (!holds) {
        current = open.filter(item => !isHeld(item)).at(-1);
      } else if (current && isHeld(current)) {
        current = undefined;
      }
    }

    if (current) {
      if (same && (same.phase === "closing" || same.phase === "exit")) {
        clearTimeout(entries.get(same.id)?.phaseTimer);
        patch(same.id, { phase: "open" });
      }

      live.set(id, current.id);
      owner.set(current.id, id);
      patch(current.id, { count: 1 });
      apply(current.id, {
        type,
        title,
        description: opts.description ?? "",
        action: opts.action ?? null,
        secondary: opts.secondary ?? null,
        meta: opts.meta ?? null,
        image: opts.image ?? null,
        className: opts.className ?? null,
        progress: opts.progress ?? null,
        ...(opts.duration !== undefined && { duration: opts.duration })
      });

      return id;
    }

    owner.set(id, id);
    const first =
      opts.duration ?? autoDuration(type, !!(opts.action ?? opts.secondary));
    const entry: Entry = {
      startedAt: 0,
      remaining: first,
      base: first,
      paused: false
    };
    entries.set(id, entry);
    setToasts([
      ...state.toasts,
      {
        id,
        type,
        title,
        description: opts.description,
        phase: "enter",
        duration: entry.remaining,
        action: opts.action,
        secondary: opts.secondary,
        meta: opts.meta,
        image: opts.image,
        progress: opts.progress,
        count: 1,
        className: opts.className
      }
    ]);
    announce(type, title, opts.description);
    entry.phaseTimer = setTimeout(() => {
      if (find(id)?.phase !== "enter") {
        return;
      }

      patch(id, { phase: "open" });
      startLife(id);
    }, TOAST_TIMING.openDelay);

    return id;
  };

  // Queue mode: once the screen is clear, show the next waiting toast.
  const flush = () => {
    if (pending.length && !state.toasts.some(isLive)) {
      const next = pending.shift()!;
      releasing = true;
      show(next.type, next.title, { ...next.opts, id: next.id });
      releasing = false;
    }
  };

  /** Closes a visible toast by its `ToastItem.id`, whoever its caller is. */
  const close = (id: string, opts: { immediate?: boolean } = {}) => {
    const item = find(id);
    const entry = entries.get(id);
    if (
      !item ||
      !entry ||
      item.phase === "exit" ||
      (item.phase === "closing" && !opts.immediate)
    ) {
      return;
    }

    clearTimeout(entry.phaseTimer);
    clearTimeout(entry.lifeTimer);
    const leave = () => {
      patch(id, { phase: "exit" });
      entry.phaseTimer = setTimeout(() => {
        entries.delete(id);
        owner.delete(id);
        live.forEach((value, key) => value === id && live.delete(key));
        setToasts(state.toasts.filter(toast => toast.id !== id));
        flush();
      }, TOAST_TIMING.exit);
    };

    if (opts.immediate) {
      leave();

      return;
    }

    patch(id, { phase: "closing" });
    entry.phaseTimer = setTimeout(leave, TOAST_TIMING.closing);
  };

  /** Updates a toast by the id its call returned. Only the newest caller can. */
  const update = (callerId: string, value: ToastPatch) => {
    const waiting = pending.find(item => item.id === callerId);
    if (waiting) {
      // Still waiting in queue mode: the patch goes into the toast to come.
      const opts = waiting.opts as Record<string, unknown>;
      for (const [key, next] of Object.entries(value)) {
        if (next === undefined) {
          continue;
        }

        if (key === "type") {
          waiting.type = next as ToastType;
        } else if (key === "title") {
          waiting.title = next as string;
        } else {
          opts[key] = next ?? undefined;
        }
      }
      waiting.holds =
        (waiting.opts.duration ??
          autoDuration(
            waiting.type,
            !!(waiting.opts.action ?? waiting.opts.secondary)
          )) === 0;

      return;
    }

    const id = live.get(callerId) ?? callerId;
    if (owner.get(id) === callerId) {
      apply(id, value);
    }
  };

  /** Runs a toast's button. A returned patch morphs the toast; otherwise it closes. */
  const act = (id: string, which: "action" | "secondary" = "action") => {
    const current = find(id);
    const caller = owner.get(id);
    const result = current?.[which]?.onClick();
    // The handler may have replaced this slot already: never touch its new owner.
    if (!current || owner.get(id) !== caller || find(id) !== current) {
      return;
    }

    if (result && typeof result === "object" && !("then" in result)) {
      apply(id, { action: null, secondary: null, ...result });
    } else {
      close(id);
    }
  };

  /**
   * Dismisses a toast by the id its call returned, or every toast when called
   * without one. An older caller cannot close a newer message.
   */
  const dismiss = (id?: string, opts: { immediate?: boolean } = {}) => {
    if (id === undefined) {
      pending.length = 0;
      state.toasts.forEach(item => close(item.id, opts));

      return;
    }

    const waiting = pending.findIndex(item => item.id === id);
    if (waiting >= 0) {
      pending.splice(waiting, 1);

      return;
    }

    const toastId = live.get(id) ?? id;
    if (owner.get(toastId) === id) {
      close(toastId, opts);
    } else {
      live.delete(id);
    }
  };

  const pause = (id?: string) => {
    if (id === undefined) {
      [...entries.keys()].forEach(key => pause(key));

      return;
    }

    const entry = entries.get(id);
    if (!entry || entry.paused) {
      return;
    }

    entry.paused = true;
    if (entry.lifeTimer) {
      clearTimeout(entry.lifeTimer);
      entry.lifeTimer = undefined;
      entry.remaining = Math.max(
        0,
        entry.remaining - (Date.now() - entry.startedAt)
      );
    }
  };

  const resume = (id?: string) => {
    if (id === undefined) {
      [...entries.keys()].forEach(key => resume(key));

      return;
    }

    const entry = entries.get(id);
    if (entry) {
      entry.paused = false;
      startLife(id);
    }
  };

  /**
   * Shows a loading toast that morphs into the success or error message when
   * the promise settles. Returns the promise.
   */
  const promise = async <T>(
    value: Promise<T> | (() => Promise<T>),
    messages: ToastPromiseMessages<T>
  ): Promise<T> => {
    const id = show("loading", messages.loading);
    let task: Promise<T>;
    try {
      task = typeof value === "function" ? value() : value;
    } catch (error) {
      task = Promise.reject(error);
    }

    void task.then(
      result =>
        update(id, {
          type: "success",
          title:
            typeof messages.success === "function"
              ? messages.success(result)
              : messages.success
        }),
      (error: unknown) =>
        update(id, {
          type: "error",
          title:
            typeof messages.error === "function"
              ? messages.error(error)
              : messages.error
        })
    );

    return task;
  };

  const configure = (config: ToasterConfig) => {
    if (config.held) {
      held = config.held;
    }
    if (config.sound !== undefined) {
      sound = config.sound;
    }
    if (config.volume !== undefined) {
      volume = config.volume;
    }

    // `{ region: undefined }` keeps the current label.
    const labels = config.labels
      ? { ...state.labels, ...definedOnly(config.labels) }
      : state.labels;
    const icons = config.icons
      ? {
          ...state.icons,
          ...Object.fromEntries(
            Object.entries(config.icons).filter(([, paths]) => paths?.length)
          )
        }
      : state.icons;
    const springs = config.springs
      ? {
          enter: { ...state.springs.enter, ...config.springs.enter },
          morph: { ...state.springs.morph, ...config.springs.morph },
          stack: { ...state.springs.stack, ...config.springs.stack }
        }
      : state.springs;

    if (
      (config.position && config.position !== state.position) ||
      ("theme" in config && config.theme !== state.theme) ||
      labels.region !== state.labels.region ||
      labels.dismiss !== state.labels.dismiss ||
      config.icons ||
      config.springs
    ) {
      state = {
        ...state,
        position: config.position ?? state.position,
        theme: "theme" in config ? config.theme : state.theme,
        labels,
        icons,
        springs
      };
      emit();
    }
  };

  return {
    show,
    success: (title: string, opts?: ToastOptions) =>
      show("success", title, opts),
    error: (title: string, opts?: ToastOptions) => show("error", title, opts),
    warning: (title: string, opts?: ToastOptions) =>
      show("warning", title, opts),
    info: (title: string, opts?: ToastOptions) => show("info", title, opts),
    loading: (title: string, opts?: ToastOptions) =>
      show("loading", title, opts),
    promise,
    update,
    act,
    dismiss,
    close,
    pause,
    resume,
    configure,
    subscribe: (subscriber: () => void) => {
      subscribers.add(subscriber);

      return () => {
        subscribers.delete(subscriber);
      };
    },
    getState: () => state
  };
};

export type ToastStore = ReturnType<typeof createToastStore>;

/** The shared toast store that `Toaster` renders. */
export const toast: ToastStore = createToastStore();
