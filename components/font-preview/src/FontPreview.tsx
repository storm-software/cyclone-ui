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

import { BodyText } from "@cyclone-ui/body-text";
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { Input } from "@cyclone-ui/input";
import { Select } from "@cyclone-ui/select";
import { Slider } from "@cyclone-ui/slider";
import { FormApi } from "@cyclone-ui/state/form";
import type { FontTokens } from "@tamagui/core";
import { getConfig, Text, View } from "@tamagui/core";
import type { YStackProps } from "@tamagui/stacks";
import { XStack, YStack } from "@tamagui/stacks";
import type { JSX } from "react";
import { useId } from "react";

/** A weight and style of the font, shown as one preview row. */
export interface FontPreviewStyle {
  /** The numeric font weight, such as `400`. */
  weight: number;
  /** Whether the row is set in the italic style. */
  italic?: boolean;
  /** The row's label. Defaults to the weight's name, such as `Regular 400 Italic`. */
  label?: string;
}

export type FontPreviewProps = Omit<YStackProps, "children"> & {
  /**
   * The font to preview: a font in the Tamagui config.
   *
   * @defaultValue "body"
   */
  fontFamily?: FontTokens;
  /**
   * The weights and styles to show, one row each. Defaults to the faces the
   * font declares (each weight, upright and italic), or to its weights.
   */
  styles?: readonly FontPreviewStyle[];
  /** The preset sizes, in pixels, of the size select. They also bound the slider. */
  sizes?: readonly number[];
  /**
   * The size, in pixels, the rows are first shown at.
   *
   * @defaultValue 64
   */
  defaultSize?: number;
  /** The text the rows show until some is typed. */
  sampleText?: string;
};

interface FontPreviewValues {
  text: string;
  size: string;
}

/** The common names of the CSS font weights. */
const WEIGHT_NAMES: Record<number, string> = {
  100: "Thin",
  200: "ExtraLight",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
  800: "ExtraBold",
  900: "Black"
};

const DEFAULT_SIZES = [8, 12, 14, 20, 24, 32, 40, 64, 96, 120, 184, 280];
const DEFAULT_SAMPLE_TEXT = "The quick brown fox jumps over the lazy dog";

// Shown for a font the config does not describe.
const FALLBACK_STYLES: FontPreviewStyle[] = [
  { weight: 400 },
  { weight: 400, italic: true },
  { weight: 700 },
  { weight: 700, italic: true }
];

interface FontFace {
  normal?: string;
  italic?: string;
}

interface FontDefinition {
  family?: string;
  weight?: Record<string, string | number>;
  face?: Record<string, FontFace>;
}

/**
 * The faces a font declared. `createFont` gives every weight from 100 to 900
 * a face: one before the first declared face is `{ normal: family }`, and
 * one after it repeats the face of the weight before it.
 */
const getDeclaredFaces = (font: FontDefinition) => {
  let previous: FontFace | undefined;

  return Object.entries(font.face ?? {})
    .map(([weight, face]) => ({ weight: Number(weight), face }))
    .filter(({ weight }) => Number.isFinite(weight))
    .sort((a, b) => a.weight - b.weight)
    .filter(({ face }) => {
      const filled =
        (face.normal === font.family && !face.italic) ||
        (face.normal === previous?.normal && face.italic === previous?.italic);
      previous = face;

      return !filled;
    });
};

/**
 * The weights and styles a font in the Tamagui config provides: each face
 * (upright, then italic), else each distinct weight.
 *
 * @param fontFamily - The font's name in the config, with or without `$`.
 * @returns The styles in ascending weight, or regular and bold (upright and
 * italic) for a font the config does not describe.
 */
export const getFontPreviewStyles = (
  fontFamily: string
): FontPreviewStyle[] => {
  const name = fontFamily.replace(/^\$/, "");
  const fonts = getConfig().fonts as Record<string, FontDefinition | undefined>;
  const font = fonts[name] ?? fonts[`$${name}`];

  const faces = font ? getDeclaredFaces(font) : [];
  if (faces.length > 0) {
    return faces.flatMap(({ weight, face }) => [
      ...(face.normal ? [{ weight }] : []),
      ...(face.italic ? [{ weight, italic: true }] : [])
    ]);
  }

  const weights = [
    ...new Set(Object.values(font?.weight ?? {}).map(Number))
  ].filter(Number.isFinite);

  return weights.length > 0
    ? weights.sort((a, b) => a - b).map(weight => ({ weight }))
    : FALLBACK_STYLES;
};

/**
 * The label of a preview row, such as `Regular 400` or `Black 900 Italic`.
 *
 * @param style - The row's weight and style.
 * @returns The style's own label, else its weight name, weight and style.
 */
