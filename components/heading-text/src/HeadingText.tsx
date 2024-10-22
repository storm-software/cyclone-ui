import { GetProps, styled } from "@tamagui/core";
import { Paragraph } from "@tamagui/text";

export const HEADING_TEXT_NAME = "HeadingText";

const BaseHeadingText = styled(Paragraph, {
  tag: "span",
  name: HEADING_TEXT_NAME,
  accessibilityRole: "header",

  color: "$color",
  fontFamily: "$heading",
  fontSize: "$true",
  fontWeight: "$true"
});

export type HeadingTextProps = GetProps<typeof BaseHeadingText>;

export const HeadingText = BaseHeadingText.styleable<{ level?: number }>(
  ({ children, level, ...props }, forwardedRef) => {
    if (level === 1) {
      return (
        <Heading1Text ref={forwardedRef} {...props}>
          {children}
        </Heading1Text>
      );
    } else if (level === 2) {
      return (
        <Heading2Text ref={forwardedRef} {...props}>
          {children}
        </Heading2Text>
      );
    } else if (level === 3) {
      return (
        <Heading3Text ref={forwardedRef} {...props}>
          {children}
        </Heading3Text>
      );
    } else if (level === 4) {
      return (
        <Heading4Text ref={forwardedRef} {...props}>
          {children}
        </Heading4Text>
      );
    } else if (level === 5) {
      return (
        <Heading5Text ref={forwardedRef} {...props}>
          {children}
        </Heading5Text>
      );
    } else if (level === 6) {
      return (
        <Heading6Text ref={forwardedRef} {...props}>
          {children}
        </Heading6Text>
      );
    }

    return (
      <BaseHeadingText ref={forwardedRef} {...props}>
        {children}
      </BaseHeadingText>
    );
  }
);

export const Heading1Text = styled(BaseHeadingText, {
  name: "H1",
  tag: "h1",
  size: "$12"
});

export const Heading2Text = styled(BaseHeadingText, {
  name: "H2",
  tag: "h2",
  size: "$11"
});

export const Heading3Text = styled(BaseHeadingText, {
  name: "H3",
  tag: "h3",
  size: "$10"
});

export const Heading4Text = styled(BaseHeadingText, {
  name: "H4",
  tag: "h4",
  size: "$9"
});

export const Heading5Text = styled(BaseHeadingText, {
  name: "H5",
  tag: "h5",
  size: "$8"
});

export const Heading6Text = styled(BaseHeadingText, {
  name: "H6",
  tag: "h6",
  size: "$7"
});
