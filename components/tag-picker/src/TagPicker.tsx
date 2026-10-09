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

import type { FieldLabelPlacement } from "@cyclone-ui/field";
import {
  FieldNotchedOutline,
  getFieldLabelInset,
  useFieldHasValidationMessage,
  useFieldLabelPlacement
} from "@cyclone-ui/field";
import type { FormControlSize } from "@cyclone-ui/helpers";
import {
  getFormFontScale,
  getFormSizeScale,
  getFormSizeToken,
  getSized,
  getSpaced
} from "@cyclone-ui/helpers";
import type { InputVariant } from "@cyclone-ui/input";
import {
  ControlUnderline,
  getInputSize,
  Input,
  InputContext
} from "@cyclone-ui/input";
import type { TagVariant } from "@cyclone-ui/tag";
import { Tag } from "@cyclone-ui/tag";
import { AnimatePresence } from "@tamagui/animate-presence";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  useComposedRefs,
  useEvent,
  View
} from "@tamagui/core";
import { XStack } from "@tamagui/stacks";
import type { Ref } from "react";
import { useCallback, useMemo, useRef, useState } from "react";
import {
  appendTag,
  getTagRemoveButtonLabel,
  normalizeTag,
  removeTag
} from "./utilities";

const TAG_PICKER_NAME = "TagPicker";

const isFormControlSize = (value: unknown): value is FormControlSize =>
  value === "sm" || value === "md" || value === "lg";

/**
 * The pill, padding and text sizes for a form control size. One row of pills
 * fills the control's height exactly, so an empty tag select lines up with an
 * `Input` of the same size.
 */
const getTagPickerGeometry = (size: FormControlSize) => {
  const scale = getFormSizeScale(size);
  const tagHeight = Math.round(28 * scale);
  // The frame's 1px top and bottom borders sit inside the control height.
  const padding = (getSized(getFormSizeToken(size)) - 2 - tagHeight) / 2;

  return {
    tagHeight,
    padding,
    fontSize: 14 * getFormFontScale(size),
    tagPaddingLeft: getSpaced("2xl") * scale,
    // The remove button adds its own space after the text.
    tagPaddingRight: getSpaced("xl") * scale,
    // The text box's start inset while it is the only item, so its text (and
    // a floating label) lines up with an `Input`'s.
    inputInset: getSpaced("4xl") * scale - padding,
    inputMinWidth: getSized("14xl") * scale
  };
};

// The frame is a plain stack like `Input`'s, and draws the same border, focus
// ring and variants. It grows a row at a time as the pills wrap.
const TagPickerFrame = styled(XStack, {
  displayName: TAG_PICKER_NAME,
  transition: "200ms",
  position: "relative",
  alignItems: "stretch",
  backgroundColor: "surfaceElevated",
  borderWidth: 1,
  borderColor: "hairline",
  outlineWidth: 0,
  outlineColor: "transparent",
  boxShadow: "none",
  borderRadius: "control",
  cursor: "text",
  // this fixes a flex bug where it overflows container
  minWidth: 0,
  variants: {
    // Styled by the `.resolve` below because the focus ring depends on
    // `variant`.
    focused: styled.dynamic<boolean>(),

    variant: {
      outlined: {},
      underlined: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderRadius: 0
      },
      inlined: {}
    },

    // Kept apart from Tamagui's special `size` prop, as in `Input`.
    frameSize: styled.dynamic<FormControlSize>(),

    labelPlacement: styled.dynamic<FieldLabelPlacement>(),

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed"
      }
    }
  } as const,
  defaultVariants: {
    frameSize: "md",
    focused: false,
    disabled: false,
    variant: "outlined"
  }
}).resolve(props => {
  const variant = (props.variant ?? "outlined") as InputVariant;
  const sized = isFormControlSize(props.frameSize)
    ? getInputSize(props.frameSize, {
        labelPlacement: props.labelPlacement as FieldLabelPlacement | undefined
      })
    : undefined;
  // `FieldNotchedOutline` draws a notched field's border instead; the
  // padding keeps the content where the border left it.
  const notched = props.labelPlacement === "border";

  return {
    // Focus ring: underlined and inlined pickers show their underline instead.
    boxShadow:
      props.focused && (variant === "outlined" || variant === "inlined")
        ? "ringOffset"
        : undefined,
    minHeight: sized?.minHeight,
    borderWidth: notched ? 0 : undefined,
    padding: notched ? 1 : undefined,
    // underlined pickers round only their top corners; inlined ones own theirs.
    ...(variant === "outlined" || variant === "inlined"
      ? { borderRadius: sized?.borderRadius }
      : {})
  };
});

