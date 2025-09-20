import { Store } from "@/shared/store-kit";
import { createSlice } from "./@Slice";
import { autoSyncCameraPermissions } from "./observers";
import type { TDependencies } from "./types";

const createStore = (dependencies: TDependencies) => {
  const store = new Store(createSlice(), {
    dependencies,
    observers: [autoSyncCameraPermissions],
  });

  return store.get();
};

export default createStore;
