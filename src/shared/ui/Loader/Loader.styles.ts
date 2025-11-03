import { StyleSheet } from "react-native";
import { customColors } from "@/shared/theme";

export const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: customColors.overlay,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    marginTop: 16,
    color: customColors.text,
  },
});

