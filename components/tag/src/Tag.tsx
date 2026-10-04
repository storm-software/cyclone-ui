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

import { HeadingExtraSmallText } from "@cyclone-ui/heading-text";
import { X } from "@cyclone-ui/icons";
import { AnimatePresence } from "@tamagui/animate-presence";
import type {
  ColorTokens,
  FontSizeTokens,
  GetProps,
  SizeTokens,
  Variable
} from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  useThemeName,
  View
} from "@tamagui/core";
import { getFontSize } from "@tamagui/font-size";
import { getFontSized } from "@tamagui/get-font-sized";
import { withStaticProperties } from "@tamagui/helpers";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import { useCallback, useRef, useState } from "react";

export type TagSize = SizeTokens | number;

export type TagVariant = "primary" | "secondary";

export interface TagContextProps {
  /**
   * The size of the tag
   *
   * @defaultValue true
   */
  size: TagSize;

  /**
   * Should the tag have an outlined style
   *
   * @defaultValue false
   */
  outlined: boolean;

  /**
   * The variant style of the tag
   *
   * @defaultValue "primary"
   */
  variant: TagVariant;

  /**
   * Should the tag have a circular shape
   *
   * @defaultValue false
   */
  circular: boolean;

  /**
   * Should the tag's left and right sides be fully rounded
   *
   * @defaultValue false
   */
  rounded: boolean;

  /**
   * Should the tag be pressable
   *
   * @defaultValue false
   */
  pressable: boolean;
}

const TagContext = createStyledContext(
  {
    size: true,
    outlined: false,
    variant: "primary",
    pressable: false,
    circular: false,
    rounded: false
  },
  {
    keys: ["size", "outlined", "pressable", "circular", "rounded", "variant"]
  }
);

const TAG_NAME = "Tag";

interface TagTokens {
  size: object;
  space: object;
}

// v2 `"...size"` variants only ran for keys of the size token scale, so every
// other value (numbers, the `true` default) left the base styles untouched.
const isSizeToken = (val: unknown, tokens: TagTokens): val is string =>
  typeof val === "string" && val in tokens.size;

const getSpaceToken = (val: string, tokens: TagTokens) =>
  (tokens.space as Record<string, Variable<number> | undefined>)[val];

const getSpaceValue = (val: string, tokens: TagTokens): number =>
  Number(getSpaceToken(val, tokens)?.val ?? 0);

// The theme color a variant fills (or, when outlined, draws) the tag with.
const getVariantColor = (variant: TagVariant | undefined) =>
  variant === "secondary" ? "muted" : "accent";

// Outlined tags draw the text in the variant color, filled ones in the
// matching `on*` color (`onAccent` / `onMuted`).
const getTextColor = (
  variant: TagVariant | undefined,
  outlined: boolean | undefined
) => {
  const variantColor = getVariantColor(variant);

  return outlined
    ? variantColor
    : variantColor === "muted"
      ? "onMuted"
      : "onAccent";
};

const TagFrame = styled(View, {
  displayName: TAG_NAME,
  context: TagContext,

  flexDirection: "row",
  width: "fit-content",
  boxShadow: "none",
  borderRadius: "button",
  paddingHorizontal: "3xl",
  paddingVertical: "lg",
  justifyContent: "center",
  alignItems: "center",

  variants: {
    circular: {
      true: {
        borderRadius: 1000_000_000
      }
    },

    // Styled by the `.resolve` below because the colors depend on `variant`,
    // `outlined` and `pressable` together.
    variant: styled.dynamic<TagVariant>(),
    outlined: styled.dynamic<boolean>(),

    size: styled.dynamic<TagSize>((val, { tokens }) => {
      const matched = isSizeToken(val, tokens);

      return {
        paddingHorizontal: matched ? getSpaceToken(val, tokens) : undefined,
        paddingVertical: matched ? getSpaceValue(val, tokens) * 0.2 : undefined
      };
    }),

    pressable: {
      true: {
        tabIndex: 0,
        role: "button",
        boxShadow: "focus-visible:ringOffset",
        // Clips the press ripple to the tag's shape.
        position: "relative",
        overflow: "hidden"
      }
    }
  } as const,
  defaultVariants: {
    variant: "primary",
    outlined: false,
    pressable: false
  }
}).resolve(({ variant, outlined, pressable }) => {
  // Each property is returned whole (with its `hover:` clause): an
  // unconditional resolver value replaces every lower-tier value for that
  // property, including a variant's conditional ones.
  const color = getVariantColor(variant as TagVariant | undefined);

  if (outlined) {
    return {
      backgroundColor: pressable
        ? "transparent hover:mutedHover"
        : "transparent",
      borderColor: pressable ? `${color} hover:${color}Hover` : color,
      borderWidth: 2
    };
  }

  return {
    backgroundColor: pressable ? `${color} hover:mutedHover` : color
  };
});

