import { ScrollView } from "react-native";
import { styles } from "./PageContainer.styles";

type TProps = {
  children: React.ReactNode;
};

const PageContainer: React.FC<TProps> = ({ children }) => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      {children}
    </ScrollView>
  );
};

export default PageContainer;

