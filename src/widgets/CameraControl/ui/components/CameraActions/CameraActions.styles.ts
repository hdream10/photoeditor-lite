import { StyleSheet } from "react-native";
import { customColors } from "@/shared/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: customColors.blackTransparent,
  },
  photoButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  flipButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  icon: {
    fontSize: 24,
    color: customColors.white,
    fontWeight: "bold",
  },
});

