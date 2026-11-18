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

import type { ViewProps } from "@tamagui/core";
import { useTheme, useThemeName, View } from "@tamagui/core";
import type { ComponentType, FC, ReactNode } from "react";
import {
  memo,
  useEffect,
  useId,
  useMemo,
  useReducer,
  useRef,
  useState
} from "react";
import { AccessibilityInfo, Platform } from "react-native";
import {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Mask,
  Path,
  Polygon,
  Polyline,
  Rect,
  Stop,
  Svg
} from "react-native-svg";
import type { IllustrationDefinition, PaletteKey, Shape, Vec2 } from "./engine";
import * as HL from "./engine";

export { HL };
export type { IllustrationDefinition, PaletteKey };

export type IllustrationProps = Omit<ViewProps, "children"> & {
  /**
   * How strongly the illustration answers, from 0 to 1: the slider of the
   * bench, mapped onto the illustration's own `range`.
   *
   * @defaultValue 0.5
   */
  intensity?: number;
  /**
   * Answer the pointer and move. `false` draws the rest pose, still.
   *
   * @defaultValue true
   */
  animated?: boolean;
  /** Walk the illustration's tour with an unseen pointer until a real one arrives. */
  play?: boolean;
  /** The accessible label. Defaults to what the illustration `means`. */
  label?: string;
  /** Hears the read-out: what is under the pointer, or "rest". */
  onRead?: (text: string) => void;
  /**
   * The stroke width in pixels. Strokes do not scale with the drawing.
   *
   * @defaultValue 0.9
   */
  strokeWidth?: number;
  /**
   * Overrides one of the palette's five colours with a theme token name
   * (`"surface"`) or a colour. Set `plate` to the surface the illustration
   * sits on, so its solids are filled with it.
   */
  palette?: Partial<Record<PaletteKey, string>>;
};

export type IllustrationComponent = FC<IllustrationProps> & {
  definition: IllustrationDefinition;
};

const ELEMENTS: Record<string, ComponentType<Record<string, unknown>>> = {
  circle: Circle,
  clipPath: ClipPath,
  defs: Defs,
  ellipse: Ellipse,
  g: G,
  line: Line,
  linearGradient: LinearGradient,
  mask: Mask,
  path: Path,
  polygon: Polygon,
  polyline: Polyline,
  rect: Rect,
  stop: Stop
};

const WEB = Platform.OS === "web";
/** The stroke and fill fade when a class changes; native snaps. */
const FADE = WEB ? { style: { transition: HL.TRANSITION } } : {};

interface Look {
  colors: Record<PaletteKey, string>;
  strokeWidth: number;
}

/** `stop-color` → `stopColor`: react-native-svg takes camelCase props. */
const camel = (name: string) =>
  name.replace(/-(\w)/g, (_, c: string) => c.toUpperCase());

const NodeView = memo(
  function NodeView({
    node,
    look,
    ghost
  }: {
    node: Shape;
    /** Read by the memo comparison: it changes when the node or anything under it does. */
    // eslint-disable-next-line react/no-unused-props
    version: number;
    look: Look;
    ghost: boolean;
  }): ReactNode {
    const Element = ELEMENTS[node.tag];
    if (!Element) return null;
    const props: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(node.attrs)) {
      if (k !== "class") props[camel(k)] = v;
    }
    const inGhost = ghost || node.classList.contains("ghost");
    const p = HL.paint(node.tag, node.attrs.class, inGhost, look.colors);
    const painted = p && {
      ...p,
      ...FADE,
      strokeWidth: look.strokeWidth,
      vectorEffect: "non-scaling-stroke",
      strokeLinejoin: "round",
      strokeLinecap: "round"
    };

    return (
      <Element {...props} {...painted}>
        {node.children.map(c => (
          <NodeView
            key={c.id}
            node={c}
            version={c.version}
            look={look}
            ghost={inGhost}
          />
        ))}
      </Element>
    );
  },
  (a, b) =>
    a.node === b.node &&
    a.version === b.version &&
    a.look === b.look &&
    a.ghost === b.ghost
);

interface WebPointer {
  clientX: number;
  clientY: number;
  pointerType: string;
  currentTarget: {
    getBoundingClientRect: () => {
      left: number;
      top: number;
      width: number;
      height: number;
    };
  };
}
interface NativeTouch {
  nativeEvent: { locationX: number; locationY: number };
}

/**
 * Creates a themed Tamagui component from an illustration: the declaration an
 * illustration file makes with `illustration({ … })`.
 *
 * @remarks
 * The illustration draws into the engine's node tree, and react-native-svg
 * renders it, so it runs the same on web and React Native, and on the server
 * it renders its rest pose. Its five colours come from the Cyclone UI theme
 * (`HL.PALETTE_TOKENS`). Motion runs on one shared frame loop that sleeps when
 * nothing moves, when the illustration is off screen (web), and lands at once
 * when the user prefers reduced motion.
 *
 * Built on the Hairline engine (https://github.com/lucasmarkes/hairline) by
 * Lucas Marques, MIT License.
 */
