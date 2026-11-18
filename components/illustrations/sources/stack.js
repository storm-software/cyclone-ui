/* eslint-disable -- plain JavaScript on the HL kernel, checked by the cyclone-ui-illustration skill's validate.mjs and look.mjs */
/*
 * Stack, from Hairline (https://github.com/lucasmarkes/hairline), © 2026 Lucas
 * Marques, MIT License: one of its thirty-three figures, as an illustration here.
 */
const {
  Cam,
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
  register,
  ringAt,
  rings,
  rrect,
  run,
  solid,
  spring,
  stepS,
  tdone,
  tset,
  tval,
  tween
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
 * Stack: a call stack, five frames laid one over another on a base plate, each
 * a thin slab with a quiet inset rim on the lid. The pointer's height picks a
 * frame: the frames above it lift away on the 700ms curve, the top one furthest
 * and each in turn, so the chosen frame opens to the eye and takes the bright
 * edge. At rest the stack sits closed with the top frame, the one running now,
 * bright. The slider is the lift, in world units.
 *
 * The pattern: discrete items. Tweens, a stagger by distance, and a hit test
 * on static bands of the resting stack's height, so a lifting frame cannot
 * move the choice.
 */
const N = 5,
  T = 4,
  PITCH = 9,
  Z0 = 7,
  FW = 56,
  STEP = 55;
const BASE = [-8, -8, 64, 64],
  BT = 4;
// Each frame sits a little off the one below, so the closed stack is not a block.
// Motion: opening is quick and gets a calm settle; closing is slower and softer,
// the low frames first and the top one last to land; the bright mark rides the kernel's 260ms stroke fade.
const OPEN = 700,
  CLOSE = 1250,
  CSTEP = 45,
  KICK = 0.42,
  SETTLE = 230;
const HYS = 5;
const OFF = [
  [-1.5, 1],
  [1.5, -1.2],
  [-0.5, -1.8],
  [2, 1.2],
  [0, 0]
];

const mount = ({ stage, svg, read }, value) => {
  const bag = disposer();
  let lift = value;
  /** How far frame j stands above its place when frame a is chosen: the top frame furthest. */
  const up = (j, a) =>
    j <= a ? 0 : lift * (0.4 + (0.6 * (j - a)) / (N - 1 - a));

  const C = Cam(45, 0.5, 2.2);
  const ztop = Z0 + (N - 1) * PITCH + T;
  fit(
    C,
    [
      [BASE[0], BASE[1], 0],
      [BASE[2], BASE[3], 0],
      [BASE[0], BASE[1], ztop + 46],
      [BASE[2], BASE[3], ztop + 46]
    ],
    200,
    166
  );
  const P = proj(C),
    front = facing(C);

  const g = mk("g", {}, svg);
  const [br, bi] = lid(BASE[0], BASE[1], BASE[2], BASE[3], 7, 2);
  put(solid(g), slab(P, front, br, bi, 0, BT));
  // a recessed square in the base, under the stack
  const [rr] = rings(4, 4, 52, 52, 4, 1);
  mk("path", { d: poly(ringAt(P, rr, BT)), class: "nf lo" }, g);

  const fr = [];
  for (let j = 0; j < N; j++) {
    const x0 = 0 + OFF[j][0],
      y0 = 0 + OFF[j][1];
    const [ring] = lid(x0, y0, x0 + FW, y0 + FW, 5, 1.1);
    const el = solid(g);
    // the same quiet inset rim on every lid: the slab's lip
    const [rim] = lid(x0 + 4, y0 + 4, x0 + FW - 4, y0 + FW - 4, 2.5, 0.6);
    fr.push({
      j,
      ring,
      el,
      rim,
      tw: tween(0),
      sp: spring(0, { k: 90, c: 10, eps: 0.005 }),
      kick: Infinity,
      drawn: NaN
    });
  }

  function draw(f, e) {
    const z = Z0 + f.j * PITCH + e;
    put(f.el, slab(P, front, f.ring, f.rim, z, z + T));
  }

  const B = register(stage, (_dt, now) => {
    let moving = false;
    for (const f of fr) {
      if (now >= f.kick) {
        f.kick = Infinity;
        f.sp.v = KICK * f.sp.v0;
      }
      const bump =
        f.sp.x !== 0 || f.sp.v !== 0 ? (stepS(f.sp, _dt), f.sp.x) : 0;
      const e = tval(f.tw, now) + bump;
      if (
        !tdone(f.tw, now) ||
        f.kick !== Infinity ||
        f.sp.x !== 0 ||
        f.sp.v !== 0
      )
        moving = true;
      if (e !== f.drawn) {
        f.drawn = e;
        draw(f, e);
      }
    }
    return moving;
  });
  bag.add(B.unregister);

  // Hit bands: the resting stack's heights on screen. They never move.
  const mid = fr.map(
    f => P(FW / 2 + OFF[f.j][0], FW - 9 + OFF[f.j][1], Z0 + f.j * PITCH + T)[1]
  );
  const xs = ringAt(P, br, 0).map(q => q[0]),
    yb = Math.max(...ringAt(P, br, 0).map(q => q[1]));
  const xa = Math.min(...xs) + 4,
    xb = Math.max(...xs) - 4,
    ya = mid[N - 1] - 150;
  /** The frame at the point's height, clamped to the stack; -1 off the column. */
  function hit([x, y]) {
    if (x < xa || x > xb || y > yb || y < ya) return -1;
    // keep the current frame until the pointer is clearly inside another band
    if (act >= 0) {
      const lo = act < N - 1 ? (mid[act] + mid[act + 1]) / 2 : -1e9,
        hi = act > 0 ? (mid[act - 1] + mid[act]) / 2 : 1e9;
      if (y >= lo - HYS && y <= hi + HYS) return act;
    }
    let a = 0;
    while (a < N - 1 && y < (mid[a] + mid[a + 1]) / 2) a++;
    return a;
  }

  let act = -1;
  function apply(a, from) {
    const now = performance.now(),
      s = a < 0 ? N - 1 : a;
    fr.forEach(f => {
      const to = a < 0 ? 0 : up(f.j, a),
        cur = tval(f.tw, now);
      if (to !== f.tw.to) {
        const closing = to < cur;
        tset(
          f.tw,
          to,
          now,
          closing
            ? a < 0
              ? f.j * CSTEP
              : Math.abs(f.j - from) * 30
            : Math.abs(f.j - from) * STEP
        );
        f.tw.dur = closing ? CLOSE : OPEN;
        if (!closing) {
          f.kick = f.tw.t0 + SETTLE;
          f.sp.v0 = Math.max(6, to - cur) * 0.5;
          f.sp.v0 /= KICK;
        }
      }
      f.el.sil.classList.toggle("hi", f.j === s);
    });
    B.wake();
  }
  apply(-1, N - 1);
  read.textContent = "rest";

  function over(a) {
    if (a === act) return;
    const from = a < 0 ? act : a;
    act = a;
    read.textContent = a < 0 ? "rest" : "fr " + (a + 1);
    apply(a, from);
  }

  bag.add(pointer(stage, { move: p => over(hit(p)), leave: () => over(-1) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: v => {
      lift = v;
      apply(act, act < 0 ? N - 1 : act);
    },
    destroy: bag.dispose
  };
};

illustration({
  name: "stack",
  means:
    "A call stack of five frames: the pointer's height picks one, and the frames above lift away to open it.",
  rules: [1, 3, 9],
  range: [22, 34, 46],
  tour: [[200, 250], [200, 216], [200, 199], null],
  mount
});
