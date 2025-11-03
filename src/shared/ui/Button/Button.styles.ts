import { StyleSheet } from "react-native";
import { customColors } from "@/shared/theme";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minHeight: 44,
  },
  primary: {
    backgroundColor: customColors.primary,
  },
  secondary: {
    backgroundColor: customColors.surfaceDark,
    borderWidth: 1,
    borderColor: customColors.divider,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: customColors.text,
    fontSize: 16,
    fontWeight: "600",
  },
});
