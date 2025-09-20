import { useMemo } from "react";
import { coreApi } from "./api";
import { createStore } from "./store";
import { useBaseStore } from "@/shared/store-kit";
import { ExtractState } from "zustand/vanilla";

type TSlice = ReturnType<typeof createStore>["slice"];

const useStore = <TSelected = ExtractState<TSlice>>(
  selector: (state: ExtractState<TSlice>) => TSelected
) => {
  const store = useMemo(() => {
    return createStore({ coreApi });
  }, []);

  return useBaseStore<TSlice, TSelected>({ customStore: store, selector });
};

export default useStore;
