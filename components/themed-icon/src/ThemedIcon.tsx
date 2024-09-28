import { ColorRole } from "@cyclone-ui/colors";
import { useFieldStore } from "@cyclone-ui/form";
import { isWeb } from "@tamagui/constants";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  getVariable,
  styled,
  useTheme,
  View,
  withStaticProperties
} from "@tamagui/core";
import { getFontSize } from "@tamagui/font-size";
import { getFontSized } from "@tamagui/get-font-sized";
import { getSpace } from "@tamagui/get-token";
import { XGroup } from "@tamagui/group";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import {
  AlertCircle,
  CheckCircle,
  HelpCircle,
  Info,
  Lock
} from "@tamagui/lucide-icons";
import type { SizeVariantSpreadFunction } from "@tamagui/web";
import { Input as TamaguiInput, useControllableState } from "tamagui";


const InputGroupImpl = InputValueImpl.styleable<{
  required?: boolean;
  onChange?: (value?: string) => any;
}>((props, forwardedRef) => {
  const { children, ...rest } = props;
  const { theme } = InputContext.useStyledContext();

  const store = useFieldStore();
  const focused = store.get.focused();
  const disabled = store.get.disabled();

  return (
    <InputGroupFrame
      theme={theme}
      applyFocusStyle={focused}
      disabled={disabled}>
      {theme &&
        (theme.toLowerCase().includes(ColorRole.ERROR) ||
          theme.toLowerCase().includes(ColorRole.WARNING)) && (
          <InputIcon>
            <AlertCircle />
          </InputIcon>
        )}
      {!disabled && theme && theme.toLowerCase().includes(ColorRole.INFO) && (
        <InputIcon>
          <Info />
        </InputIcon>
      )}
      {!disabled && theme && theme.toLowerCase().includes(ColorRole.HELP) && (
        <InputIcon>
          <HelpCircle />
        </InputIcon>
      )}
      {!disabled &&
        theme &&
        theme.toLowerCase().includes(ColorRole.SUCCESS) && (
          <InputIcon>
            <CheckCircle />
          </InputIcon>
        )}
      <InputValueImpl ref={forwardedRef} {...rest} />
      {children}
      {disabled && (
        <InputIcon>
          <Lock />
        </InputIcon>
      )}
    </InputGroupFrame>
  );
});

export const InputIconFrame = styled(View, {
  name: INPUT_NAME,
  justifyContent: "center",
  alignItems: "center",
  context: InputContext,
  animation: "$slow",

  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          paddingHorizontal: tokens.space[val]
        };
      }
    }
  } as const
});

const getIconSize = (size: FontSizeTokens, scale: number) => {
  return (
    (typeof size === "number"
      ? size * 0.6
      : getFontSize(size as FontSizeTokens)) * scale
  );
};

const InputIcon = InputIconFrame.styleable<{
  scaleIcon?: number;
  color?: ColorTokens | string;
}>((props, ref) => {
  const { children, color: colorProp, ...rest } = props;
  const inputContext = InputContext.useStyledContext();
  const { size = "$true", color: contextColor, scaleIcon = 1 } = inputContext;

  const store = useFieldStore();
  const disabled = store.get.disabled();
  const theme = inputContext.theme || store.get.theme();

  const themeColors = useTheme({
    name: theme
  });
  const color = disabled
    ? "$disabled"
    : getVariable(
        colorProp ||
          contextColor ||
          themeColors[contextColor as any]?.get("web") ||
          (!theme || theme === "base"
            ? themeColors.color8?.get("web")
            : themeColors.primary?.get("web"))
      );
  const iconSize = getIconSize(size as FontSizeTokens, scaleIcon);

  const getThemedIcon = useGetThemedIcon({
    size: iconSize,
    color: color as any
  });
  return (
    <InputIconFrame ref={ref} theme={theme} {...rest}>
      {getThemedIcon(children)}
    </InputIconFrame>
  );
});

const InputIconWrapper = InputIcon.styleable(
  ({ children, ...props }: any, ref: any) => {
    const inputContext = InputContext.useStyledContext();

    const store = useFieldStore();
    const disabled = store.get.disabled();
    const theme = inputContext.theme || store.get.theme();

    if (
      (inputContext.hideIcons &&
        theme &&
        (theme.toLowerCase().includes(ColorRole.ERROR) ||
          theme.toLowerCase().includes(ColorRole.WARNING) ||
          theme.toLowerCase().includes(ColorRole.INFO) ||
          theme.toLowerCase().includes(ColorRole.HELP) ||
          theme.toLowerCase().includes(ColorRole.SUCCESS))) ||
      disabled
    ) {
      return null;
    }

    return (
      <InputIcon ref={ref} {...props}>
        {children}
      </InputIcon>
    );
  }
);

export const Input = withStaticProperties(InputGroupImpl, {
  Icon: InputIconWrapper
});
