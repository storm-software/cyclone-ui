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

// cspell:ignore glsl highp fract

const TOPOGRAPHY_ASPECT = 3840 / 2160;
/** In viewport heights. */
const BRUSH_RADIUS = 0.06;
/** Seconds for a full coat of paint to dry back to grey. */
const PAINT_FADE = 3;

// One triangle that covers the whole clip space.
const VERTEX = /* glsl */ `
  attribute vec2 position;
  varying vec2 vUv;

  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const NOISE = /* glsl */ `
  precision highp float;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 cell = floor(p), f = fract(p);
    vec2 s = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(cell), hash(cell + vec2(1.0, 0.0)), s.x),
               mix(hash(cell + vec2(0.0, 1.0)), hash(cell + 1.0), s.x), s.y);
  }
`;

// Ping-pong pass over the screen: last frame's paint, dried a little, plus
// the brush dragged from where it was to where it is now.
const PAINT = /* glsl */ `
  ${NOISE}
  uniform sampler2D uPrev;
  uniform vec2 uFrom;
  uniform vec2 uTo;
  uniform float uAspect;
  uniform float uRadius;
  uniform float uInk;
  uniform float uDry;
  varying vec2 vUv;

  void main() {
    float paint = max(texture2D(uPrev, vUv).r - uDry, 0.0);

    // Distance to the stroke segment, in viewport heights.
    vec2 p = vUv * vec2(uAspect, 1.0);
    vec2 stroke = uTo - uFrom;
    float len = length(stroke);
    vec2 dir = len > 1e-5 ? stroke / len : vec2(1.0, 0.0);
    vec2 rel = p - uFrom;
    float d = length(rel - dir * clamp(dot(rel, dir), 0.0, len));

    // A quick flick lays a thinner, drier line; the rim is always ragged.
    float speed = smoothstep(0.0, 0.1, len);
    float radius = uRadius * mix(1.0, 0.7, speed) * (0.8 + 0.4 * noise(p * 50.0));
    float body = 1.0 - smoothstep(radius * 0.6, radius, d);

    // Bristles sit at fixed offsets across the brush, so streaks follow it.
    float across = dot(rel, vec2(-dir.y, dir.x)) / uRadius;
    float bristles = smoothstep(0.2, 0.7, noise(vec2(across * 8.0, 0.0)));
    float stamp = uInk * body * mix(1.0, bristles, 0.3 + 0.5 * speed);

    // Coats layer: each pass covers part of what is still bare.
    gl_FragColor = vec4(1.0 - (1.0 - paint) * (1.0 - stamp), 0.0, 0.0, 1.0);
  }
`;

// Slow value noise warps the texture lookup, so the contour lines bend and
// drift a few pixels rather than the whole map panning.
const FRAGMENT = /* glsl */ `
  ${NOISE}
  uniform sampler2D uMap;
  uniform sampler2D uColor;
  uniform sampler2D uPaint;
  uniform vec2 uCover;
  uniform float uAspect;
  uniform float uInvert;
  uniform float uTime;
  varying vec2 vUv;

  vec3 toLinear(vec3 c) {
    return pow(c, vec3(2.2));
  }

  void main() {
    // Same crop as the CSS "background-size: cover" underneath.
    vec2 uv = (vUv - 0.5) * uCover + 0.5;
    float t = uTime * 0.5;
    vec2 p = uv * vec2(3.0, 1.7);
    vec2 warp = vec2(noise(p + vec2(t, -t * 0.7)),
                     noise(p + vec2(5.2 - t * 0.6, 1.3 + t))) - 0.5;

    // Ease in from the static CSS image, and never pull texels past an edge.
    vec2 edge = smoothstep(0.0, 0.02, uv) * smoothstep(0.0, 0.02, 1.0 - uv);
    float strength = 0.012 * smoothstep(0.0, 4.0, uTime) * edge.x * edge.y;
    vec2 st = uv + warp * strength;

    // Paint dries unevenly: a fixed grain decides where colour holds longest.
    vec2 g = vUv * vec2(uAspect, 1.0);
    float dry = 0.1 + 0.75 * (0.6 * noise(g * 12.0) + 0.4 * noise(g * 40.0));
    float wet = smoothstep(dry - 0.05, dry + 0.05, texture2D(uPaint, vUv).r);

    // The light theme inverts the grey map (in sRGB, like the CSS image
    // underneath); the paint keeps its true colours.
    vec3 map = texture2D(uMap, st).rgb;
    if (uInvert > 0.5) map = 1.0 - map;

    // Pigment pools a little darker at the rim of wet paint.
    vec3 color = toLinear(texture2D(uColor, st).rgb);
    color *= 1.0 - 0.6 * wet * (1.0 - wet);
    gl_FragColor = vec4(pow(mix(toLinear(map), color, wet), vec3(1.0 / 2.2)), 1.0);
  }
