import type { TCoreApi } from "../types";

type TProps = {
  coreApi: TCoreApi;
};

const getSystemInfo = ({ coreApi }: TProps) => {
  return {
    modelName: coreApi.getModelName(),
    osName: coreApi.getOsName(),
    osVersion: coreApi.getOsVersion(),
  };
};

export default getSystemInfo;
