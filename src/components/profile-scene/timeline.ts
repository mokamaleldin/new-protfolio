/** All times are seconds. World coordinates use the artwork's 360 × 424 viewBox. */
export const DURATION = 28;
export const STILL_TIME = 0.8;
export const CHARACTER_SCALE = 0.8;
export const FLOOR = 398;
export const CHAPTERS = [
  { start: 0, end: 3, name: 'welcome' },
  { start: 3, end: 7, name: 'understand' },
  { start: 7, end: 11.4, name: 'analyze' },
  { start: 11.4, end: 15.8, name: 'design' },
  { start: 15.8, end: 22, name: 'build' },
  { start: 22, end: 24.5, name: 'deliver' },
  { start: 24.5, end: 28, name: 'return' },
] as const;

export interface Point { x: number; y: number }
export interface BoneChain { start: Point; joint: Point; end: Point }
export type Attributes = Record<string, Record<string, string | number>>;
const clamp = (n: number, a = 0, b = 1) => Math.max(a, Math.min(b, n));
const smooth = (n: number) => { const x = clamp(n); return x * x * (3 - 2 * x); };
const mix = (a: number, b: number, n: number) => a + (b - a) * n;
const between = (t: number, a: number, b: number) => smooth((t - a) / (b - a));
const rad = Math.PI / 180;
const rotate = (p: Point, angle: number): Point => ({
  x: p.x * Math.cos(angle * rad) - p.y * Math.sin(angle * rad),
  y: p.x * Math.sin(angle * rad) + p.y * Math.cos(angle * rad),
});
const degrees = (a: Point, b: Point) => Math.atan2(b.y - a.y, b.x - a.x) / rad - 90;
const n = (v: number) => Number(v.toFixed(3));
const at = (p: Point, angle = 0) => `translate(${n(p.x)} ${n(p.y)}) rotate(${n(angle)})`;

/** Two-bone IK. Keep the upper/lower lengths fixed, including near full extension. */
export function solveLimb(start: Point, target: Point, upper: number, lower: number, bend: number): BoneChain {
  const dx = target.x - start.x;
  const dy = target.y - start.y;
  const length = Math.hypot(dx, dy) || 0.001;
  const distance = clamp(length, Math.abs(upper - lower) + 0.001, upper + lower - 0.001);
  const ux = dx / length;
  const uy = dy / length;
  const along = (upper * upper - lower * lower + distance * distance) / (2 * distance);
  const across = Math.sqrt(Math.max(0, upper * upper - along * along)) * bend;
  return {
    start,
    joint: { x: start.x + along * ux - across * uy, y: start.y + along * uy + across * ux },
    end: { x: start.x + distance * ux, y: start.y + distance * uy },
  };
}

// Hand modes: open = 0, relaxed = 1, pen/grip = 2, pointing = 3.
interface Pose {
  x: number; y: number; lean: number; head: number; turn: number;
  gazeX: number; gazeY: number; smile: number;
  rx: number; ry: number; lx: number; ly: number;
  rHand: number; lHand: number; rAngle: number; lAngle: number; wave: number;
}
const rest = (x: number, y = 259): Pose => ({
  x, y, lean: 0, head: -1, turn: 0, gazeX: 0, gazeY: 0, smile: 1,
  rx: x - 42, ry: y + 6, lx: x + 42, ly: y + 6,
  rHand: 1, lHand: 1, rAngle: 0, lAngle: 0, wave: 0,
});
const welcome: Pose = {
  ...rest(133), rx: 77, ry: 163, rHand: 0, rAngle: 179, wave: 1,
};
const board = (x: number, y: number, mode = 3): Pose => ({
  ...rest(170), lean: 2, head: -3, turn: 0.8, gazeX: 2, gazeY: 0,
  lx: x, ly: y, lHand: mode, lAngle: -90, smile: 0.25,
});
const work = (mouse = false): Pose => ({
  ...rest(200, 299), lean: -4, head: 8, turn: -0.65, gazeX: -2, gazeY: 3,
  rx: mouse ? 151 : 121, ry: mouse ? 272 : 286,
  lx: 165, ly: 285, rHand: 1, lHand: 1, rAngle: mouse ? 0 : 90, lAngle: 90, smile: 0.3,
});
const note: Pose = {
  ...rest(133), lean: 3, head: 8, turn: -0.3, gazeX: -1, gazeY: 4,
  rx: 99, ry: 250, lx: 117, ly: 262, rHand: 2, lHand: 1,
  rAngle: -8, lAngle: 5, smile: 0.4,
};
const KEYS: { t: number; pose: Pose }[] = [
  { t: 0, pose: welcome }, { t: 2.15, pose: welcome },
  { t: 2.8, pose: rest(133) }, { t: 3.7, pose: note },
  { t: 6.55, pose: note }, { t: 7, pose: rest(133) },
  { t: 8, pose: rest(170) }, { t: 8.5, pose: board(210, 130) },
  { t: 9.3, pose: board(280, 140) }, { t: 10.1, pose: board(255, 167) },
  { t: 10.8, pose: board(253, 169) }, { t: 11.4, pose: board(262, 187, 2) },
  { t: 12.4, pose: board(306, 151, 2) }, { t: 12.65, pose: board(296, 156) },
  { t: 13, pose: board(291, 140, 2) }, { t: 13.8, pose: board(260, 151, 2) },
  { t: 14, pose: board(214, 130, 2) }, { t: 14.6, pose: board(214, 151, 2) },
  { t: 14.8, pose: board(221, 151) }, { t: 15.15, pose: board(290, 151) },
  { t: 15.8, pose: rest(170) }, { t: 17, pose: { ...rest(200), turn: -0.5 } },
  { t: 18, pose: work() }, { t: 20.3, pose: work() },
  { t: 20.7, pose: work(true) }, { t: 22.1, pose: work(true) },
  { t: 23.4, pose: { ...work(true), smile: 1, head: 2, gazeY: 0 } },
  { t: 23.7, pose: { ...work(true), smile: 1, head: 2 } },
  { t: 24.5, pose: rest(200) }, { t: 26, pose: rest(133) },
  { t: 26.6, pose: welcome }, { t: 28, pose: welcome },
];

