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

// Web-only "fluid" tab indicator, ported from React Bits' GooeyNav
// (https://reactbits.dev/components/gooey-nav). A WebGL2 signed distance field
// renders the active pill, which bursts into droplets that flow to the newly
// selected tab. Each tab's `[data-fluid-overlay]` text copy is clipped to the
// same shape so labels switch to the pill's foreground (e.g. `on-primary`)
// exactly where the pill covers them.

import { useThemeName } from "@tamagui/core";
import type { CSSProperties } from "react";
import { useEffect, useLayoutEffect, useRef } from "react";

/** Set on the canvas to the pill's theme color, so the engine reads it there. */
const PILL_COLOR_VAR = "--tabs-fluid-pill";

const MAX_DROPS = 32;
const MAX_PILLS = 4;
const MARGIN = 72;

const ANIMATION_TIME = 600;
const PARTICLE_COUNT = 15;
const TIME_VARIANCE = 300;
const SPREAD = 56;
const GOOEYNESS = 0.5;
const WOBBLE = 0.5;
const SHADOW = 0.3;
const HOVER_ALPHA = 0.08;

const VERTEX = `#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const FRAGMENT = `#version 300 es
precision highp float;

uniform vec2 uSize;
uniform float uRatio;
uniform vec4 uPills[${MAX_PILLS}];
uniform vec4 uHover;
uniform vec4 uDrops[${MAX_DROPS}];
uniform vec2 uTails[${MAX_DROPS}];
uniform int uCount;
uniform float uSmooth;
uniform vec3 uPill;
uniform vec4 uHoverColor;
uniform float uShadow;

out vec4 outColor;

float sdPill(vec2 p, vec4 box) {
  vec2 extent = max(box.zw, vec2(0.0));
  float r = min(extent.x, extent.y);
  vec2 q = abs(p - box.xy) - extent + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float sdCapsule(vec2 p, vec2 a, vec2 b, float r) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 0.0001), 0.0, 1.0);
  return length(pa - ba * h) - r;
}

