import { View as ReactNativeView } from "react-native";
import { Text } from "@/shared/ui";
import useStore from "../useStore";

const View = () => {
  const [position] = useStore((state) => state.position);

  if (!position) {
    return undefined;
  }

  return (
    <ReactNativeView>
      <Text variant="title">Информация о акселерометре</Text>

      <ReactNativeView>
        <ReactNativeView>
          <Text variant="body">Положение x:</Text>
          <Text variant="body">{position.x}</Text>
        </ReactNativeView>

        <ReactNativeView>
          <Text variant="body">Положение y:</Text>
          <Text variant="body">{position.y}</Text>
        </ReactNativeView>

        <ReactNativeView>
          <Text variant="body">Положение z:</Text>
          <Text variant="body">{position.z}</Text>
        </ReactNativeView>
      </ReactNativeView>
    </ReactNativeView>
  );
};

export default View;
