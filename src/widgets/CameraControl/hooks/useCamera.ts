import useCameraPermissions from "./useCameraPermissions";
import useCameraFacing from "./useCameraFacing";
import useCameraPhoto from "./useCameraPhoto";

const useCamera = () => {
  const permissionStatus = useCameraPermissions();
  const { facing, toggle: toggleFacing } = useCameraFacing();
  const { photoSrc, isTakingPhoto, takePhoto, reset } = useCameraPhoto();

  return {
    permissionStatus,
    facing,
    photoSrc,
    isTakingPhoto,
    toggleFacing,
    takePhoto,
    reset,
  };
};

export default useCamera;
