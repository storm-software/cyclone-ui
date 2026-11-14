/* eslint-disable -- plain JavaScript on the HL kernel, checked by the cyclone-ui-illustration skill's validate.mjs and look.mjs */
/**
 * Breakers: a breaker panel, six modules clipped side by side on a rail in
 * their enclosure, a two-pole main first. One breaker has tripped: its lever
 * is thrown down and it has kicked a little proud of its neighbours, and its
 * outline is the bright mark at rest. The breaker under the pointer lifts out
 * of the rail; its neighbours follow it a little, staggered outwards from it.
 * The read-out names the breaker and its state. The slider is the stagger, in ms.
 *
 * Each breaker is what gives one away: a body with terminal screws on its
 * shoulders, a raised front, and a lever in a slot, leaning up (on) or down
 * (tripped). The hit test picks by world x on the rest top plane, so a
 * breaker lifting out from under the pointer cannot change the choice.
 */
const {
  Cam, circ, disposer, facing, fit, hull, mk, open, pointer, poly, prism, proj, put, register,
  ringAt, rings, rrect, run, seg, solid, tdone, tset, tval, tween, unproj,
} = HL;

const UNITS = [2, 1, 1, 1, 1, 1], U = 17, G = 1.2, L = 70, T = 3;
const Z1 = 18, Z2 = 28, HY0 = 18, HY1 = 52, LH = 11, LD = 9, LT = 3;
const POP = 4, LIFT = 16, FALL = [1, 0.31, 0.09];
const X1 = UNITS.reduce((s, w) => s + w * U, 0) - G, M = 12;

/** A ring moved by (du, dv). */
const shift = (ring, du, dv) => ring.map((q) => ({ ...q, u: q.u + du, v: q.v + dv }));

