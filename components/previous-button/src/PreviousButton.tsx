import { Button, type ButtonProps } from "@cyclone-ui/button";
import { View } from "@tamagui/core";
import { ChevronLeft } from "@tamagui/lucide-icons";

export type PreviousButtonProps = ButtonProps;

export const PreviousButton = Button.styleable(
  (
    { children, size, variant = "secondary", ...props }: ButtonProps,
    forwardedRef
  ) => {
    return (
      <Button
        {...props}
        variant={variant}
        size={size}
        group={"previous" as any}
        ref={forwardedRef}>
        <Button.Icon>
          <View
            animation="$slow"
            x={0}
            $group-previous-hover={{
              x: -5
            }}>
            <ChevronLeft size="$1" marginBottom="$0.2" color="$primary" />
          </View>
        </Button.Icon>
        <Button.Text>{children ? children : "Previous"}</Button.Text>
      </Button>
    );
  },
  { staticConfig: { componentName: "Button" } }
);
