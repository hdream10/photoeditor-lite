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
    handleBackFromEdit();
  }, [onResetPhoto]);

  return {
    isEditing,
    handleEdit,
    handleBackFromPhoto,
  };
};

export default usePhotoEditMode;
