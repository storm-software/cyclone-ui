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

import type { ColorAreaProps } from "@cyclone-ui/color-area";
import { ColorArea } from "@cyclone-ui/color-area";
import {
  FormControlContext,
  getFormSizeScale,
  getFormSizeToken,
  getSized,
  getSpaced,
  useFieldLabelDefaults,
  useFormControl
} from "@cyclone-ui/helpers";
import type { InputChangeEventHandler } from "@cyclone-ui/input";
import { Input } from "@cyclone-ui/input";
import { Popover } from "@cyclone-ui/popover";
import { ToggleGroup } from "@cyclone-ui/toggle-group";
import type { Color, ColorChannel, ColorSpace } from "@react-stately/color";
import {
  getColorChannels,
  parseColor,
  useColorChannelFieldState,
  useColorSliderState
} from "@react-stately/color";
import type { GetProps, TamaguiElement, ViewProps } from "@tamagui/core";
import {
  createStyledHOC,
  Text,
  View,
  withStaticProperties
} from "@tamagui/core";
import type { ReactNode, PointerEvent as ReactPointerEvent } from "react";
import {
  createContext,
  use,
  useCallback,
  useMemo,
  useRef,
  useState
} from "react";
import {
  formatColor,
  getColorSliderBackground,
  getSwatchBackground,
  toColor
} from "./utilities";

export type { Color, ColorChannel, ColorSpace } from "@react-stately/color";
export { parseColor };

const LOCALE = Intl.DateTimeFormat().resolvedOptions().locale;
/** The slider thumb diameter, which is also the track height. */
const THUMB = 20;
// Tamagui's boxShadow parser rejects `inset`, so HeroUI's inner ring is drawn
// by a bordered overlay instead.
const THUMB_SHADOW = "0 0 0 1px rgba(0, 0, 0, 0.1)";
const HAIRLINE = "rgba(0, 0, 0, 0.1)";
/** The color the popover starts from while the value is empty. */
const EMPTY_COLOR = parseColor("hsb(0, 0%, 100%)");
const COLOR_SPACES: ColorSpace[] = ["rgb", "hsl", "hsb"];

// Component tsconfigs have no DOM lib.
type PointerEvent = ReactPointerEvent<any>;

interface ColorPickerContextValue {
  /** The color the popover edits, which is `EMPTY_COLOR` while empty. */
  color: Color;
  setColor: (color: Color) => void;
  disabled: boolean;
}

const ColorPickerContext = createContext<ColorPickerContextValue | null>(null);

const useColorPicker = (part: string) => {
  const context = use(ColorPickerContext);
  if (!context) {
    throw new Error(
      `\`ColorPicker.${part}\` must be rendered inside \`ColorPicker\`.`
    );
  }

  return context;
};

/** The hairline drawn over a color, which keeps light colors visible. */
const Hairline = ({ borderRadius }: Pick<ViewProps, "borderRadius">) => (
  <View
    position="absolute"
    inset={0}
    borderRadius={borderRadius}
    borderWidth={1}
    borderColor={HAIRLINE}
    pointerEvents="none"
  />
);

export type ColorPickerAreaProps = Omit<
  ColorAreaProps,
  "value" | "defaultValue" | "onChange"
>;

/** A `ColorArea` that sets the picker's color, saturation by brightness by default. */
const ColorPickerArea = (props: ColorPickerAreaProps) => {
  const { color, setColor, disabled } = useColorPicker("Area");

  return (
    <ColorArea
      colorSpace="hsb"
      xChannel="saturation"
      yChannel="brightness"
      maxWidth="100%"
      disabled={disabled}
      {...props}
      value={color}
      onChange={setColor}
    />
  );
};

export interface ColorPickerSliderProps extends Omit<ViewProps, "children"> {
  /** The channel the slider sets. */
  channel: ColorChannel;
  /** The color space of `channel`, `hsb` by default. */
  colorSpace?: ColorSpace;
  /** Show the channel's name and value above the track. Defaults to `true`. */
  showLabel?: boolean;
}

/**
 * A slider that sets one channel of the picker's color, over a gradient of
 * that channel. Behaves like the HeroUI (React Aria) `ColorSlider`.
 */
