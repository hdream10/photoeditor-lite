import { coreApi } from "./api";
import { store } from "./store";

const { actions } = store;

actions.init({ coreApi });

const useActions = () => {
  return actions.get();
};

export default useActions;
