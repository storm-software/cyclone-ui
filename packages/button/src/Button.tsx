import {
  type SizeTokens,
  View,
  createStyledContext,
  styled,
  withStaticProperties,
  Text
} from "tamagui";

export const ButtonContext = createStyledContext({
  size: "$md" as SizeTokens
});

const ButtonFrame = styled(View, {
  name: "Button",
  context: ButtonContext,
  backgroundColor: "$background",
  alignItems: "center",
  flexDirection: "row",

  variants: {
    size: {
      "...size": (name: string | number, { tokens }: any) => {
        return {
          height: tokens.size[name],
          borderRadius: tokens.radius[name],
          gap: Number(tokens.space[name]) * 0.2
        };
      }
    }
  } as const
});

const ButtonText = styled(Text, {
  name: "ButtonText",
  context: ButtonContext,
  color: "$color",
  userSelect: "none",

  variants: {
    size: {
      "...fontSize": (name: string | number, { font }: any) => ({
        fontSize: font?.size[name]
      })
    }
  } as const
});

export const Button = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
  Props: ButtonContext.Provider
});
