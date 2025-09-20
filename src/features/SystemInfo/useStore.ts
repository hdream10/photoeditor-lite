import { useMemo } from "react";
import { createStore } from "./store";
import { coreApi } from "./api";

const useStore = () => {
  const store = useMemo(() => {
    return createStore({ coreApi });
  }, []);

  return store;
};

export default useStore;