/** Breaker m standing at height z: every path it draws. */
function shape(P, front, m, z) {
  const { x0, x1, poles, lean } = m, yc = L / 2, d = lean * LD;
  const [bo, bi] = rings(x0, 0, x1, L, 3, 1.4);
  const [ho, hn] = rings(x0 + 0.8, HY0, x1 - 0.8, HY1, 3, 1.2);
  // the lever: a sheared solid, its foot in the slot and its top thrown up (on) or down (tripped)
  const pw = (x1 - x0) / poles, lever = { sil: "", crease: "" };
  for (let p = 0; p < poles; p++) {
    const a = x0 + pw * p + 4.5, b = x0 + pw * (p + 1) - 4.5;
    const foot = rrect(a, yc - LT, b, yc + LT, 1.5, 4), inner = rrect(a + 0.8, yc - LT + 0.8 + d, b - 0.8, yc + LT - 0.8 + d, 0.7, 4);
    lever.sil += poly(hull(ringAt(P, foot, z + Z2 - 2).concat(ringAt(P, shift(foot, 0, d), z + Z2 + LH))));
    lever.crease += open(ringAt(P, run(inner, front), z + Z2 + LH));
  }
  // terminal screws on the shoulders, one per pole at each end, each with its slot
  const screws = (y) => {
    let ring = "", slot = "";
    for (let p = 0; p < poles; p++) {
      const cx = x0 + pw * (p + 0.5);
      ring += poly(ringAt(P, shift(circ(2.8, 10), cx, y), z + Z1));
      slot += seg(P(cx - 1.8, y + 1.8, z + Z1), P(cx + 1.8, y - 1.8, z + Z1));
    }
    return [ring, slot];
  };
  return {
    body: prism(P, front, bo, bi, z, z + Z1),
    hump: prism(P, front, ho, hn, z + Z1, z + Z2),
    slot: poly(ringAt(P, rrect(x0 + 3, yc - 11, x1 - 3, yc + 11, 2, 4), z + Z2)),
    lever, far: screws(9), near: screws(L - 9),
  };
}

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let stag = value;

  // fitted to the enclosure with a breaker lifted at either end, so no pose leaves the frame
  const C = Cam(45, 0.5, 1.6), top = Z2 + LH + LIFT;
  fit(C, [[-M, -M, -6], [X1 + M, L + M, -6], [X1 + M, -M, -6], [-M, L + M, -6], [0, 0, top], [X1, 0, top]], 200, 166);
  const P = proj(C), front = facing(C);
  const g = mk("g", {}, svg);

  // the enclosure's back plate, then the rail, which shows past either end of the row
  const [po, pi] = rings(-M, -M, X1 + M, L + M, 6, 2);
  put(solid(g), prism(P, front, po, pi, -6, 0));
  const [ro, ri] = rings(-8, L / 2 - 7, X1 + 8, L / 2 + 7, 1.5, 0.8);
  put(solid(g), prism(P, front, ro, ri, 0, 4));

  // the breakers, far to near (ascending x), each painted body, far screws, front, slot, lever, near screws
  const mods = [];
  let x = 0;
  UNITS.forEach((w, i) => {
    const grp = mk("g", {}, g), path = (cls) => mk("path", { class: cls }, grp);
    const m = { x0: x, x1: x + w * U - G, poles: w, lean: i === T ? 1 : -1, z: tween(i === T ? POP : 0), last: NaN };
    m.body = solid(grp); m.farS = path("nf"); m.farL = path("nf lo");
    m.hump = solid(grp); m.slot = path("nf lo"); m.lever = solid(grp);
    m.nearS = path("nf"); m.nearL = path("nf lo");
    mods.push(m);
    x += w * U;
  });

  function draw(m, z) {
    if (z === m.last) return;
    m.last = z;
    const s = shape(P, front, m, z);
    put(m.body, s.body); put(m.hump, s.hump); put(m.lever, s.lever);
    m.slot.setAttribute("d", s.slot);
    m.farS.setAttribute("d", s.far[0]); m.farL.setAttribute("d", s.far[1]);
    m.nearS.setAttribute("d", s.near[0]); m.nearL.setAttribute("d", s.near[1]);
  }

  const B = register(stage, (_dt, now) => {
    let moving = false;
    for (const m of mods) { draw(m, tval(m.z, now)); if (!tdone(m.z, now)) moving = true; }
    return moving;
  });
  bag.add(B.unregister);

  /** The breaker under the point on the rest top plane, which never moves; -1 off the panel. */
  function hit([sx, sy]) {
    const [wx, wy] = unproj(C, sx, sy, Z2);
    if (wy < -M || wy > L + M) return -1;
    return mods.findIndex((m) => wx >= m.x0 - G && wx < m.x1 + G);
  }

  let act = -2;
  /** Lifts breaker a (-1 settles them all). The stagger spreads out from the one picked, or the one let go. */
  function setActive(a) {
    if (a === act) return;
    const now = performance.now(), from = a >= 0 ? a : act;
    act = a;
    mods.forEach((m, i) => {
      const lift = a < 0 ? 0 : LIFT * FALL[Math.min(Math.abs(i - a), FALL.length - 1)];
      tset(m.z, Math.max(lift, i === T ? POP : 0), now, Math.abs(i - from) * stag);
      const lit = i === (a < 0 ? T : a);
      for (const s of [m.body, m.hump, m.lever]) s.sil.classList.toggle("hi", lit);
    });
    read.textContent = a < 0 ? "rest" : `breaker ${a + 1} · ${a === T ? "tripped" : "on"}`;
    B.wake();
  }
  setActive(-1);

  bag.add(pointer(stage, { move: (p) => setActive(hit(p)), leave: () => setActive(-1) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { stag = v; },
    destroy: bag.dispose,
  };
}

illustration({
  name: "breakers",
  means: "A breaker panel with one breaker tripped: the one under the pointer lifts out of its rail, and its neighbours follow in turn.",
  rules: [1, 2, 4, 5],
  range: [0, 40, 90],
  tour: [[181, 145], [219, 158], [258, 183], null],
  mount,
});
