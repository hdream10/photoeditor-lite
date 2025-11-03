import { useState, useCallback } from "react";
import * as MediaLibrary from "expo-media-library";
import { usePhotoHistory } from "@/entities/PhotoHistory";

type TPhotoData = {
  uri: string;
};

const usePhotoSave = () => {
  const { addPhoto } = usePhotoHistory();

  const [isSaving, setIsSaving] = useState(false);

  const savePhoto = useCallback(
    (photoData: TPhotoData) => {
      setIsSaving(true);

      MediaLibrary.saveToLibraryAsync(photoData.uri)
        .then(() => {
          addPhoto(photoData.uri);
        })
        .catch((error) => {
          console.error("Failed to save photo", error);
        })
        .finally(() => {
          setIsSaving(false);
        });
    },
    [addPhoto]
  );

  return {
    isSaving,
    savePhoto,
  };
};

export default usePhotoSave;
