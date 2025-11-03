import { useState, useEffect } from "react";
import { useCameraPermissions as useCameraPermissionsExpo } from "expo-camera";

type TPermissionStatus =
  | "idle"
  | "in-progress"
  | "granted"
  | "denied"
  | "failed";

const useCameraPermissions = () => {
  const [permission, requestPermission] = useCameraPermissionsExpo();
  const [status, setStatus] = useState<TPermissionStatus>("idle");

  useEffect(() => {
    const handleRequestPermission = async () => {
      setStatus("in-progress");
      try {
        const result = await requestPermission();
        if (result.granted) {
          setStatus("granted");
        } else {
          setStatus("denied");
        }
      } catch (error) {
        console.error("Failed to request camera permission", error);
        setStatus("failed");
      }
    };

    if (!permission) {
      handleRequestPermission();
    } else if (permission.granted) {
      setStatus("granted");
    } else if (permission.canAskAgain) {
      handleRequestPermission();
    } else {
      setStatus("denied");
    }
  }, [permission, requestPermission]);

  return status;
};

export default useCameraPermissions;
