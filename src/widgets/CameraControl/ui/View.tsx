import { Text } from "@/shared/ui";
import { View as ViewRN, ActivityIndicator } from "react-native";
import { DisplayCamera, DisplayPhoto } from "./components";
import {
  usePermissions,
  useCameraPhoto,
  usePhotoEditMode,
  usePhotoSave,
} from "../hooks";
import { DrawingEditor } from "@/features/DrawingEditor";

const View = () => {
  const { isNotReady, isDenied, isUndetermined } = usePermissions();
  const camera = useCameraPhoto();
  const { isEditing, handleEdit, handleBackFromEdit, handleBackFromPhoto } =
    usePhotoEditMode(camera.reset);
  const { isSaving, savePhoto } = usePhotoSave();

  if (isNotReady) {
    return <Text>Permission is not ready</Text>;
  }

  if (isDenied) {
    return <Text>Permission is denied</Text>;
  }

  if (isUndetermined) {
    return <Text>Permission undetermined</Text>;
  }

  if (isSaving) {
    return (
      <ViewRN
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" />
        <ViewRN style={{ marginTop: 16 }}>
          <Text>Сохранение...</Text>
        </ViewRN>
      </ViewRN>
    );
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
