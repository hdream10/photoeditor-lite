import type { TDependencies } from "../types";

const getSystemInfo = ({ dependencies }: { dependencies: TDependencies }) => {
  return {
    modelName: dependencies.coreApi.getModelName(),
    osName: dependencies.coreApi.getOsName(),
    osVersion: dependencies.coreApi.getOsVersion(),
  };
};

export default getSystemInfo;
