import { View, ViewStyle } from "react-native";
import { styles } from "./Container.styles";

type TProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export const Container: React.FC<TProps> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};
