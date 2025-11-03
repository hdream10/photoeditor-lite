import { StyleSheet } from "react-native";
import { customColors } from "@/shared/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: customColors.primaryDark,
    borderTopWidth: 1,
    borderTopColor: customColors.divider,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    minWidth: 100,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: customColors.text,
  },
});
