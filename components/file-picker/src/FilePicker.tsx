import { Dispatch, SetStateAction } from "react";
import { DocumentPickerAsset } from "expo-document-picker";
import { Linking } from "react-native";
import { Button } from "@cyclone-ui/button";
import { ColorRole } from "@cyclone-ui/colors";
import { format } from "@formkit/tempo";
import { AnimatePresence } from "@tamagui/animate-presence";
import {
  createStyledContext,
  FontSizeTokens,
  getVariable,
  isWeb,
  styled,
  Text,
  TextProps,
  useTheme,
  useThemeName,
  VariantSpreadExtras,
  View,
  withStaticProperties,
  type ColorTokens
} from "@tamagui/core";
import { getFontSize } from "@tamagui/font-size";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import { Image } from "@tamagui/image";
import { Label } from "@tamagui/label";
import { LinearGradient } from "@tamagui/linear-gradient";
import {
  AlertCircle,
  Asterisk,
  CheckCircle,
  Download,
  HelpCircle,
  Info,
  Lock,
  Trash2,
  UploadCloud
} from "@tamagui/lucide-icons";
import { XStack, YStack } from "@tamagui/stacks";
import type { SizableTextProps } from "@tamagui/text";
import { SizableText } from "@tamagui/text";
import { useControllableState } from "@tamagui/use-controllable-state";
import { MediaTypeOptions } from "./file-picker-types";
import { useFilePicker } from "./useFilePicker";

export interface FileResult extends DocumentPickerAsset {
  id: number;
}

const defaultContextValues = {
  size: "$4",
  typeOfPicker: "file",
  mediaTypes: [MediaTypeOptions.All] as MediaTypeOptions[],
  max: 1,
  files: [] as FileResult[],
  name: "",
  scaleIcon: 1.3,
  color: undefined,
  required: false,
  disabled: false,
  theme: `${ColorRole.BASE}_FilePicker`
} as const;

export const FilePickerContext = createStyledContext<{
  size: FontSizeTokens;
  typeOfPicker: "image" | "file";
  max: number;
  mediaTypes: MediaTypeOptions[];
  onChange?: (files: {
    webFiles?: File[];
    nativeFiles?: { uri: string }[];
  }) => void;
  files: FileResult[];
  name: string;
  scaleIcon: number;
  color?: ColorTokens | string;
  required: boolean;
  disabled: boolean;
  theme: string;
}>(defaultContextValues);

const MAX_DISPLAYABLE_FILE_NAME_LENGTH = 150;