export const getFontStyleLabel = (style: FontPreviewStyle): string =>
  style.label ??
  [WEIGHT_NAMES[style.weight], style.weight, style.italic && "Italic"]
    .filter(Boolean)
    .join(" ");

const FontPreviewRow = ({
  fontFamily,
  style,
  size,
  text
}: {
  fontFamily: FontTokens;
  style: FontPreviewStyle;
  size: number;
  text: string;
}) => (
  <YStack
    gap="xl"
    paddingVertical="2xl"
    paddingHorizontal="xl"
    borderTopWidth={1}
    borderColor="hairline"
    overflow="hidden">
    <BodyText size="sm" color="subtle">
      {getFontStyleLabel(style)}
    </BodyText>
    <Text
      fontFamily={fontFamily}
      fontSize={size}
      // Tamagui v3 reads a unitless `lineHeight` as a ratio: pin the pixels.
      lineHeight={`${Math.round(size * 1.25)}px`}
      fontWeight={String(style.weight) as never}
      fontStyle={style.italic ? "italic" : "normal"}
      color="emphasis"
      wordWrap="break-word">
      {text}
    </Text>
  </YStack>
);

type FontPreviewContentProps = Required<
  Pick<FontPreviewProps, "fontFamily" | "sizes" | "defaultSize" | "sampleText">
> &
  Pick<FontPreviewProps, "styles">;

const FontPreviewContent = ({
  fontFamily,
  styles,
  sizes,
  defaultSize,
  sampleText
}: FontPreviewContentProps) => {
  // The form's values are the one source of the text and the size, so the
  // size select and the slider stay in step.
  const form = FormApi.use();
  const values = form.values.get() as Partial<FontPreviewValues>;
  const setValues = form.values.set();
  const text = values.text || sampleText;
  const size = Number(values.size) || defaultSize;
  // A size picked on the slider is listed too, so the select can show it.
  const sizeOptions = [...new Set([...sizes, size])].sort((a, b) => a - b);

  return (
    <>
      <XStack gap="3xl" alignItems="center" flexWrap="wrap">
        <View flexGrow={3} flexBasis={240} minWidth={0}>
          <Field name="text">
            <Field.Label>Type here to preview text</Field.Label>
            <Input circular={true}>
              <Input.TextBox>
                <Input.TextBox.Value placeholder={sampleText} />
              </Input.TextBox>
            </Input>
          </Field>
        </View>
        <View width="20xl" flexShrink={0}>
          <Field name="size">
            <Field.Label>Size</Field.Label>
            <Select searchable={false}>
              <Select.TextBox>
                <Select.TextBox.Value />
              </Select.TextBox>
              <Select.Items>
                {sizeOptions.map((option, index) => (
                  <Select.Items.Item
                    key={option}
                    index={index}
                    value={String(option)}>
                    {`${option}px`}
                  </Select.Items.Item>
                ))}
              </Select.Items>
            </Select>
          </Field>
        </View>
        <View flexGrow={1} flexBasis={160} minWidth={0}>
          <Slider
            min={sizes.length > 0 ? Math.min(...sizes) : 1}
            max={sizes.length > 0 ? Math.max(...sizes) : defaultSize}
            value={size}
            onChange={next => {
              const nextSize = String(Array.isArray(next) ? next[0] : next);
              setValues((previous: Record<string, unknown>) =>
                previous.size === nextSize
                  ? previous
                  : { ...previous, size: nextSize }
              );
            }}
            getAriaLabel={() => "Font size"}
            getAriaValueText={value => `${value}px`}
          />
        </View>
      </XStack>
      <YStack marginTop="2xl">
        {(styles ?? getFontPreviewStyles(fontFamily)).map(style => (
          <FontPreviewRow
            key={`${style.weight}-${style.italic ? "italic" : "normal"}-${style.label ?? ""}`}
            fontFamily={fontFamily}
            style={style}
            size={size}
            text={text}
          />
        ))}
      </YStack>
    </>
  );
};

/**
 * Previews a font's weights and styles, one row each, in text the reader
 * types and at a size chosen from a select of presets or with a slider.
 */
export const FontPreview = ({
  fontFamily = "body" as FontTokens,
  styles,
  sizes = DEFAULT_SIZES,
  defaultSize = 64,
  sampleText = DEFAULT_SAMPLE_TEXT,
  ...props
}: FontPreviewProps): JSX.Element => {
  const id = useId();

  return (
    <YStack width="100%" {...props}>
      <Form
        name={`fontPreview-${id}`}
        initialValues={{ text: "", size: String(defaultSize) }}>
        <FontPreviewContent
          fontFamily={fontFamily}
          styles={styles}
          sizes={sizes}
          defaultSize={defaultSize}
          sampleText={sampleText}
        />
      </Form>
    </YStack>
  );
};
