import { GetProps, styled } from "@tamagui/core";
import { SizableText } from "@tamagui/text";

const BaseHeadingText = styled(SizableText, {
  name: "HeadingText",
  tag: "span",
  accessibilityRole: "header",

  color: "$color",
  fontFamily: "$heading",
  size: "$true"
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
  },
  { staticConfig: { componentName: "HeadingText" } }
);

export const Heading1Text = styled(BaseHeadingText, {
  name: "Heading1Text",
  tag: "h1",
  size: "$12"
});

export const Heading2Text = styled(BaseHeadingText, {
  name: "Heading2Text",
  tag: "h2",
  size: "$11"
});

export const Heading3Text = styled(BaseHeadingText, {
  name: "Heading3Text",
  tag: "h3",
  size: "$10"
});

export const Heading4Text = styled(BaseHeadingText, {
  name: "Heading4Text",
  tag: "h4",
  size: "$9"
});

export const Heading5Text = styled(BaseHeadingText, {
  name: "Heading5Text",
  tag: "h5",
  size: "$8"
});

export const Heading6Text = styled(BaseHeadingText, {
  name: "Heading6Text",
  tag: "h6",
  size: "$7"
});