export const FilePickerFrame = styled(View, {
  name: "FilePicker",
  context: FilePickerContext,

  animation: "$slow",
  flexDirection: "column",
  gap: "$2",

  variants: {
    disabled: {
      true: {
        color: "$disabled"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const InternalStateContext = createStyledContext({
  name: undefined as string | undefined,
  setValue: ((val?: FileResult[]) => {}) as Dispatch<
    SetStateAction<FileResult[]>
  >,
  value: [] as FileResult[]
});

export const FilePickerFrameImpl = FilePickerFrame.styleable<{
  name: string;
  onChange: (files: FileResult[]) => any;
  value: FileResult[];
  defaultValue?: FileResult[];
}>(
  (
    { children, onChange, value: valueProp, defaultValue, name, ...props },
    forwardedRef
  ) => {
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange,
      defaultProp: defaultValue ?? []
    });

    return (
      <InternalStateContext.Provider
        name={name}
        value={value}
        setValue={setValue}>
        <FilePickerFrame ref={forwardedRef} {...props}>
          {children}
        </FilePickerFrame>
      </InternalStateContext.Provider>
    );
  }
);

export interface DownloadAnchorExtraProps {
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
}

export type DownloadAnchorProps = SizableTextProps & DownloadAnchorExtraProps;

const DownloadAnchorFrame = styled(SizableText, {
  name: "Anchor",
  tag: "a",
  accessibilityRole: "link"
});

export const DownloadAnchor =
  DownloadAnchorFrame.styleable<DownloadAnchorExtraProps>(
    ({ href, target, ...props }, ref) => {
      return (
        <DownloadAnchorFrame
          {...props}
          {...(isWeb
            ? {
                href,
                target
              }
            : {
                onPress: event => {
                  props.onPress?.(event);
                  if (href !== undefined) {
                    Linking.openURL(href);
                  }
                }
              })}
          ref={ref as any}
        />
      );
    }
  );

export interface FilePickerItemProps {
  key: string;
  file: FileResult;
}

const FilePickerItem = ({ key, file }: FilePickerItemProps) => {
  const { setValue } = InternalStateContext.useStyledContext();
  const { disabled } = FilePickerContext.useStyledContext();

  return (
    <View
      key={key}
      group={"file" as any}
      flexDirection="column"
      animation="100ms"
      opacity={1}
      scale={1}
      height={100}
      width="100%"
      overflow="hidden"
      position="relative"
      borderColor="$base4"
      borderWidth={1}
      enterStyle={{
        opacity: 0,
        scale: 0.3
      }}
      exitStyle={{
        opacity: 0,
        scale: 0.5
      }}
      hoverStyle={{
        outlineColor: "$accent10",
        outlineWidth: 2,
        outlineStyle: "solid",
        outlineOffset: 3
      }}>
      <View
        animation="100ms"
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        zIndex={10}
        backgroundColor="$base2"
        opacity={0.6}
        $group-file-hover={{
          opacity: 0.8,
          style: {
            filter: "blur(1px)"
          }
        }}
      />
      <View
        animation="100ms"
        position="absolute"
        zIndex={20}
        left={12}
        top="30%"
        opacity={0}
        $group-file-hover={{
          opacity: 1
        }}>
        <DownloadAnchor href={file.uri} download={file.name}>
          <Button variant="ghost" theme="base" padding="$2" circular={true}>
            <Button.Icon>
              <Download color="$primary" size="$2" />
            </Button.Icon>
          </Button>
        </DownloadAnchor>
      </View>

      {!disabled && (
        <View
          animation="100ms"
          position="absolute"
          zIndex={20}
          right={12}
          top="30%"
          opacity={0}
          $group-file-hover={{
            opacity: 1
          }}>
          <Button
            variant="ghost"
            theme="base"
            onPress={() =>
              setValue(files => files.filter(current => file.id !== current.id))
            }
            padding="$2"
            circular={true}>
            <Button.Icon>
              <Trash2 color="$primary" size="$2" />
            </Button.Icon>
          </Button>
        </View>
      )}

      <View
        animation="100ms"
        position="absolute"
        zIndex={15}
        top={0}
        bottom={0}
        left={0}
        right={0}
        alignItems="center"
        justifyContent="center">
        <YStack width="75%" gap="$1.5">
          <Text
            zIndex={25}
            textAlign="center"
            color="$base10"
            fontSize="$6"
            fontWeight="$5">
            {!file.name
              ? "Unnamed File"
              : file.name.length > MAX_DISPLAYABLE_FILE_NAME_LENGTH
                ? `${file.name?.slice(0, MAX_DISPLAYABLE_FILE_NAME_LENGTH)}...`
                : file.name}
          </Text>
          <XStack gap="$4" justifyContent="center">
            <Text zIndex={25} color="$base9" fontSize="$4" fontWeight="$3">
              {(file.size ?? 0) / 1000} KB
            </Text>

            {file.lastModified && (
              <Text zIndex={25} color="$base9" fontSize="$4" fontWeight="$3">
                {format(new Date(file.lastModified), {
                  date: "short",
                  time: "short"
                })}
              </Text>
            )}
          </XStack>
        </YStack>
      </View>

      <LinearGradient
        animation="slow"
        fullscreen={true}
        zIndex={10}
        colors={["transparent", "$accent8"]}
        locations={[0.0, 1.1]}
        start={[0, 0]}
        end={[1, 1]}
        opacity={0}
        $group-file-hover={{
          opacity: 1
        }}
      />

      <View
        animation="slow"
        position="absolute"
        top={-240}
        left={0}
        right={0}
        zIndex={5}
        scale={1}
        $group-file-hover={{
          scale: 1.2
        }}>
        <Image
          key={file.uri}
          height={500}
          source={{ height: 500, uri: file.uri }}
        />
      </View>
    </View>
  );
};

export const FilePickerBox = View.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { disabled, typeOfPicker, mediaTypes, max, name } =
      FilePickerContext.useStyledContext();

    const { value, setValue } = InternalStateContext.useStyledContext();
    const { open, getInputProps, getRootProps, dragStatus } = useFilePicker({
      typeOfPicker,
      mediaTypes,
      multiple: max > 1,
      onPick: ({ webFiles, nativeFiles }) => {
        if (webFiles?.length) {
          const pickedImages = webFiles?.map(file => ({
            ...file,
            mimeType: file.type,
            name: file.name,
            size: file.size ? file.size : 0,
            lastModified: file.lastModified ? file.lastModified : 0,
            uri: URL.createObjectURL(file)
          }));

          setValue(prevFiles =>
            [
              ...prevFiles,
              ...pickedImages.map((file, index) => ({
                ...file,
                id: prevFiles.length + index
              }))
            ].slice(max * -1)
          );
        } else if (nativeFiles?.length) {
          setValue(prevFiles =>
            [
              ...prevFiles,
              ...nativeFiles?.reduce(
                (ret, file) => [
                  ...ret,
                  ...(file.assets?.map((asset, index) => ({
                    ...asset,
                    id: prevFiles.length + index
                  })) ?? [])
                ],
                [] as FileResult[]
              )
            ].slice(max * -1)
          );
        }
      }
    });

    return (
      // @ts-ignore reason: getRootProps() which is web specific return some react-native incompatible props, but it's fine
      <View
        ref={forwardedRef}
        flexDirection="column"
        {...getRootProps()}
        {...props}
        width="100%"
        justifyContent="center"
        alignItems="center"
        borderStyle="dashed"
        borderWidth={dragStatus?.isDragActive ? 2 : 1}
        borderColor={
          isWeb
            ? "transparent"
            : dragStatus?.isDragActive
              ? "$borderColorPress"
              : "$borderColor"
        }
        gap="$1"
        borderRadius="$true"
        paddingVertical="$4"
        style={
          isWeb
            ? {
                background: `linear-gradient(to right, gray 50%, transparent 0%) top repeat-x,
        linear-gradient(gray 50%, transparent 0%) right repeat-y,
        linear-gradient(to right, gray 50%, transparent 0%) bottom repeat-x,
        linear-gradient(gray 50%, transparent 0%) left repeat-y`,
                backgroundSize: "40px 2px, 2px 40px"
              }
            : {}
        }>
        {/* need an empty input div just have image drop feature in the web */}
        {/* @ts-ignore */}
        <View id={name} tag="input" width={0} height={0} {...getInputProps()} />

        <AnimatePresence>
          {value?.length && (
            <YStack gap="$4" paddingHorizontal="$4" width="100%">
              {value?.map(file => (
                <FilePickerItem key={file.uri} file={file} />
              ))}
            </YStack>
          )}
        </AnimatePresence>

        <YStack justifyContent="center" alignItems="center" gap="$0.5">
          {!value?.length && (
            <UploadCloud
              size="$11"
              color={disabled ? "$disabled" : "$primary"}
              animation="100ms"
              opacity={1}
              scale={1}
              exitStyle={{
                opacity: 0,
                scale: 0.5
              }}
            />
          )}
          {(!disabled || !value?.length) && (
            <Button
              variant="link"
              disabled={disabled}
              onPress={open}
              $platform-native={{
                display: "none"
              }}
              size="$6">
              <Button.Text>
                {children
                  ? children
                  : max > 1
                    ? "Click or drop files to upload"
                    : "Click or drop a file to upload"}
              </Button.Text>
            </Button>
          )}
        </YStack>
      </View>
    );
  }
);

export const FilePickerIconFrame = styled(View, {
  name: "FilePicker",
  justifyContent: "center",
  alignItems: "center",
  context: FilePickerContext,
  animation: "$slow"
});

const getIconSize = (size: FontSizeTokens, scale: number) => {
  return (
    (typeof size === "number"
      ? size * 0.6
      : getFontSize(size as FontSizeTokens)) * scale
  );
};

const FilePickerIcon = FilePickerIconFrame.styleable<{
  scaleIcon?: number;
  color?: ColorTokens | string;
}>((props: any, ref: any) => {
  const { children, color: colorProp, ...rest } = props;
  const inputContext = FilePickerContext.useStyledContext();
  const {
    size = "$true",
    color: contextColor,
    disabled,
    theme,
    scaleIcon = 1
  } = inputContext;

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
    <FilePickerIconFrame ref={ref} theme={theme} {...rest}>
      {getThemedIcon(children)}
    </FilePickerIconFrame>
  );
});

