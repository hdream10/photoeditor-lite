import { StyleSheet } from "react-native";
import { customColors } from "@/shared/theme";

export const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1000,
    width: 60,
    height: 40,
    backgroundColor: customColors.primary,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "-90deg" }],
  },
  text: {
    color: customColors.text,
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