// No `context: TagContext`: a styled context merges every value into the
// frame's props, so the tag's `variant` ("primary") would replace
// HeadingText's own `variant` ("base") and drop its font family. `TagText`
// reads the context and passes `size` explicitly instead.
const TagTextFrame = styled(HeadingExtraSmallText, {
  displayName: TAG_NAME,
  render: "span",
  color: "onAccent",
  variants: {
    // v2 `"...fontSize"`: only font size keys (including the `true` default,
    // which the font scale carries as its own `true` key) restyle the text.
    size: styled.dynamic<FontSizeTokens | number>((val, env) =>
      val === true ||
      (typeof val === "string" && !!env.font && val in env.font.size)
        ? getFontSized(val === true ? ("true" as FontSizeTokens) : val, env)
        : undefined
    )
  } as const
});

const TagText = createStyledHOC(
  TagTextFrame,
  ({ children, color, size, ...props }, forwardedRef) => {
    const context = TagContext.useStyledContext();
    const themeColor = getTextColor(
      context.variant as TagVariant | undefined,
      context.outlined
    );
    const baseColor = color ?? themeColor;

    return (
      <TagTextFrame
        ref={forwardedRef}
        {...props}
        size={size ?? context.size}
        color={
          // A caller-authored `hover:` clause wins, like v2's caller `hoverStyle`.
          context.pressable &&
          typeof baseColor === "string" &&
          !baseColor.includes("hover:")
            ? `${baseColor} hover:${themeColor}Hover`
            : baseColor
        }>
        {children}
      </TagTextFrame>
    );
  },
  {
    displayName: TAG_NAME
  }
);

interface TagIconProps {
  color?: ColorTokens | string;
  scaleIcon?: number;
  size?: SizeTokens;
  children: React.ReactNode;
}

const TagIconFrame = styled(View, {
  displayName: TAG_NAME,
  context: TagContext,

  variants: {
    size: styled.dynamic<TagSize>((val, { tokens }) => {
      const padding = isSizeToken(val, tokens)
        ? getSpaceValue(val, tokens) * 0.25
        : undefined;

      return {
        paddingHorizontal: padding,
        paddingVertical: padding
      };
    })
  }
});

const TagIcon = createStyledHOC(
  TagIconFrame,
  (props: GetProps<typeof TagIconFrame> & TagIconProps, ref) => {
    const { children, scaleIcon = 0.7, size, color, ...rest } = props;
    const chipContext = TagContext.useStyledContext();
    const finalSize = size || chipContext.size;

    const iconSize =
      (typeof finalSize === "number"
        ? finalSize * 0.5
        : getFontSize(finalSize as FontSizeTokens)) * scaleIcon;

    const getThemedIcon = useGetThemedIcon({
      size: iconSize,
      color: color as any
    });

    return (
      <TagIconFrame ref={ref} {...rest}>
        {getThemedIcon(children)}
      </TagIconFrame>
    );
  }
);

type TagPressEvent = Parameters<
  NonNullable<GetProps<typeof View>["onPress"]>
>[0];

/** Removes a ripple just after its 600ms `transition` has finished. */
const RIPPLE_LIFETIME_MS = 650;

interface TagRippleCircle {
  /** The circle's diameter before it scales: the frame's longer side. */
  size: number;
  /** The circle's top-left corner, placing its center on the press point. */
  x: number;
  y: number;
}

// Rendered before the tag's children: positioned children such as
// `Tag.Button` stay above it, and over the text it is the text's own color.
const TagRippleFrame = styled(View, {
  displayName: TAG_NAME,
  position: "absolute",
  pointerEvents: "none",
  borderRadius: 1000_000_000,
  // Mounts as a dot on the press point and grows to 2.6x the frame's longer
  // side while it fades out. Naming `enter`, as `InputSeparator` does, keeps
  // `createComponent` off its `avoidReRenders` path for the mount animation.
  transition: {
    duration: "600ms",
    easing: "ease-out",
    enter: "600ms ease-out"
  },
  // Not `enter:0`: the motion driver animates the transform string with WAAPI,
  // and a `scale(0)` matrix is singular, so the browser flips it to 2.6 halfway
  // through instead of interpolating.
  scale: "2.6 enter:0.001",
  opacity: "0 enter:0.3"
});

