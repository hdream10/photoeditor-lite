import { StyleSheet } from "react-native";
import { customColors } from "@/shared/theme/theme";

export const styles = StyleSheet.create({
  container: {
    width: "48%",
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: customColors.surfaceDark,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  date: {
    padding: 8,
    textAlign: "center",
    color: customColors.textSecondary,
  },
});

