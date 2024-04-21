/// <reference types="react" />
/// <reference types="react" />
import type { GetProps, SizeVariantSpreadFunction } from "@tamagui/web";
import type { ColorTokens, FontSizeTokens } from "tamagui";
export declare const InputContext: import("@tamagui/web").StyledContext<{
    size: FontSizeTokens;
    scaleIcon: number;
    color?: string | undefined;
    required: boolean;
}>;
export declare const defaultInputGroupStyles: {
    readonly borderColor: "$borderColor";
    readonly backgroundColor: "$color2";
    readonly minWidth: 0;
    readonly hoverStyle: {
        readonly borderColor: "$borderColorHover";
    };
    readonly focusStyle: {
        readonly outlineColor: "$outlineColor";
        readonly outlineWidth: 2;
        readonly outlineStyle: "solid";
        readonly borderColor: "$borderColorFocus";
    };
    readonly tabIndex: number;
    readonly size: "$true";
    readonly fontFamily: "$body";
    readonly borderWidth: 1;
    readonly outlineWidth: 0;
    readonly color: "$color";
} | {
    readonly borderColor: "$borderColor";
    readonly backgroundColor: "$color2";
    readonly minWidth: 0;
    readonly hoverStyle: {
        readonly borderColor: "$borderColorHover";
    };
    readonly focusStyle: {
        readonly outlineColor: "$outlineColor";
        readonly outlineWidth: 2;
        readonly outlineStyle: "solid";
        readonly borderColor: "$borderColorFocus";
    };
    readonly focusable: boolean;
    readonly size: "$true";
    readonly fontFamily: "$body";
    readonly borderWidth: 1;
    readonly outlineWidth: 0;
    readonly color: "$color";
};
export declare const inputSizeVariant: SizeVariantSpreadFunction<any>;
export declare const InputIconFrame: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, import("tamagui").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: import("tamagui").SizeTokens | undefined;
    variant?: "outlined" | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const InputContainerFrame: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, import("tamagui").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    color?: ColorTokens | undefined;
    size?: import("tamagui").SizeTokens | undefined;
    variant?: "outlined" | undefined;
    required?: boolean | undefined;
    gapScale?: number | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const InputLabel: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, import("react-native").View | HTMLButtonElement, import("@tamagui/web").TamaguiComponentPropsBaseBase & Omit<import("tamagui").TextNonStyleProps, "size" | keyof import("@tamagui/web").TextStylePropsBase | "unstyled"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & {
    unstyled?: boolean | undefined;
    size?: number | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/web").UnionableNumber | import("@tamagui/web").UnionableString | `$${string}` | `$${number}` | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & {
    unstyled?: boolean | undefined;
    size?: number | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/web").UnionableNumber | import("@tamagui/web").UnionableString | `$${string}` | `$${number}` | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase, {
    unstyled?: boolean | undefined;
    size?: number | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/web").UnionableNumber | import("@tamagui/web").UnionableString | `$${string}` | `$${number}` | undefined;
}>> & {
    htmlFor?: string | undefined;
} & import("react").RefAttributes<import("react-native").View | HTMLButtonElement>, import("@tamagui/web").StackStyleBase, {
    size?: FontSizeTokens | undefined;
    variant?: "outlined" | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const InputInfo: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, import("tamagui").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
    variant?: "outlined" | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export type InputContainerFrameProps = GetProps<typeof InputContainerFrame>;
export type InputExtraProps = {
    required?: boolean;
};
export type InputProps = InputContainerFrameProps & InputExtraProps;
export declare const Input: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "color" | "size" | "variant" | keyof import("@tamagui/web").StackStyleBase | "required" | "gapScale"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    color?: ColorTokens | undefined;
    size?: import("tamagui").SizeTokens | undefined;
    variant?: "outlined" | undefined;
    required?: boolean | undefined;
    gapScale?: number | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    color?: ColorTokens | undefined;
    size?: import("tamagui").SizeTokens | undefined;
    variant?: "outlined" | undefined;
    required?: boolean | undefined;
    gapScale?: number | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
    color?: ColorTokens | undefined;
    size?: import("tamagui").SizeTokens | undefined;
    variant?: "outlined" | undefined;
    required?: boolean | undefined;
    gapScale?: number | undefined;
}>> & import("react").RefAttributes<import("tamagui").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<import("@tamagui/web").TamaDefer, import("tamagui").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    color?: ColorTokens | undefined;
    size?: import("tamagui").SizeTokens | undefined;
    variant?: "outlined" | undefined;
    required?: boolean | undefined;
    gapScale?: number | undefined;
}, import("@tamagui/web").StaticConfigPublic> & Omit<import("@tamagui/web").StaticConfigPublic, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [import("@tamagui/web").TamaDefer, import("tamagui").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        color?: ColorTokens | undefined;
        size?: import("tamagui").SizeTokens | undefined;
        variant?: "outlined" | undefined;
        required?: boolean | undefined;
        gapScale?: number | undefined;
    }, import("@tamagui/web").StaticConfigPublic];
} & {
    Box: import("tamagui").TamaguiComponent<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | "elevation" | "transparent" | "circular" | "inset" | "unstyled" | keyof import("@tamagui/web").StackStyleBase | "fullscreen" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        unstyled?: boolean | undefined;
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        unstyled?: boolean | undefined;
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        unstyled?: boolean | undefined;
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }>> & {
        axis?: "vertical" | "horizontal" | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        scrollable?: boolean | undefined;
        showScrollIndicator?: boolean | undefined;
        disabled?: boolean | undefined;
        disablePassBorderRadius?: (boolean | "bottom" | "end" | "start" | "top") | undefined;
        forceUseItem?: boolean | undefined;
    } & {
        __scopeGroup?: import("tamagui").Scope;
    }, import("@tamagui/web").StackStyleBase, {
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        unstyled?: boolean | undefined;
        variant?: "outlined" | undefined;
        fullscreen?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
        scaleIcon?: number | undefined;
        applyFocusStyle?: boolean | undefined;
    }>, import("tamagui").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | "elevation" | "transparent" | "circular" | "inset" | "unstyled" | keyof import("@tamagui/web").StackStyleBase | "fullscreen" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        unstyled?: boolean | undefined;
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        unstyled?: boolean | undefined;
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        unstyled?: boolean | undefined;
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }>> & {
        axis?: "vertical" | "horizontal" | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        scrollable?: boolean | undefined;
        showScrollIndicator?: boolean | undefined;
        disabled?: boolean | undefined;
        disablePassBorderRadius?: (boolean | "bottom" | "end" | "start" | "top") | undefined;
        forceUseItem?: boolean | undefined;
    } & {
        __scopeGroup?: import("tamagui").Scope;
    } & void, import("@tamagui/web").StackStyleBase, {
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        unstyled?: boolean | undefined;
        variant?: "outlined" | undefined;
        fullscreen?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
        scaleIcon?: number | undefined;
        applyFocusStyle?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Area: import("tamagui").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps & import("./InputBase").InputBaseExtraProps, import("@tamagui/web").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    }, {
        size?: import("tamagui").SizeTokens | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
        variant?: "outlined" | undefined;
    }>, "required"> & {
        required?: boolean | undefined;
    }, import("react-native").TextInput, import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps & import("./InputBase").InputBaseExtraProps & {
        required?: boolean | undefined;
    }, import("@tamagui/web").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    }, {
        size?: import("tamagui").SizeTokens | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
        variant?: "outlined" | undefined;
    }, {
        isInput: true;
        accept: {
            readonly placeholderTextColor: "color";
            readonly selectionColor: "color";
        };
    } & import("@tamagui/web").StaticConfigPublic>;
    Section: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, unknown, import("@tamagui/web").TamaguiComponentPropsBaseBase & import("tamagui").GroupItemProps & {
        __scopeGroup?: import("tamagui").Scope;
    }, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic>;
    Icon: import("tamagui").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("tamagui").SizeTokens | undefined;
        variant?: "outlined" | undefined;
    }>, "color" | "scaleIcon"> & {
        scaleIcon?: number | undefined;
        color?: string | undefined;
    }, import("tamagui").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & {
        scaleIcon?: number | undefined;
        color?: string | undefined;
    }, import("@tamagui/web").StackStyleBase, {
        size?: import("tamagui").SizeTokens | undefined;
        variant?: "outlined" | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Info: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, import("tamagui").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
        variant?: "outlined" | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Label: import("tamagui").TamaguiComponent<import("@tamagui/web").GetFinalProps<import("@tamagui/web").TamaguiComponentPropsBaseBase & Omit<import("tamagui").TextNonStyleProps, "size" | keyof import("@tamagui/web").TextStylePropsBase | "unstyled"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & {
        unstyled?: boolean | undefined;
        size?: number | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/web").UnionableNumber | import("@tamagui/web").UnionableString | `$${string}` | `$${number}` | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & {
        unstyled?: boolean | undefined;
        size?: number | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/web").UnionableNumber | import("@tamagui/web").UnionableString | `$${string}` | `$${number}` | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase, {
        unstyled?: boolean | undefined;
        size?: number | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/web").UnionableNumber | import("@tamagui/web").UnionableString | `$${string}` | `$${number}` | undefined;
    }>> & {
        htmlFor?: string | undefined;
    } & import("react").RefAttributes<import("react-native").View | HTMLButtonElement>, import("@tamagui/web").StackStyleBase, {
        size?: FontSizeTokens | undefined;
        variant?: "outlined" | undefined;
    }>, import("react-native").View | HTMLButtonElement, import("@tamagui/web").TamaguiComponentPropsBaseBase & Omit<import("tamagui").TextNonStyleProps, "size" | keyof import("@tamagui/web").TextStylePropsBase | "unstyled"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & {
        unstyled?: boolean | undefined;
        size?: number | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/web").UnionableNumber | import("@tamagui/web").UnionableString | `$${string}` | `$${number}` | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & {
        unstyled?: boolean | undefined;
        size?: number | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/web").UnionableNumber | import("@tamagui/web").UnionableString | `$${string}` | `$${number}` | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase, {
        unstyled?: boolean | undefined;
        size?: number | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/web").UnionableNumber | import("@tamagui/web").UnionableString | `$${string}` | `$${number}` | undefined;
    }>> & {
        htmlFor?: string | undefined;
    } & import("react").RefAttributes<import("react-native").View | HTMLButtonElement> & void, import("@tamagui/web").StackStyleBase, {
        size?: FontSizeTokens | undefined;
        variant?: "outlined" | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    XGroup: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | "elevation" | "transparent" | "circular" | "inset" | "unstyled" | keyof import("@tamagui/web").StackStyleBase | "fullscreen" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        unstyled?: boolean | undefined;
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        unstyled?: boolean | undefined;
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        unstyled?: boolean | undefined;
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }>> & {
        axis?: "vertical" | "horizontal" | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        scrollable?: boolean | undefined;
        showScrollIndicator?: boolean | undefined;
        disabled?: boolean | undefined;
        disablePassBorderRadius?: (boolean | "bottom" | "end" | "start" | "top") | undefined;
        forceUseItem?: boolean | undefined;
    } & {
        __scopeGroup?: import("tamagui").Scope;
    }, "size" | "elevation" | "transparent" | "circular" | "inset" | "unstyled" | "variant" | keyof import("@tamagui/web").StackStyleBase | "fullscreen" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        unstyled?: boolean | undefined;
        variant?: "outlined" | undefined;
        fullscreen?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        unstyled?: boolean | undefined;
        variant?: "outlined" | undefined;
        fullscreen?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        unstyled?: boolean | undefined;
        variant?: "outlined" | undefined;
        fullscreen?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }>> & import("react").RefAttributes<import("tamagui").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<import("@tamagui/web").TamaDefer, import("tamagui").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | "elevation" | "transparent" | "circular" | "inset" | "unstyled" | keyof import("@tamagui/web").StackStyleBase | "fullscreen" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        unstyled?: boolean | undefined;
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        unstyled?: boolean | undefined;
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        unstyled?: boolean | undefined;
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }>> & {
        axis?: "vertical" | "horizontal" | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        scrollable?: boolean | undefined;
        showScrollIndicator?: boolean | undefined;
        disabled?: boolean | undefined;
        disablePassBorderRadius?: (boolean | "bottom" | "end" | "start" | "top") | undefined;
        forceUseItem?: boolean | undefined;
    } & {
        __scopeGroup?: import("tamagui").Scope;
    }, import("@tamagui/web").StackStyleBase, {
        size?: any;
        elevation?: number | import("tamagui").SizeTokens | undefined;
        transparent?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | import("tamagui").SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        unstyled?: boolean | undefined;
        variant?: "outlined" | undefined;
        fullscreen?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }, import("@tamagui/web").StaticConfigPublic> & Omit<import("@tamagui/web").StaticConfigPublic, "staticConfig" | "extractable" | "styleable"> & {
        __tama: [import("@tamagui/web").TamaDefer, import("tamagui").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | "elevation" | "transparent" | "circular" | "inset" | "unstyled" | keyof import("@tamagui/web").StackStyleBase | "fullscreen" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            unstyled?: boolean | undefined;
            size?: any;
            elevation?: number | import("tamagui").SizeTokens | undefined;
            transparent?: boolean | undefined;
            fullscreen?: boolean | undefined;
            circular?: boolean | undefined;
            inset?: number | import("tamagui").SizeTokens | {
                top?: number | undefined;
                bottom?: number | undefined;
                left?: number | undefined;
                right?: number | undefined;
            } | undefined;
            hoverTheme?: boolean | undefined;
            pressTheme?: boolean | undefined;
            focusTheme?: boolean | undefined;
            elevate?: boolean | undefined;
            bordered?: number | boolean | undefined;
            backgrounded?: boolean | undefined;
            radiused?: boolean | undefined;
            padded?: boolean | undefined;
            chromeless?: boolean | "all" | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            unstyled?: boolean | undefined;
            size?: any;
            elevation?: number | import("tamagui").SizeTokens | undefined;
            transparent?: boolean | undefined;
            fullscreen?: boolean | undefined;
            circular?: boolean | undefined;
            inset?: number | import("tamagui").SizeTokens | {
                top?: number | undefined;
                bottom?: number | undefined;
                left?: number | undefined;
                right?: number | undefined;
            } | undefined;
            hoverTheme?: boolean | undefined;
            pressTheme?: boolean | undefined;
            focusTheme?: boolean | undefined;
            elevate?: boolean | undefined;
            bordered?: number | boolean | undefined;
            backgrounded?: boolean | undefined;
            radiused?: boolean | undefined;
            padded?: boolean | undefined;
            chromeless?: boolean | "all" | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
            unstyled?: boolean | undefined;
            size?: any;
            elevation?: number | import("tamagui").SizeTokens | undefined;
            transparent?: boolean | undefined;
            fullscreen?: boolean | undefined;
            circular?: boolean | undefined;
            inset?: number | import("tamagui").SizeTokens | {
                top?: number | undefined;
                bottom?: number | undefined;
                left?: number | undefined;
                right?: number | undefined;
            } | undefined;
            hoverTheme?: boolean | undefined;
            pressTheme?: boolean | undefined;
            focusTheme?: boolean | undefined;
            elevate?: boolean | undefined;
            bordered?: number | boolean | undefined;
            backgrounded?: boolean | undefined;
            radiused?: boolean | undefined;
            padded?: boolean | undefined;
            chromeless?: boolean | "all" | undefined;
        }>> & {
            axis?: "vertical" | "horizontal" | undefined;
            orientation?: "vertical" | "horizontal" | undefined;
            scrollable?: boolean | undefined;
            showScrollIndicator?: boolean | undefined;
            disabled?: boolean | undefined;
            disablePassBorderRadius?: (boolean | "bottom" | "end" | "start" | "top") | undefined;
            forceUseItem?: boolean | undefined;
        } & {
            __scopeGroup?: import("tamagui").Scope;
        }, import("@tamagui/web").StackStyleBase, {
            size?: any;
            elevation?: number | import("tamagui").SizeTokens | undefined;
            transparent?: boolean | undefined;
            circular?: boolean | undefined;
            inset?: number | import("tamagui").SizeTokens | {
                top?: number | undefined;
                bottom?: number | undefined;
                left?: number | undefined;
                right?: number | undefined;
            } | undefined;
            unstyled?: boolean | undefined;
            variant?: "outlined" | undefined;
            fullscreen?: boolean | undefined;
            hoverTheme?: boolean | undefined;
            pressTheme?: boolean | undefined;
            focusTheme?: boolean | undefined;
            elevate?: boolean | undefined;
            bordered?: number | boolean | undefined;
            backgrounded?: boolean | undefined;
            radiused?: boolean | undefined;
            padded?: boolean | undefined;
            chromeless?: boolean | "all" | undefined;
        }, import("@tamagui/web").StaticConfigPublic];
    } & {
        Item: (props: import("tamagui").GroupItemProps & {
            __scopeGroup?: import("tamagui").Scope;
        }) => any;
    };
};
//# sourceMappingURL=Input.d.ts.map