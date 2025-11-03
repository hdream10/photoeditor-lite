import { useState, useCallback } from "react";
import { CameraView } from "expo-camera";

const useCameraPhoto = () => {
  const [photoSrc, setPhotoSrc] = useState<string | undefined>(undefined);
  const [isTakingPhoto, setIsTakingPhoto] = useState(false);

  const takePhoto = useCallback(async (cameraRef: React.RefObject<CameraView>) => {
    if (!cameraRef.current) {
      return;
    }

    setIsTakingPhoto(true);
    try {
      const photo = await cameraRef.current.takePictureAsync();
      if (photo?.uri) {
        setPhotoSrc(photo.uri);
      }
    } catch (error) {
      console.error("Failed to take photo", error);
    } finally {
      setIsTakingPhoto(false);
    }
  }, []);

  const reset = useCallback(() => {
    setPhotoSrc(undefined);
  }, []);

  return {
    photoSrc,
    isTakingPhoto,
    takePhoto,
    reset,
  };
};

export default useCameraPhoto;

