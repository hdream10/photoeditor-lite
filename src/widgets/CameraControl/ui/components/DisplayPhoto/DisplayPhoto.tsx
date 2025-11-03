import { View as ViewRN, Text } from "react-native";
import { Image, Button } from "@/shared/ui";
import { styles } from "./DisplayPhoto.styles";

type TProps = {
  photoSrc: string;
  onEdit: () => void;
  onBack: () => void;
};

const DisplayPhoto: React.FC<TProps> = ({ photoSrc, onEdit, onBack }) => {
  return (
    <ViewRN style={styles.container}>
      <Image source={{ uri: photoSrc }} resizeMode="contain" style={styles.image} />
      <ViewRN style={styles.actions}>
        <Button onPress={onEdit} variant="primary" style={styles.button}>
          <Text style={styles.buttonText}>✏️ Редактировать</Text>
        </Button>
        <Button onPress={onBack} variant="secondary" style={styles.button}>
          <Text style={styles.buttonText}>← Назад</Text>
        </Button>
      </ViewRN>
    </ViewRN>
  );
};

export default DisplayPhoto;