export const FilePickerLabel = styled(Label, {
  name: "FilePicker",
  context: FilePickerContext,

  fontFamily: "$label",
  animation: "$slow",
  cursor: "pointer",
  color: "$base10",

  variants: {
    size: {
      "...fontSize": (
        val: FontSizeTokens,
        config: VariantSpreadExtras<TextProps>
      ) => {
        if (!config.font) {
          return;
        }

        let sizeToken = 1;
        let heightToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          sizeToken = (config.font.size?.[val] as any)?.val;
          heightToken = (config.font.lineHeight?.[val] as any)?.val;
        }

        const fontSize = (sizeToken ?? 1) * 1.25;
        const lineHeight = (heightToken ?? 1) * 1;
        const fontWeight = config.font.weight?.["$3"];
        const letterSpacing = config.font.letterSpacing?.[val];
        const textTransform = config.font.transform?.[val];
        const fontStyle = config.font.style?.[val];

        return {
          fontSize,
          lineHeight,
          fontWeight,
          letterSpacing,
          textTransform,
          fontStyle
        };
      }
    },

    disabled: {
      true: {
        color: "$disabled",
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const FilePickerLabelImpl = FilePickerLabel.styleable((props, forwardedRef) => {
  const { required, disabled, name } = FilePickerContext.useStyledContext();
  const theme = useThemeName();
  const { children, ...rest } = props;

  return (
    <XStack justifyContent="space-between">
      <XStack gap="$1.2">
        <FilePickerLabel
          ref={forwardedRef}
          {...rest}
          disabled={disabled}
          htmlFor={name}
          theme="base">
          {children}
        </FilePickerLabel>
        {required && (
          <View position="relative">
            <Asterisk
              color="$error8"
              size="$0.75"
              position="absolute"
              top={-2}
            />
          </View>
        )}
      </XStack>
      {theme &&
        (theme.toLowerCase().includes(ColorRole.ERROR) ||
          theme.toLowerCase().includes(ColorRole.WARNING)) && (
          <FilePickerIcon>
            <AlertCircle />
          </FilePickerIcon>
        )}
      {!disabled && theme && theme.toLowerCase().includes(ColorRole.INFO) && (
        <FilePickerIcon>
          <Info />
        </FilePickerIcon>
      )}
      {!disabled && theme && theme.toLowerCase().includes(ColorRole.HELP) && (
        <FilePickerIcon>
          <HelpCircle />
        </FilePickerIcon>
      )}
      {!disabled &&
        theme &&
        theme.toLowerCase().includes(ColorRole.SUCCESS) && (
          <FilePickerIcon>
            <CheckCircle />
          </FilePickerIcon>
        )}
      {disabled && (
        <FilePickerIcon>
          <Lock />
        </FilePickerIcon>
      )}
    </XStack>
  );
});

export const FilePickerDetails = styled(Text, {
  name: "FilePicker",
  context: FilePickerContext,

  animation: "$slow",
  color: "$borderColor",
  marginTop: "$0.5",
  fontStyle: "italic",
  opacity: 1,

  enterStyle: {
    opacity: 0,
    x: 10
  },

  exitStyle: {
    opacity: 0,
    x: 10
  },

  variants: {
    size: {
      "...fontSize": (val: any, { font }: any) => {
        if (!font) {
          return;
        }

        let sizeToken = 1;
        let heightToken = 1;
        if (typeof val !== "undefined" && val !== null) {
          sizeToken = (font.size?.[val] as any)?.val;
          heightToken = (font.lineHeight?.[val] as any)?.val;
        }

        const fontSize = (sizeToken ?? 1) * 1.05;
        const lineHeight = (heightToken ?? 1) * 1;
        const fontWeight = font.weight?.["$3"];
        const letterSpacing = font.letterSpacing?.[val];
        const textTransform = font.transform?.[val];
        const fontStyle = font.style?.[val];

        return {
          fontSize,
          lineHeight,
          fontWeight,
          letterSpacing,
          textTransform,
          fontStyle
        };
      }
    },

    disabled: {
      true: {
        color: "$disabled"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const FilePickerDetailsImpl = FilePickerDetails.styleable(
  (props, forwardedRef) => {
    const { disabled, name } = FilePickerContext.useStyledContext();
    const { children, ...rest } = props;

    return (
      <FilePickerDetails
        ref={forwardedRef}
        disabled={disabled}
        htmlFor={name}
        {...rest}>
        {children}
      </FilePickerDetails>
    );
  }
);

export const FilePicker: any = withStaticProperties(FilePickerFrameImpl, {
  Box: FilePickerBox,
  Details: FilePickerDetailsImpl,
  Label: FilePickerLabelImpl
});
