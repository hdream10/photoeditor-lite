import { Store } from "@/shared/store-kit";
import { createSlice } from "./@Slice";
import { autoSyncPosition } from "./observers";
import { TDependencies } from "./types";

const createStore = (dependencies: TDependencies) => {
  const store = new Store(createSlice(), {
    dependencies,
    observers: [autoSyncPosition],
  });

  return store.get();
};

export default createStore;
