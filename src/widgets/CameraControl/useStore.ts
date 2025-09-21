import { coreApi } from "./api";
import { createStore } from "./store";
import { useBaseStore } from "@/shared/store-kit";
import { ExtractState } from "zustand/vanilla";

type TSlice = ReturnType<typeof createStore>["slice"];

const store = createStore({ coreApi });

const useStore = <TSelected = ExtractState<TSlice>>(
  selector?: (state: ExtractState<TSlice>) => TSelected
) => {
  return useBaseStore<TSlice, TSelected>({ customStore: store, selector });
};

// Типизированный хук для actions
const useActions = () => {
  const [, actions] = useStore();
  return actions as {
    takePhoto: (props: { onTakePhoto: () => Promise<{ uri: string }> }) => void;
  };
};

export default useStore;
export { useActions };
