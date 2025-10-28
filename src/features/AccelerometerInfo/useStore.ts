import { useStore as useZustandStore } from "zustand/react";
import { ExtractState } from "zustand/vanilla";
import { store } from "./store";
import type { TModel } from "./store";

const { model } = store;

const useStore = <TSelected = ExtractState<TModel>>(
  selector: (state: ExtractState<TModel>) => TSelected
) => {
  return useZustandStore<TModel, TSelected>(model, selector);
};

export default useStore;
