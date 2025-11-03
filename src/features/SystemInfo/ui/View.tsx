import { View as ViewRN } from "react-native";
import { Text } from "@/shared/ui";
import { InfoItem } from "./components";
import { useSystemInfo } from "../hooks";

const View = () => {
  const { modelName, osName, osVersion } = useSystemInfo();

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
