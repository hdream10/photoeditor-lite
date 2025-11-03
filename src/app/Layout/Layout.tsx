import { useNavigation } from "@/core/Navigation";
import { Container, MenuButton } from "@/shared/ui";
import { useIsFocused } from "@react-navigation/native";

type TProps = {
  children: React.ReactNode;
};

const Layout: React.FC<TProps> = ({ children }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  return (
    <Container>
      <MenuButton onPress={navigation.openDrawer} />
      {isFocused ? children : undefined}
    </Container>
  );
};

export default Layout;
