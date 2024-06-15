import { Button, type ButtonProps } from "@cyclone-ui/button";
import { View } from "@tamagui/core";
import { ChevronRight } from "@tamagui/lucide-icons";

export type NextButtonProps = ButtonProps;

export const NextButton = Button.styleable(
  (
    { children, size, variant = "secondary", ...props }: ButtonProps,
    forwardedRef
  ) => {
    return (
      <Button
        justifyContent="center"
        {...props}
        variant={variant}
        size={size}
        group={"next" as any}
        ref={forwardedRef}>
        <Button.Text>{children ? children : "Next"}</Button.Text>
        <Button.Icon>
          <View
            animation="$slow"
            x={0}
            $group-next-hover={{
              x: 5
            }}>
            <ChevronRight size="$1" marginBottom="$0.2" color="$primary" />
          </View>
        </Button.Icon>
      </Button>
    );
  },
  { staticConfig: { componentName: "Button" } }
);
