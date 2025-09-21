import { Text } from "@/shared/ui";
import { DisplayCamera, DisplayPhoto } from "./components";
import useStore from "../useStore";

const View = () => {
  const [state] = useStore();

  if (state.isPermissionInProgress) {
    return <Text>Permission in progress</Text>;
  }
  if (state.isPermissionDenied) {
    return <Text>Permission denied</Text>;
  }
  if (state.isPermissionFailed) {
    return <Text>Permission failed</Text>;
  }

  if (state.photoSrc) {
    return <DisplayPhoto photoSrc={state.photoSrc} />;
  }

  return <DisplayCamera />;
};

export default View;