interface Walk { start: number; end: number; from: number; to: number; steps: number }
export const WALKS: Walk[] = [
  { start: 7, end: 8, from: 133, to: 170, steps: 2 },
  { start: 15.8, end: 17, from: 170, to: 200, steps: 2 },
  { start: 24.5, end: 26, from: 200, to: 133, steps: 4 },
];

/** Stance feet stay fixed in WORLD space. Only the swing foot advances. */
export function walkAt(t: number, walk: Walk) {
  const u = clamp((t - walk.start) / (walk.end - walk.start));
  const stepDuration = 1 / (walk.steps + 1);
  const index = Math.min(walk.steps, Math.floor(u / stepDuration));
  const phase = smooth((u - index * stepDuration) / stepDuration);
  const stride = (walk.to - walk.from) / walk.steps;
  const feet = [{ x: walk.from - 16, y: FLOOR }, { x: walk.from + 16, y: FLOOR }];
  for (let step = 0; step <= index; step++) {
    const side = step % 2;
    const amount = step < index ? 1 : phase;
    const landing = walk.from + Math.min(step + 1, walk.steps) * stride + (side ? 16 : -16);
    feet[side] = {
      x: mix(feet[side].x, landing, amount),
      y: FLOOR - (step === index ? Math.sin(amount * Math.PI) * 7 : 0),
    };
  }
  return {
    x: walk.from + Math.min(index + phase, walk.steps) * stride,
    bob: -Math.sin(phase * Math.PI) * 1.2,
    feet,
    swing: Math.sin((index + phase) * Math.PI) * 7,
  };
}

