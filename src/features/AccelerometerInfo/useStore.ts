import { useMemo } from "react";
import { coreApi } from "./api";
import { createStore } from "./store";
import { useBaseStore } from "@/shared/store-kit";

const useStore = (selector: Parameters<typeof useBaseStore>[0]["selector"]) => {
  const store = useMemo(() => {
    return createStore({ coreApi });
  }, []);

  return useBaseStore({ customStore: store, selector });
};

export default useStore;
