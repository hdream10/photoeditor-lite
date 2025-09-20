import type { TDisposer } from "@/shared/types";
import type { TPosition } from "./@Slice";

export type TCoreApi = {
  onChangePosition: (callback: (position: TPosition) => void) => TDisposer;
};

export type TDependencies = {
  coreApi: TCoreApi;
};
