import { useState, useCallback } from "react";
import * as MediaLibrary from "expo-media-library";

type TPhotoData = {
  uri: string;
};

const usePhotoSave = () => {
  const [isSaving, setIsSaving] = useState(false);

  const savePhoto = useCallback(async (photoData: TPhotoData) => {
    setIsSaving(true);

    MediaLibrary.saveToLibraryAsync(photoData.uri)
      .catch((error) => {
        console.error("Failed to save photo", error);
      })
      .finally(() => {
        setIsSaving(false);
      });
  }, []);

  return {
    isSaving,
    savePhoto,
  };
};

export default usePhotoSave;
