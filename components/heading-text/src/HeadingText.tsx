import { GetProps, styled } from "@tamagui/core";
import { Paragraph } from "@tamagui/text";

export const HEADING_TEXT_NAME = "HeadingText";

export const HeadingText = styled(Paragraph, {
  name: HEADING_TEXT_NAME,

  color: "$color",
  fontFamily: "$heading",
  fontSize: "$true",
  fontWeight: "$true"
});

export type HeadingTextProps = GetProps<typeof HeadingText>;
