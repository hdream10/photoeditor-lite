import { Text } from "@/shared/ui";
import { DisplayCamera, DisplayPhoto } from "./components";
import { useCamera } from "../hooks";

const View = () => {
  const camera = useCamera();

  if (camera.permissionStatus === "in-progress") {
    return <Text>Permission in progress</Text>;
  }

  if (camera.permissionStatus === "denied") {
    return <Text>Permission denied</Text>;
  }

  if (camera.permissionStatus === "failed") {
    return <Text>Permission failed</Text>;
  }

  if (camera.photoSrc) {
    return <DisplayPhoto photoSrc={camera.photoSrc} />;
  }

  return <DisplayCamera camera={camera} />;
};

export default View;
