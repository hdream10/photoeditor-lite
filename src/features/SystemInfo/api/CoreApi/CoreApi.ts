import * as Device from "expo-device";
import type { ICoreApi } from "../../store";

class CoreApi implements ICoreApi {
  private readonly device = Device;

  public getModelName() {
    return this.device.modelName ?? undefined;
  }

  public getOsName() {
    return this.device.osName ?? undefined;
  }

  public getOsVersion() {
    return this.device.osVersion ?? undefined;
  }
}

export default CoreApi;
