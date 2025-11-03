import { View as ViewRN } from "react-native";
import { Text } from "@/shared/ui";
import { styles } from "./Section.styles";

type TProps = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<TProps> = ({ title, children }) => {
  return (
    <ViewRN style={styles.container}>
      <Text variant="title" style={styles.title}>
        {title}
      </Text>
      <ViewRN style={styles.divider} />
      <ViewRN style={styles.content}>{children}</ViewRN>
    </ViewRN>
  );
};

export default Section;

