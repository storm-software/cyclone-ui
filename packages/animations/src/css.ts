/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

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
