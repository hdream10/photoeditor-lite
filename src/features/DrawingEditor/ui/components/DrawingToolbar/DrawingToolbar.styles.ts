import { StyleSheet } from "react-native";
import { customColors } from "@/shared/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: customColors.primaryDark,
    borderTopWidth: 1,
    borderTopColor: customColors.divider,
  },
  leftButton: {
    position: "absolute",
    left: 20,
  },
  rightButton: {
    position: "absolute",
    right: 20,
  },
  centerGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 16,
  },
});
