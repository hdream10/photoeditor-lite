import { useState, useEffect } from "react";
import { usePhotoHistory } from "@/entities/PhotoHistory";
import type { IPhotoHistoryItem } from "@/entities/PhotoHistory";

const usePhotoHistoryList = () => {
  const { getPhotos } = usePhotoHistory();
  const [photos, setPhotos] = useState<IPhotoHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getPhotos()
      .then((photosList) => {
        if (Array.isArray(photosList)) {
          setPhotos(photosList);
        } else {
          setPhotos([]);
        }
      })
      .catch((error) => {
        console.error("Failed to get photos", error);

        setPhotos([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [getPhotos]);

  return {
    photos,
    isLoading,
  };
};

export default usePhotoHistoryList;
