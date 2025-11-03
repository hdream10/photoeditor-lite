import { View, FlatList } from "react-native";
import { PhotoCard } from "../PhotoCard";
import type { IPhotoHistoryItem } from "@/entities/PhotoHistory";
import { styles } from "./PhotoHistoryList.styles";

type TProps = {
  photos: IPhotoHistoryItem[];
};

const PhotoHistoryList = ({ photos }: TProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={({ item }) => <PhotoCard photo={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PhotoHistoryList;

