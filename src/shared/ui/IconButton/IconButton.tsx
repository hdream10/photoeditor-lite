import { ViewStyle } from "react-native";
import { IconButton as PaperIconButton } from "react-native-paper";
import { customColors } from "@/shared/theme";

type TProps = {
  icon: string;
  onPress: () => void;
  iconSize?: number;
  buttonSize?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  disabled?: boolean;
  style?: ViewStyle;
};

const IconButton: React.FC<TProps> = ({
  icon,
  onPress,
  iconSize = 24,
  buttonSize = "medium",
  variant = "primary",
  disabled = false,
  style,
}) => {
  const buttonSizes = {
    small: 40,
    medium: 56,
    large: 70,
  };

  const size = buttonSizes[buttonSize];
  const iconColor =
    variant === "primary" ? customColors.white : customColors.text;
  const backgroundColor =
    variant === "primary" ? customColors.primary : customColors.surfaceDark;

  return (
    <PaperIconButton
      icon={icon}
      iconColor={iconColor}
      size={iconSize}
      onPress={onPress}
      disabled={disabled}
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          borderWidth: variant === "secondary" ? 1 : 0,
          borderColor:
            variant === "secondary" ? customColors.divider : undefined,
        },
        style,
      ]}
    />
  );
};

export default IconButton;