export function createIllustration(
  definition: IllustrationDefinition
): IllustrationComponent {
  const Illustration = ({
    intensity = 0.5,
    animated = true,
    play = false,
    label,
    onRead,
    strokeWidth = HL.STROKE_WIDTH,
    palette,
    ...props
  }: IllustrationProps) => {
    const value = HL.level(definition.range, intensity);
    const prefix = `il${useId().replace(/[^\w-]/g, "")}`;
    const onReadRef = useRef(onRead);
    useEffect(() => {
      onReadRef.current = onRead;
    });
    // Mounted once, with no page: on the server this draws the rest pose.
    // The read-out reaches onRead only once mounted: never during a render.
    const mountedRef = useRef(false);
    const [run] = useState(() =>
      HL.mountIllustration(definition, value, {
        idPrefix: prefix,
        onRead: text => {
          if (mountedRef.current) onReadRef.current?.(text);
        }
      })
    );
    useEffect(() => {
      mountedRef.current = true;
      onReadRef.current?.(run.read());

      return () => {
        mountedRef.current = false;
      };
    }, [run]);
    const [, redraw] = useReducer((n: number) => n + 1, 0);
    const hostRef = useRef<unknown>(null);
    const sizeRef = useRef({ width: 1, height: 1 });

    // One render per frame, however many nodes the frame changed.
    useEffect(() => {
      let queued = false;

      return HL.watch(run.svg, () => {
        if (queued) return;
        queued = true;
        queueMicrotask(() => {
          queued = false;
          redraw();
        });
      });
    }, [run]);

    useEffect(() => run.set(value), [run, value]);

    useEffect(() => {
      if (!animated) return undefined;
      HL.start(run.stage);

      return () => HL.stop(run.stage);
    }, [run, animated]);

    useEffect(() => {
      if (!animated || !play) return undefined;

      return HL.tour(run.stage, definition.tour ?? HL.LAP).stop;
    }, [run, animated, play]);

    useEffect(() => {
      let on = true;
      AccessibilityInfo.isReduceMotionEnabled().then(
        reduce => on && HL.reduceMotion(reduce),
        () => undefined
      );
      const sub = AccessibilityInfo.addEventListener(
        "reduceMotionChanged",
        HL.reduceMotion
      );

      return () => {
        on = false;
        sub?.remove();
      };
    }, []);

    // Off screen, the illustration sleeps (web).
    useEffect(() => {
      const IO = (
        globalThis as {
          IntersectionObserver?: new (
            cb: (entries: { isIntersecting: boolean }[]) => void,
            options: { rootMargin: string }
          ) => { observe: (el: unknown) => void; disconnect: () => void };
        }
      ).IntersectionObserver;
      if (!WEB || !animated || !IO || !hostRef.current) return undefined;
      const io = new IO(
        entries => {
          for (const e of entries) HL.show(run.stage, e.isIntersecting);
        },
        { rootMargin: "80px" }
      );
      io.observe(hostRef.current);

      return () => {
        io.disconnect();
        HL.show(run.stage, true);
      };
    }, [run, animated]);

    const theme = useTheme() as unknown as Record<
      string,
      { get: () => string } | undefined
    >;
    const mode = useThemeName().startsWith("light") ? "light" : "dark";
    const colors = Object.fromEntries(
      HL.PALETTE_KEYS.map(k => {
        const v = palette?.[k] ?? HL.PALETTE_TOKENS[mode][k];

        return [k, theme[v.replace(/^\$/, "")]?.get() ?? v];
      })
    ) as Record<PaletteKey, string>;
    const { plate, hi, edge, mid, lo } = colors;
    const look = useMemo<Look>(
      () => ({ colors: { plate, hi, edge, mid, lo }, strokeWidth }),
      [plate, hi, edge, mid, lo, strokeWidth]
    );

    const feed = (
      type: "move" | "down" | "leave",
      point: Vec2 | null,
      kind: string
    ) => HL.feed(run.stage, type, point, kind);
    const web = (e: WebPointer): Vec2 => {
      const r = e.currentTarget.getBoundingClientRect();

      return [
        ((e.clientX - r.left) / r.width) * 400,
        ((e.clientY - r.top) / r.height) * 320
      ];
    };
    const native = (e: NativeTouch): Vec2 => [
      (e.nativeEvent.locationX / sizeRef.current.width) * 400,
      (e.nativeEvent.locationY / sizeRef.current.height) * 320
    ];
    const handlers = !animated
      ? {}
      : WEB
        ? {
            onPointerMove: (e: WebPointer) =>
              feed("move", web(e), e.pointerType),
            onPointerDown: (e: WebPointer) =>
              feed("down", web(e), e.pointerType),
            onPointerUp: (e: WebPointer) =>
              e.pointerType !== "mouse" && feed("leave", null, e.pointerType),
            onPointerCancel: (e: WebPointer) =>
              feed("leave", null, e.pointerType),
            onMouseLeave: () => feed("leave", null, "mouse")
          }
        : {
            onStartShouldSetResponder: () => true,
            onResponderTerminationRequest: () => true,
            onResponderGrant: (e: NativeTouch) =>
              feed("down", native(e), "touch"),
            onResponderMove: (e: NativeTouch) =>
              feed("move", native(e), "touch"),
            onResponderRelease: () => feed("leave", null, "touch"),
            onResponderTerminate: () => feed("leave", null, "touch")
          };

    return (
      <View
        ref={hostRef as never}
        role="img"
        aria-label={label ?? definition.means}
        position="relative"
        width="100%"
        aspectRatio={5 / 4}
        userSelect="none"
        onLayout={e => {
          sizeRef.current = e.nativeEvent.layout;
        }}
        {...(WEB ? { style: { touchAction: "pan-y" } } : {})}
        {...(handlers as object)}
        {...props}>
        <Svg
          viewBox="0 0 400 320"
          width="100%"
          height="100%"
          pointerEvents="none"
          style={{ position: "absolute", top: 0, left: 0 }}>
          {run.svg.children.map(c => (
            <NodeView
              key={c.id}
              node={c}
              version={c.version}
              look={look}
              ghost={false}
            />
          ))}
        </Svg>
      </View>
    );
  };

  Illustration.displayName = `${definition.name
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join("")}Illustration`;

  return Object.assign(Illustration, { definition });
}
