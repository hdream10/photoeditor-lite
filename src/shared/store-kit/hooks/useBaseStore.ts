import { useEffect } from "react";
import { useStore } from "zustand";
import { ExtractState, StoreApi } from "zustand/vanilla";

type TCustomStore<TSlice> = {
  slice: TSlice;
  destroy: () => void;
  actions: Record<string, unknown>;
};

type TProps<TSlice, TSelectedState> = {
  customStore: TCustomStore<TSlice>;
  selector: (state: ExtractState<TSlice>) => TSelectedState;
};

const useBaseStore = <
  TSlice extends StoreApi<unknown>,
  TSelectedState = ExtractState<TSlice>
>({
  customStore,
  selector,
}: TProps<TSlice, TSelectedState>): [
  TSelectedState,
  Record<string, unknown>
] => {
  const { slice, actions, destroy } = customStore;

  const store = useStore<TSlice, TSelectedState>(slice, selector);

  useEffect(() => {
    return () => {
      destroy();
    };
  }, []);

  return [store, actions];
};

export default useBaseStore;
