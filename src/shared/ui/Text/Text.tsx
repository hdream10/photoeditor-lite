import { Text as TextRN, TextStyle } from "react-native";
import { styles } from "./Text.styles";

type TVariant = "title" | "subtitle" | "body" | "caption";

type TProps = {
  children: React.ReactNode;
  variant?: TVariant;
  style?: TextStyle;
};

const Text: React.FC<TProps> = ({ children, variant = "body", style }) => {
  return <TextRN style={[styles[variant], style]}>{children}</TextRN>;
};

export default Text;
