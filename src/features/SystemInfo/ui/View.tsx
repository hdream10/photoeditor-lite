import { View as ViewRN } from "react-native";
import { Text } from "@/shared/ui";
import useStore from "../useStore";
import { InfoItem } from "./components";

const View = () => {
  const { modelName, osName, osVersion } = useStore();

  return (
    <ViewRN>
      <Text variant="title">Информация о системе</Text>

      <ViewRN>
        <InfoItem label="Устройство" value={modelName} />
        <InfoItem label="ОС" value={osName} />
        <InfoItem label="Версия ОС" value={osVersion} />
      </ViewRN>
    </ViewRN>
  );
};

export default View;
