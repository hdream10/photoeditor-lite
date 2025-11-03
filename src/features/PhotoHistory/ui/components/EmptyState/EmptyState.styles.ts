import { StyleSheet } from "react-native";
import { customColors } from "@/shared/theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: customColors.background,
  },
  text: {
    color: customColors.textSecondary,
  },
});

