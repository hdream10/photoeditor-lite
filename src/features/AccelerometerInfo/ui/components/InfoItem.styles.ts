import { StyleSheet } from "react-native";
import { customColors } from "@/shared/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: customColors.surfaceDark,
    borderRadius: 8,
  },
  label: {
    flex: 1,
  },
  value: {
    flex: 1,
    textAlign: "right",
    color: customColors.textSecondary,
  },
});

