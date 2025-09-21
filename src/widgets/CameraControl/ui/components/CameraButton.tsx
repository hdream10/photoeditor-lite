import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle, Text } from "react-native";

type TProps = {
  icon: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
};

const CameraButton: React.FC<TProps> = ({
  icon,
  onPress,
  style,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={styles.icon}>{icon}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  disabled: {
    opacity: 0.5,
  },
  icon: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default CameraButton;
