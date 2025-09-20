import type { TState } from "../@Slice";
import type { TDependencies } from "../types";

const autoSyncCameraPermissions = (
  { coreApi }: TDependencies,
  state: TState
) => {
  state.startGetPermission();

  coreApi
    .getCameraPermissions()
    .then((isPermission) => {
      if (isPermission) {
        state.setPermissionGranted();
      } else {
        state.setPermissionDenied();
      }
    })
    .catch((error: unknown) => {
      console.error("failed to get camera permissions", error);

      state.setPermissionFailed();
    });

  return () => {};
};

export default autoSyncCameraPermissions;
