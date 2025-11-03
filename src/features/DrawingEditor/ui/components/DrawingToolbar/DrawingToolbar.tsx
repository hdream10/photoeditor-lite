import { View as ViewRN } from "react-native";
import { IconButton } from "@/shared/ui";
import { styles } from "./DrawingToolbar.styles";

type TProps = {
  onUndo: () => void;
  onSave: () => void;
  onClear: () => void;
  onBack: () => void;
  canUndo: boolean;
};

const DrawingToolbar: React.FC<TProps> = ({
  onUndo,
  onSave,
  onClear,
  onBack,
  canUndo,
}) => {
  return (
    <ViewRN style={styles.container}>
      <IconButton
        icon="arrow-left"
        onPress={onBack}
        variant="secondary"
        buttonSize="medium"
        iconSize={24}
        style={styles.leftButton}
      />

      <ViewRN style={styles.centerGroup}>
        <IconButton
          icon="content-save"
          onPress={onSave}
          variant="secondary"
          buttonSize="large"
          iconSize={32}
        />

        <IconButton
          icon="delete"
          onPress={onClear}
          variant="secondary"
          buttonSize="large"
          iconSize={32}
        />
      </ViewRN>

      <IconButton
        icon="undo"
        onPress={onUndo}
        variant="secondary"
        buttonSize="medium"
        iconSize={24}
        disabled={!canUndo}
        style={styles.rightButton}
      />
    </ViewRN>
  );
};

export default DrawingToolbar;