/** The parts of a web `click` event a ripple is placed from. */
interface TagRippleClick {
  currentTarget: {
    offsetWidth: number;
    offsetHeight: number;
    getBoundingClientRect?: () => {
      left: number;
      top: number;
      width: number;
      height: number;
    };
  } | null;
  clientX: number;
  clientY: number;
  detail: number;
}

/**
 * The ripple circle for a press, in the frame's own coordinates. Needs the
 * pressed DOM element (web): other press events add no ripple.
 */
const getRippleCircle = (event: TagPressEvent): TagRippleCircle | undefined => {
  const { currentTarget, clientX, clientY, detail } =
    event as unknown as TagRippleClick;
  if (!currentTarget?.getBoundingClientRect) {
    return undefined;
  }

  const rect = currentTarget.getBoundingClientRect();
  const { offsetWidth: width, offsetHeight: height } = currentTarget;
  const size = Math.max(width, height);
  // A keyboard click (`detail` 0) has no pointer position, so its ripple
  // starts from the center. The client rect includes any transform (such as
  // `Tag.Button`'s `x` offset), so the pointer offset is mapped back to the
  // untransformed frame.
  const pointer = detail > 0;
  const centerX = pointer
    ? ((clientX - rect.left) * width) / rect.width
    : width / 2;
  const centerY = pointer
    ? ((clientY - rect.top) * height) / rect.height
    : height / 2;

  return { size, x: centerX - size / 2, y: centerY - size / 2 };
};

/**
 * Press ripples that each remove themselves once their animation ends.
 * `ripples` renders them in `color`; `onPress` adds one, then calls the
 * caller's `onPress`.
 */
const useTagRipples = (
  color: ColorTokens,
  onPress: ((event: TagPressEvent) => void) | null | undefined
) => {
  const [circles, setCircles] = useState<(TagRippleCircle & { id: number })[]>(
    []
  );
  const nextIdRef = useRef(0);

  const handlePress = useCallback(
    (event: TagPressEvent) => {
      const circle = getRippleCircle(event);
      if (circle) {
        const id = nextIdRef.current++;
        setCircles(prev => [...prev, { ...circle, id }]);
        setTimeout(
          () => setCircles(prev => prev.filter(ripple => ripple.id !== id)),
          RIPPLE_LIFETIME_MS
        );
      }

      onPress?.(event);
    },
    [onPress]
  );

  const ripples = circles.map(({ id, size, x, y }) => (
    <TagRippleFrame
      key={id}
      width={size}
      height={size}
      left={x}
      top={y}
      backgroundColor={color}
    />
  ));

  return { ripples, onPress: handlePress };
};

const TagButtonFrame = styled(View, {
  displayName: TAG_NAME,
  context: TagContext,
  tabIndex: 0,
  role: "button",
  // Clips the press ripple to the circle.
  position: "relative",
  overflow: "hidden",
  borderRadius: 1000_000_000,
  // No `press:` background color: a press draws a ripple from the press
  // point instead.
  backgroundColor: "accent hover:mutedHover focus:surfaceElevated",
  justifyContent: "center",
  alignItems: "center",
  borderColor: "hover:accentHover",
  variants: {
    size: styled.dynamic<TagSize>(),
    // Styled by the `.resolve` below because the offset depends on `size`.
    alignRight: styled.dynamic<boolean>(),
    alignLeft: styled.dynamic<boolean>()
  } as const
}).resolve(({ size, alignRight, alignLeft }, { tokens }) => {
  const getOffset = (factor: number) => {
    if (typeof size === "number") {
      return size * factor;
    }

    return isSizeToken(size, tokens)
      ? getSpaceValue(size, tokens) * factor
      : undefined;
  };

  return {
    x: alignLeft ? getOffset(-0.55) : alignRight ? getOffset(0.55) : undefined
  };
});

const TagButton = createStyledHOC(
  TagButtonFrame,
  ({ children, onPress, ...props }, forwardedRef) => {
    // `accent` shows on both backgrounds a press lands on: `mutedHover` under
    // a pointer and `surfaceElevated` once the press focuses the button.
    const ripple = useTagRipples("accent", onPress);

    return (
      <TagButtonFrame ref={forwardedRef} {...props} onPress={ripple.onPress}>
        {ripple.ripples}
        {children}
      </TagButtonFrame>
    );
  },
  {
    displayName: TAG_NAME
  }
);

