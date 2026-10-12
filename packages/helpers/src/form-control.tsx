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

import type { SelectOption } from "@stryke/types/form";
import type { ValidationDetail } from "@stryke/types/validations";
import type { GetProps, TamaguiWebElement } from "@tamagui/core";
import { createStyledHOC, styled, useComposedRefs, View } from "@tamagui/core";
import type { ReactNode, Ref, RefObject } from "react";
import { createContext, use, useLayoutEffect, useRef, useState } from "react";
import type { FormControlSize } from "./form-size";
import { getFormSizeScale } from "./form-size";
import { getSpaced } from "./get-sized";

/**
 * The field's control style (see Material UI's `TextField` variants).
 */
export type FieldVariant = "outlined" | "underlined" | "inlined";

/**
 * Where the field's label is displayed: floating over the control (resting
 * inside it until the field is focused or has a value), or above it.
 */
export type FieldLabelVariant = "floating" | "above";

/**
 * How a control makes room for its field's floating label: `"border"` when the
 * label floats onto an outlined control's border, `"inset"` when it floats
 * inside an underlined or inlined control.
 */
export type FieldLabelPlacement = "border" | "inset";

/**
 * The state a form control (such as `Field`) shares with the input inside it.
 *
 * @remarks
 * Modeled on Material UI's `FormControl` context: controls such as `Input`,
 * `Switch` or `Select` read it with {@link useFormControl} and fall back to it
 * for any prop they are not given, so the same uncontrolled control can be
 * used on its own or connected to a form by wrapping it in a `Field`. It holds
 * plain values and callbacks only, so it does not tie a control to any form
 * state library.
 */
export interface FormControlState {
  /** The field name, also used as the control's `id`. */
  name?: string;

  /** The field's current (parsed) value. */
  value?: any;

  /** The field's value formatted for display. */
  formattedValue?: string;

  /** The field's initial value. */
  defaultValue?: any;

  /** The selectable options of a field, with `selected`/`disabled` resolved. */
  items?: SelectOption[];

  size?: FormControlSize;
  theme?: string;
  disabled?: boolean;
  required?: boolean;
  focused?: boolean;
  /** Whether the pointer is over the field (mirrors `group-hover/field`). */
  hovered?: boolean;
  clearable?: boolean;
  hasValidationMessage: boolean;

  /** Ref the control attaches to its native input (applies masking). */
  inputRef?: Ref<any>;

  /** Set the field's value. */
  onChange?: (value: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;

  /**
   * Show (or, without a message, remove) a status message the control raises
   * itself, such as a caps lock warning, keyed by its `code`.
   */
  setMessage?: (code: string, message?: ValidationDetail) => void;

  /**
   * Status adornments (validation icon, clear button) the field asks a text
   * box style control to render at its end.
   */
  endAdornment?: ReactNode;

  /**
   * The field's status icon (validation, disabled), as `Field.ThemeIcon`
   * renders it, for controls that show it beside an item.
   */
  statusIcon?: ReactNode;

  variant: FieldVariant;
  labelVariant: FieldLabelVariant | undefined;

  /** How the field's control prefers its label (see {@link useFieldLabelDefaults}). */
  labelDefaults: FieldLabelDefaults | undefined;
  setLabelDefaults: (labelDefaults: FieldLabelDefaults | undefined) => void;

  /** Field options the control supplies (see {@link useFieldOptions}). */
  setControlOptions: (options: FieldControlOptions | undefined) => void;
  hasPlaceholder: boolean;
  endIconCount: number;
  hasStartIcon: boolean;
  labelContentRef: RefObject<TamaguiWebElement | null>;
  setLabelVariant: (labelVariant: FieldLabelVariant | undefined) => void;
  setHasPlaceholder: (hasPlaceholder: boolean) => void;
  registerEndIcon: () => () => void;
  registerStartIcon: () => () => void;
}

export const FormControlContext = createContext<FormControlState | undefined>(
  undefined
);

/**
 * Get the enclosing form control's state, or `undefined` outside of one.
 */
export const useFormControl = () => use(FormControlContext);

/**
 * How a control prefers the enclosing field's label to be displayed.
 */
export interface FieldLabelDefaults {
  /** Used when `Field.Label` sets no `variant` (text boxes float it). */
  variant?: FieldLabelVariant;

  /**
   * Show a compact label beside the control (checkbox, switch): no required
   * marker, no bottom padding, and a disabled icon next to it. The value sets
   * the alignment of the label's row.
   */
  inline?: { alignItems?: "center" } | { alignContent?: "center" };

