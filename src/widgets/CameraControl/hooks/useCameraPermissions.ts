import { useEffect } from "react";
import {
  PermissionStatus,
  useCameraPermissions as useCameraPermissionsExpo,
} from "expo-camera";

const useCameraPermissions = () => {
  const [permission, requestPermission] = useCameraPermissionsExpo();

  const isNotReady = !permission;
  const isGranted = permission?.status === PermissionStatus.GRANTED;
  const isDenied = permission?.status === PermissionStatus.DENIED;
  const isUndetermined = permission?.status === PermissionStatus.UNDETERMINED;

  useEffect(() => {
    if (isNotReady) {
      requestPermission();
    }
  }, [isNotReady, requestPermission]);

  return {
    isNotReady,
    isGranted,
    isDenied,
    isUndetermined,
  };
};

export default useCameraPermissions;
