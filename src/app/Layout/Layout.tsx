import { useNavigation } from "../../core/Navigation";
import { Container, MenuButton } from "../../shared/ui";

type TProps = {
  children: React.ReactNode;
};

const Layout: React.FC<TProps> = ({ children }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <MenuButton onPress={navigation.openDrawer} />
      {children}
    </Container>
  );
};

export default Layout;
