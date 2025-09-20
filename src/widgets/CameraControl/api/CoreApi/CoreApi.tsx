import { Camera } from "expo-camera";
import { TCoreApi } from "../../store";

class CoreApi implements TCoreApi {
  private readonly camera = Camera;

  public async getCameraPermissions() {
    return this.camera
      .requestCameraPermissionsAsync()
      .then((response) => response.granted);
  }
}

export default CoreApi;