const TagPickerContent = styled(XStack, {
  displayName: TAG_PICKER_NAME,
  flex: 1,
  minWidth: 0,
  flexWrap: "wrap",
  alignItems: "center",
  alignContent: "center"
});

// A pill springs in from 40% with an overshooting ease and leaves with a quick
// scale-down fade. Naming `enter` and `exit` in the object form gives each its
// own timing, and keeps a hover restyle mid-animation from snapping it (see
// `InputSeparator`).
const TagPickerItemFrame = styled(View, {
  displayName: "TagPickerItem",
  transition: {
    duration: "150ms",
    enter: "320ms cubic-bezier(0.34, 1.56, 0.64, 1)",
    exit: "150ms ease-in"
  },
  // `scale` keeps a resting value: a conditional-only transform animates
  // from `scale(0)`.
  opacity: "1 exit:0",
  scale: "1 exit:0.6",
  variants: {
    // Only tags added from the text box spring in; the tags a select mounts
    // with are already in place.
    pop: {
      true: {
        opacity: "1 enter:0 exit:0",
        scale: "1 enter:0.4 exit:0.6"
      }
    }
  } as const,
  defaultVariants: {
    pop: false
  }
});

interface TagPickerItemProps {
  tag: string;
  pop: boolean;
  disabled: boolean;
  tagVariant: TagVariant;
  removeButtonLabel: string;
  geometry: ReturnType<typeof getTagPickerGeometry>;
  onRemove: (tag: string) => void;
}

const TagPickerItem = ({
  tag,
  pop,
  disabled,
  tagVariant,
  removeButtonLabel,
  geometry,
  onRemove
}: TagPickerItemProps) => (
  <TagPickerItemFrame pop={pop}>
    <Tag
      variant={tagVariant}
      removable={!disabled}
      removeButtonLabel={removeButtonLabel}
      // The select removes the tag from its value, and the pill's exit
      // animation plays as `AnimatePresence` lets it go. Returning `false`
      // keeps the tag from also running its own removal.
      onBeforeRemove={() => {
        onRemove(tag);

        return false;
      }}
      height={geometry.tagHeight}
      paddingVertical={0}
      paddingLeft={geometry.tagPaddingLeft}
      paddingRight={
        disabled ? geometry.tagPaddingLeft : geometry.tagPaddingRight
      }
      opacity={disabled ? 0.6 : undefined}>
      <Tag.Text
        fontSize={geometry.fontSize}
        lineHeight={1.2}
        whiteSpace="nowrap">
        {tag}
      </Tag.Text>
    </Tag>
  </TagPickerItemFrame>
);

export interface TagPickerOwnProps {
  /**
   * The tags, for a controlled tag select
   */
  value?: string[];

  /**
   * The tags an uncontrolled tag select starts with
   *
   * @defaultValue []
   */
  defaultValue?: string[];

  /**
   * Called with the new tags whenever a tag is added or removed
   */
  onChange?: (tags: string[]) => void;

  /**
   * The name of the text box, also used as its `id` so a label can target it
   */
  name?: string;

  /**
   * The text box's placeholder, shown while there are no tags
   */
  placeholder?: string;

  /**
   * The form control size
   *
   * @defaultValue "md"
   */
  size?: FormControlSize;

