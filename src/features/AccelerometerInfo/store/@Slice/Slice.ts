import { createStore } from "zustand/vanilla";
import type { TState } from "./types";

const createSlice = () => {
  return createStore<TState>((set) => ({
    position: undefined,

    setPosition: (position) => set({ position }),
  }));
};

export default createSlice;
