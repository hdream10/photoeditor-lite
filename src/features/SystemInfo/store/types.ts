export type TSystemInfo = {
  modelName: string | undefined;
  osName: string | undefined;
  osVersion: string | undefined;
};

export interface ICoreApi {
  getModelName: () => string | undefined;
  getOsName: () => string | undefined;
  getOsVersion: () => string | undefined;
}

export type TDependencies = {
  coreApi: ICoreApi;
};

export type TContext = {
  dependencies: TDependencies;
};
