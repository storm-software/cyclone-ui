/* eslint-disable -- plain JavaScript on the HL kernel, checked by the cyclone-ui-illustration skill's validate.mjs and look.mjs */
/*
 * Branches, from Hairline (https://github.com/lucasmarkes/hairline), © 2026 Lucas
 * Marques, MIT License: one of its thirty-three figures, as an illustration here.
 */
const {
  Cam,
  circ,
  clamp,
  disposer,
  facing,
  fit,
  mk,
  pointer,
  poly,
  prism,
  proj,
  put,
  register,
  rings,
  seg,
  solid,
  tdone,
  tset,
  tval,
  tween,
  unproj
} = HL;

/**
 * Branches: a git history as an object on a board. A main line of commits
 * runs along a rail, each commit a puck seated on a round pad; a feature
 * branch forks off it near the start and merges back late. The rails are
 * closed strips that run pad to pad, so each fork and merge sits on a pad.
 * The pointer picks the commit under it: that puck rises off its pad, and
 * its first-parent ancestry rises after it, staggered back along its own
 * branch and through the fork, the farther back the less. Commits outside
 * that history stay seated. At rest, the feature's last commit is caught
 * bright, two ancestors under it. The slider is the reach, in commits.
 *
 * The pattern: discrete items, as Riffle's: tweens, a stagger by distance
 * (here, distance back through the history), and a hit test on the pucks'
 * shared rest top, which never moves.
 */

const D = 30,
  FY = 58,
  RW = 7,
  RT = 2.6,
  PR = 8,
  PH = 2.4,
  CR = 6.6,
  CH = 6,
  LIFT = 36,
  STEP = 45;
const BX0 = -15,
  BX1 = 7 * D + 15,
  BY0 = -16,
  BY1 = FY + 14,
  PB = 6,
  ZTOP = RT + PH + CH;

/** The history. Each commit: lane, number on its lane, world x, y, and its first parent. */
function history() {
  const cs = [],
    at = (lane, n, x, y, parent) => (
      cs.push({ lane, n, x, y, parent }),
      cs.length - 1
    );
  const m = [];
  for (let i = 0; i < 8; i++)
    m.push(at("main", i + 1, i * D, 0, i ? m[i - 1] : -1));
  const f1 = at("feature", 1, 2.5 * D, FY, m[1]),
    f2 = at("feature", 2, 3.5 * D, FY, f1),
    f3 = at("feature", 3, 4.5 * D, FY, f2);
  return { cs, m, f: [f1, f2, f3] };
}

/** A cubic from a to b, leaving a along (ox, oy) and arriving at b level. */
const bez = (a, b, ox, oy, ix, n) => {
  const out = [];
  for (let k = 0; k <= n; k++) {
    const t = k / n,
      u = 1 - t,
      w = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t];
    const px = [a[0], a[0] + ox, b[0] - ix, b[0]],
      py = [a[1], a[1] + oy, b[1], b[1]];
    out.push([
      w[0] * px[0] + w[1] * px[1] + w[2] * px[2] + w[3] * px[3],
      w[0] * py[0] + w[1] * py[1] + w[2] * py[2] + w[3] * py[3]
    ]);
  }
  return out;
};

/** A rail: the closed strip RW wide round a centre line of world points. Its ends sit under pads. */
function strip(c) {
  const L = [],
    R = [];
  c.forEach((p, i) => {
    const a = c[Math.max(0, i - 1)],
      b = c[Math.min(c.length - 1, i + 1)];
    const dx = b[0] - a[0],
      dy = b[1] - a[1],
      l = Math.hypot(dx, dy),
      nx = -dy / l,
      ny = dx / l;
    L.push([p[0] + (nx * RW) / 2, p[1] + (ny * RW) / 2]);
    R.push([p[0] - (nx * RW) / 2, p[1] - (ny * RW) / 2]);
  });
  return L.concat(R.reverse());
}