`;

export interface Topography {
  /** Re-render the current frame, e.g. after a theme change. */
  draw: () => void;
  stop: () => void;
}

/**
 * A full-screen, gently warping topography the cursor paints colour into.
 *
 * @param canvas - The canvas to render into, laid over the static image.
 * @param src - The grey topography image.
 * @param colorSrc - The same contours in colour, painted in under the cursor.
 * @param isLight - Whether the light theme (an inverted grey map) is active.
 * @returns Controls for the running renderer.
 */
export const startTopography = (
  canvas: HTMLCanvasElement,
  src: string,
  colorSrc: string,
  isLight: () => boolean
): Topography => {
  const gl = canvas.getContext("webgl2", { antialias: false });
  // The static CSS topography remains if WebGL is unavailable.
  if (!gl) return { draw: () => {}, stop: () => {} };

  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  // Pointer in 0..1 canvas space, y up; the brush trails it in aspect space.
  const pointer = { x: 0, y: 0, active: false, restart: true };
  const brush = { x: 0, y: 0 };
  const from = { x: 0, y: 0 };
  const size = { width: 0, height: 0, aspect: 1 };
  let images: HTMLImageElement[] = [];
  let idle = PAINT_FADE;
  let time = 0;
  let frame = 0;
  let previous = 0;
  let stopped = false;

  const program = (fragment: string) => {
    const result = gl.createProgram();
    for (const [type, source] of [
      [gl.VERTEX_SHADER, VERTEX],
      [gl.FRAGMENT_SHADER, fragment]
    ] as const) {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      gl.attachShader(result, shader);
      gl.deleteShader(shader);
    }
    gl.bindAttribLocation(result, 0, "position");
    gl.linkProgram(result);
    return result;
  };
  const texture = (image?: HTMLImageElement) => {
    const result = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, result);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(
      gl.TEXTURE_2D,
      gl.TEXTURE_MIN_FILTER,
      image ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR
    );
    if (image) {
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      // The map is far larger than the canvas; mipmaps keep thin lines smooth.
      gl.generateMipmap(gl.TEXTURE_2D);
    }
    return result;
  };

  // Everything below is lost with the context, so it is rebuilt on restore.
  let scene: {
    main: WebGLProgram;
    paint: WebGLProgram;
    buffer: WebGLBuffer;
    map: WebGLTexture;
    color: WebGLTexture;
    // 8-bit is enough: paint dries linearly, by more than one step per frame.
    targets: { texture: WebGLTexture; buffer: WebGLFramebuffer }[];
  } | null = null;

  const allocate = () => {
    if (!scene || !size.width) return;
    // Half resolution is plenty for soft paint; resizing wipes it.
    for (const target of scene.targets) {
      gl.bindTexture(gl.TEXTURE_2D, target.texture);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        Math.ceil(size.width / 2),
        Math.ceil(size.height / 2),
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        null
      );
    }
  };
  const setup = () => {
    if (images.length < 2 || gl.isContextLost()) return;
    const main = program(FRAGMENT);
    const paint = program(PAINT);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.useProgram(main);
    gl.uniform1i(gl.getUniformLocation(main, "uMap"), 0);
    gl.uniform1i(gl.getUniformLocation(main, "uColor"), 1);
    gl.uniform1i(gl.getUniformLocation(main, "uPaint"), 2);
    scene = {
      main,
      paint,
      buffer,
      map: texture(images[0]),
      color: texture(images[1]),
      targets: [0, 1].map(() => {
        const result = { texture: texture(), buffer: gl.createFramebuffer() };
        gl.bindFramebuffer(gl.FRAMEBUFFER, result.buffer);
        gl.framebufferTexture2D(
          gl.FRAMEBUFFER,
          gl.COLOR_ATTACHMENT0,
          gl.TEXTURE_2D,
          result.texture,
          0
        );
        return result;
      })
    };
    allocate();
  };

  // Until the images arrive the canvas stays clear over the CSS image.
  const draw = () => {
    if (!scene || !size.width || gl.isContextLost()) return;
    const { main, map, color, targets } = scene;
    const uniform = (name: string) => gl.getUniformLocation(main, name);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.useProgram(main);
    for (const [unit, bound] of [map, color, targets[0]!.texture].entries()) {
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, bound);
    }
    gl.uniform2f(
      uniform("uCover"),
      Math.min(size.aspect / TOPOGRAPHY_ASPECT, 1),
      Math.min(TOPOGRAPHY_ASPECT / size.aspect, 1)
    );
    gl.uniform1f(uniform("uAspect"), size.aspect);
    // Checked per render, so a theme toggle applies without a restart.
    gl.uniform1f(uniform("uInvert"), isLight() ? 1 : 0);
    gl.uniform1f(uniform("uTime"), time);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };
  const paint = (dt: number) => {
    if (!scene || !size.width) return;
    const targetX = pointer.x * size.aspect;
    const targetY = pointer.y;
    if (pointer.restart) {
      brush.x = targetX;
      brush.y = targetY;
      pointer.restart = false;
    }
    from.x = brush.x;
    from.y = brush.y;
    // The brush drags a beat behind the hand, which also rounds off corners.
    const follow = 1 - Math.exp(-dt * 12);
    brush.x += (targetX - brush.x) * follow;
    brush.y += (targetY - brush.y) * follow;

    const moving =
      pointer.active && Math.hypot(brush.x - from.x, brush.y - from.y) > 1e-4;
    idle = moving ? 0 : idle + dt;
    if (idle > PAINT_FADE) return; // Already bone dry.

    const { paint: program, targets } = scene;
    const uniform = (name: string) => gl.getUniformLocation(program, name);
    gl.bindFramebuffer(gl.FRAMEBUFFER, targets[1]!.buffer);
    gl.viewport(0, 0, Math.ceil(size.width / 2), Math.ceil(size.height / 2));
    gl.useProgram(program);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, targets[0]!.texture);
    gl.uniform2f(uniform("uFrom"), from.x, from.y);
    gl.uniform2f(uniform("uTo"), brush.x, brush.y);
    gl.uniform1f(uniform("uAspect"), size.aspect);
    gl.uniform1f(uniform("uRadius"), BRUSH_RADIUS);
    gl.uniform1f(uniform("uInk"), moving ? 1 : 0);
    gl.uniform1f(uniform("uDry"), dt / PAINT_FADE);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    targets.reverse();
  };
  const tick = (now: number) => {
    if (now - previous >= 1000 / 30) {
      const dt = previous ? Math.min(now - previous, 100) / 1000 : 0;
      previous = now;
      time += dt;
      paint(dt);
      draw();
    }
    frame = requestAnimationFrame(tick);
  };
  const syncMotion = () => {
    cancelAnimationFrame(frame);
    previous = 0;
    draw();
    if (scene && !gl.isContextLost() && !motion.matches && !document.hidden) {
      frame = requestAnimationFrame(tick);
    }
  };

  void Promise.all(
    [src, colorSrc].map(async url => {
      const image = new Image();
      image.src = url;
      await image.decode();
      return image;
    })
  ).then(
    loaded => {
      if (stopped) return;
      images = loaded;
      setup();
      syncMotion();
    },
    () => {} // The static CSS topography remains if an image fails.
  );

  const resize = new ResizeObserver(() => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height) return;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    Object.assign(size, { width, height, aspect: width / height });
    allocate();
    draw();
  });
  resize.observe(canvas);

  // The canvas sits behind the page, so follow the pointer on the window.
  const point = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    pointer.x = (event.clientX - rect.left) / rect.width;
    pointer.y = 1 - (event.clientY - rect.top) / rect.height;
    // A press, or coming back into the window, starts a fresh stroke.
    if (!pointer.active || event.type === "pointerdown") {
      pointer.restart = true;
    }
    pointer.active = true;
  };
  const leave = (event: PointerEvent) => {
    if (!event.relatedTarget) pointer.active = false;
  };

  const contextLost = (event: Event) => {
    event.preventDefault();
    cancelAnimationFrame(frame);
    scene = null;
  };
  const contextRestored = () => {
    setup();
    syncMotion();
  };

  document.addEventListener("visibilitychange", syncMotion);
  motion.addEventListener("change", syncMotion);
  window.addEventListener("pointermove", point, { passive: true });
  window.addEventListener("pointerdown", point, { passive: true });
  window.addEventListener("pointerout", leave, { passive: true });
  canvas.addEventListener("webglcontextlost", contextLost);
  canvas.addEventListener("webglcontextrestored", contextRestored);

  return {
    draw,
    stop: () => {
      stopped = true;
      cancelAnimationFrame(frame);
      resize.disconnect();
      document.removeEventListener("visibilitychange", syncMotion);
      motion.removeEventListener("change", syncMotion);
      window.removeEventListener("pointermove", point);
      window.removeEventListener("pointerdown", point);
      window.removeEventListener("pointerout", leave);
      canvas.removeEventListener("webglcontextlost", contextLost);
      canvas.removeEventListener("webglcontextrestored", contextRestored);
      // The context outlives this run (a remount reuses the canvas), so free
      // what it holds rather than losing it.
      if (scene && !gl.isContextLost()) {
        gl.deleteProgram(scene.main);
        gl.deleteProgram(scene.paint);
        gl.deleteBuffer(scene.buffer);
        gl.deleteTexture(scene.map);
        gl.deleteTexture(scene.color);
        for (const target of scene.targets) {
          gl.deleteTexture(target.texture);
          gl.deleteFramebuffer(target.buffer);
        }
      }
      scene = null;
    }
  };
};