  /**
   * The frame's display style
   *
   * @defaultValue "outlined"
   */
  variant?: InputVariant;

  /**
   * Should the tag select be disabled
   *
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * Should the frame show its focus highlight even while focus is outside it
   *
   * @defaultValue false
   */
  focused?: boolean;

  /**
   * The variant style of the tags
   *
   * @defaultValue "secondary"
   */
  tagVariant?: TagVariant;

  /**
   * Get the accessible label of a tag's remove button
   *
   * @defaultValue (tag) => `Remove ${tag}`
   */
  removeButtonLabel?: (tag: string) => string;

  /**
   * A ref to the text box's `<input>` element
   */
  inputRef?: Ref<HTMLInputElement>;
}

export type TagPickerProps = Omit<
  GetProps<typeof TagPickerFrame>,
  keyof TagPickerOwnProps | "frameSize" | "onChange"
> &
  TagPickerOwnProps;

const TagPickerImpl = createStyledHOC(
  TagPickerFrame,
  (props: TagPickerProps, forwardedRef) => {
    const {
      children,
      value,
      defaultValue,
      onChange,
      name,
      placeholder,
      size = "md",
      variant = "outlined",
      disabled = false,
      focused = false,
      tagVariant = "secondary",
      removeButtonLabel = getTagRemoveButtonLabel,
      inputRef: inputRefProp,
      onFocus,
      onBlur,
      onMouseDown,
      ...rest
    } = props;

    const [uncontrolledTags, setUncontrolledTags] = useState<readonly string[]>(
      () => defaultValue ?? []
    );
    const tags = value ?? uncontrolledTags;
    const [draft, setDraft] = useState("");
    // Tags added from the text box, which spring in as they mount.
    const [addedTags, setAddedTags] = useState<ReadonlySet<string>>(
      () => new Set()
    );
    const [focusWithin, setFocusWithin] = useState(false);

    const inputElementRef = useRef<HTMLInputElement>(null);
    const inputRef = useComposedRefs(inputElementRef, inputRefProp);
    const geometry = useMemo(() => getTagPickerGeometry(size), [size]);

    const commit = useCallback(
      (next: readonly string[]) => {
        if (value === undefined) {
          setUncontrolledTags(next);
        }

        onChange?.([...next]);
      },
      [onChange, value]
    );

    // An event rather than a callback: a leaving pill keeps the props it last
    // rendered with, so its remove button must still read the latest tags.
    const handleRemove = useEvent((tag: string) => {
      commit(removeTag(tags, tag));
      // The remove button leaves with its pill, so keep focus in the field.
      inputElementRef.current?.focus();
    });

    const handleInput = useCallback((event: CustomEvent<string>) => {
      setDraft(event.detail);
    }, []);

    // Tamagui v3 types `onKeyDown` as an intersection of the web and native
    // handlers; this handler reads the web keyboard event.
    const handleKeyDown = useCallback(
      (event: any) => {
        if (
          disabled ||
          event.defaultPrevented ||
          event.nativeEvent?.isComposing
        ) {
          return;
        }

        if (event.key === "Enter") {
          const tag = normalizeTag(draft);
          if (!tag) {
            return;
          }

          // Keeps Enter from also submitting a surrounding form.
          event.preventDefault();
          const next = appendTag(tags, tag);
          if (next !== tags) {
            setAddedTags(current => new Set(current).add(tag));
            commit(next);
          }

          setDraft("");
        } else if (
          event.key === "Backspace" &&
          draft === "" &&
          // Holding Backspace to clear the draft stops at the empty field
          // instead of going on to remove every tag.
          !event.repeat &&
          tags.length > 0
        ) {
          event.preventDefault();
          commit(tags.slice(0, -1));
        }
      },
      [commit, disabled, draft, tags]
    );

    // Focus moving between the text box and the remove buttons stays inside
    // the frame, so only focus entering or leaving it counts.
    const handleFocus = useCallback(
      (event: any) => {
        if (!event?.currentTarget?.contains?.(event.relatedTarget)) {
          setFocusWithin(true);
          onFocus?.(event);
        }
      },
      [onFocus]
    );
    const handleBlur = useCallback(
      (event: any) => {
        if (!event?.currentTarget?.contains?.(event.relatedTarget)) {
          setFocusWithin(false);
          onBlur?.(event);
        }
      },
      [onBlur]
    );

    // Pressing the frame's padding, gaps or pills focuses the text box, as in
    // `Input`.
    const handleMouseDown = useCallback(
      (event: any) => {
        onMouseDown?.(event);
        if (event.defaultPrevented || disabled) {
          return;
        }

        const target = event.target as HTMLElement | null;
        if (target?.closest?.("input, textarea, button, a, [tabindex]")) {
          return;
        }

        event.preventDefault();
        inputElementRef.current?.focus();
      },
      [disabled, onMouseDown]
    );

    const active = focused || focusWithin;
    const hasValidationMessage = useFieldHasValidationMessage();
    const labelPlacement = useFieldLabelPlacement();
    const idleColor = hasValidationMessage ? "accent" : "hairline";
    const focusColor = hasValidationMessage ? "accentActive" : "hairlineActive";
    const hoverColor = disabled
      ? "accentDisabled"
      : active
        ? focusColor
        : "accentHover";
    const borderColor = `${active ? focusColor : idleColor} hover:${hoverColor} group-hover/field:${hoverColor}`;

    return (
      <InputContext.Provider
        // The text box takes its font size and disabled state from the input
        // context. The frame makes room for a floating label itself, so the
        // text box gets no `labelPlacement`.
        name={name}
        circular={false}
        size={size}
        variant="outlined"
        focused={active}
        hasValidationMessage={hasValidationMessage}
        disabled={disabled}>
        <TagPickerFrame
          ref={forwardedRef}
          {...rest}
          frameSize={size}
          variant={variant}
          labelPlacement={labelPlacement}
          focused={active}
          disabled={disabled}
          borderColor={borderColor}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseDown={handleMouseDown}>
          <TagPickerContent
            gap={geometry.padding}
            padding={geometry.padding}
            // An underlined picker's content starts flush with its left edge.
            paddingLeft={variant === "underlined" ? 0 : geometry.padding}
            // Frames with a floating label are taller (see `getInputSize`),
            // which leaves room under the floated label.
            paddingTop={
              geometry.padding + getFieldLabelInset(labelPlacement, size)
            }>
            <AnimatePresence>
              {tags.map(tag => (
                <TagPickerItem
                  key={tag}
                  tag={tag}
                  pop={addedTags.has(tag)}
                  disabled={disabled}
                  tagVariant={tagVariant}
                  removeButtonLabel={removeButtonLabel(tag)}
                  geometry={geometry}
                  onRemove={handleRemove}
                />
              ))}
            </AnimatePresence>
            <View
              flexGrow={1}
              flexBasis={geometry.inputMinWidth}
              minWidth={geometry.inputMinWidth}
              height={geometry.tagHeight}>
              <Input.TextBox.Value
                ref={inputRef}
                value={draft}
                placeholder={tags.length === 0 ? placeholder : undefined}
                enterKeyHint="enter"
                nativePaddingInline={
                  tags.length === 0
                    ? variant === "underlined"
                      ? 0
                      : geometry.inputInset
                    : geometry.padding
                }
                onChange={handleInput}
                onKeyDown={handleKeyDown}
              />
            </View>
          </TagPickerContent>
          {children}
          {variant === "underlined" && (
            <ControlUnderline
              bottom={-1}
              focused={active}
              disabled={disabled}
              backgroundColor={disabled ? "accentDisabled" : focusColor}
            />
          )}
          {labelPlacement === "border" && (
            <FieldNotchedOutline borderColor={borderColor} />
          )}
        </TagPickerFrame>
      </InputContext.Provider>
    );
  },
  { displayName: TAG_PICKER_NAME }
);

export const TagPicker = TagPickerImpl;
