/* eslint-disable -- plain JavaScript on the HL kernel, checked by the cyclone-ui-illustration skill's validate.mjs and look.mjs */
/**
 * Keypad: a door-entry keypad and intercom under its hood. Twelve keys in a
 * 4 × 3 grid, two status lamps, a round speaker grille and a call button. The
 * key under the pointer presses in; its neighbours dip less and less with
 * distance, staggered outwards from it. The upper lamp glows while a key is
 * held, the lower one while the call button is. At rest a code is half typed
 * (1, 5, 9, the last still down) and the call button holds the bright edge.
 * The slider is how far the press spreads, in key pitches.
 *
 * The face stands in the plane y = D, facing down-left; keys and the call
 * button are solids pushed out of it along y. The hit test lands the pointer
 * on each part's rest cap plane, which never moves (rule 01).
 */
const {
  Cam, circ, clamp, fit, hull, open, poly, prism, proj, rad, rings, rrect, run, seg, facing,
  tset, tval, tdone, tween, disposer, mk, place, pointer, put, register, solid,
} = HL;

const W = 128, H = 84, D = 8, T = 3, HD = 16, DMIN = 6, ZB = 6, RB = 4, LP = 11, ZS = 68;
const PX = 13.5, PZ = 11.5, KX0 = 14, KZ0 = 52, KW = 9.5, KH = 8.5, KD = 4.5, PRESS = 3.8;
const CX = 86, CZ = 20, CR = 5.5, CD = 3.5, CPRESS = 2.6, GX = 86, GZ = 44, GR = 14;
const NAMES = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];
const WORN = [0.7, 0, 0, 0, 1.4, 0, 0, 0, 2.4, 0, 0, 0];

