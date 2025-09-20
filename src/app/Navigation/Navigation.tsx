import { createDrawerNavigator } from "@react-navigation/drawer";
import { withLayout } from "../Layout";
import { TNavigation } from "../../core/Navigation";
import { SCREENS_WITH_COMPONENT } from "./constants";

const Drawer = createDrawerNavigator<TNavigation>();

const Navigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {SCREENS_WITH_COMPONENT.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={withLayout(screen.component)}
          options={{
            drawerLabel: screen.label,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default Navigation;
