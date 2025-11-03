import { View as ViewRN } from "react-native";
import { Loader } from "@/shared/ui";
import { DisplayCamera, DisplayPhoto } from "./components";
import {
  usePermissions,
  useCameraPhoto,
  usePhotoEditMode,
  usePhotoSave,
} from "../hooks";
import { DrawingEditor } from "@/features/DrawingEditor";
import { ErrorMessage } from "./components";

const View = () => {
  const { isDenied, isUndetermined } = usePermissions();
  const camera = useCameraPhoto();
  const { isEditing, handleEdit, handleBackFromEdit, handleBackFromPhoto } =
    usePhotoEditMode(camera.reset);
  const { isSaving, savePhoto } = usePhotoSave();

  if (isDenied) {
    return <ErrorMessage />;
  }

  if (isUndetermined) {
    return <Loader message="Запрос разрешений..." />;
  }

  if (isSaving) {
    return <Loader message="Сохранение..." />;
  }

  if (!camera.photoSrc) {
    return <DisplayCamera camera={camera} />;
  }

  if (isEditing) {
    return (
      <DrawingEditor
        photoSrc={camera.photoSrc}
        onBack={handleBackFromEdit}
        onSave={savePhoto}
      />
    );
  }

  return (
    <DisplayPhoto
      photoSrc={camera.photoSrc}
      onEdit={handleEdit}
      onBack={handleBackFromPhoto}
      onSave={savePhoto}
    />
  );
};

export default View;
