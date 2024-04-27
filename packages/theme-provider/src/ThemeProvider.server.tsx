import { TamaguiProvider, type TamaguiProviderProps } from "@tamagui/web";
import { config } from "@cyclone-ui/config";

export type ThemeProviderServerProps = Partial<TamaguiProviderProps> &
  Omit<TamaguiProviderProps, "config">;

export const ThemeProviderServer = ({
  children,
  ...props
}: ThemeProviderServerProps) => {
  return (
    <TamaguiProvider config={config} {...props}>
      {children}
    </TamaguiProvider>
  );
};
