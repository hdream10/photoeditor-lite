export type TCoreApi = {
  getCameraPermissions: () => Promise<boolean>;
};

export type TPhoto = {
  uri: string;
  [key: string]: unknown;
};

export type TDependencies = {
  coreApi: TCoreApi;
};
