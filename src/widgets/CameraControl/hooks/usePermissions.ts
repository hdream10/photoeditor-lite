import useCameraPermissions from "./useCameraPermissions";
import useMediaLibraryPermissions from "./useMediaLibraryPermissions";

const usePermissions = () => {
  const cameraPermissions = useCameraPermissions();
  const mediaLibraryPermissions = useMediaLibraryPermissions();

  return {
    isNotReady:
      cameraPermissions.isNotReady || mediaLibraryPermissions.isNotReady,
    isGranted: cameraPermissions.isGranted && mediaLibraryPermissions.isGranted,
    isDenied: cameraPermissions.isDenied || mediaLibraryPermissions.isDenied,
    isUndetermined:
      cameraPermissions.isUndetermined ||
      mediaLibraryPermissions.isUndetermined,
  };
};

export default usePermissions;
