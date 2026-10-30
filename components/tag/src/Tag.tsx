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

"use client";

import { X } from "@cyclone-ui/icons";
import type { RippleAnimationHandle } from "@cyclone-ui/ripple-animation";
import { RippleAnimation } from "@cyclone-ui/ripple-animation";
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
import { SizableText } from "@tamagui/text";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState
} from "react";

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

const TagContext = createStyledContext<TagContextProps, keyof TagContextProps>(
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
  variant === "secondary" ? "secondary" : "primary";

// Outlined tags draw the text in the variant color, filled ones in the
// matching `on*` color (`on-primary` / `on-secondary`).
const getTextColor = (
  variant: TagVariant | undefined,
  outlined: boolean | undefined
) => {
  const variantColor = getVariantColor(variant);

  return outlined
    ? variantColor
    : variantColor === "secondary"
      ? "on-secondary"
      : "on-primary";
};

// The hovered counterpart of a variant color; the `on*` text colors have none.
const getHoveredColor = (color: string) =>
  color === "primary"
    ? "primary-hovered"
    : color === "secondary"
      ? "secondary-hovered"
      : undefined;

const TagFrame = styled(View, {
  displayName: TAG_NAME,
  context: TagContext,

  transition: "200ms",
  flexDirection: "row",
  width: "fit-content",
  boxShadow: "none",
  borderRadius: "tag",
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

    // `tabIndex` / `role` are not styles, so the frame sets them when pressable.
    pressable: {
      true: {
        boxShadow: "focus-visible:ring-offset",
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
        ? "transparent hover:secondary-hovered"
        : "transparent",
      borderColor: pressable
        ? `${color} hover:${getHoveredColor(color)}`
        : color,
      borderWidth: 2
    };
  }

  return {
    backgroundColor: pressable ? `${color} hover:secondary-hovered` : color
  };
});

// No `context: TagContext`: a styled context merges every value into the
// frame's props, so the tag's `variant` ("primary") would replace
// HeadingText's own `variant` ("base") and drop its font family. `TagText`
// reads the context and passes `size` explicitly instead.
const TagTextFrame = styled(SizableText, {
  displayName: TAG_NAME,
  render: "span",
  color: "on-primary",
  fontFamily: "display",
  fontSize: "xs",
  lineHeight: "xs",
  fontWeight: "700",

  variants: {
    // v2 `"...fontSize"`: only font size keys restyle the text; `true` keeps
    // the size above.
    size: styled.dynamic<FontSizeTokens | number>((val, env) =>
      typeof val === "string" && !!env.font && val in env.font.size
        ? getFontSized(val, env)
        : undefined
    )
  } as const
});

interface TagEditState {
  /** The accessible label of the text box. */
  label: string;
  /** Ends editing, editing the tag to `value` unless it is `undefined`. */
  finish: (value?: string) => void;
}

// A plain React context: a styled context only carries style props. Set while
// an `editable` tag is being edited.
const TagEditContext = createContext<TagEditState | null>(null);

// A native `<input>` in `Tag.Text`'s font and color, so the text box lines up
// with the text it replaces.
const TagEditInputFrame = styled(TagTextFrame, {
  render: "input",
  backgroundColor: "transparent",
  borderWidth: 0,
  padding: 0,
  outlineStyle: "none"
});

type TagEditInputProps = GetProps<typeof TagTextFrame> & {
  value: string;
  edit: TagEditState;
};

// Uncontrolled: blur is the only commit, and reads the text box's value. Enter
// commits by blurring, and Escape restores the value first.
const TagEditInput = ({ value, edit, ...props }: TagEditInputProps) => {
  const [length, setLength] = useState(value.length);

  return (
    <TagEditInputFrame
      {...props}
      // Input attributes Tamagui's text props do not type.
      {...({
        "aria-label": edit.label,
        autoFocus: true,
        defaultValue: value,
        onChange: (event: any) => setLength(event.target.value.length),
        // Starts the caret after the text.
        onFocus: (event: any) =>
          event.target.setSelectionRange(value.length, value.length),
        onKeyDown: (event: any) => {
          if (event.key === "Enter") {
            // Keeps Enter from also submitting a surrounding form.
            event.preventDefault();
            event.currentTarget.blur();
          } else if (event.key === "Escape") {
            event.currentTarget.value = value;
            event.currentTarget.blur();
          }
        },
        onBlur: (event: any) =>
          edit.finish(
            event.target.value === value ? undefined : event.target.value
          )
      } as object)}
      // One extra character leaves room for the caret.
      width={`${length + 1}ch`}
    />
  );
};

const TagText = createStyledHOC(
  TagTextFrame,
  ({ children, color, size, ...props }, forwardedRef) => {
    const context = TagContext.useStyledContext();
    const edit = useContext(TagEditContext);
    const themeColor = getTextColor(
      context.variant as TagVariant | undefined,
      context.outlined
    );
    const baseColor = color ?? themeColor;
    const hoveredColor = getHoveredColor(themeColor);
    const textSize = (size ?? context.size) as FontSizeTokens | number | true;

    // Only plain text can be edited.
    if (edit && typeof children === "string") {
      return (
        <TagEditInput
          {...props}
          size={textSize}
          color={baseColor}
          value={children}
          edit={edit}
        />
      );
    }

    return (
      <TagTextFrame
        ref={forwardedRef}
        {...props}
        size={textSize}
        color={
          // A caller-authored `hover:` clause wins, like v2's caller `hoverStyle`.
          context.pressable &&
          hoveredColor &&
          typeof baseColor === "string" &&
          !baseColor.includes("hover:")
            ? `${baseColor} hover:${hoveredColor}`
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

/**
 * A press ripple in `color`: `ripples` renders its layer, and `onPress` draws
 * one, then calls the caller's `onPress`. Rendered before the tag's children:
 * positioned children such as `Tag.Button` stay above it, and over the text it
 * is the text's own color.
 */
const useTagRipples = (
  color: ColorTokens,
  onPress: ((event: TagPressEvent) => void) | null | undefined
) => {
  const rippleRef = useRef<RippleAnimationHandle>(null);

  const handlePress = useCallback(
    (event: TagPressEvent) => {
      rippleRef.current?.ripple(event);
      onPress?.(event);
    },
    [onPress]
  );

  return {
    ripples: <RippleAnimation ref={rippleRef} color={color} />,
    onPress: handlePress
  };
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
  backgroundColor: "primary hover:secondary-hovered focus:surface",
  justifyContent: "center",
  alignItems: "center",
  borderColor: "hover:primary-hovered",
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
    // `primary` shows on both backgrounds a press lands on: `secondary-active` under
    // a pointer and `surface` once the press focuses the button.
    const ripple = useTagRipples("primary", onPress);

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
  marginLeft: "2xl",
  // Pulls the icon toward the frame's edge: the size variant's
  // `paddingHorizontal` would override a frame `paddingRight`.
  marginRight: -6,
  // No hover background: hovering (or focusing) the button turns the whole
  // tag to the `danger` theme instead.
  backgroundColor: "transparent",
  borderRadius: 1000_000_000,
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "focus-visible:ring-offset"
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
          <X weight="bold" />
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

export interface TagEditableProps {
  /**
   * Should double clicking the tag turn its `Tag.Text` into a text box that
   * edits the text. Enter or leaving the text box commits the edit, and Escape
   * cancels it.
   *
   * @defaultValue false
   */
  editable?: boolean;

  /**
   * The accessible label of the text box an edit shows
   *
   * @defaultValue "Edit tag"
   */
  editInputLabel?: string;

  /**
   * Called with the text box's value when an edit is committed with text that
   * differs from the tag's text
   */
  onEdit?: (value: string) => void;
}

export type TagProps = Omit<GetProps<typeof TagFrame>, keyof TagContextProps> &
  Partial<TagContextProps> &
  TagRemovableProps &
  TagEditableProps;

const TagFrameImpl = createStyledHOC(
  TagFrame,
  (
    {
      children,
      outlined = false,
      pressable: pressableProp = false,
      size = true,
      variant = "primary",
      removable = false,
      removeButtonLabel = "Remove",
      onBeforeRemove,
      onAfterRemove,
      editable = false,
      editInputLabel = "Edit tag",
      onEdit,
      onPress,
      onDoubleClick,
      ...props
    }: TagProps,
    forwardedRef
  ) => {
    // An editable tag responds to hover like a pressable one.
    const pressable = pressableProp || editable;

    // The text's color: it stays visible on the `secondary-active` background a
    // pointer press lands on.
    const ripple = useTagRipples(getTextColor(variant, outlined), onPress);

    const themeName = useThemeName();
    const [removed, setRemoved] = useState(false);
    const [removeHovered, setRemoveHovered] = useState(false);
    const [removeFocused, setRemoveFocused] = useState(false);
    const [editing, setEditing] = useState(false);

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
              {...(pressable && { tabIndex: 0, role: "button" as const })}
              {...props}
              onPress={pressable ? ripple.onPress : onPress}
              onDoubleClick={event => {
                if (editable) {
                  setEditing(true);
                }

                onDoubleClick?.(event);
              }}
              outlined={outlined}
              pressable={pressable}
              size={size}
              variant={variant}>
              {pressable && ripple.ripples}
              <TagEditContext.Provider
                value={
                  editing
                    ? {
                        label: editInputLabel,
                        finish: value => {
                          setEditing(false);
                          if (value !== undefined) {
                            onEdit?.(value);
                          }
                        }
                      }
                    : null
                }>
                {children}
              </TagEditContext.Provider>
              {removable && !editing && (
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
