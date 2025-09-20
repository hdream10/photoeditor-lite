export type TCoreApi = {
  getCameraPermissions: () => Promise<boolean>;
};

export type TDependencies = {
  coreApi: TCoreApi;
};