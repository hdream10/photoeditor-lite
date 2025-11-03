import { Text } from "@/shared/ui";
import { DisplayCamera, DisplayPhoto } from "./components";
import { useCameraPermissions, useCameraPhoto } from "../hooks";

const View = () => {
  const { isNotReady, isDenied, isUndetermined } =
    useCameraPermissions();

  const camera = useCameraPhoto();

  if (isNotReady) {
    return <Text>Permission is not ready</Text>;
  }

  if (isDenied) {
    return <Text>Permission is denied</Text>;
  }

  if (isUndetermined) {
    return <Text>Permission undetermined</Text>;
  }

  if (camera.photoSrc) {
    return <DisplayPhoto photoSrc={camera.photoSrc} />;
  }

  return <DisplayCamera camera={camera} />;
};

export default View;
