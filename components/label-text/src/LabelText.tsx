import { GetProps, styled } from "@tamagui/core";
import { Paragraph } from "@tamagui/text";

export const LABEL_TEXT_NAME = "LabelText";

export const LabelText = styled(Paragraph, {
  name: LABEL_TEXT_NAME,

  color: "$color",
  fontFamily: "$label",
  fontSize: "$true",
  fontWeight: "$true"
});

export type LabelTextProps = GetProps<typeof LabelText>;
