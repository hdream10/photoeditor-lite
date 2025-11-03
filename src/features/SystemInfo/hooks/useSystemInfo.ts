import { useMemo } from "react";
import { coreApi } from "../api";

const useSystemInfo = () => {
  const systemInfo = useMemo(() => {
    return {
      modelName: coreApi.getModelName(),
      osName: coreApi.getOsName(),
      osVersion: coreApi.getOsVersion(),
    };
  }, []);

  return systemInfo;
};

export default useSystemInfo;

