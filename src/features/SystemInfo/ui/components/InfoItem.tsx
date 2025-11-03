import { View as ViewRN } from "react-native";
import { Text } from "@/shared/ui";
import { styles } from "./InfoItem.styles";

type TProps = {
  label: string;
  value: string | null;
};

const InfoItem: React.FC<TProps> = ({ label, value }) => {
  return (
    <ViewRN style={styles.container}>
      <Text variant="subtitle" style={styles.label}>
        {label}:
      </Text>
      <Text variant="body" style={styles.value}>
        {value ?? "Неизвестно"}
      </Text>
    </ViewRN>
  );
};

export default InfoItem;
