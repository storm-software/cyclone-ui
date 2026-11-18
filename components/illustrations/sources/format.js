/* eslint-disable -- plain JavaScript on the HL kernel, checked by the cyclone-ui-illustration skill's validate.mjs and look.mjs */
/*
 * Format, from Hairline (https://github.com/lucasmarkes/hairline), © 2026 Lucas
 * Marques, MIT License: one of its thirty-three figures, as an illustration here.
 */
const {
  Cam,
  clamp,
  disposer,
  facing,
  fit,
  hull,
  mk,
  open,
  pointer,
  poly,
  proj,
  put,
  rad,
  reducedMotion,
  register,
  ringAt,
  rrect,
  run,
  solid,
  spring,
  stepS,
  unproj
} = HL;

/* ---- from Hairline's slab.ts ---- */
/**
 * Slabs: the tiles, plates and frames of the graph figures, drawn whole. Not
 * in src/core, so the skill's kernel and the pages it wrote stay as they are.
 */

/**
 * A prism whose lid is drawn whole. The silhouette carries the lid's front
 * edge, so the lid reads as a face on its band, and the crease is the inset
 * ring all round, a lip.
 */
function slab(P, front, ring, inner, z0, z1) {
  return {
    sil:
      poly(hull(ringAt(P, ring, z1).concat(ringAt(P, ring, z0)))) +
      open(ringAt(P, run(ring, front), z1)),
    crease: inner ? poly(ringAt(P, inner, z1)) : ""
  };
}

/**
 * A ring set d inside another, the gap measured on the screen, so it reads even all the way round, corners
 * included. Concentric in plan is not enough: the 2:1 view squeezes the top and bottom corners, which pinches
 * the gap there, and stretches the side corners, which opens it. So each sample goes to the view plane with
 * its normal, moves d + m in, and stays only if it is that far inside every tangent; then it grows back m, and
 * where the cut took a corner out the ring turns round it at radius m. Then back to plan, to ride any height.
 */
function inset(C, ring, d, m = 1) {
  const c = Math.cos(C.az),
    s = Math.sin(C.az),
    k = C.k,
    e = d + m,
    out = [];
  const put = (x, y, a, b) => {
    const nu = c * a + k * s * b,
      nv = k * c * b - s * a,
      l = Math.hypot(nu, nv);
    out.push({
      u: x * c + (y / k) * s,
      v: (y / k) * c - x * s,
      nu: nu / l,
      nv: nv / l
    });
  };
  // the view plane: the normal goes by the inverse transpose, so it stays square to the edge as drawn
  const v = ring.map(q => {
    const a = q.nu * c - q.nv * s,
      b = (q.nu * s + q.nv * c) / k,
      l = Math.hypot(a, b);
    return [q.u * c - q.v * s, (q.u * s + q.v * c) * k, a / l, b / l];
  });
  const w = v
    .map(([x, y, a, b]) => [x - e * a, y - e * b, a, b])
    .filter(([x, y]) =>
      v.every(([X, Y, a, b]) => (x - X) * a + (y - Y) * b < 1e-6 - e)
    );
  w.forEach(([x, y, a, b], i) => {
    const [X, Y, A, B] = w[(i + 1) % w.length],
      t = Math.atan2(a * B - b * A, a * A + b * B);
    put(x + m * a, y + m * b, a, b);
    if (Math.abs(t) < 0.1) return;
    // the two edges meet at (px, py): round it
    const h = x * a + y * b,
      H = X * A + Y * B,
      D = a * B - b * A,
      px = (h * B - H * b) / D,
      py = (a * H - A * h) / D;
    for (let j = 0, n = Math.ceil(Math.abs(t) / 0.2); j <= n; j++) {
      const r = Math.atan2(b, a) + (t * j) / n,
        ca = Math.cos(r),
        sa = Math.sin(r);
      put(px + m * ca, py + m * sa, ca, sa);
    }
  });
  return out;
}

