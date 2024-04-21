import { createAnimations } from "@tamagui/animations-react-native";

export const animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100
  },
  slow: {
    type: "spring",
    damping: 20,
    stiffness: 60
  },
  fast: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250
  }
});