const ColorPickerSlider = ({
  channel,
  colorSpace = "hsb",
  showLabel = true,
  ...props
}: ColorPickerSliderProps) => {
  const { color, setColor, disabled } = useColorPicker("Slider");
  const state = useColorSliderState({
    channel,
    colorSpace,
    value: color,
    onChange: setColor,
    isDisabled: disabled,
    locale: LOCALE
  });
  const [focusVisible, setFocusVisible] = useState(false);
  const thumbRef = useRef<TamaguiElement | null>(null);
  const pointerFocusRef = useRef(false);

  const name = state.value.getChannelName(channel, LOCALE);
  const { minValue, maxValue, step } = state.value.getChannelRange(channel);
  const displayColor = state.getDisplayColor();
  // Rounded to the channel's step (`350°`, not `349.72°`).
  const valueLabel = state.value
    .withChannelValue(
      channel,
      Math.round(state.value.getChannelValue(channel) / step) * step
    )
    .formatChannelValue(channel, LOCALE);
  const dragging = state.isThumbDragging(0);

  // The rect is read on every event, so scrolling mid-drag is handled.
  const moveTo = (event: PointerEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    state.setThumbPercent(
      0,
      Math.min(
        1,
        Math.max(
          0,
          (event.clientX - rect.left - THUMB / 2) / (rect.width - THUMB)
        )
      )
    );
  };

  const endDrag = () => {
    if (dragging) {
      state.setThumbDragging(0, false);
    }
  };

  const handleKeyDown = (event: any) => {
    const step = event.shiftKey ? state.pageSize : state.step;
    const action = {
      ArrowRight: () => state.incrementThumb(0, step),
      ArrowUp: () => state.incrementThumb(0, step),
      ArrowLeft: () => state.decrementThumb(0, step),
      ArrowDown: () => state.decrementThumb(0, step),
      PageUp: () => state.incrementThumb(0, state.pageSize),
      PageDown: () => state.decrementThumb(0, state.pageSize),
      Home: () => state.setThumbValue(0, minValue),
      End: () => state.setThumbValue(0, maxValue)
    }[event.key as string];
    if (!action || disabled) {
      return;
    }

    event.preventDefault();
    action();
  };

  return (
    <View gap="lg" width="100%" data-disabled={disabled} {...props}>
      {showLabel && (
        <View flexDirection="row" justifyContent="space-between">
          <Text fontFamily="caption" fontSize={14} color="emphasis">
            {name}
          </Text>
          <Text
            fontFamily="caption"
            fontSize={14}
            color="emphasis-inactive"
            fontVariant={["tabular-nums"]}>
            {valueLabel}
          </Text>
        </View>
      )}
      <View
        position="relative"
        height={THUMB}
        borderRadius={100_000}
        cursor={disabled ? "not-allowed" : undefined}
        userSelect="none"
        touchAction="none"
        {...(disabled
          ? { backgroundColor: "primary-disabled" }
          : getSwatchBackground(
              getColorSliderBackground(displayColor, channel, THUMB / 2)
            ))}
        onPointerDown={(event: PointerEvent) => {
          if (disabled || event.button !== 0) {
            return;
          }

          // Stops the drag from selecting text, which also keeps focus where
          // it is, so the thumb is focused by hand.
          event.preventDefault();
          event.currentTarget.setPointerCapture?.(event.pointerId);
          state.setThumbDragging(0, true);
          moveTo(event);
          // A pointer press never shows the focus ring.
          setFocusVisible(false);
          pointerFocusRef.current = true;
          (thumbRef.current as any)?.focus?.();
          pointerFocusRef.current = false;
        }}
        onPointerMove={(event: PointerEvent) => dragging && moveTo(event)}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}>
        <Hairline borderRadius={100_000} />
        {/* Inset by half the thumb, so the thumb stays within the track. */}
        <View
          position="absolute"
          top={0}
          bottom={0}
          left={THUMB / 2}
          right={THUMB / 2}
          pointerEvents="none">
          <View
            ref={thumbRef}
            position="absolute"
            top={0}
            left={`${state.getThumbPercent(0) * 100}%`}
            width={THUMB}
            height={THUMB}
            marginLeft={-THUMB / 2}
            borderRadius={100_000}
            borderWidth={3}
            borderColor="white"
            backgroundColor={
              disabled ? "primary-disabled" : displayColor.toString("css")
            }
            boxShadow={focusVisible ? "ring-offset" : THUMB_SHADOW}
            outlineStyle="none"
            {...({
              role: "slider",
              tabIndex: disabled ? -1 : 0,
              "aria-label": name,
              "aria-orientation": "horizontal",
              "aria-disabled": disabled,
              "aria-valuemin": minValue,
              "aria-valuemax": maxValue,
              "aria-valuenow": state.getThumbValue(0),
              "aria-valuetext": valueLabel,
              "data-dragging": dragging,
              "data-focus-visible": focusVisible,
              onKeyDown: handleKeyDown,
              onFocus: (event: any) =>
                setFocusVisible(
                  !pointerFocusRef.current &&
                    typeof event?.target?.matches === "function" &&
                    event.target.matches(":focus-visible")
                ),
              onBlur: () => setFocusVisible(false)
            } as ViewProps)}
          />
        </View>
      </View>
    </View>
  );
};