/** A rounded footprint and its lip, inset by b, sampled finely enough for a large tile: eight samples per corner. */
const lid = (x0, y0, x1, y1, r, b) => [
  rrect(x0, y0, x1, y1, r, 8),
  rrect(x0 + b, y0 + b, x1 - b, y1 - b, Math.max(0.3, r - b), 8)
];

/**
 * Format: a file as a stack of ten thin slabs on a rounded board, one to a
 * line, indented like code. At rest it is unformatted: every line pivoted
 * about its own start, its indent wrong, none touching another. The pointer
 * runs the formatter down the file: every line above the pointer swings square
 * to its indent on a spring, staggered line by line; lines below stay as they
 * were. The line at the formatter's front takes the bright edge (none at
 * rest), which the kernel's stroke transition fades from line to line.
 * Leaving un-formats the file slowly, bottom-up, with no bounce.
 * The slider is the disorder, in degrees of the worst skew.
 *
 * The pattern: discrete items on springs. A stagger by distance, a hit test on
 * the ground plane (which never moves), and a rest that is a composition.
 */

const G = 12,
  WD = 5.5,
  T = 2.4,
  X0 = 8,
  IND = 13,
  PB = 5,
  STEP = 55,
  STEP_OUT = 80,
  MAXV = 14;
const BX0 = -9,
  BX1 = 118,
  BY0 = -8,
  BY1 = 9 * G + WD + 8,
  GUT = 1;
// Each line: indent level, length, and how it sits crooked at rest, as fractions of the slider's far end:
// yaw (about its own start, the indent point), dx (the indent error), dy (a small shift along the page), dz (unused: a raised line would cross its neighbour on screen).
// Picked by search so that no two lines touch at any slider value or any mix of their springs (lines further down are never less crooked than the ones above while the formatter runs).
const LINES = [
  [0, 56, 0.3, -8, -2, 0],
  [1, 40, 0.75, 8, -1.9, 0],
  [1, 58, 0.3, -8, -0.8, 0],
  [2, 74, 1, -8, -1.9, 0],
  [2, 48, 1, 8, 1.3, 0],
  [1, 34, 0.3, 8, 2, 0],
  [1, 66, 1, -8, -2, 0],
  [2, 52, 1, -8, -0.8, 0],
  [1, 30, 0.45, 8, 2, 0],
  [0, 22, 1, -8, 1.6, 0]
];
const N = LINES.length;

/** A ring turned by th degrees about (cx, cy) and moved by (dx, dy): normals turn with it. */
function turn(ring, cx, cy, th, dx, dy) {
  const s = Math.sin(rad(th)),
    c = Math.cos(rad(th));
  return ring.map(q => ({
    u: cx + (q.u - cx) * c - (q.v - cy) * s + dx,
    v: cy + (q.u - cx) * s + (q.v - cy) * c + dy,
    nu: q.nu * c - q.nv * s,
    nv: q.nu * s + q.nv * c
  }));
}

