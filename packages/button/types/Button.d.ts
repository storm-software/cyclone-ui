import type { TextContextStyles, TextParentStyles } from "@tamagui/text";
import type { GetProps, SizeTokens, StackStyleBase, StaticConfigPublic, TamaDefer, TamaguiComponent, TamaguiElement, ThemeableProps } from "@tamagui/web";
import type { FunctionComponent } from "react";
import { RNTamaguiViewNonStyleProps } from "@tamagui/core";
type ButtonIconProps = {
    color?: any;
    size?: any;
};
type IconProp = JSX.Element | FunctionComponent<ButtonIconProps> | ((props: ButtonIconProps) => any) | null;
type ButtonExtraProps = TextParentStyles & ThemeableProps & {
    /**
     * add icon before, passes color and size automatically if Component
     */
    icon?: IconProp;
    /**
     * add icon after, passes color and size automatically if Component
     */
    iconAfter?: IconProp;
    /**
     * adjust icon relative to size
     *
     * @default 1
     */
    scaleIcon?: number;
    /**
     * make the spacing elements flex
     */
    spaceFlex?: number | boolean;
    /**
     * adjust internal space relative to icon size
     */
    scaleSpace?: number;
    /**
     * remove default styles
     */
    unstyled?: boolean;
};
type ButtonProps = ButtonExtraProps & GetProps<typeof ButtonFrame>;
export declare const ButtonContext: import("@tamagui/web").StyledContext<Partial<TextContextStyles & {
    size: SizeTokens;
    variant?: "outlined" | undefined;
}>>;
declare const ButtonFrame: TamaguiComponent<TamaDefer, TamaguiElement, RNTamaguiViewNonStyleProps, StackStyleBase, {
    size?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    animated?: boolean | undefined;
}, StaticConfigPublic>;
export type InputBaseFrameProps = GetProps<typeof ButtonFrame>;
export declare const Button: TamaguiComponent<TamaDefer, TamaguiElement, RNTamaguiViewNonStyleProps, StackStyleBase, {
    size?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    animated?: boolean | undefined;
}, StaticConfigPublic>;
export type { ButtonProps };
//# sourceMappingURL=Button.d.ts.map