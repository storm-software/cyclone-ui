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
      commentLabel = "How can we improve?",
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
        <Popover open={open} onOpenChange={setOpen} placement="bottom">
          <Popover.Anchor>
            <View
              aria-label="Dislike"
              render="button"
              transition="250ms"
              alignItems="center"
              justifyContent="center"
              padding={0}
              borderWidth={0}
              backgroundColor="transparent"
              borderRadius="control"
              outlineStyle="none"
              boxShadow="none focus-visible:ringOffset"
              opacity={disabled ? 0.5 : 1}
              cursor={disabled ? "not-allowed" : "pointer"}
              disabled={disabled}
              aria-pressed={disliked}
              aria-expanded={open}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onPress={handleDislikePress}>
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
            </View>
          </Popover.Anchor>

          <Popover.Content width={360} maxWidth="90vw">
            <Form
              name={formName}
              initialValues={{ comment: "" }}
              onSubmit={handleSubmit}>
              {/* `Form` does not forward style props to its frame. */}
              <View gap="2xl" width="100%">
                <TextAreaField
                  name="comment"
                  variant="normal"
                  required={true}
                  placeholder={commentPlaceholder}>
                  <TextAreaField.Label>{commentLabel}</TextAreaField.Label>
                  <TextAreaField.Control rows={3} />
                </TextAreaField>
                <Form.Submit asChild={true}>
                  <Button variant="inverse" alignSelf="flex-end">
                    <Button.Text>Send feedback</Button.Text>
                  </Button>
                </Form.Submit>
              </View>
            </Form>
          </Popover.Content>
        </Popover>

        <Divider direction="vertical" />

        <LikeButton
          size={size}
          disabled={disabled}
          liked={value === "like"}
          onLikedChange={liked => {
            setValue(liked ? "like" : null);
            setOpen(false);
          }}
        />
      </View>
    );
  }
);
