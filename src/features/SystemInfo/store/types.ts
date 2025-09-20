export type TSystemInfo = {
  modelName: string | undefined;
  osName: string | undefined;
  osVersion: string | undefined;
};

export type TCoreApi = {
  getModelName: () => string | undefined;
  getOsName: () => string | undefined;
  getOsVersion: () => string | undefined;
};

export type TDependencies = {
  coreApi: TCoreApi;
};
