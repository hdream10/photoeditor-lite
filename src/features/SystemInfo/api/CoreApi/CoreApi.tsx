import * as Device from "expo-device";
import { TCoreApi } from "../../store";

class CoreApi implements TCoreApi {
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
