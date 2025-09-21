import { CameraView } from "expo-camera";
import useStore, { useActions } from "../../useStore";
import { StyleSheet, View as ReactNativeView } from "react-native";
import CameraActions from "./CameraActions";
import { useRef } from "react";

const DisplayCamera = () => {
  const cameraRef = useRef<CameraView>(null);
  const [state] = useStore();
  const actions = useActions();

  const handleTakePhoto = () => {
    actions.takePhoto({
      onTakePhoto: () => {
        if (cameraRef.current === null) {
          throw new Error("Camera not found");
        }

        return cameraRef.current.takePictureAsync();
      },
    });
  };

  return (
    <ReactNativeView style={styles.container}>
      <CameraView style={styles.camera} facing={state.facing} ref={cameraRef} />
      <CameraActions
        onTakePhoto={handleTakePhoto}
        onToggleFacing={state.toggleFacing}
      />
    </ReactNativeView>
  );
};

export default DisplayCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});
