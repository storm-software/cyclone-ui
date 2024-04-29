import { createAnimations } from "@tamagui/animations-css";
import type { AnimationDriver } from "@tamagui/web";

const smoothBezier = "cubic-bezier(0.215, 0.610, 0.355, 1.000)";
export const animations: AnimationDriver = createAnimations({
  "75ms": "ease-in 75ms",
  "100ms": "ease-in 100ms",
  "200ms": "ease-in 200ms",
  bouncy: "ease-in 200ms",
  superBouncy: "ease-in 500ms",
  lazy: "ease-in 1000ms",
  medium: "ease-in 300ms",
  slow: "ease-in 500ms",
  fast: `${smoothBezier} 400ms`,
  faster: `${smoothBezier} 300ms`,
  fastest: `${smoothBezier} 200ms`,
  tooltip: "ease-in 400ms"
});
