import type { EState } from "./stateMachine";
import type { TFacing } from "./constants";

export type TState = {
  status: EState;
  facing: TFacing;
  photoSrc: string | undefined;

  readonly isPermissionDenied: boolean;
  readonly isPermissionFailed: boolean;
  readonly isPermissionGranted: boolean;
  readonly isPermissionInProgress: boolean;

  toggleFacing: () => void;
  setPhotoSrc: (photoSrc: string) => void;
  reset: () => void;

  startGetPermission: () => void;
  setPermissionGranted: () => void;
  setPermissionDenied: () => void;
  setPermissionFailed: () => void;
  startTakePhoto: () => void;
  setTakePhotoSuccess: () => void;
  setTakePhotoFailed: () => void;
};
