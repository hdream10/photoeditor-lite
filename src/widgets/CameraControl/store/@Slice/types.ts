import { EState } from "./stateMachine";

export type TState = {
  status: EState;

  startGetPermission: () => void;
  setPermissionGranted: () => void;
  setPermissionDenied: () => void;
  setPermissionFailed: () => void;
};
