import { View as ViewRN, Text } from "react-native";
import { Button } from "@/shared/ui";
import { styles } from "./CameraActions.styles";

type TProps = {
  onTakePhoto: () => void;
  onToggleFacing: () => void;
  disabled?: boolean;
};

const CameraActions: React.FC<TProps> = ({
  onTakePhoto,
  onToggleFacing,
  disabled = false,
}) => {
  return (
    <ViewRN style={styles.container}>
      <Button
        onPress={onTakePhoto}
        style={styles.photoButton}
        disabled={disabled}
        variant="primary"
      >
        <Text style={styles.icon}>📷</Text>
      </Button>

      <Button
        onPress={onToggleFacing}
        style={styles.flipButton}
        disabled={disabled}
        variant="secondary"
      >
        <Text style={styles.icon}>🔄</Text>
      </Button>
    </ViewRN>
  );
};

export default CameraActions;

