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

import { Button } from "@cyclone-ui/button";
import { Divider } from "@cyclone-ui/divider";
import { Form } from "@cyclone-ui/form";
import type { FormControlSize } from "@cyclone-ui/helpers";
import { getFormSizeScale } from "@cyclone-ui/helpers";
import { ThumbsDown } from "@cyclone-ui/icons";
import { LikeButton } from "@cyclone-ui/like-button";
import { Popover } from "@cyclone-ui/popover";
import { TextAreaField } from "@cyclone-ui/text-area-field";
import { Toggle } from "@cyclone-ui/toggle";
import type { TamaguiElement, ViewProps } from "@tamagui/core";
import { View } from "@tamagui/core";
import type { ComponentProps } from "react";
import { forwardRef, useId, useState } from "react";

export type FeedbackValue = "like" | "dislike" | null;

export type FeedbackSize = FormControlSize;

export interface FeedbackProps extends Omit<ViewProps, "children"> {
  /** The selected feedback. Makes the control controlled. */
  value?: FeedbackValue;
  /** The initial feedback when uncontrolled. */
  defaultValue?: FeedbackValue;
  /** Called with the new feedback when either toggle is pressed. */
  onValueChange?: (value: FeedbackValue) => void;
  /** Called with the (possibly empty) comment when the dislike form is submitted. */
  onCommentSubmit?: (comment: string) => void;
  /** The prompt shown above the comment box. */
  commentLabel?: string;
  /** The placeholder shown in the comment box. */
  commentPlaceholder?: string;
  /** Disable both toggles. */
  disabled?: boolean;
  /** The icon size. */
  size?: FeedbackSize;
}

/** The medium icon size in pixels; matches `LikeButton`. */
const BASE_ICON_SIZE = 24;

/** A like / dislike pair where disliking asks for an optional comment. */
export const Feedback = forwardRef<TamaguiElement, FeedbackProps>(
  (
    {
      value: valueProp,
      defaultValue = null,
      onValueChange,
      onCommentSubmit,
      commentLabel = "What could we improve?",
      commentPlaceholder = "A suggestion to improve this content...",
      disabled = false,
      size = "md",
      ...props
    },
    forwardedRef
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const [open, setOpen] = useState(false);
    const formName = `feedback-${useId()}`;
    // The icons are `themed` SVG icons, which cannot take a `hover:` clause.
    const [hovered, setHovered] = useState(false);

    const value = valueProp === undefined ? uncontrolledValue : valueProp;
    const disliked = value === "dislike";

    const setValue = (next: FeedbackValue) => {
      if (valueProp === undefined) {
        setUncontrolledValue(next);
      }
      onValueChange?.(next);
    };

    const handleDislikePress = () => {
      setValue(disliked ? null : "dislike");
      setOpen(!disliked);
    };

    // `Form` reads its options once on mount, so this must not rely on
    // anything that changes while the popover is open.
    const handleSubmit: ComponentProps<typeof Form>["onSubmit"] = ({
      get,
      set,
      atoms
    }) => {
      onCommentSubmit?.(String(get(atoms.values).comment ?? "").trim());
      set(atoms.values, { comment: "" });
      setOpen(false);
    };

    return (
      <View
        ref={forwardedRef}
        role="group"
        aria-label="Feedback"
        flexDirection="row"
        alignItems="center"
        alignSelf="flex-start"
        gap="md"
        {...props}>
        <LikeButton
          size={size}
          disabled={disabled}
          liked={value === "like"}
          onLikedChange={liked => {
            setValue(liked ? "like" : null);
            setOpen(false);
          }}
        />

        <Divider direction="vertical" marginVertical="auto" />

        <Popover open={open} onOpenChange={setOpen} placement="bottom">
          <Popover.Anchor>
            <Toggle
              aria-label="Dislike"
              borderless={true}
              circular={true}
              size={size}
              disabled={disabled}
              pressed={disliked}
              aria-expanded={open}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onPressedChange={handleDislikePress}>
              <ThumbsDown
                aria-hidden={true}
                size={Math.round(BASE_ICON_SIZE * getFormSizeScale(size))}
                weight={disliked ? "fill" : "regular"}
                color={
                  hovered && !disabled
                    ? "accentHover"
                    : disliked
                      ? "accent"
                      : "color"
                }
              />
            </Toggle>
          </Popover.Anchor>

          <Popover.Content width={360} maxWidth="90vw">
            <Form
              name={formName}
              initialValues={{ comment: "" }}
              onSubmit={handleSubmit}>
              {/* `Form` does not forward style props to its frame. */}
              <View gap="3xl" width="100%">
                <TextAreaField
                  name="comment"
                  required={true}
                  placeholder={commentPlaceholder}>
                  <TextAreaField.Label variant="above">
                    {commentLabel}
                  </TextAreaField.Label>
                  <TextAreaField.Control rows={3} />
                </TextAreaField>
                <Form.Submit asChild={true}>
                  <Button variant="primary" alignSelf="flex-end">
                    <Button.Text>Send feedback</Button.Text>
                  </Button>
                </Form.Submit>
              </View>
            </Form>
          </Popover.Content>
        </Popover>
      </View>
    );
  }
);
