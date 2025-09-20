import { Text as ReactNativeText } from "react-native";
import { styles } from "./Text.styles";

type TVariant = "title" | "subtitle" | "body" | "caption";

type TProps = {
  children: React.ReactNode;
  variant?: TVariant;
};

const Text: React.FC<TProps> = ({ children, variant = "body" }) => {
  return <ReactNativeText style={styles[variant]}>{children}</ReactNativeText>;
};

export default Text;
