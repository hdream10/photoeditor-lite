import { StyleSheet } from "react-native";
import { customColors } from "@/shared/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: customColors.blackTransparent,
    gap: 20,
  },
});

