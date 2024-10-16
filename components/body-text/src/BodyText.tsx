import { GetProps, styled } from "@tamagui/core";
import { Paragraph } from "@tamagui/text";

export const BODY_TEXT_NAME = "BodyText";

export const BodyText = styled(Paragraph, {
  name: BODY_TEXT_NAME,

  color: "$color",
  fontFamily: "$body",
  fontSize: "$true",
  fontWeight: "$true"
});

export type BodyTextProps = GetProps<typeof BodyText>;
