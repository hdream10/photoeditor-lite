import { createStore } from "zustand/vanilla";
import type { TState } from "./types";

const createModel = () => {
  return createStore<TState>((set) => ({
    position: undefined,

    setPosition: (position) => set({ position }),
  }));
};

export type TModel = ReturnType<typeof createModel>;

export default createModel;
