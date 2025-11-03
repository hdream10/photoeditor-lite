import { StyleSheet } from "react-native";
import { customColors } from "@/shared/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: customColors.background,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  actions: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    left: 20,
  },
  centerGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 16,
  },
});

