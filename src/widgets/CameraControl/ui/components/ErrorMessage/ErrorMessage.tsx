import { View as ViewRN } from "react-native";
import { Text } from "@/shared/ui";
import { styles } from "./ErrorMessage.styles";

const ErrorMessage = () => {
  return (
    <ViewRN style={styles.container}>
      <Text variant="subtitle">Нет доступа к камере</Text>
      <Text variant="body" style={styles.text}>
        Разрешите использование камеры в настройках устройства
      </Text>
    </ViewRN>
  );
};

export default ErrorMessage;