// A native `<button>` on web, so Enter and Space remove the tag.
const TagRemoveButtonFrame = styled(View, {
  displayName: TAG_NAME,
  render: "button",
  role: "button",
  cursor: "pointer",
  borderWidth: 0,
  padding: 0,
  marginLeft: "md",
  // No hover background: hovering (or focusing) the button turns the whole
  // tag to the `danger` theme instead.
  backgroundColor: "transparent",
  borderRadius: 1000_000_000,
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "focus-visible:ringOffset"
});

/** The remove button `Tag` renders after its children when `removable`. */
const TagRemoveButton = createStyledHOC(
  TagRemoveButtonFrame,
  ({ onPress, ...props }, forwardedRef) => {
    const { variant, outlined } = TagContext.useStyledContext();

    return (
      <TagRemoveButtonFrame
        ref={forwardedRef}
        {...props}
        onPress={event => {
          // Keeps the press from also pressing a `pressable` tag.
          event?.stopPropagation?.();
          onPress?.(event);
        }}>
        <TagIcon
          color={getTextColor(variant as TagVariant | undefined, outlined)}>
          <X />
        </TagIcon>
      </TagRemoveButtonFrame>
    );
  },
  {
    displayName: TAG_NAME
  }
);

export interface TagRemovableProps {
  /**
   * Should the tag render a remove button that removes the tag when pressed
   *
   * @defaultValue false
   */
  removable?: boolean;

  /**
   * The accessible label of the remove button
   *
   * @defaultValue "Remove"
   */
  removeButtonLabel?: string;

  /**
   * Called when the remove button is pressed, before the tag is removed. The
   * tag is only removed when this returns `true`.
   */
  onBeforeRemove?: () => boolean;

  /**
   * Called once the tag has been removed and its exit animation has finished
   */
  onAfterRemove?: () => void;
}

export type TagProps = Omit<GetProps<typeof TagFrame>, keyof TagContextProps> &
  Partial<TagContextProps> &
  TagRemovableProps;

const TagFrameImpl = createStyledHOC(
  TagFrame,
  (
    {
      children,
      outlined = false,
      pressable = false,
      size = true,
      variant = "primary",
      removable = false,
      removeButtonLabel = "Remove",
      onBeforeRemove,
      onAfterRemove,
      onPress,
      ...props
    }: TagProps,
    forwardedRef
  ) => {
    // The text's color: it stays visible on the `mutedHover` background a
    // pointer press lands on.
    const ripple = useTagRipples(getTextColor(variant, outlined), onPress);

    const themeName = useThemeName();
    const [removed, setRemoved] = useState(false);
    const [removeHovered, setRemoveHovered] = useState(false);
    const [removeFocused, setRemoveFocused] = useState(false);

    const handleRemove = useCallback(() => {
      if (!onBeforeRemove || onBeforeRemove()) {
        setRemoved(true);
      }
    }, [onBeforeRemove]);

    return (
      <TagContext.Provider
        // Only context keys: a styled context treats every key in its value
        // as a context prop, so spreading all props swallowed `aria-*` and
        // other DOM attributes before they reached the element.
        outlined={outlined}
        pressable={pressable}
        size={size}
        variant={variant}>
        <AnimatePresence onExitComplete={onAfterRemove}>
          {!removed && (
            <TagFrame
              key="tag"
              ref={forwardedRef}
              {...(removable && {
                // A removable tag always passes a theme: going from no
                // theme to `danger` would re-parent (and remount) the
                // children, including the hovered remove button.
                theme: removeHovered || removeFocused ? "danger" : themeName,
                // Naming `exit` keeps `createComponent` off its
                // `avoidReRenders` path, so the exit timing is used.
                transition: { duration: "200ms", exit: "200ms ease-out" },
                opacity: "1 exit:0",
                scale: "1 exit:0.8"
              })}
              {...props}
              onPress={pressable ? ripple.onPress : onPress}
              outlined={outlined}
              pressable={pressable}
              size={size}
              variant={variant}>
              {pressable && ripple.ripples}
              {children}
              {removable && (
                <TagRemoveButton
                  aria-label={removeButtonLabel}
                  onPress={handleRemove}
                  onMouseEnter={() => setRemoveHovered(true)}
                  onMouseLeave={() => setRemoveHovered(false)}
                  onFocus={() => setRemoveFocused(true)}
                  onBlur={() => setRemoveFocused(false)}
                />
              )}
            </TagFrame>
          )}
        </AnimatePresence>
      </TagContext.Provider>
    );
  },
  {
    displayName: TAG_NAME
  }
);

export const Tag = withStaticProperties(TagFrameImpl, {
  Text: TagText,
  Icon: TagIcon,
  Button: TagButton
});
