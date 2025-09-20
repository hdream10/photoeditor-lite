import { TouchableOpacity, Text } from "react-native";
import { styles } from "./MenuButton.styles";

type TProps = {
  onPress: () => void;
};

const MenuButton: React.FC<TProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.icon}>☰</Text>
    </TouchableOpacity>
  );
};

export default MenuButton;