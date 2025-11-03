import { View as ViewRN } from "react-native";
import { Text } from "@/shared/ui";

type TProps = {
  label: string;
  value: number;
};

const InfoItem: React.FC<TProps> = ({ label, value }) => {
  return (
    <ViewRN>
      <Text variant="body">{label}:</Text>
      <Text variant="body">{value}</Text>
    </ViewRN>
  );
};

export default InfoItem;
