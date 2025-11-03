import { forwardRef } from "react";
import { View as ViewRN } from "react-native";
import { CameraView } from "expo-camera";
import { styles } from "./CameraContainer.styles";

type TProps = {
  children: React.ReactNode;
  facing: "front" | "back";
};

const CameraContainer = forwardRef<CameraView, TProps>(
  ({ children, facing }, ref) => {
    return (
      <ViewRN style={styles.container}>
        <CameraView style={styles.camera} facing={facing} ref={ref} />
        {children}
      </ViewRN>
    );
  }
);

CameraContainer.displayName = "CameraContainer";

export default CameraContainer;
