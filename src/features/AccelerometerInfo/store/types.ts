import type { TDisposer } from "@/shared/types";
import type { TPosition } from "./@Model";

export interface ICoreApi {
  onChangePosition: (callback: (position: TPosition) => void) => TDisposer;
}

export type TDependencies = {
  coreApi: ICoreApi;
};
