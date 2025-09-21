import { Store } from "@/shared/store-kit";
import { createSlice } from "./@Slice";
import { autoSyncCameraPermissions } from "./observers";
import { resolveTakePhoto } from "./actions";
import type { TDependencies } from "./types";

const createStore = (dependencies: TDependencies) => {
  const store = new Store(createSlice(), {
    dependencies,
    observers: [autoSyncCameraPermissions],
    actions: {
      // @ts-expect-error
      takePhoto: resolveTakePhoto,
    },
  });

  return store.get();
};

export default createStore;
