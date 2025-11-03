import { useRef } from "react";
import { CameraView } from "expo-camera";
import { CameraContainer } from "../CameraContainer";
import { CameraActions } from "../CameraActions";
import { useCameraFacing } from "../../../hooks";

type TCamera = {
  photoSrc: string | undefined;
  isTakingPhoto: boolean;
  takePhoto: (cameraRef: React.RefObject<CameraView | null>) => void;
  reset: () => void;
};

type TProps = {
  camera: TCamera;
};

const DisplayCamera: React.FC<TProps> = ({ camera }) => {
  const cameraRef = useRef<CameraView | null>(null);

  const { facing, toggleFacing } = useCameraFacing();

  const handleTakePhoto = () => {
    camera.takePhoto(cameraRef);
  };

  return (
    <CameraContainer facing={facing} ref={cameraRef}>
      <CameraActions
        onTakePhoto={handleTakePhoto}
        onToggleFacing={toggleFacing}
        disabled={camera.isTakingPhoto}
      />
    </CameraContainer>
  );
};

export default DisplayCamera;
