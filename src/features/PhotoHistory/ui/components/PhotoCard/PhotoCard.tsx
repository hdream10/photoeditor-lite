import { View, Image } from "react-native";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Text } from "@/shared/ui";
import type { IPhotoHistoryItem } from "@/entities/PhotoHistory";
import { styles } from "./PhotoCard.styles";

type TProps = {
  photo: IPhotoHistoryItem;
};

const PhotoCard = ({ photo }: TProps) => {
  const formattedDate = format(new Date(photo.createdAt), "dd.MM.yyyy HH:mm", {
    locale: ru,
  });

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo.uri }} style={styles.image} />
      <Text variant="caption" style={styles.date}>
        {formattedDate}
      </Text>
    </View>
  );
};

export default PhotoCard;
