import { useRef } from "react";
import { CameraView } from "expo-camera";
import { CameraContainer } from "@/shared/ui";
import { CameraActions } from "../CameraActions";

type TCameraHook = ReturnType<typeof import("../../../hooks/useCamera").default>;

type TProps = {
  camera: TCameraHook;
};

const DisplayCamera: React.FC<TProps> = ({ camera }) => {
  const cameraRef = useRef<CameraView>(null);

  const handleTakePhoto = () => {
    camera.takePhoto(cameraRef);
  };

  return (
    <CameraContainer facing={camera.facing} cameraRef={cameraRef}>
      <CameraActions
        onTakePhoto={handleTakePhoto}
        onToggleFacing={camera.toggleFacing}
        disabled={camera.isTakingPhoto}
      />
    </CameraContainer>
  );
};

export default DisplayCamera;
