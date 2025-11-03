import { StyleSheet } from "react-native";
import { customColors } from "@/shared/theme";

export const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: customColors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
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
});

export const iconColors = {
  primary: customColors.white,
  secondary: customColors.text,
};

