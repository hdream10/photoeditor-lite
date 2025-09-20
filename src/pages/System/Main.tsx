import { View } from "react-native";
import { SystemInfo } from "@/features/SystemInfo";
import { AccelerometerInfo } from "@/features/AccelerometerInfo";

const Main = () => {
  return (
    <View>
      <SystemInfo />
      <AccelerometerInfo />
    </View>
  );
};

export default Main;
