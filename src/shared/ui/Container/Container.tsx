import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./Container.styles";

type TProps = {
  children: React.ReactNode;
};

const Container: React.FC<TProps> = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {children}
    </View>
  );
};

export default Container;
