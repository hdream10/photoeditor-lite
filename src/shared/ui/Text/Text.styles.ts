import { StyleSheet } from "react-native";
import { customColors } from "@/shared/theme";

export const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: customColors.text,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: customColors.text,
  },
  body: {
    fontSize: 16,
    fontWeight: "400",
    color: customColors.text,
  },
  caption: {
    fontSize: 12,
    fontWeight: "400",
    color: customColors.textSecondary,
  },
});
