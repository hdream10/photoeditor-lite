import { View as ViewRN } from "react-native";
import { Text } from "@/shared/ui";
import { styles } from "./InfoItem.styles";

type TProps = {
  label: string;
  value: number;
};

const InfoItem: React.FC<TProps> = ({ label, value }) => {
  return (
    <ViewRN style={styles.container}>
      <Text variant="subtitle" style={styles.label}>
        {label}:
      </Text>
      <Text variant="body" style={styles.value}>
        {value.toFixed(2)}
      </Text>
    </ViewRN>
  );
};

export default InfoItem;