const mount = ({ stage, svg, read }, value) => {
  const bag = disposer();
  let reach = value;
  const C = Cam(45, 0.5, 1.4);
  fit(
    C,
    [
      [BX0, BY0, -PB],
      [BX1, BY1, -PB],
      [BX1, BY0, -PB],
      [BX0, BY1, -PB],
      [BX0, BY0, ZTOP + LIFT],
      [BX1, BY0, ZTOP + LIFT]
    ],
    200,
    166
  );
  const P = proj(C),
    front = facing(C);
  const { cs: seeds, m, f } = history();
  const xy = i => [seeds[i].x, seeds[i].y];

  const g = mk("g", {}, svg);
  const [br, bi] = rings(BX0, BY0, BX1, BY1, 12, 2.2);
  put(solid(g), prism(P, front, br, bi, -PB, 0));

  // The rails, pad to pad: main straight; each branch leaves its fork on a slant and comes back into its merge.
  const fork = (a, b) =>
    bez(
      a,
      b,
      (b[0] - a[0]) * 0.3,
      (b[1] - a[1]) * 0.5,
      (b[0] - a[0]) * 0.45,
      14
    );
  const merge = (a, b) =>
    bez(
      b,
      a,
      (a[0] - b[0]) * 0.3,
      (a[1] - b[1]) * 0.5,
      (a[0] - b[0]) * 0.45,
      14
    ).reverse();
  const lines = [
    [xy(m[0]), xy(m[7])],
    [...fork(xy(m[1]), xy(f[0])), ...merge(xy(f[2]), xy(m[6])).slice(1)]
  ];
  for (const c of lines) {
    const s = strip(c);
    mk("path", { d: poly(s.map(p => P(p[0], p[1], 0))), class: "lo" }, g);
    mk("path", { d: poly(s.map(p => P(p[0], p[1], RT))), class: "" }, g);
  }

  // Pads and pucks, by ascending x + y, so a nearer commit covers a farther one.
  const [pr, pi] = [circ(PR, 24), circ(PR - 1.4, 24)],
    [cr, ci] = [circ(CR, 24), circ(CR - 1.2, 24)];
  const at = (ring, x, y) => ring.map(q => ({ ...q, u: q.u + x, v: q.v + y }));
  const order = seeds
    .map((_, i) => i)
    .sort((a, b) => seeds[a].x + seeds[a].y - (seeds[b].x + seeds[b].y));
  const cs = [];
  for (const i of order) {
    const c = seeds[i];
    put(
      solid(g),
      prism(P, front, at(pr, c.x, c.y), at(pi, c.x, c.y), RT, PH + RT)
    );
    const drop = mk("path", { class: "dash nf" }, g);
    cs[i] = {
      ...c,
      drop,
      el: solid(g),
      ring: at(cr, c.x, c.y),
      inner: at(ci, c.x, c.y),
      z: tween(0),
      drawn: NaN
    };
  }

  /** The first-parent history of commit a, nearest first: [index, steps back]. */
  const chain = a => {
    const out = [];
    for (let i = a, k = 0; i >= 0; i = cs[i].parent, k++) out.push([i, k]);
    return out;
  };
  const REST = f[2],
    REST_REACH = 2.2,
    REST_DEPTH = 0.5;

  function draw(c, z) {
    if (z === c.drawn) return;
    c.drawn = z;
    const b = PH + RT + z;
    put(c.el, prism(P, front, c.ring, c.inner, b, b + CH));
    c.drop.setAttribute("d", seg(P(c.x, c.y, PH + RT), P(c.x, c.y, b)));
  }

  const B = register(stage, (_dt, now) => {
    let moving = false;
    for (const c of cs) {
      draw(c, tval(c.z, now));
      if (!tdone(c.z, now)) moving = true;
    }
    return moving;
  });
  bag.add(B.unregister);

  let act = null,
    lit = null,
    held = new Map();
  /** Lifts commit a and its history, reach commits back, depth a share of full lift. The stagger runs back from a; what drops runs back from the commit let go. */
  function lift(a, r, depth, instant) {
    const now = performance.now(),
      want = new Map();
    for (const [i, k] of chain(a))
      if (k <= r) want.set(i, [LIFT * depth * clamp(1 - k / (r + 1), 0, 1), k]);
    cs.forEach((c, i) => {
      const [to, k] = want.get(i) || [0, (held.get(i) || [0, 0])[1]];
      if (instant) c.z = tween(to);
      else tset(c.z, to, now, k * STEP);
    });
    held = want;
    if (lit !== a) {
      if (lit !== null) cs[lit].el.sil.classList.remove("hi");
      lit = a;
      cs[a].el.sil.classList.add("hi");
    }
    B.wake();
  }
  lift(REST, REST_REACH, REST_DEPTH, true);

  function choose(a) {
    if (a === act) return;
    act = a;
    if (a === null) {
      lift(REST, REST_REACH, REST_DEPTH);
      read.textContent = "rest";
    } else {
      lift(a, reach, 1);
      read.textContent = `${cs[a].lane} · ${cs[a].n}`;
    }
  }

  /** The commit under a screen point, from the pucks' rest top, which every puck shares and none leaves when the pointer picks. */
  function hit(p) {
    const q = unproj(C, p[0], p[1], ZTOP);
    if (q[0] < BX0 || q[0] > BX1 || q[1] < BY0 || q[1] > BY1) return null;
    let best = null,
      bd = Infinity;
    cs.forEach((c, i) => {
      const d = Math.hypot(c.x - q[0], c.y - q[1]);
      if (d < bd) {
        bd = d;
        best = i;
      }
    });
    return best;
  }

  bag.add(
    pointer(stage, { move: p => choose(hit(p)), leave: () => choose(null) })
  );
  bag.add(() => svg.replaceChildren());

  return {
    set: v => {
      reach = v;
      if (act !== null) lift(act, reach, 1);
    },
    destroy: bag.dispose
  };
};

illustration({
  name: "branches",
  means:
    "A commit graph on a board: the commit under the pointer rises, and its history rises after it, the farther back the less.",
  rules: [2, 3, 4],
  range: [1, 3, 6],
  tour: [[128, 150], [200, 118], [272, 150], [200, 206], null],
  mount
});
