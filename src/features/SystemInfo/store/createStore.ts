import { getSystemInfo } from "./actions";
import { TDependencies } from "./types";

const createStore = ({ coreApi }: TDependencies) => {
  return getSystemInfo({ coreApi });
};

export default createStore;
