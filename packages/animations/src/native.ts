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

import { createAnimations } from "@tamagui/animations-moti";
import type { AnimationDriver } from "@tamagui/web";

export const animations: AnimationDriver = createAnimations({
  "75ms": {
    type: "timing",
    duration: 75
  },
  "100ms": {
    type: "timing",
    duration: 100
  },
  "200ms": {
    type: "timing",
    duration: 200
  },
  "1000ms": {
    type: "timing",
    duration: 1000
  },
  superBouncy: {
    type: "spring",
    damping: 5,
    mass: 0.7,
    stiffness: 200
  },
  bouncy: {
    type: "spring",
    damping: 9,
    mass: 0.9,
    stiffness: 150
  },
  kindaBouncy: {
    type: "spring",
    damping: 16,
    mass: 1,
    stiffness: 25
  },
  superLazy: {
    type: "spring",
    damping: 25,
    mass: 2,
    stiffness: 25
  },
  lazy: {
    type: "spring",
    damping: 18,
    stiffness: 50
  },
  medium: {
    type: "spring",
    damping: 16,
    stiffness: 120,
    mass: 0.8
  },
  slowest: {
    type: "timing",
    duration: 1000
  },
  slower: {
    type: "timing",
    duration: 750
  },
  slow: {
    type: "timing",
    duration: 500
  },
  fast: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250
  },
  tooltip: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100
  },
  faster: {
    type: "spring",
    damping: 20,
    mass: 1,
    stiffness: 250
  },
  fastest: {
    damping: 14,
    mass: 0.1,
    stiffness: 380
  }
} as const);
