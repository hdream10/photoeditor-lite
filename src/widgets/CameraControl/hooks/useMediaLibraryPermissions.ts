import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";

const IDLE_STATUS = "idle" as const;

const useMediaLibraryPermissions = () => {
  const [status, setStatus] = useState<
    MediaLibrary.PermissionStatus | typeof IDLE_STATUS
  >(IDLE_STATUS);

  useEffect(() => {
    MediaLibrary.requestPermissionsAsync()
      .then(({ status }) => {
        setStatus(status);
      })
      .catch((error) => {
        console.error("Failed to request media library permissions", error);
      });
  }, []);

  return {
    isNotReady: status === IDLE_STATUS,
    isGranted: status === MediaLibrary.PermissionStatus.GRANTED,
    isDenied: status === MediaLibrary.PermissionStatus.DENIED,
    isUndetermined: status === MediaLibrary.PermissionStatus.UNDETERMINED,
  };
};

export default useMediaLibraryPermissions;
