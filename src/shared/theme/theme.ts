import { MD3DarkTheme } from "react-native-paper";

export const customColors = {
  background: "#0C111F",
  primary: "#1E3A8A",
  primaryDark: "rgba(30, 58, 138, 0.9)",
  text: "#F1F5F9",
  textSecondary: "rgba(241, 245, 249, 0.8)",
  divider: "rgba(255, 255, 255, 0.1)",
  error: "#EF4444",
  success: "#22C55E",
  overlay: "rgba(12, 17, 31, 0.9)",
  surfaceDark: "rgba(255, 255, 255, 0.05)",
  white: "#FFFFFF",
  black: "#000000",
  blackTransparent: "rgba(0, 0, 0, 0.3)",
} as const;

export const theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: customColors.primary,
    background: customColors.background,
    surface: customColors.background,
    surfaceVariant: "#1A1F2E",
    text: customColors.text,
    onSurface: customColors.text,
    onBackground: customColors.text,
    error: customColors.error,
    errorContainer: "#7F1D1D",
    onError: "#FFFFFF",
    success: customColors.success,
    onSuccess: "#FFFFFF",
    divider: customColors.divider,
    outline: customColors.divider,
  },
};