float blend(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

float field(vec2 p) {
  float d = 1e5;
  for (int i = 0; i < ${MAX_PILLS}; i++) {
    vec4 pill = uPills[i];
    if (pill.z <= 0.0) continue;
    d = blend(d, sdPill(p, pill), uSmooth);
  }
  for (int i = 0; i < ${MAX_DROPS}; i++) {
    if (i >= uCount) break;
    vec4 drop = uDrops[i];
    if (drop.z <= 0.0) continue;
    float c = sdCapsule(p, drop.xy, drop.xy - uTails[i], drop.z);
    if (c > d + uSmooth) continue;
    d = blend(d, c, uSmooth);
  }
  return d;
}

void main() {
  vec2 p = vec2(gl_FragCoord.x, uSize.y * uRatio - gl_FragCoord.y) / uRatio;
  float d = field(p);
  float aa = max(fwidth(d), 0.35);
  float body = clamp(0.5 - d / aa, 0.0, 1.0);

  vec2 grad = vec2(dFdx(d), -dFdy(d));
  vec2 n = length(grad) > 0.0001 ? normalize(grad) : vec2(0.0, 1.0);
  float rim = (1.0 - smoothstep(0.0, 1.6, -d)) * max(0.0, -n.y) * 0.3;
  vec3 fill = mix(uPill, vec3(1.0), rim) * (1.0 - 0.06 * max(0.0, n.y) * (1.0 - smoothstep(0.0, 6.0, -d)));

  float lifted = field(p - vec2(0.0, 3.0));
  float shadow = (1.0 - smoothstep(-3.0, 9.0, lifted)) * uShadow * (1.0 - body);

  float hover = clamp(0.5 - sdPill(p, uHover) / aa, 0.0, 1.0) * uHoverColor.a;

  vec4 color = vec4(0.0, 0.0, 0.0, shadow);
  color = vec4(uHoverColor.rgb * hover, hover) + color * (1.0 - hover);
  color = vec4(fill * body, body) + color * (1.0 - body);
  outColor = color;
}
`;

const UNIFORMS = [
  "uSize",
  "uRatio",
  "uPills",
  "uHover",
  "uDrops",
  "uTails",
  "uCount",
  "uSmooth",
  "uPill",
  "uHoverColor",
  "uShadow"
] as const;

interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Box {
  cx: number;
  cy: number;
  hw: number;
  hh: number;
}

interface Blob {
  x: number;
  y: number;
  r: number;
  tx: number;
  ty: number;
}

interface PillState {
  mass: number;
  scale: number;
  velocity: number;
  outgoing: number;
}

interface Drop {
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
  size: number;
  given: number;
  source: number;
  index: number;
  leave: number;
  start: number;
  duration: number;
  path: number[];
  emerged: number;
  absorbed: number;
  state: "waiting" | "flying" | "absorbing";
}

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

const travelEase = (t: number) => {
  const x = clamp01(t);

  return x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2;
};

const bezier = (a: number, b: number, c: number, d: number, t: number) => {
  const u = 1 - t;

  return u * u * u * a + 3 * u * u * t * b + 3 * u * t * t * c + t * t * t * d;
};

const pillPath = (x: number, y: number, w: number, h: number) => {
  if (w <= 0.5 || h <= 0.5) return "";
  const r = Math.min(w, h) / 2;

  return `M${x + r},${y}H${x + w - r}A${r},${r} 0 0 1 ${x + w},${y + r}V${y + h - r}A${r},${r} 0 0 1 ${x + w - r},${y + h}H${x + r}A${r},${r} 0 0 1 ${x},${y + h - r}V${y + r}A${r},${r} 0 0 1 ${x + r},${y}Z`;
};

let probe: CanvasRenderingContext2D | null | undefined;

/** Resolves a theme variable (any CSS color syntax, e.g. `oklch()`) to sRGB. */
const resolveColor = (element: Element, name: string): number[] => {
  probe ??= document
    .createElement("canvas")
    .getContext("2d", { willReadFrequently: true });
  const value = getComputedStyle(element).getPropertyValue(name).trim();
  if (!probe || !value) return [1, 1, 1];
  probe.clearRect(0, 0, 1, 1);
  probe.fillStyle = "#fff";
  probe.fillStyle = value;
  probe.fillRect(0, 0, 1, 1);
  const [r = 255, g = 255, b = 255] = probe.getImageData(0, 0, 1, 1).data;

  return [r / 255, g / 255, b / 255];
};

const build = (gl: WebGL2RenderingContext) => {
  const program = gl.createProgram();
  for (const [type, source] of [
    [gl.VERTEX_SHADER, VERTEX],
    [gl.FRAGMENT_SHADER, FRAGMENT]
  ] as const) {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    gl.attachShader(program, shader);
  }
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  const uniforms = Object.fromEntries(
    UNIFORMS.map(name => [name, gl.getUniformLocation(program, name)])
  ) as Record<(typeof UNIFORMS)[number], WebGLUniformLocation | null>;
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW
  );
  return {
    program,
    uniforms,
    buffer,
    position: gl.getAttribLocation(program, "aPosition")
  };
};

const createEngine = (canvas: HTMLCanvasElement, fallback: HTMLElement) => {
  const stage = canvas.parentElement as HTMLElement;
  const list = stage.querySelector<HTMLElement>('[role="tablist"]') ?? stage;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const gl = canvas.getContext("webgl2", {
    alpha: true,
    premultipliedAlpha: true,
    antialias: false
  });
  const pipeline = gl ? build(gl) : null;
  fallback.style.display = pipeline ? "none" : "block";
  canvas.style.display = pipeline ? "block" : "none";

  const view = { width: 0, height: 0 };
  let tabs: HTMLElement[] = [];
  let rects: Rect[] = [];
  let overlays: { element: HTMLElement; rect: Rect }[] = [];
  let pillRgb = [1, 1, 1];
  let target = -1;
  const pills = new Map<number, PillState>();
  const drops: Drop[] = [];
  const hover = { x: 0, y: 0, w: 0, h: 0, alpha: 0, index: -1 };
  const pillData = new Float32Array(MAX_PILLS * 4);
  const dropData = new Float32Array(MAX_DROPS * 4);
  const tailData = new Float32Array(MAX_DROPS * 2);
  let raf = 0;
  let last = 0;
  let disposed = false;

  const measure = () => {
    const outer = stage.getBoundingClientRect();
    // The canvas is positioned against the stage's padding box.
    const box = {
      left: outer.left + stage.clientLeft,
      top: outer.top + stage.clientTop
    };
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    view.width = stage.clientWidth;
    view.height = stage.clientHeight;
    const outerWidth = view.width + MARGIN * 2;
    const outerHeight = view.height + MARGIN * 2;
    canvas.style.width = `${outerWidth}px`;
    canvas.style.height = `${outerHeight}px`;
    const width = Math.max(1, Math.round(outerWidth * ratio));
    const height = Math.max(1, Math.round(outerHeight * ratio));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    const local = (element: Element): Rect => {
      const rect = element.getBoundingClientRect();

      return {
        x: rect.left - box.left,
        y: rect.top - box.top,
        w: rect.width,
        h: rect.height
      };
    };
    tabs = Array.from(list.querySelectorAll<HTMLElement>('[role="tab"]'));
    rects = tabs.map(local);
    overlays = tabs.flatMap(tab => {
      const element = tab.querySelector<HTMLElement>("[data-fluid-overlay]");

      return element ? [{ element, rect: local(element) }] : [];
    });
    pillRgb = resolveColor(canvas, PILL_COLOR_VAR);
  };

  const trace = (boxes: Box[], blobs: Blob[], smooth: number, region: Rect) => {
    const field = (x: number, y: number) => {
      let d = 1e5;
      const merge = (value: number) => {
        const h = clamp01(0.5 + (0.5 * (value - d)) / smooth);
        d = value + (d - value) * h - smooth * h * (1 - h);
      };
      for (const box of boxes) {
        const r = Math.min(box.hw, box.hh);
        const qx = Math.abs(x - box.cx) - box.hw + r;
        const qy = Math.abs(y - box.cy) - box.hh + r;
        merge(
          Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) +
            Math.min(Math.max(qx, qy), 0) -
            r
        );
      }
      for (const blob of blobs) {
        const px = x - blob.x;
        const py = y - blob.y;
        const bx = -blob.tx;
        const by = -blob.ty;
        const span = bx * bx + by * by;
        const h = span > 0.0001 ? clamp01((px * bx + py * by) / span) : 0;
        const value = Math.hypot(px - bx * h, py - by * h) - blob.r;
        if (value > d + smooth) continue;
        merge(value);
      }
      return d;
    };
    // Scanline the region into 1px-tall runs, in the region's own coordinates.
    const step = 2;
    const parts: string[] = [];
    for (let y = 0; y < region.h; y += 1) {
      const cy = region.y + y + 0.5;
      let previous = field(region.x, cy);
      let start: number | null = previous < 0 ? 0 : null;
      for (let x = step; x <= region.w + step; x += step) {
        const value = field(region.x + Math.min(x, region.w), cy);
        if (previous < 0 !== value < 0) {
          const cross = x - step + (step * previous) / (previous - value);
          if (value < 0) start = cross;
          else if (start !== null) {
            parts.push(
              `M${start.toFixed(1)},${y}H${cross.toFixed(1)}V${y + 1}H${start.toFixed(1)}Z`
            );
            start = null;
          }
        }
        previous = value;
      }
      if (start !== null) {
        parts.push(
          `M${start.toFixed(1)},${y}H${region.w}V${y + 1}H${start.toFixed(1)}Z`
        );
      }
    }
    return parts.join("");
  };

  const pill = (index: number) => {
    let state = pills.get(index);
    if (!state) {
      state = { mass: 0, scale: 0, velocity: 0, outgoing: 0 };
      pills.set(index, state);
    }
    return state;
  };

  const shape = (index: number, amount: number): Rect | null => {
    const rect = rects[index];
    if (!rect || amount <= 0.002) return null;
    const h =
      rect.h * Math.min(1.08, 0.42 + 0.58 * Math.sqrt(Math.max(0, amount)));
    const w = Math.max(h, rect.w * Math.max(0, amount) ** 0.75);

    return {
      x: rect.x + rect.w / 2 - w / 2,
      y: rect.y + rect.h / 2 - h / 2,
      w,
      h
    };
  };

  const plan = (drop: Drop, index: number, now: number, fresh: boolean) => {
    const rect = rects[index];
    if (!rect) return;
    const ex = rect.x + rect.w / 2 + (Math.random() - 0.5) * rect.w * 0.45;
    const ey = rect.y + rect.h / 2 + (Math.random() - 0.5) * rect.h * 0.2;
    const base = ANIMATION_TIME / 1000;
    const variance = (Math.random() - 0.5) * (TIME_VARIANCE / 1000);
    const duration = Math.max(
      0.15,
      base * (0.62 + Math.random() * 0.32) + variance * 0.6
    );
    const out = Math.random() * Math.PI * 2;
    const into = Math.random() * Math.PI * 2;
    const burst = SPREAD * (0.7 + Math.random() * 0.6);
    const swing = SPREAD * (0.55 + Math.random() * 0.55);
    const carry = Math.min(duration / 3, 0.12);
    drop.index = index;
    drop.start = now;
    drop.duration = duration;
    drop.path = [
      drop.x,
      drop.y,
      fresh ? drop.x + Math.cos(out) * burst * 1.6 : drop.x + drop.vx * carry,
      fresh ? drop.y + Math.sin(out) * burst * 1.6 : drop.y + drop.vy * carry,
      ex + Math.cos(into) * swing * 1.5,
      ey + Math.sin(into) * swing * 1.5,
      ex,
      ey
    ];
  };

  const emit = (from: number, to: number, now: number) => {
    const source = pills.get(from);
    const rect = rects[from];
    if (!source || !rect || !rects[to]) return;
    const available = source.mass - source.outgoing;
    if (available <= 0.002) return;
    const room = MAX_DROPS - drops.length;
    const count = Math.min(
      room,
      Math.max(1, Math.round(PARTICLE_COUNT * available))
    );
    if (count <= 0) return;
    const spawnWindow = (ANIMATION_TIME / 1000) * 0.16;
    for (let i = 0; i < count; i++) {
      const mass = available / count;
      source.outgoing += mass;
      drops.push({
        x: rect.x + rect.w / 2 + (Math.random() - 0.5) * rect.w * 0.6,
        y: rect.y + rect.h / 2 + (Math.random() - 0.5) * rect.h * 0.3,
        vx: 0,
        vy: 0,
        mass,
        size: 0.8 + Math.random() * 0.4,
        given: 0,
        source: from,
        index: to,
        leave: now + Math.random() * spawnWindow * 1000,
        start: now,
        duration: 0,
        path: [],
        emerged: 0,
        absorbed: 0,
        state: "waiting"
      });
    }
  };

  const render = () => {
    const height = rects[target]?.h ?? rects[0]?.h ?? 36;
    const smooth = height * (0.18 + 0.5 * GOOEYNESS);
    const boxes: Box[] = [];
    const blobs: Blob[] = [];
    for (const [index, state] of pills) {
      const box = shape(index, state.scale);
      if (box) {
        boxes.push({
          cx: box.x + box.w / 2,
          cy: box.y + box.h / 2,
          hw: box.w / 2,
          hh: box.h / 2
        });
      }
    }
    for (const drop of drops) {
      if (drop.state === "waiting") continue;
      const radius =
        0.26 * height * drop.size * Math.min(drop.emerged, 1 - drop.absorbed);
      if (radius <= 0.05) continue;
      const speed = Math.hypot(drop.vx, drop.vy);
      const length = Math.min(radius * 1.1, speed * 0.018);
      blobs.push({
        x: drop.x,
        y: drop.y,
        r: radius,
        tx: speed > 0.01 ? (drop.vx / speed) * length : 0,
        ty: speed > 0.01 ? (drop.vy / speed) * length : 0
      });
    }

    const settled = boxes.length === 1 && !blobs.length ? boxes[0] : null;
    for (const { element, rect } of overlays) {
      const path = settled
        ? pillPath(
            settled.cx - settled.hw - rect.x,
            settled.cy - settled.hh - rect.y,
            settled.hw * 2,
            settled.hh * 2
          )
        : trace(boxes, blobs, smooth, rect);
      element.style.clipPath = `path('${path || "M0,0Z"}')`;
    }

    if (!pipeline || !gl) {
      const box = shape(target, 1);
      if (box) {
        fallback.style.transform = `translate(${box.x.toFixed(2)}px, ${box.y.toFixed(2)}px)`;
        fallback.style.width = `${box.w}px`;
        fallback.style.height = `${box.h}px`;
      }
      fallback.style.opacity = box ? "1" : "0";
      return;
    }

    let slot = 0;
    for (const box of boxes) {
      if (slot >= MAX_PILLS) break;
      pillData.set(
        [box.cx + MARGIN, box.cy + MARGIN, box.hw, box.hh],
        slot * 4
      );
      slot += 1;
    }
    pillData.fill(0, slot * 4);
    let count = 0;
    for (const blob of blobs) {
      if (count >= MAX_DROPS) break;
      dropData.set([blob.x + MARGIN, blob.y + MARGIN, blob.r, 0], count * 4);
      tailData.set([blob.tx, blob.ty], count * 2);
      count += 1;
    }

    const { program, uniforms, buffer, position } = pipeline;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    gl.uniform2f(
      uniforms.uSize,
      view.width + MARGIN * 2,
      view.height + MARGIN * 2
    );
    gl.uniform1f(
      uniforms.uRatio,
      canvas.width / Math.max(1, view.width + MARGIN * 2)
    );
    gl.uniform4fv(uniforms.uPills, pillData);
    gl.uniform4f(
      uniforms.uHover,
      hover.x + MARGIN,
      hover.y + MARGIN,
      hover.w / 2,
      hover.h / 2
    );
    gl.uniform4fv(uniforms.uDrops, dropData);
    gl.uniform2fv(uniforms.uTails, tailData);
    gl.uniform1i(uniforms.uCount, count);
    gl.uniform1f(uniforms.uSmooth, smooth);
    gl.uniform3f(uniforms.uPill, pillRgb[0]!, pillRgb[1]!, pillRgb[2]!);
    gl.uniform4f(
      uniforms.uHoverColor,
      pillRgb[0]!,
      pillRgb[1]!,
      pillRgb[2]!,
      HOVER_ALPHA * hover.alpha
    );
    gl.uniform1f(uniforms.uShadow, SHADOW);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  const frame = (now: number) => {
    raf = 0;
    const dt = Math.min(0.05, (now - last) / 1000 || 0);
    last = now;
    const emergeTime = 0.09;
    const absorbTime = 0.12;

    for (let i = drops.length - 1; i >= 0; i--) {
      const drop = drops[i]!;
      if (drop.state === "waiting") {
        if (now < drop.leave) continue;
        drop.state = "flying";
        plan(drop, drop.index, now, true);
      }
      if (drop.state === "flying") {
        drop.emerged = Math.min(1, drop.emerged + dt / emergeTime);
        const source = pills.get(drop.source);
        if (source && drop.given < drop.mass) {
          const step = Math.min(
            drop.mass * (dt / emergeTime),
            drop.mass - drop.given
          );
          source.mass = Math.max(0, source.mass - step);
          source.outgoing = Math.max(0, source.outgoing - step);
          drop.given += step;
        }
        const t = clamp01((now - drop.start) / 1000 / drop.duration);
        const eased = travelEase(t);
        const [x0, y0, x1, y1, x2, y2, x3, y3] = drop.path as [
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number
        ];
        const x = bezier(x0, x1, x2, x3, eased);
        const y = bezier(y0, y1, y2, y3, eased);
        if (dt > 0) {
          drop.vx = (x - drop.x) / dt;
          drop.vy = (y - drop.y) / dt;
        }
        drop.x = x;
        drop.y = y;
        if (t >= 1) drop.state = "absorbing";
      }
      if (drop.state === "absorbing") {
        const step = Math.min(1 - drop.absorbed, dt / absorbTime);
        drop.absorbed += step;
        drop.vx *= 0.8;
        drop.vy *= 0.8;
        const host = pill(drop.index);
        host.mass = Math.min(1, host.mass + drop.mass * step);
        if (drop.absorbed >= 1) drops.splice(i, 1);
      }
    }

    // Damped spring from each pill's scale to its mass gives the wobble.
    const zeta = reduced ? 1 : 1 - 0.72 * WOBBLE;
    const omega = 26;
    const steps = Math.max(1, Math.ceil(dt / (1 / 240)));
    const h = dt / steps;
    for (const [index, state] of pills) {
      for (let n = 0; n < steps; n++) {
        state.velocity +=
          (omega * omega * (state.mass - state.scale) -
            2 * zeta * omega * state.velocity) *
          h;
        state.scale += state.velocity * h;
      }
      if (
        index !== target &&
        state.mass <= 0.002 &&
        state.outgoing <= 0.002 &&
        Math.abs(state.scale) < 0.004
      ) {
        pills.delete(index);
      }
    }

    const hoverRect = rects[hover.index];
    if (hoverRect) {
      const k = 1 - Math.exp(-dt / 0.06);
      hover.x += (hoverRect.x + hoverRect.w / 2 - hover.x) * k;
      hover.y += (hoverRect.y + hoverRect.h / 2 - hover.y) * k;
      hover.w += (hoverRect.w - hover.w) * k;
      hover.h += (hoverRect.h - hover.h) * k;
    }
    const hoverGoal = hover.index >= 0 && hover.index !== target ? 1 : 0;
    hover.alpha += (hoverGoal - hover.alpha) * (1 - Math.exp(-dt / 0.08));

    render();

    const host = pills.get(target);
    const resting =
      drops.length === 0 &&
      pills.size === 1 &&
      host &&
      Math.abs(host.mass - host.scale) < 0.0008 &&
      Math.abs(host.velocity) < 0.004;
    const hovering =
      Math.abs(hoverGoal - hover.alpha) > 0.003 ||
      (hoverRect &&
        Math.abs(hoverRect.x + hoverRect.w / 2 - hover.x) +
          Math.abs(hoverRect.w - hover.w) >
          0.1);
    if (!resting || hovering) {
      raf = requestAnimationFrame(frame);
    } else {
      host.mass = 1;
      host.scale = 1;
      host.velocity = 0;
      hover.alpha = hoverGoal;
      render();
    }
  };

  const wake = () => {
    if (raf || disposed) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };

  const settle = (index: number) => {
    pills.clear();
    drops.length = 0;
    target = index;
    if (index >= 0) {
      const state = pill(index);
      state.mass = 1;
      state.scale = 1;
      state.velocity = 0;
    }
    render();
  };

  const go = (index: number) => {
    if (index === target) return;
    if (!rects[index] || reduced || target < 0) {
      settle(index);
      return;
    }
    const now = performance.now();
    target = index;
    pill(index);
    for (const drop of drops) {
      drop.index = index;
      if (drop.state === "flying") plan(drop, index, now, false);
      if (drop.state === "absorbing") {
        drop.state = "flying";
        drop.mass *= 1 - drop.absorbed;
        drop.absorbed = 0;
        plan(drop, index, now, false);
      }
    }
    for (const from of [...pills.keys()]) {
      if (from !== index) emit(from, index, now);
    }
    wake();
  };

  const onOver = (event: PointerEvent) => {
    const tab = (event.target as Element).closest('[role="tab"]');
    const index = tab ? tabs.indexOf(tab as HTMLElement) : -1;
    const rect = rects[index];
    if (!rect) return;
    if (hover.alpha < 0.01) {
      hover.x = rect.x + rect.w / 2;
      hover.y = rect.y + rect.h / 2;
      hover.w = rect.w;
      hover.h = rect.h;
    }
    hover.index = index;
    wake();
  };

  const onLeave = () => {
    hover.index = -1;
    wake();
  };

  const remeasure = () => {
    measure();
    if (drops.length) render();
    else settle(target);
  };

  const resizeObserver = new ResizeObserver(remeasure);
  resizeObserver.observe(stage);
  resizeObserver.observe(list);
  list.addEventListener("pointerover", onOver);
  list.addEventListener("pointerleave", onLeave);
  void document.fonts?.ready.then(() => {
    if (!disposed) remeasure();
  });

  return {
    /** Re-reads the tabs and theme color, then flows the pill to the selected tab. */
    sync: () => {
      measure();
      const index = tabs.findIndex(
        tab => tab.getAttribute("aria-selected") === "true"
      );
      if (index === target) render();
      else go(index);
    },
    dispose: () => {
      disposed = true;
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      list.removeEventListener("pointerover", onOver);
      list.removeEventListener("pointerleave", onLeave);
      if (gl && pipeline) {
        gl.deleteBuffer(pipeline.buffer);
        gl.deleteProgram(pipeline.program);
      }
    }
  };
};

export interface TabsFluidIndicatorProps {
  /** The selected tab value; changing it flows the pill to that tab. */
  selected: string;

  /** The number of registered tabs, so added or removed tabs are re-measured. */
  count: number;

  /**
   * The theme color token of the pill.
   *
   * @defaultValue "primary"
   */
  color?: string;
}

/**
 * Renders the fluid pill behind the tab list. Must be a direct child of the
 * positioned element that contains the `[role="tablist"]`.
 */
export const TabsFluidIndicator = ({
  selected,
  count,
  color = "primary"
}: TabsFluidIndicatorProps) => {
  const themeName = useThemeName();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fallbackRef = useRef<HTMLSpanElement>(null);
  const engineRef = useRef<ReturnType<typeof createEngine>>(null);

  useLayoutEffect(() => {
    if (!canvasRef.current || !fallbackRef.current) return;
    const engine = createEngine(canvasRef.current, fallbackRef.current);
    engineRef.current = engine;
    return () => {
      engine.dispose();
      engineRef.current = null;
    };
  }, []);

  useEffect(() => {
    engineRef.current?.sync();
  }, [selected, count, themeName, color]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={
          {
            position: "absolute",
            top: -MARGIN,
            left: -MARGIN,
            pointerEvents: "none",
            [PILL_COLOR_VAR]: `var(--${color})`
          } as CSSProperties
        }
      />
      <span
        ref={fallbackRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "none",
          borderRadius: 999,
          background: `var(--${color})`,
          pointerEvents: "none"
        }}
      />
    </>
  );
};
