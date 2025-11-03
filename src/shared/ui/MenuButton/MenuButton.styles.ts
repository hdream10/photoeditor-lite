import { StyleSheet } from "react-native";
import { customColors } from "@/shared/theme";

export const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 100,
    left: 0,
    zIndex: 1000,
    width: 100,
    height: 36,
    backgroundColor: customColors.primary,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 0,
    paddingRight: 0,
    transform: [{ rotate: "-90deg" }, { translateY: -32 }],
  },
  text: {
    color: customColors.text,
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
