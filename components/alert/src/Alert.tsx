/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { BodyText } from "@cyclone-ui/body-text";
import { ColorThemeName } from "@cyclone-ui/colors";
import { Container } from "@cyclone-ui/container";
import { EyebrowText } from "@cyclone-ui/eyebrow-text";
import { Heading3Text } from "@cyclone-ui/heading-text";
import { Diagonal } from "@cyclone-ui/icons";
import {
  getIconByTheme,
  ThemeableIcon,
  type ThemeableIconProps
} from "@cyclone-ui/themeable-icon";
import {
  createStyledContext,
  styled,
  Theme,
  useThemeName,
  withStaticProperties
} from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import { XStack, YStack } from "@tamagui/stacks";
import type { GetProps } from "@tamagui/web";

export type AlertContextProps = {
  theme?: ColorThemeName;
};

export const AlertContext = createStyledContext<AlertContextProps>({
  theme: undefined
});

const AlertBackgroundLowGradient = styled(LinearGradient, {
  name: "Alert",

  fullscreen: true,
  flexDirection: "row",
  animation: "normal",
  overflow: "hidden",
  borderRadius: "$true",
  opacity: 0.9,
  zIndex: 5,
  colors: ["transparent", "$base1"],
  start: [1.0, 1.0],
  end: [0, 0]
});

const AlertBackgroundHighGradient = styled(LinearGradient, {
  name: "Alert",

  fullscreen: true,
  flexDirection: "row",
  animation: "normal",
  overflow: "hidden",
  borderRadius: "$true",
  opacity: 0.25,
  zIndex: 8,
  colors: ["transparent", "$secondary"],
  start: [0, 1.0],
  end: [0, 1.0]
});

const AlertBackgroundDiagonal = styled(Diagonal, {
  name: "Alert",

  position: "absolute",
  borderRadius: "$true",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  opacity: 0.05,
  zIndex: 10
});

const AlertContent = styled(YStack, {
  name: "Alert",

  animation: "normal",
  width: "100%",
  flexDirection: "column",
  zIndex: 20,
  gap: "$2",
  padding: "$1"
});

const AlertFrameImpl = Container.styleable<AlertContextProps>(
  (props, forwardedRef) => {
    const { children, theme, ...rest } = props;

    return (
      <AlertContext.Provider theme={theme}>
        <Container
          ref={forwardedRef}
          {...rest}
          theme={theme}
          position="relative"
          variant="quaternary"
          borderWidth={3}>
          <AlertBackgroundLowGradient theme={theme} />
          <AlertBackgroundHighGradient theme={theme} />
          <AlertBackgroundDiagonal />
          <AlertContent>{children}</AlertContent>
        </Container>
      </AlertContext.Provider>
    );
  },
  {
    staticConfig: { componentName: "Alert" }
  }
);

const AlertHeader = styled(XStack, {
  name: "Alert",

  paddingBottom: 0,
  zIndex: 10,
  backgroundColor: "transparent",
  alignItems: "center",
  gap: "$3"
});

const AlertIcon = ({ children, ...props }: ThemeableIconProps) => {
  const theme = useThemeName();

  const icon = children || getIconByTheme({ theme });
  if (!icon) {
    return null;
  }

  return (
    <ThemeableIcon theme={theme} {...props} size="$6">
      {icon}
    </ThemeableIcon>
  );
};

const AlertHeading = styled(Heading3Text, {
  name: "AlertHeading",

  color: "$color",
  zIndex: 20
});

const AlertHeadingImpl = AlertHeading.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name={ColorThemeName.BASE}>
        <AlertHeading ref={forwardedRef}>{children}</AlertHeading>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "AlertHeading" }
  }
);

const AlertEyebrow = styled(EyebrowText, {
  name: "AlertEyebrow",

  color: "$tertiary",
  zIndex: 20
});

const AlertEyebrowImpl = AlertEyebrow.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name={ColorThemeName.BASE}>
        <AlertEyebrow ref={forwardedRef} {...props}>
          {children}
        </AlertEyebrow>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "AlertEyebrow" }
  }
);

const AlertBody = styled(BodyText, {
  name: "AlertBody",

  color: "$secondary",
  zIndex: 20,
  paddingVertical: 0
});

const AlertBodyImpl = AlertBody.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Theme name={ColorThemeName.BASE}>
        <AlertBody ref={forwardedRef} {...props}>
          {children}
        </AlertBody>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "AlertBody" }
  }
);

export type AlertHeaderProps = GetProps<typeof AlertHeader>;
export type AlertHeadingProps = GetProps<typeof AlertHeadingImpl>;
export type AlertBodyProps = GetProps<typeof AlertBodyImpl>;
export type AlertIconProps = GetProps<typeof AlertIcon>;

export type AlertProps = GetProps<typeof AlertFrameImpl>;

export const Alert = withStaticProperties(AlertFrameImpl, {
  Header: withStaticProperties(AlertHeader, {
    Eyebrow: AlertEyebrowImpl,
    Heading: AlertHeadingImpl,
    Icon: AlertIcon
  }),
  Body: AlertBodyImpl
});
