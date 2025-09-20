import { View as ReactNativeView } from "react-native";
import { Text } from "@/shared/ui";

type TProps = {
  modelName: string | undefined;
  osName: string | undefined;
  osVersion: string | undefined;
};

const View: React.FC<TProps> = ({ modelName, osName, osVersion }) => {
  return (
    <ReactNativeView>
      <Text variant="title">Информация о системе</Text>

      <ReactNativeView>
        <ReactNativeView>
          <Text variant="body">Устройство:</Text>
          <Text variant="body">{modelName ?? "Неизвестно"}</Text>
        </ReactNativeView>

        <ReactNativeView>
          <Text variant="body">ОС:</Text>
          <Text variant="body">{osName ?? "Неизвестно"}</Text>
        </ReactNativeView>

        <ReactNativeView>
          <Text variant="body">Версия ОС:</Text>
          <Text variant="body">{osVersion ?? "Неизвестно"}</Text>
        </ReactNativeView>
      </ReactNativeView>
    </ReactNativeView>
  );
};

export default View;
