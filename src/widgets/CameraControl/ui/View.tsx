import { Text } from "@/shared/ui";
import { DisplayCamera } from "./components";
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

  return <DisplayCamera />;
};

export default View;
