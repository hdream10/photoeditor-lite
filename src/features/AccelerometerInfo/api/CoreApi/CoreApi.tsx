import { TCoreApi } from "../../store";
import { Accelerometer } from "expo-sensors";

class CoreApi implements TCoreApi {
  private readonly accelerometer = Accelerometer;

  public onChangePosition: TCoreApi["onChangePosition"] = (callback) => {
    const subscription = this.accelerometer.addListener(callback);

    this.accelerometer.setUpdateInterval(500);

    return subscription.remove;
  };
}

export default CoreApi;
