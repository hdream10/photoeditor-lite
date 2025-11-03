import { StyleSheet } from "react-native";
import { customColors } from "@/shared/theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.background,
  },
  list: {
    padding: 16,
  },
  row: {
    justifyContent: "space-between",
  },
});

