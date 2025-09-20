import { getSystemInfo } from "./actions";
import { TCoreApi } from "./types";

type TProps = {
  coreApi: TCoreApi;
};

const createStore = ({ coreApi }: TProps) => {
  const systemInfo = getSystemInfo({ coreApi });

  return {
    state: {
      ...systemInfo,
    },
  };
};

export default createStore;
