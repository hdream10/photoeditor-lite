import { Image as ReactNativeImage, ImageStyle } from "react-native";
import { styles } from "./Image.styles";

type TProps = {
  source: { uri: string };
  style?: ImageStyle;
  resizeMode?: "contain" | "cover" | "stretch" | "center";
};

const Image: React.FC<TProps> = ({
  source,
  style,
  resizeMode = "contain",
}) => {
  return (
    <ReactNativeImage
      source={source}
      style={[styles.image, style]}
      resizeMode={resizeMode}
    />
  );
};

export default Image;

