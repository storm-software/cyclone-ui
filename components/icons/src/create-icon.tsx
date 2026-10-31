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

import type { FontSizeTokens } from "@tamagui/core";
import { getVariableValue } from "@tamagui/core";
import type { IconProps as TamaguiIconProps } from "@tamagui/helpers-icon";
import { themed } from "@tamagui/helpers-icon";
import type { ComponentType, FC, ReactNode } from "react";
import { memo, useEffect, useId, useState } from "react";
import type { ViewStyle } from "react-native";
import { AccessibilityInfo, StyleSheet } from "react-native";
import type { NumberProp, SvgProps } from "react-native-svg";
import { Circle, Defs, G, Mask, Path, Rect, Svg } from "react-native-svg";
import { animatedProps, animationDuration } from "./animate";
import type {
  IconComponent,
  IconElement,
  IconProps,
  IconSize,
  IconVariant,
  IconVariants
} from "./types";

/**
 * The props received by the inner icon component, after `themed` has resolved theme and token values.
 */
type ResolvedIconProps = SvgProps &
  Pick<IconProps, "variant" | "animated" | "mirrored"> & {
    size?: NumberProp;
    strokeWidth?: NumberProp;
  };

/**
 * Resolve an icon `size` prop to the value expected by `themed` from `@tamagui/helpers-icon`.
 *
 * @remarks
 * `themed` treats every string size as a font size token. This resolves `size` tokens (and token variables) to their pixel value first, so `size="4xl"` renders at the `4xl` size token. Strings that are not `size` tokens are passed through as font size tokens.
 *
 * @param size - The icon size prop.
 * @returns The pixel size, a font size token, or `undefined` for the default size.
 */
export function resolveIconSize(
  size: IconSize | boolean | null | undefined
): number | FontSizeTokens | undefined {
  if (size === undefined || size === null || size === false) {
    return undefined;
  }
  if (typeof size === "number") {
    return size;
  }

  // Tamagui v3 spells the default size as the boolean `true`
  const key =
    size === true
      ? "true"
      : typeof size === "string" && size.startsWith("$")
        ? size.slice(1)
        : size;

  const value = getVariableValue(key, "size");
  if (typeof value === "number") {
    return value;
  }

  return typeof size === "string" ? size : undefined;
}

/**
 * The variants tried, in order, when an icon does not have the requested one: same fill first, then same looping.
 */
const VARIANT_FALLBACKS: Record<IconVariant, IconVariant[]> = {
  regular: ["regular", "loop", "filled", "filled-loop"],
  loop: ["loop", "regular", "filled-loop", "filled"],
  filled: ["filled", "filled-loop", "regular", "loop"],
  "filled-loop": ["filled-loop", "filled", "loop", "regular"]
};

const ELEMENTS = {
  circle: Circle,
  defs: Defs,
  g: G,
  mask: Mask,
  path: Path,
  rect: Rect
} as unknown as Record<
  IconElement["type"],
  ComponentType<{ children?: ReactNode }>
>;

/**
 * Web-only CSS transition for the icon color (not part of React Native's style types).
 */
const COLOR_TRANSITION = {
  transition: "color 200ms"
} as unknown as ViewStyle;

function renderElements(
  elements: IconElement[],
  time: number,
  idPrefix: string
): ReactNode[] {
  return elements.map((element, index) => {
    const Element = ELEMENTS[element.type];
    const props = animatedProps(element, time);
    if (props.id !== undefined) {
      props.id = `${idPrefix}${props.id}`;
    }
    if (props.mask !== undefined) {
      props.mask = `url(#${idPrefix}${props.mask})`;
    }

    return (
      // eslint-disable-next-line react/no-array-index-key -- generated elements are never reordered
      <Element key={index} {...props}>
        {element.children && renderElements(element.children, time, idPrefix)}
      </Element>
    );
  });
}

