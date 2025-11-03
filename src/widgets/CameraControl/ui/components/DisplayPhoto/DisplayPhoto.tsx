import { View as ViewRN } from "react-native";
import { Image } from "@/shared/ui";
import { styles } from "./DisplayPhoto.styles";

type TProps = {
  photoSrc: string;
};

const DisplayPhoto: React.FC<TProps> = ({ photoSrc }) => {
  return (
    <ViewRN style={styles.container}>
      <Image source={{ uri: photoSrc }} resizeMode="contain" />
    </ViewRN>
  );
};

export default DisplayPhoto;

