import { useState, useCallback } from "react";

const usePhotoEditMode = (onResetPhoto: () => void) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleBackFromEdit = useCallback(() => {
    setIsEditing(false);
  }, []);

  const handleBackFromPhoto = useCallback(() => {
    onResetPhoto();
    setIsEditing(false);
  }, [onResetPhoto]);

  return {
    isEditing,
    handleEdit,
    handleBackFromEdit,
    handleBackFromPhoto,
  };
};

export default usePhotoEditMode;
