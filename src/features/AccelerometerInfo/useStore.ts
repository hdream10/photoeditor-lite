import { useEffect, useMemo } from "react";
import { coreApi } from "./api";
import { createStore } from "./store";

const useStore = () => {
  const store = useMemo(() => {
    return createStore({ coreApi });
  }, []);

  useEffect(() => {
    return () => {
      store.destroy();
    };
  }, []);

  return store;
};

export default useStore;
