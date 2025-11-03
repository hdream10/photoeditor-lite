import { View as ViewRN } from "react-native";
import { styles } from "./DrawingContainer.styles";

type TProps = {
  children: React.ReactNode;
};

const DrawingContainer: React.FC<TProps> = ({ children }) => {
  return <ViewRN style={styles.container}>{children}</ViewRN>;
};

export default DrawingContainer;

