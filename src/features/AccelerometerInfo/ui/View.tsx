import { View as ViewRN } from "react-native";
import { Text } from "@/shared/ui";
import { useAccelerometerPosition } from "../hooks";
import { InfoItem } from "./components";

const View = () => {
  const position = useAccelerometerPosition();

  if (!position) {
    return undefined;
  }

  return (
    <ViewRN>
      <Text variant="title">Информация о акселерометре</Text>

      <ViewRN>
        <InfoItem label="Положение x" value={position.x} />
        <InfoItem label="Положение y" value={position.y} />
        <InfoItem label="Положение z" value={position.z} />
      </ViewRN>
    </ViewRN>
  );
};

export default View;