export function sampleScene(seconds: number) {
  const t = ((seconds % DURATION) + DURATION) % DURATION;
  let end = KEYS.findIndex((key) => key.t > t);
  if (end < 1) end = KEYS.length - 1;
  const a = KEYS[end - 1]; const b = KEYS[end];
  const u = between(t, a.t, b.t);
  const pose = Object.fromEntries(Object.keys(a.pose).map((key) => [key,
    mix(a.pose[key as keyof Pose], b.pose[key as keyof Pose], u),
  ])) as unknown as Pose;
  const walk = WALKS.find((clip) => t >= clip.start && t < clip.end);
  let feet: Point[] = [{ x: pose.x - 16, y: FLOOR }, { x: pose.x + 16, y: FLOOR }];
  if (walk) {
    const motion = walkAt(t, walk);
    const dx = motion.x - pose.x;
    pose.x = motion.x; pose.y += motion.bob;
    pose.rx += dx + motion.swing; pose.lx += dx - motion.swing;
    pose.lean += motion.swing * 0.16;
    feet = motion.feet;
  }
  pose.lean += Math.sin(t * Math.PI / 2) * 0.22;
  if (t > 4 && t < 6.5) {
    const writing = Math.sin((t - 4) * Math.PI * 4);
    pose.rx += writing * 1.6; pose.ry += Math.cos((t - 4) * Math.PI * 4) * 0.7;
    pose.head += Math.sin((t - 4) * 2) * 1.5;
  }
  if (t > 18.3 && t < 20.2) {
    pose.ry += Math.sin(t * 16) * 1.2; pose.ly -= Math.sin(t * 16) * 1.2;
    pose.head += Math.sin(t * 4) * 0.5;
  }
  if (t > 22.2 && t < 23.2) pose.head += Math.sin((t - 22.2) * Math.PI * 2) * 4;
  const local = (p: Point): Point => ({ x: (p.x - pose.x) / CHARACTER_SCALE, y: (p.y - pose.y) / CHARACTER_SCALE });
  const arms = [-1, 1].map((side, i) => {
    const start = rotate({ x: side * 42, y: -104 }, pose.lean);
    const target = local(i ? { x: pose.lx, y: pose.ly } : { x: pose.rx, y: pose.ry });
    const pole = (p: Pose) => i ? (p.turn > 0.4 ? 1 : -1) : (p.wave > 0.3 || p.y > 270 && p.rAngle > 45 ? -1 : 1);
    const first = solveLimb(start, target, 68, 70, pole(a.pose));
    if (pole(a.pose) === pole(b.pose)) return first;
    // Rotate through an elbow-pole change during the reach, never snap to its
    // mirrored IK solution. Bone lengths remain fixed during this transition.
    const keySolution = (p: Pose) => {
      const shoulder = rotate({ x: side * 42, y: -104 }, p.lean + Math.sin(t * Math.PI / 2) * 0.22);
      const wrist = { x: ((i ? p.lx : p.rx) - p.x) / CHARACTER_SCALE, y: ((i ? p.ly : p.ry) - p.y) / CHARACTER_SCALE };
      return solveLimb(shoulder, wrist, 68, 70, pole(p));
    };
    const from = keySolution(a.pose);
    const second = keySolution(b.pose);
    const turn = (from: number, to: number) => from + (((to - from + 540) % 360) - 180) * u;
    const upper = turn(degrees(from.start, from.joint), degrees(second.start, second.joint));
    const lower = turn(degrees(from.joint, from.end), degrees(second.joint, second.end));
    const upperVector = rotate({ x: 0, y: 68 }, upper);
    const lowerVector = rotate({ x: 0, y: 70 }, lower);
    const joint = { x: start.x + upperVector.x, y: start.y + upperVector.y };
    return { start, joint, end: { x: joint.x + lowerVector.x, y: joint.y + lowerVector.y } };
  });
  const legs = [-1, 1].map((side, i) => solveLimb({ x: side * 15, y: 0 }, local(feet[i]), 84, 92, 1));
  const blink = [2.6, 5.2, 8.1, 10.9, 14.2, 17.8, 20.7, 23.2, 25.7]
    .reduce((value, time) => Math.max(value, Math.max(0, 1 - Math.abs(t - time) / 0.09)), 0);
  const cardReset = t >= 27.6;
  const cards = [
    { x: 230, y: mix(130, 151, cardReset ? 0 : between(t, 14, 14.6)) },
    { x: mix(307, 276, cardReset ? 0 : between(t, 13, 13.8)), y: mix(140, 151, cardReset ? 0 : between(t, 13, 13.8)) },
    { x: mix(278, 322, cardReset ? 0 : between(t, 11.4, 12.4)), y: mix(187, 151, cardReset ? 0 : between(t, 11.4, 12.4)) },
  ];
  const camera = t < 3.8 ? mix(2.1, 1.1, between(t, 2.2, 3.8))
    : t < 24.5 ? 1.1 + 0.1 * between(t, 16.5, 18) * (1 - between(t, 23.7, 24.5))
      : mix(1.1, 2.1, between(t, 26, 27.6));
  const close = clamp(camera - 1.1);
  const cameraX = mix(-18, -80, close);
  const cameraY = mix(-22, -143.66, close);
  return { t, pose, feet, arms, legs, blink, cards, camera, cameraX, cameraY,
    chapter: CHAPTERS.find((chapter) => t >= chapter.start && t < chapter.end)!.name };
}