const mount = ({ stage, svg, read }, value) => {
  const bag = disposer();
  let mess = value / MAXV;

  // The camera is fitted to the board and to the most crooked, most raised line at the slider's far end.
  const C = Cam(45, 0.5, 1.9);
  fit(
    C,
    [
      [BX0, BY0, -PB],
      [BX1, BY0, -PB],
      [BX0, BY1, -PB],
      [BX1, BY1, -PB],
      [BX1, BY1, 9]
    ],
    200,
    168
  );
  const P = proj(C),
    front = facing(C);

  const g = mk("g", {}, svg);
  const [br, bi] = lid(BX0, BY0, BX1, BY1, 8, 2.2);
  put(solid(g), slab(P, front, br, bi, -PB, 0));
  // the gutter: a dashed guide on the board, before any line lies on it
  mk(
    "path",
    {
      d: `M${P(X0 - 4, BY0 + 5, 0).join(" ")}L${P(X0 - 4, BY1 - 5, 0).join(" ")}`,
      class: "dash"
    },
    g
  );

  const rows = LINES.map(([lv, len, yaw, dx, dy, dz], r) => {
    const x0 = X0 + lv * IND,
      y0 = r * G;
    const e = solid(g);
    return {
      r,
      yaw,
      dx,
      dy,
      dz,
      px: x0,
      py: y0 + WD / 2,
      drawn: NaN,
      ring: rrect(x0, y0, x0 + len, y0 + WD, 2.2, 6),
      sp: spring(1, { k: 100, c: 14, eps: 0.003 }),
      tgt: 1,
      due: -1,
      el: e,
      // the bright edge: the kernel's stroke transition fades it in and out; this only says when
      lit: false,
      wantLit: false,
      litDue: -1
    };
  });

  function draw(w) {
    const m = w.sp.x;
    if (m !== w.drawn) {
      w.drawn = m;
      const k = m * mess,
        th = w.yaw * MAXV * k,
        z = Math.max(0, m) * w.dz * mess;
      put(
        w.el,
        slab(
          P,
          front,
          turn(w.ring, w.px, w.py, th, w.dx * k, w.dy * k),
          null,
          z,
          z + T
        )
      );
    }
  }

  let fr = -1;
  const B = register(stage, (dt, now) => {
    let moving = false;
    for (const w of rows) {
      if (w.due >= 0) {
        if (now >= w.due) {
          w.sp.t = w.tgt;
          w.due = -1;
        } else moving = true;
      }
      if (stepS(w.sp, dt)) moving = true;
      if (w.litDue >= 0) {
        if (now >= w.litDue) {
          w.litDue = -1;
          if (w.lit !== w.wantLit) {
            w.lit = w.wantLit;
            w.el.sil.classList.toggle("hi", w.lit);
          }
        } else moving = true;
      }
      draw(w);
    }
    return moving;
  });
  bag.add(B.unregister);

  /** Lines 0..a are formatted. New ones snap in a ripple down from the old front; un-formatting is slow and goes bottom-up: the last to be fixed is the first to go. */
  function setFront(a) {
    if (a === fr) return;
    const now = performance.now(),
      prev = fr,
      rm = reducedMotion();
    fr = a;
    for (const w of rows) {
      const tgt = w.r <= a ? 0 : 1;
      if (tgt !== w.tgt) {
        w.tgt = tgt;
        const slow = tgt === 1;
        w.sp.k = slow ? 22 : 100;
        w.sp.c = slow ? 9.4 : 14;
        w.due =
          now +
          (rm
            ? 0
            : slow
              ? (N - 1 - w.r) * STEP_OUT
              : (w.r - (prev + 1)) * STEP);
      }
      // the bright edge belongs to the line at the front, and to nothing at rest; it arrives with that line's snap
      const on = w.r === a ? 1 : 0;
      w.wantLit = !!on;
      w.litDue = now + (on && !rm ? Math.max(0, w.r - (prev + 1)) * STEP : 0);
    }
    read.textContent = a < 0 ? "rest" : `ln ${a + 1}`;
    B.wake();
  }

  // The pointer is read on the ground plane, which never moves: the line is the band of rows it is over.
  const rowAt = p => {
    const [x, y] = unproj(C, p[0], p[1], 0);
    return x < BX0 || x > BX1 || y < BY0 || y > BY1
      ? -1
      : clamp(Math.floor(y / G), -1, N - 1);
  };
  bag.add(
    pointer(stage, { move: p => setFront(rowAt(p)), leave: () => setFront(-1) })
  );
  bag.add(() => svg.replaceChildren());

  rows.forEach(w => draw(w));
  return {
    set: v => {
      mess = v / MAXV;
      rows.forEach(w => {
        w.drawn = NaN;
      });
      B.wake();
    },
    destroy: bag.dispose
  };
};

illustration({
  name: "format",
  means:
    "A file of ten crooked lines: the pointer runs the formatter down it, and every line above snaps square to its indent.",
  rules: [2, 5, 10],
  range: [9, 12, 14],
  tour: [[290, 162], [199, 168], [135, 200], null],
  mount
});
