import { Section } from "@/shared/ui";
import { useAccelerometerPosition } from "../hooks";
import { InfoItem } from "./components";

const View = () => {
  const position = useAccelerometerPosition();

  if (!position) {
    return undefined;
  }

  return (
    <Section title="Информация о акселерометре">
      <InfoItem label="Положение x" value={position.x} />
      <InfoItem label="Положение y" value={position.y} />
      <InfoItem label="Положение z" value={position.z} />
    </Section>
  );
};

export default View;
