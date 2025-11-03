import { StyleSheet } from "react-native";
import { customColors } from "@/shared/theme";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: customColors.divider,
    marginBottom: 16,
  },
  content: {
    gap: 12,
  },
});

