import { View } from "react-native";
import { Text } from "@/shared/ui";
import { styles } from "./EmptyState.styles";

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <Text variant="body" style={styles.text}>
        Нет сохраненных фото
      </Text>
    </View>
  );
};

export default EmptyState;

