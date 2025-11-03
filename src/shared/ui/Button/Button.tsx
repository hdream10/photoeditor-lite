import { TouchableOpacity, ViewStyle, Text } from "react-native";
import { styles } from "./Button.styles";

type TProps = {
  children: React.ReactNode;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
  variant?: "primary" | "secondary";
};

const Button: React.FC<TProps> = ({
  children,
  onPress,
  style,
  disabled = false,
  variant = "primary",
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {typeof children === "string" ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default Button;