export interface ColorPickerChannelFieldProps extends Omit<
  ViewProps,
  "children"
> {
  /** The channel the field edits. */
  channel: ColorChannel;
  /** The color space of `channel`, `hsb` by default. */
  colorSpace?: ColorSpace;
}

/**
 * A number field that edits one channel of the picker's color. Arrow keys
 * step it, and the value is applied on blur or Enter.
 */
const ColorPickerChannelField = ({
  channel,
  colorSpace = "hsb",
  ...props
}: ColorPickerChannelFieldProps) => {
  const { color, setColor, disabled } = useColorPicker("ChannelField");
  const state = useColorChannelFieldState({
    channel,
    colorSpace,
    value: color,
    onChange: next => next && setColor(next),
    isDisabled: disabled,
    locale: LOCALE
  });

  return (
    // Its own `field` group: groups flow through context into the portal, so
    // it would otherwise follow the picker field's hover.
    <View group="field" flex={1} minWidth={0} {...props}>
      <Input
        size="sm"
        disabled={disabled}
        onChange={event => {
          if (state.validate(event.detail)) {
            state.setInputValue(event.detail);
          }
        }}>
        <Input.TextBox>
          <Input.TextBox.Value
            aria-label={state.colorValue.getChannelName(channel, LOCALE)}
            value={state.inputValue}
            inputMode="decimal"
            autoComplete="off"
            onBlur={() => state.commit()}
            onKeyDown={(event: any) => {
              const action = {
                Enter: () => state.commit(),
                ArrowUp: () => state.increment(),
                ArrowDown: () => state.decrement()
              }[event.key as string];
              if (action) {
                event.preventDefault();
                action();
              }
            }}
          />
        </Input.TextBox>
      </Input>
    </View>
  );
};

export interface ColorPickerSwatchesProps extends Omit<ViewProps, "children"> {
  /** The preset colors, as hex, `rgb()`, `hsl()` or `hsb()` strings. */
  colors: string[];
}

/** A row of preset colors; pressing one sets the picker's color. */
const ColorPickerSwatches = ({
  colors,
  ...props
}: ColorPickerSwatchesProps) => {
  const { color, setColor, disabled } = useColorPicker("Swatches");
  const selected = color.toString("hexa");

  return (
    <View
      flexDirection="row"
      flexWrap="wrap"
      gap="xl"
      aria-label="Swatches"
      {...props}>
      {colors.map(value => {
        const swatch = toColor(value);
        if (!swatch) {
          return null;
        }

        const css = swatch.toString("css");
        const pressed = swatch.toString("hexa") === selected;
        const select = () => !disabled && setColor(swatch);

        return (
          <View
            key={value}
            role="button"
            aria-label={swatch.getColorName(LOCALE)}
            aria-pressed={pressed}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
            width={20}
            height={20}
            borderRadius={100_000}
            borderWidth={2}
            borderColor={pressed ? css : "transparent"}
            padding={pressed ? 2 : 0}
            boxShadow="none focus-visible:ring-offset"
            outlineStyle="none"
            cursor={disabled ? "not-allowed" : "pointer"}
            opacity={disabled ? 0.5 : 1}
            transition="100ms"
            onPress={select}
            onKeyDown={(event: any) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                select();
              }
            }}>
            <View
              flex={1}
              borderRadius={100_000}
              scale={disabled ? 1 : "1 hover:1.1"}
              transition="100ms"
              {...getSwatchBackground(css)}>
              <Hairline borderRadius={100_000} />
            </View>
          </View>
        );
      })}
    </View>
  );
};

