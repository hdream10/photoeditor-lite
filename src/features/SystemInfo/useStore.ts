import { createStore } from "./store";
import { coreApi } from "./api";

const store = createStore({ coreApi });

const useStore = () => {
  return store;
};

export default useStore;
