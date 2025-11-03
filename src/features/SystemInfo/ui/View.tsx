import { Section } from "@/shared/ui";
import { InfoItem } from "./components";
import { modelName, osName, osVersion } from "expo-device";

const View = () => {
  return (
    <Section title="Информация о системе">
      <InfoItem label="Устройство" value={modelName} />
      <InfoItem label="ОС" value={osName} />
      <InfoItem label="Версия ОС" value={osVersion} />
    </Section>
  );
};

export default View;
