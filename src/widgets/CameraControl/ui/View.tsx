import { Text } from "@/shared/ui";
import { DisplayCamera, DisplayPhoto } from "./components";
import {
  useCameraPermissions,
  useCameraPhoto,
  usePhotoEditMode,
} from "../hooks";
import { DrawingEditor } from "@/features/DrawingEditor";

const View = () => {
  const { isNotReady, isDenied, isUndetermined } = useCameraPermissions();

  const camera = useCameraPhoto();
  const { isEditing, handleEdit, handleBackFromEdit, handleBackFromPhoto } =
    usePhotoEditMode(camera.reset);

  if (isNotReady) {
    return <Text>Permission is not ready</Text>;
  }

  if (isDenied) {
    return <Text>Permission is denied</Text>;
  }

  if (isUndetermined) {
    return <Text>Permission undetermined</Text>;
  }

  if (!camera.photoSrc) {
    return <DisplayCamera camera={camera} />;
  }

  if (isEditing) {
    return (
      <DrawingEditor photoSrc={camera.photoSrc} onBack={handleBackFromEdit} />
    );
  }

  return (
    <DisplayPhoto
      photoSrc={camera.photoSrc}
      onEdit={handleEdit}
      onBack={handleBackFromPhoto}
    />
  );
};

export default View;
