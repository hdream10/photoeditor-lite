import { EState } from "./stateMachine";

export type TState = {
  status: EState;

  readonly isPermissionDenied: boolean;
  readonly isPermissionFailed: boolean;
  readonly isPermissionGranted: boolean;
  readonly isPermissionInProgress: boolean;

  startGetPermission: () => void;
  setPermissionGranted: () => void;
  setPermissionDenied: () => void;
  setPermissionFailed: () => void;
};