/**
 * The animation time, in seconds, of an icon's elements, or `Infinity` (the final frame) when not animating.
 *
 * @remarks
 * The elements of a mounted body never change: the body is keyed by variant, so a new variant remounts and restarts at 0.
 */
function useAnimationTime(elements: IconElement[], animated: boolean) {
  const [duration] = useState(() => animationDuration(elements));
  // Server and client both start at 0, so hydration matches
  const play = animated && duration > 0;
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!play) {
      return;
    }
    if (typeof requestAnimationFrame !== "function") {
      // No frame clock (for example a test renderer): show the final frame
      const timeout = setTimeout(() => setTime(Infinity), 0);

      return () => clearTimeout(timeout);
    }

    let active = true;
    let frame = 0;
    let start: number | undefined;
    // ponytail: one requestAnimationFrame loop and re-render per icon; share a ticker or move to native-driven animations if many loops run at once
    const tick = (now: number) => {
      start ??= now;
      const elapsed = (now - start) / 1000;
      if (elapsed >= duration) {
        setTime(Infinity);
        return;
      }
      setTime(elapsed);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    AccessibilityInfo.isReduceMotionEnabled().then(
      reduce => {
        if (reduce && active) {
          cancelAnimationFrame(frame);
          setTime(Infinity);
        }
      },
      () => undefined
    );

    return () => {
      active = false;
      cancelAnimationFrame(frame);
    };
  }, [duration, play]);

  return play ? time : Infinity;
}

/**
 * Create a themed Tamagui icon component from the SVG elements of each of its variants.
 *
 * @remarks
 * The elements are drawn on a 24×24 grid. `currentColor` paints with the resolved `color`, and the SVG animations are played with `requestAnimationFrame`, so the icon animates the same way on web and React Native. The `strokeWidth` prop supplied by `themed` is ignored.
 *
 * @param displayName - The display name of the icon component.
 * @param variants - The SVG elements of the icon for each variant it has.
 * @returns The themed icon component.
 */
export function createIcon(
  displayName: string,
  variants: IconVariants
): IconComponent {
  const IconBody = ({
    elements,
    animated
  }: {
    elements: IconElement[];
    animated: boolean;
  }) => {
    const time = useAnimationTime(elements, animated);
    const idPrefix = `${useId().replace(/[^\w-]/g, "")}-`;

    return <>{renderElements(elements, time, idPrefix)}</>;
  };

  const Icon = memo(function Icon(props: ResolvedIconProps) {
    const {
      color = "black",
      size = 24,
      variant = "regular",
      animated = true,
      mirrored = false,
      strokeWidth: _strokeWidth,
      style,
      ...otherProps
    } = props;

    const resolvedVariant =
      VARIANT_FALLBACKS[variant]?.find(name => variants[name]) ??
      VARIANT_FALLBACKS.regular.find(name => variants[name])!;
    // Keyed by variant, so a new variant draws itself in
    const body = (
      <IconBody
        key={resolvedVariant}
        elements={variants[resolvedVariant]!}
        animated={animated}
      />
    );

    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color={color}
        {...otherProps}
        style={{
          ...COLOR_TRANSITION,
          overflow: "visible",
          ...StyleSheet.flatten(style)
        }}>
        {mirrored ? <G transform="matrix(-1 0 0 1 24 0)">{body}</G> : body}
      </Svg>
    );
  });

  Icon.displayName = displayName;

  const ThemedIcon = themed(Icon as unknown as FC<TamaguiIconProps>);

  const SizedIcon = ((props: IconProps) => (
    <ThemedIcon
      {...(props as TamaguiIconProps)}
      size={resolveIconSize(props.size)}
    />
  )) as IconComponent;
  SizedIcon.displayName = displayName;

  // Keep the static config added by `themed` so `styled()` works with the icon
  (SizedIcon as unknown as Record<string, unknown>).staticConfig = (
    ThemedIcon as unknown as Record<string, unknown>
  ).staticConfig;

  return SizedIcon;
}