const DEFAULT_SWATCHES = [
  "#EF4444",
  "#F97316",
  "#EAB308",
  "#22C55E",
  "#06B6D4",
  "#3B82F6",
  "#8B5CF6",
  "#EC4899",
  "#F43F5E"
];

/**
 * The popover's default content: the color area, a hue slider, channel fields
 * with a color space switch and, when given, preset swatches.
 */
const ColorPickerDefaultContent = ({
  swatches
}: {
  swatches?: string[] | false;
}) => {
  const { disabled } = useColorPicker("Content");
  const [colorSpace, setColorSpace] = useState<ColorSpace>("hsl");

  const swatchList = useMemo(
    () => (swatches === false ? [] : (swatches ?? DEFAULT_SWATCHES)),
    [swatches]
  );

  return (
    <>
      <ColorPickerArea />
      <ColorPickerSlider channel="hue" />
      <ToggleGroup
        size="sm"
        fluid={true}
        allowEmpty={false}
        disabled={disabled}
        aria-label="Color space"
        value={colorSpace}
        onValueChange={value => setColorSpace(value as ColorSpace)}>
        {COLOR_SPACES.map(space => (
          <ToggleGroup.Item key={space} value={space}>
            {space.toUpperCase()}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup>
      <View flexDirection="row" gap="xl">
        {getColorChannels(colorSpace).map(channel => (
          <ColorPickerChannelField
            key={channel}
            channel={channel}
            colorSpace={colorSpace}
          />
        ))}
      </View>
      {swatchList.length > 0 && <ColorPickerSwatches colors={swatchList} />}
    </>
  );
};

export interface ColorPickerExtraProps {
  /** The color (controlled), or `null` for none. */
  value?: string | Color | null;
  /** The initial color when uncontrolled. */
  defaultValue?: string | Color | null;
  /**
   * Called with the new color, or `null` when the text box is cleared. Inside
   * a `Field`, the field instead receives the color as a hex string.
   */
  onChange?: (color: Color | null) => void;
  /** Preset colors shown in the default popover content. */
  swatches?: string[];
  /** The text box's placeholder. */
  placeholder?: string;
  /** The popover's content, replacing the default. */
  children?: ReactNode;
}

export type ColorPickerProps = Omit<
  GetProps<typeof Input>,
  keyof ColorPickerExtraProps
> &
  ColorPickerExtraProps;

// Passed to the inner `Input` while the popover is open, so focus moving into
// the popover is not a blur of the field.
const noop = () => {};

const ColorPickerImpl = createStyledHOC(
  Input,
  (
    {
      children,
      value: valueProp,
      defaultValue,
      onChange,
      swatches,
      placeholder,
      "aria-label": ariaLabel,
      ...props
    }: ColorPickerProps,
    forwardedRef
  ) => {
    // Inside a form control (such as `Field`), the value and focus come from
    // the control, which connects the picker to the form.
    const formControl = useFormControl();
    const size = props.size ?? formControl?.size ?? "md";
    const disabled = props.disabled ?? formControl?.disabled ?? false;

    // Float the field's label past the swatch trigger and separator, where
    // the text starts. Runs after `Input`'s own (floating) defaults, as a
    // parent's layout effect follows its children's, so this one wins.
    const underlined = (props.variant ?? formControl?.variant) === "underlined";
    const labelDefaults = useMemo(
      () => ({
        variant: "floating" as const,
        floatingLabelLeft:
          getSized(getFormSizeToken(size)) +
          (underlined ? 0 : 1 + getSpaced("4xl") * getFormSizeScale(size))
      }),
      [size, underlined]
    );
    useFieldLabelDefaults(labelDefaults);

    const [localValue, setLocalValue] = useState(() => toColor(defaultValue));
    // A field stores a hex string, which drops the hue of greys (and HSB/HSL
    // precision). The last color set is reused while it matches the value,
    // so the area and sliders do not jump.
    const lastColorRef = useRef<Color | null>(null);
    const parsed = toColor(
      valueProp !== undefined
        ? valueProp
        : formControl
          ? formControl.value
          : localValue
    );
    const last = lastColorRef.current;
    const color =
      parsed && last && formatColor(parsed) === formatColor(last)
        ? last
        : parsed;

    const formOnChange = formControl?.onChange;
    const setColor = useCallback(
      (next: Color | null) => {
        lastColorRef.current = next;
        setLocalValue(next);
        if (onChange) {
          onChange(next);
        } else {
          formOnChange?.(next ? formatColor(next) : null);
        }
      },
      [formOnChange, onChange]
    );

    // The text being typed, applied live whenever it parses; reformatted on
    // blur or Enter.
    const [draft, setDraft] = useState<string | null>(null);
    const handleInput = useCallback<InputChangeEventHandler>(
      event => {
        setDraft(event.detail);
        const next = toColor(event.detail);
        if (next) {
          setColor(next);
        }
      },
      [setColor]
    );
    const commitDraft = () => {
      if (draft !== null && !draft.trim()) {
        setColor(null);
      }
      setDraft(null);
    };

    const [open, setOpen] = useState(false);
    const formOnFocus = formControl?.onFocus;
    const formOnBlur = formControl?.onBlur;
    const handleOpenChange = useCallback(
      (next: boolean) => {
        setOpen(next);
        (next ? formOnFocus : formOnBlur)?.();
      },
      [formOnBlur, formOnFocus]
    );

    const context = useMemo(
      () => ({ color: color ?? EMPTY_COLOR, setColor, disabled }),
      [color, disabled, setColor]
    );
    const swatchSize = 22 * getFormSizeScale(size);

    return (
      <ColorPickerContext value={context}>
        <Popover
          open={open && !disabled}
          onOpenChange={handleOpenChange}
          placement="bottom-start"
          // Floating UI applies the offset on whichever side the popover flips to.
          offset={getSpaced("2xl")}>
          <Popover.Anchor asChild={true}>
            <Input
              ref={forwardedRef}
              {...props}
              size={size}
              disabled={disabled}
              focused={props.focused ?? (open || undefined)}
              onBlur={open ? noop : props.onBlur}
              onChange={handleInput}>
              <Popover.Trigger asChild={true}>
                <Input.Trigger
                  disabled={disabled}
                  aria-label={`Select color${color ? `, currently ${formatColor(color)}` : ""}`}>
                  <View
                    width={swatchSize}
                    height={swatchSize}
                    borderRadius={100_000}
                    opacity={disabled ? 0.5 : 1}
                    {...getSwatchBackground(
                      color ? color.toString("css") : "transparent"
                    )}>
                    <Hairline borderRadius={100_000} />
                  </View>
                </Input.Trigger>
              </Popover.Trigger>
              <Input.Separator />
              <Input.TextBox>
                <Input.TextBox.Value
                  aria-label={ariaLabel}
                  placeholder={placeholder}
                  value={draft ?? formatColor(color)}
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  onBlur={commitDraft}
                  onKeyDown={(event: any) => {
                    if (event.key === "Enter") {
                      commitDraft();
                    }
                  }}
                />
              </Input.TextBox>
            </Input>
          </Popover.Anchor>

          <Popover.Content width={264} padding="2xl">
            {/* The popover's inputs are local UI, not part of the picker's
                field: hide the enclosing field from them. */}
            <FormControlContext value={undefined}>
              {/* The gap lives here, not on the content frame, so it carries
                  over to the sheet the popover adapts to on small screens.
                  Inputs inherit their text color from the themed root, which
                  the portal sits outside of, so it is set here too. */}
              <View gap="3xl" width="100%" style={{ color: "var(--color)" }}>
                {children ?? <ColorPickerDefaultContent swatches={swatches} />}
              </View>
            </FormControlContext>
          </Popover.Content>
        </Popover>
      </ColorPickerContext>
    );
  },
  { displayName: "ColorPicker" }
);

/**
 * A text input for a color, with a swatch trigger that opens a popover to pick
 * the color from an area, sliders, channel fields and preset swatches. Its
 * popover content is composable, like the HeroUI `ColorPicker`.
 *
 * @remarks
 * Uncontrolled on its own (or controlled with `value`/`onChange`); wrap it in
 * a `Field` to connect it to a form, which stores the color as a hex string.
 */
export const ColorPicker = withStaticProperties(ColorPickerImpl, {
  Area: ColorPickerArea,
  Slider: ColorPickerSlider,
  ChannelField: ColorPickerChannelField,
  Swatches: ColorPickerSwatches
});
