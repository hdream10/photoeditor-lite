import { View as ViewRN, Text } from "react-native";
import { Button } from "@/shared/ui";
import { styles } from "./DrawingToolbar.styles";

type TProps = {
  onUndo: () => void;
  onClear: () => void;
  canUndo: boolean;
};

const DrawingToolbar: React.FC<TProps> = ({
  onUndo,
  onClear,
  canUndo,
}) => {
  return (
    <ViewRN style={styles.container}>
      <Button
        onPress={onUndo}
        variant="secondary"
        style={styles.button}
        disabled={!canUndo}
      >
        <Text style={styles.buttonText}>↶ Отменить</Text>
      </Button>

      <Button onPress={onClear} variant="secondary" style={styles.button}>
        <Text style={styles.buttonText}>🗑️ Очистить</Text>
      </Button>
    </ViewRN>
  );
};

export default DrawingToolbar;
