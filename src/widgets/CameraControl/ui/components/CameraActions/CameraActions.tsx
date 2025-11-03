import { View as ViewRN } from "react-native";
import { IconButton } from "@/shared/ui";
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
      <IconButton
        icon="camera"
        onPress={onTakePhoto}
        variant="primary"
        buttonSize="large"
        iconSize={32}
        disabled={disabled}
      />

      <IconButton
        icon="camera-flip"
        onPress={onToggleFacing}
        variant="secondary"
        buttonSize="large"
        iconSize={32}
        disabled={disabled}
      />
    </ViewRN>
  );
};

export default CameraActions;
