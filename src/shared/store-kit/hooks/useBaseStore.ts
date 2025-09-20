import { useEffect } from "react";
import { useStore } from "zustand";

type TCustomStore = {
  slice: Parameters<typeof useStore>[0];
  destroy: () => void;
  actions: Record<string, unknown>;
};

type TProps = {
  customStore: TCustomStore;
  selector: Parameters<typeof useStore>[1];
};

const useBaseStore = ({ customStore, selector }: TProps) => {
  const { slice, destroy, actions } = customStore;

  const store = useStore(slice, selector);

  useEffect(() => {
    return () => {
      destroy();
    };
  }, []);

  return [store, actions];
};

export default useBaseStore;
