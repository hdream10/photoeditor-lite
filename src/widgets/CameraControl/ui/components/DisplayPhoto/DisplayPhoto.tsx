import { View as ViewRN } from "react-native";
import { Image, IconButton } from "@/shared/ui";
import { styles } from "./DisplayPhoto.styles";

type TProps = {
  photoSrc: string;
  onEdit: () => void;
  onBack: () => void;
  onSave: (photoData: { uri: string }) => void;
};

const DisplayPhoto: React.FC<TProps> = ({
  photoSrc,
  onEdit,
  onBack,
  onSave,
}) => {
  const handleSave = () => {
    onSave({ uri: photoSrc });
    onBack();
  };

  return (
    <ViewRN style={styles.container}>
      <Image
        source={{ uri: photoSrc }}
        resizeMode="contain"
        style={styles.image}
      />
      <ViewRN style={styles.actions}>
        <IconButton
          icon="arrow-left"
          onPress={onBack}
          variant="secondary"
          buttonSize="medium"
          iconSize={24}
          style={styles.backButton}
        />
        <ViewRN style={styles.centerGroup}>
          <IconButton
            icon="content-save"
            onPress={handleSave}
            variant="primary"
            buttonSize="large"
            iconSize={32}
          />
          <IconButton
            icon="pencil"
            onPress={onEdit}
            variant="primary"
            buttonSize="large"
            iconSize={32}
          />
        </ViewRN>
      </ViewRN>
    </ViewRN>
  );
};

export default DisplayPhoto;
