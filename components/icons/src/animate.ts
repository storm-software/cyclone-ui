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

/**
 * Evaluates the SVG animations of an icon at a point in time.
 *
 * @remarks
 * `react-native-svg` does not run `<animate>` elements, so the animations are sampled in JavaScript and applied as props. Only the subset used by line-md is supported: time offsets for `begin`, linear interpolation with optional `keyTimes`, `fill="freeze"`, and indefinite repeats. A time of `Infinity` gives the final frame, with repeating animations at rest.
 */

import type { IconAnimation, IconElement } from "./types";

type Value = number | string;

const NUMBER = /-?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?/gi;

const round = (value: number) => Math.round(value * 1000) / 1000;

/**
 * Interpolate between two values. Strings (path data, transform lists) are interpolated number by number when they have the same shape; otherwise the value switches at the end.
 */
function interpolate(from: Value, to: Value, progress: number): Value {
  if (typeof from === "number" && typeof to === "number") {
    return round(from + (to - from) * progress);
  }

  const fromNumbers = String(from).match(NUMBER) ?? [];
  const toNumbers = String(to).match(NUMBER) ?? [];
  const parts = String(from).split(NUMBER);
  if (
    fromNumbers.length !== toNumbers.length ||
    parts.join(" ") !== String(to).split(NUMBER).join(" ")
  ) {
    return progress < 1 ? from : to;
  }

  return parts
    .map((part, index) => {
      if (index >= fromNumbers.length) {
        return part;
      }
      const start = Number(fromNumbers[index]);

      return `${part}${round(start + (Number(toNumbers[index]) - start) * progress)}`;
    })
    .join("");
}

/**
 * The value of an animation at `time` seconds, or `underlying` when it has no effect.
 */
export function sample(
  animation: IconAnimation,
  time: number,
  underlying: Value | undefined
): Value | undefined {
  const { begin = 0, dur, values, keyTimes, repeat, freeze } = animation;
  if (time < begin) {
    return underlying;
  }
  if (dur === undefined) {
    return values[0];
  }

  let elapsed = time - begin;
  if (elapsed >= dur) {
    if (repeat) {
      if (!Number.isFinite(time)) {
        return underlying;
      }
      elapsed %= dur;
    } else if (freeze) {
      elapsed = dur;
    } else {
      return underlying;
    }
  }

  const frames =
    values.length === 1 ? [underlying ?? values[0]!, values[0]!] : values;
  const times =
    keyTimes ?? frames.map((_, index) => index / (frames.length - 1));
  const progress = dur > 0 ? elapsed / dur : 1;

  let index = 0;
  while (index < frames.length - 2 && progress >= times[index + 1]!) {
    index++;
  }
  const span = times[index + 1]! - times[index]!;

  return interpolate(
    frames[index]!,
    frames[index + 1]!,
    span > 0 ? Math.min((progress - times[index]!) / span, 1) : 1
  );
}

/**
 * The props of an element at `time` seconds, with its animations applied.
 *
 * @remarks
 * Animations are listed by `begin` (the SVG priority order), so a later one builds on, or replaces, the value of an earlier one.
 */
export function animatedProps(
  element: IconElement,
  time: number
): Record<string, Value> {
  const props: Record<string, Value> = { ...element.props };

  for (const animation of element.animations ?? []) {
    if (animation.transform) {
      const value = sample(animation, time, undefined);
      if (value !== undefined) {
        props.transform = `${animation.transform}(${value})`;
      }
    } else {
      const value = sample(animation, time, props[animation.prop]);
      if (value !== undefined) {
        props[animation.prop] = value;
      }
    }
  }

  if (element.origin && props.transform !== undefined) {
    const [x, y] = element.origin;
    props.transform = `translate(${x} ${y}) ${props.transform} translate(${-x} ${-y})`;
  }

  return props;
}

/**
 * The time, in seconds, after which the elements no longer change. `Infinity` if any animation repeats.
 */
export function animationDuration(elements: IconElement[]): number {
  let end = 0;
  for (const element of elements) {
    for (const animation of element.animations ?? []) {
      if (animation.repeat) {
        return Infinity;
      }
      end = Math.max(end, (animation.begin ?? 0) + (animation.dur ?? 0));
    }
    end = Math.max(end, animationDuration(element.children ?? []));
  }

  return end;
}
