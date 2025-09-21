import React from "react";
import { View as ReactNativeView, StyleSheet } from "react-native";
import CameraButton from "./CameraButton";

type TProps = {
  onTakePhoto: () => void;
  onToggleFacing: () => void;
};

const CameraActions = ({ onTakePhoto, onToggleFacing }: TProps) => {
  return (
    <ReactNativeView style={styles.container}>
      <CameraButton
        icon="📷"
        onPress={onTakePhoto}
        style={styles.photoButton}
      />

      <CameraButton
        icon={"🔄"}
        onPress={onToggleFacing}
        style={styles.flipButton}
      />
    </ReactNativeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  photoButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.8)",
  },
  flipButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.6)",
  },
});

export default CameraActions;