export function sceneAttributes(seconds: number): Attributes {
  const f = sampleScene(seconds); const { t, pose } = f;
  const wave = pose.wave * Math.sin(t * Math.PI * 3) * 7;
  const attrs: Attributes = {
    camera: { transform: `translate(${n(f.cameraX)} ${n(f.cameraY)}) scale(${n(f.camera)})` },
    character: { transform: `translate(${n(pose.x)} ${n(pose.y)}) scale(${CHARACTER_SCALE})` },
    torso: { transform: `rotate(${n(pose.lean)})` },
    head: { transform: `translate(0 -143) rotate(${n(pose.head)})` },
    features: { transform: `translate(${n(pose.turn * 3.5)} 0) scale(${n(1 - Math.abs(pose.turn) * 0.06)} 1)` },
    'ear-r': { opacity: n(1 - Math.max(0, pose.turn) * 0.4) },
    'ear-l': { opacity: n(1 + Math.min(0, pose.turn) * 0.4) },
    'eye-r': { transform: `translate(-11 -5) scale(1 ${n(1 - f.blink * 0.95)})` },
    'eye-l': { transform: `translate(11 -5) scale(1 ${n(1 - f.blink * 0.95)})` },
    'pupil-r': { transform: `translate(${n(pose.gazeX * 0.45)} ${n(pose.gazeY * 0.22)})` },
    'pupil-l': { transform: `translate(${n(pose.gazeX * 0.45)} ${n(pose.gazeY * 0.22)})` },
    mouth: { d: `M-9 ${n(17 - pose.smile * 2)} Q0 ${n(18 + pose.smile * 2)} 9 ${n(16.8 - pose.smile * 2)}` },
    'brow-r': { transform: `translate(0 ${n(-pose.smile * 0.35)}) rotate(${n(-pose.gazeY * 0.25)} -11 -15)` },
    'brow-l': { transform: `translate(0 ${n(-pose.smile * 0.35)})` },
    'ground-shadow': { transform: `translate(${n(pose.x)} 401) scale(${n(1 - (299 - pose.y) * 0.002)} 1)` },
    'note-1': { opacity: between(t, 4.2, 4.7) * (1 - between(t, 26.7, 27.1)) },
    'note-2': { opacity: between(t, 5, 5.5) * (1 - between(t, 26.7, 27.1)) },
    'note-3': { opacity: between(t, 5.8, 6.3) * (1 - between(t, 26.7, 27.1)) },
    'broken-flow': { opacity: (1 - between(t, 11, 11.4)) + between(t, 27.5, 27.6) },
    bottleneck: { opacity: between(t, 8.7, 9.2) * (1 - between(t, 11.1, 11.5)), transform: `translate(280 170) scale(${n(1 + Math.sin(t * 5) * 0.08)})` },
    'flow-1': { strokeDashoffset: n(100 * (1 - between(t, 14.65, 15))), opacity: t < 27.6 ? 1 : 0 },
    'flow-2': { strokeDashoffset: n(100 * (1 - between(t, 14.95, 15.15))), opacity: t < 27.6 ? 1 : 0 },
    'arrow-1': { opacity: between(t, 14.9, 15.05) * (1 - between(t, 27.5, 27.6)) },
    'arrow-2': { opacity: between(t, 15.1, 15.2) * (1 - between(t, 27.5, 27.6)) },
    'client-screen': { opacity: 1 - between(t, 17.5, 18) + between(t, 26.8, 27.4) },
    'build-screen': { opacity: between(t, 17.5, 18) * (1 - between(t, 26.8, 27.4)) },
    'screen-panel-1': { opacity: between(t, 18.4, 18.9) },
    'screen-panel-2': { opacity: between(t, 19.1, 19.7) },
    'screen-panel-3': { opacity: between(t, 20, 20.4), transform: `translate(${n(5 * (1 - between(t, 21, 21.5)))} 0)` },
    'screen-cursor': { transform: `translate(${n(mix(92, 106, between(t, 20.6, 21.3)))} ${n(mix(245, 235, between(t, 20.6, 21.3)))})`, opacity: between(t, 20.3, 20.7) * (1 - between(t, 21.8, 22.2)) },
    delivered: { opacity: between(t, 22, 22.35) * (1 - between(t, 26.8, 27.4)) },
  };
  f.cards.forEach((card, i) => { attrs[`card-${i}`] = { transform: at(card) }; });
  ['r', 'l'].forEach((side, i) => {
    const arm = f.arms[i]; const leg = f.legs[i];
    attrs[`arm-${side}-upper`] = { transform: at(arm.start, degrees(arm.start, arm.joint)) };
    attrs[`arm-${side}-forearm`] = { transform: at(arm.joint, degrees(arm.joint, arm.end)) };
    attrs[`hand-${side}`] = { transform: at(arm.end, (i ? pose.lAngle : pose.rAngle + wave)) };
    for (let mode = 0; mode < 4; mode++) attrs[`hand-${side}-${mode}`] = { opacity: n(Math.max(0, 1 - Math.abs((i ? pose.lHand : pose.rHand) - mode))) };
    attrs[`leg-${side}-upper`] = { transform: at(leg.start, degrees(leg.start, leg.joint)) };
    attrs[`leg-${side}-lower`] = { transform: at(leg.joint, degrees(leg.joint, leg.end)) };
    attrs[`shoe-${side}`] = { transform: at(leg.end) };
    attrs[`contact-${side}`] = { transform: `translate(${n(f.feet[i].x)} 400)`, opacity: n(clamp(1 - (FLOOR - f.feet[i].y) / 7)) };
  });
  return attrs;
}
