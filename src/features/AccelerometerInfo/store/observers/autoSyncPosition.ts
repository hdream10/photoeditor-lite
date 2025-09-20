import type { TDependencies } from "../types";
import type { TPosition, TState } from "../@Slice";

const autoSyncPosition = ({ coreApi }: TDependencies, state: TState) => {
  const handleChangePosition = (position: TPosition) => {
    state.setPosition(position);
  };

  return coreApi.onChangePosition(handleChangePosition);
};

export default autoSyncPosition;