  /**
   * Where a floating label rests, for a control with leading content other
   * than a `Field.Icon` (such as a country code trigger).
   */
  floatingLabelLeft?: number;
}

/**
 * Register how a control prefers its field's label to be displayed.
 *
 * @param labelDefaults - A stable (memoized or module level) value.
 */
export const useFieldLabelDefaults = (labelDefaults: FieldLabelDefaults) => {
  const setLabelDefaults = useFormControl()?.setLabelDefaults;

  useLayoutEffect(() => {
    if (!setLabelDefaults) {
      return;
    }

    setLabelDefaults(labelDefaults);

    return () => setLabelDefaults(undefined);
  }, [labelDefaults, setLabelDefaults]);
};

/**
 * Field options (as `Field` takes them: `format`, `parse`, `mask`,
 * `clearable`, ...) that a control supplies to its field.
 */
export interface FieldControlOptions {
  /** Options the control sets over the field's own props. */
  overrides?: Record<string, unknown>;

  /** Options used when the field's props leave them unset. */
  defaults?: Record<string, unknown>;
}

/**
 * Supply field options from a control, for example a date picker's
 * `format`/`parse`/`mask` for its mode.
 *
 * @param options - A stable (memoized) value; functions inside are compared by
 * reference.
 */
export const useFieldOptions = (options: FieldControlOptions) => {
  const setControlOptions = useFormControl()?.setControlOptions;

  useLayoutEffect(() => {
    if (!setControlOptions) {
      return;
    }

    setControlOptions(options);

    return () => setControlOptions(undefined);
  }, [options, setControlOptions]);
};

const FIELD_PLACEHOLDER_UNSET = Symbol("field-placeholder-unset");

/**
 * Get the enclosing field's control style, registering whether the control
 * shows a placeholder (a floating label stays floated over one).
 */
export const useFieldVariant = (
  placeholder: unknown = FIELD_PLACEHOLDER_UNSET
): FieldVariant => {
  const formControl = useFormControl();
  const setHasPlaceholder = formControl?.setHasPlaceholder;
  const hasPlaceholder =
    placeholder === FIELD_PLACEHOLDER_UNSET
      ? FIELD_PLACEHOLDER_UNSET
      : Boolean(placeholder);

  useLayoutEffect(() => {
    if (hasPlaceholder === FIELD_PLACEHOLDER_UNSET || !setHasPlaceholder) {
      return;
    }

    setHasPlaceholder(hasPlaceholder);

    return () => setHasPlaceholder(false);
  }, [hasPlaceholder, setHasPlaceholder]);

  return formControl?.variant ?? "outlined";
};

/**
 * Whether the enclosing field shows a `position="start"` icon before its
 * control's text.
 */
export const useFieldHasStartIcon = () =>
  useFormControl()?.hasStartIcon ?? false;

export const useFieldHasValidationMessage = () =>
  useFormControl()?.hasValidationMessage ?? false;

/**
 * Get how the enclosing field's floating label needs the control to make room
 * for it, or `undefined` outside a field or without a floating label.
 */
export const useFieldLabelPlacement = (): FieldLabelPlacement | undefined => {
  const formControl = useFormControl();

  return formControl?.labelVariant !== "floating"
    ? undefined
    : formControl.variant === "outlined"
      ? "border"
      : "inset";
};

/**
 * Get the extra height (and top text inset) a control adds for a floating
 * label: a label floats onto an outlined control's border, so it only
 * needs a few pixels, but inside an underlined or inlined control it needs a row.
 *
 * @param placement - The field's label placement.
 * @param size - The control size.
 * @returns The extra height, in pixels.
 */
export const getFieldLabelInset = (
  placement: FieldLabelPlacement | undefined,
  size?: FormControlSize
) =>
  !placement ? 0 : placement === "border" ? 3 : 13 * getFormSizeScale(size);

const hasFieldValue = (value: unknown) =>
  value !== undefined && value !== null && value !== "";

/**
 * Whether a control should show its placeholder: always, unless a floating
 * label rests over the (unfocused, empty) control.
 */
export const useFieldShouldShowPlaceholder = (value: unknown) => {
  const formControl = useFormControl();

  return (
    formControl?.labelVariant !== "floating" ||
    (!hasFieldValue(value) && Boolean(formControl.focused))
  );
};

/**
 * Whether a floating label is floated: the field is focused or has a value.
 *
 * @param labelVariant - The label's variant, when the caller already knows it
 * (the field only learns it once the label has mounted).
 */
export const useFieldLabelFloated = (
  labelVariant?: FieldLabelVariant
): boolean => {
  const formControl = useFormControl();

  return (
    (labelVariant ?? formControl?.labelVariant) === "floating" &&
    (hasFieldValue(formControl?.formattedValue) ||
      Boolean(formControl?.focused))
  );
};

/**
 * Resolves the color tokens used by field icons (and their dividers): `accent`
 * when the field has a non-base theme or a validation message, otherwise
 * `border`. `iconColor` is a single theme key so it can be passed directly
 * to Tamagui v3 icons, which do not resolve flat `group-hover/` values.
 */
export const useFieldIconColor = () => {
  const formControl = useFormControl();
  const disabled = formControl?.disabled;
  const focused = formControl?.focused;
  const theme = formControl?.theme;
  const isNeutral =
    (!theme || theme === "base") && !formControl?.hasValidationMessage;

  const iconColor = disabled
    ? isNeutral
      ? "borderDisabled"
      : "disabled"
    : isNeutral
      ? focused
        ? "borderActive"
        : "border"
      : focused
        ? "active"
        : "accent";
  const hoverIconColor = disabled
    ? isNeutral
      ? "borderDisabled"
      : "disabled"
    : isNeutral
      ? "borderActive"
      : "active";

  return {
    // Icons can't resolve `group-hover/field:`, so swap to the hover token
    // while the field is hovered, in step with the border.
    iconColor: formControl?.hovered ? hoverIconColor : iconColor,
    hoverIconColor,
    isNeutral
  };
};

const FieldNotchedOutlineFrame = styled(View, {
  displayName: "FieldNotchedOutline",
  render: "fieldset",
  transition: "200ms",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  margin: 0,
  padding: 0,
  minWidth: 0,
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: "control",
  pointerEvents: "none"
});

const FieldNotchedOutlineLegend = styled(View, {
  displayName: "FieldNotchedOutline",
  render: "legend",
  transition: "100ms",
  height: 0,
  padding: 0,
  overflow: "hidden"
});

/**
 * The border of an outlined control whose field label floats onto it.
 *
 * @remarks
 * Drawn as a native `fieldset` whose `legend` opens a gap in the border under
 * the floated label, like Material UI's `NotchedOutline`. The label then needs
 * no background color behind it, so the form can sit on any surface. Render it
 * as the last child of the control's (positioned) frame, sized to the frame's
 * border box, and drop the frame's own border.
 */
export const FieldNotchedOutline = createStyledHOC(
  FieldNotchedOutlineFrame,
  (props: GetProps<typeof FieldNotchedOutlineFrame>, forwardedRef) => {
    const formControl = useFormControl();
    const labelContentRef = formControl?.labelContentRef;
    const labelVariant = formControl?.labelVariant;
    const size = formControl?.size;
    const floating = useFieldLabelFloated(labelVariant);
    const outlineRef = useRef<TamaguiWebElement>(null);
    const composedRef = useComposedRefs(forwardedRef, outlineRef);
    const [notch, setNotch] = useState<{ left: number; width: number }>();

    useLayoutEffect(() => {
      const outline = outlineRef.current as HTMLElement | null;
      const label = labelContentRef?.current as HTMLElement | null;
      if (!outline || !label) {
        return;
      }

      // The label is a sibling of the control, so measure where it falls
      // along the outline. It shrinks as it floats, which re-measures.
      const update = () => {
        const left =
          label.getBoundingClientRect().left -
          outline.getBoundingClientRect().left;
        const width = label.getBoundingClientRect().width;

        setNotch(current =>
          current?.left === left && current.width === width
            ? current
            : { left, width }
        );
      };

      update();
      if (typeof ResizeObserver === "undefined") {
        return;
      }

      const resizeObserver = new ResizeObserver(update);
      resizeObserver.observe(outline);
      resizeObserver.observe(label);

      return () => resizeObserver.disconnect();
    }, [labelContentRef, labelVariant]);

    // Leave a little room on either side of the floated label's text.
    const gap = getSpaced("sm") * getFormSizeScale(size);

    return (
      <FieldNotchedOutlineFrame ref={composedRef} aria-hidden {...props}>
        <FieldNotchedOutlineLegend
          marginLeft={Math.max(0, (notch?.left ?? 0) - gap)}
          width={floating && notch ? notch.width + gap * 2 : 0}
        />
      </FieldNotchedOutlineFrame>
    );
  },
  { displayName: "FieldNotchedOutline" }
);