/** Toward the camera, for a face-plane normal (nu → x, nv → z). */
const toward = (q) => q.nu * 0.612 + q.nv * 0.5 > 0;
/** The hood's front edge, bottom to top, as (y, z): a rounded foot, then a curve swelling out to the top. */
function hoodEdge() {
  const pts = [];
  for (let k = 0; k <= 4; k++) { const a = rad(-90 + k * 22.5); pts.push([D + DMIN - RB + RB * Math.cos(a), ZB + RB + RB * Math.sin(a)]); }
  for (let k = 1; k <= 10; k++) { const t = k / 10; pts.push([D + DMIN + (HD - DMIN) * Math.sin((t * Math.PI) / 2), ZB + RB + (H - ZB - RB) * t]); }
  return pts;
}

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let spread = value;

  const C = Cam(45, 0.5, 1.95);
  fit(C, [[-T, 0, H + T], [W + T, D + HD, H + T], [W + T, 0, H + T], [-T, D + HD, H + T], [0, 0, 0], [W, D, 0], [W + T, D + DMIN, ZB], [-T, D + DMIN, ZB]], 200, 166);
  const P = proj(C), front = facing(C);
  /** A ring in the face's (x, z) plane, centred on (cx, cz), at depth y. */
  const at = (ring, cx, cz, y) => ring.map((q) => P(cx + q.u, y, cz + q.v));
  /** A solid pushed out of the face from y0 to y1: its silhouette and the crease round its cap. */
  const boss = (ring, inner, cx, cz, y0, y1) => ({
    sil: poly(hull(at(ring, cx, cz, y0).concat(at(ring, cx, cz, y1)))),
    crease: open(at(run(inner, toward), cx, cz, y1)),
  });
  /** Screen → (x, z) on the plane y: the inverse of P there. */
  function plane(y) {
    const o = P(0, y, 0), a = P(1, y, 0), b = P(0, y, 1);
    const ex = [a[0] - o[0], a[1] - o[1]], ez = [b[0] - o[0], b[1] - o[1]], det = ex[0] * ez[1] - ex[1] * ez[0];
    return ([sx, sy]) => { const qx = sx - o[0], qy = sy - o[1]; return [(qx * ez[1] - qy * ez[0]) / det, (ex[0] * qy - ex[1] * qx) / det]; };
  }

  const g = mk("g", {}, svg);
  const edge = hoodEdge(), prof = [[0, ZB], ...edge, [0, H]];
  /** A hood side, the plate between x0 and x1; its crease is the front edge on the face that shows. */
  const side = (x0, x1, xc) => ({ sil: poly(hull(prof.map(([y, z]) => P(x0, y, z)).concat(prof.map(([y, z]) => P(x1, y, z))))), crease: open(edge.map(([y, z]) => P(xc, y, z))) });
  put(solid(g), side(-T, 0, 0));

  // The body: the faceplate, standing proud of the wall.
  const [br, bi] = rings(0, 0, W, H, 4, 1.4);
  put(solid(g), boss(br, bi, 0, 0, 0, D));

  // The speaker grille: a round field of holes, on a hex pitch.
  for (let j = -4; j <= 4; j++) for (let i = -5; i <= 5; i++) {
    const x = (i + (j & 1 ? 0.5 : 0)) * 3.3, z = j * 2.9;
    if (Math.hypot(x, z) <= GR - 1.5) place(mk("circle", { r: 0.9, class: "dot off" }, g), P(GX + x, D, GZ + z));
  }
  // Two lamps between the keys and the grille, each in its bezel.
  const lamps = [41, 32].map((z) => {
    mk("path", { d: poly(at(circ(2.2, 12), 56, z, D)), class: "nf lo" }, g);
    const el = mk("circle", { r: 1.3, class: "dot off" }, g);
    place(el, P(56, D, z));
    return el;
  });
  // The call button's bezel, flat on the face.
  mk("path", { d: poly(at(circ(CR + 2.2, 24), CX, CZ, D)), class: "nf lo" }, g);

  // Parts: twelve keys, then the call button. Painted far to near: the camera sits off +x, +z.
  const [kr, ki] = rings(-KW / 2, -KH / 2, KW / 2, KH / 2, 2.2, 1.1);
  const parts = NAMES.map((n, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    return { name: "key " + n, x: KX0 + col * PX, z: KZ0 - row * PZ, ring: kr, inner: ki, h: KD, press: PRESS, rest: WORN[i] };
  });
  parts.push({ name: "call", x: CX, z: CZ, ring: circ(CR, 24), inner: circ(CR - 1.1, 24), h: CD, press: CPRESS, rest: 0 });
  parts.forEach((p) => { p.tw = tween(p.rest); p.drawn = NaN; });
  parts.slice().sort((a, b) => a.x * 0.612 + a.z * 0.5 - (b.x * 0.612 + b.z * 0.5)).forEach((p) => { p.el = solid(g); });
  const CALL = parts.length - 1;
  parts[CALL].el.sil.classList.add("hi");

  // The lock panel: a plate sloping back under the hood, a lip on its front edge, the lock in it.
  const slope = (x, v) => { const s = v / Math.hypot(LP, H - ZS); return P(x, D + LP * (1 - s), ZS + (H - ZS) * s); };
  const L = Math.hypot(LP, H - ZS), panel = rrect(0, 0, W, L, 2, 4).map((q) => slope(q.u, q.v));
  const lip = [P(0, D + LP, ZS - 1.6), P(W, D + LP, ZS - 1.6)];
  mk("path", { d: poly(hull(panel.concat(lip))), class: "sil" }, g);
  mk("path", { d: seg(slope(2, 0), slope(W - 2, 0)), class: "nf lo" }, g);
  mk("path", { d: poly(circ(4.2, 16).map((q) => slope(52 + q.u, L * 0.24 + q.v))), class: "nf" }, g);
  mk("path", { d: poly(circ(2.6, 12).map((q) => slope(52 + q.u, L * 0.24 + q.v))), class: "nf lo" }, g);
  mk("path", { d: seg(slope(52, L * 0.24 - 1.4), slope(52, L * 0.24 + 1.4)), class: "nf lo" }, g);

  // The hood: the near side, then the roof over everything.
  put(solid(g), side(W, W + T, W + T));
  const [hr, hi] = rings(-T, 0, W + T, D + HD, 6, 1.6);
  put(solid(g), prism(P, front, hr, hi, H, H + T));

  function draw(p, d) {
    if (d === p.drawn) return;
    p.drawn = d;
    put(p.el, boss(p.ring, p.inner, p.x, p.z, D, D + p.h - d));
  }

  const B = register(stage, (_dt, now) => {
    let moving = false;
    for (const p of parts) { draw(p, tval(p.tw, now)); if (!tdone(p.tw, now)) moving = true; }
    return moving;
  });
  bag.add(B.unregister);

  // Hit test on the rest caps: one plane for the keys' tops, one for the call button's.
  const onKeys = plane(D + KD), onCall = plane(D + CD);
  function hit(pt) {
    const [x, z] = onKeys(pt), col = Math.round((x - KX0) / PX), row = Math.round((KZ0 - z) / PZ);
    if (col >= 0 && col <= 2 && row >= 0 && row <= 3) return row * 3 + col;
    const [cx, cz] = onCall(pt);
    return Math.hypot(cx - CX, cz - CZ) <= CR + 3 ? CALL : -1;
  }
  /** Distance between two parts, in key pitches. */
  const dist = (a, b) => Math.hypot((a.x - b.x) / PX, (a.z - b.z) / PZ);

  let act = -1;
  function setActive(a) {
    if (a === act) return;
    const now = performance.now(), from = parts[a >= 0 ? a : act];
    act = a;
    parts.forEach((p, i) => {
      const r = dist(p, from);
      const near = i === CALL || spread <= 0 ? 0 : PRESS * 0.6 * clamp(1 - (r - 0.6) / spread, 0, 1);
      tset(p.tw, a < 0 ? p.rest : i === a ? p.press : near, now, r * 45);
      p.el.sil.classList.toggle("hi", a < 0 ? i === CALL : i === a);
    });
    lamps[0].classList.toggle("m", a >= 0 && a !== CALL); lamps[0].classList.toggle("off", !(a >= 0 && a !== CALL));
    lamps[1].classList.toggle("m", a === CALL); lamps[1].classList.toggle("off", a !== CALL);
    read.textContent = a < 0 ? "rest" : parts[a].name;
    B.wake();
  }

  bag.add(pointer(stage, { move: (p) => setActive(hit(p)), leave: () => setActive(-1) }));
  bag.add(() => svg.replaceChildren());

  return { set: (v) => { spread = v; }, destroy: bag.dispose };
}

illustration({
  name: "keypad",
  means: "A door keypad and intercom under its hood: the key under the pointer presses in, and its neighbours dip in turn.",
  rules: [1, 2, 5, 9],
  range: [0, 1.4, 2.8],
  tour: [[130, 124], [168, 201], [231, 227], null],
  mount,
});
