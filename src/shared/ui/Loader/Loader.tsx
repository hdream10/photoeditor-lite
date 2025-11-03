import { View as ViewRN, ActivityIndicator } from "react-native";
import { Text } from "@/shared/ui";
import { customColors } from "@/shared/theme";
import { styles } from "./Loader.styles";

type TProps = {
  message?: string;
};

const Loader: React.FC<TProps> = ({ message = "Загрузка..." }) => {
  return (
    <ViewRN style={styles.overlay}>
      <ViewRN style={styles.container}>
        <ActivityIndicator size="large" color={customColors.primary} />
        {message && (
          <Text variant="body" style={styles.message}>
            {message}
          </Text>
        )}
      </ViewRN>
    </ViewRN>
  );
};

export default Loader;

