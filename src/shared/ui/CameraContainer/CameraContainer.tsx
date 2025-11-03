import { View as ViewRN } from "react-native";
import { CameraView } from "expo-camera";
import { styles } from "./CameraContainer.styles";

type TProps = {
  children: React.ReactNode;
  facing: "front" | "back";
  cameraRef: React.RefObject<CameraView>;
};

const CameraContainer: React.FC<TProps> = ({ children, facing, cameraRef }) => {
  return (
    <ViewRN style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef} />
      {children}
    </ViewRN>
  );
};

export default CameraContainer;

