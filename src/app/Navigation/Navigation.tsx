import { createDrawerNavigator } from "@react-navigation/drawer";
import { withLayout } from "../Layout";
import { TNavigation } from "@/core/Navigation";
import { SCREENS_WITH_COMPONENT } from "./constants";
import { customColors } from "@/shared/theme";

const Drawer = createDrawerNavigator<TNavigation>();

const Navigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: customColors.primary,
          width: 280,
        },
        drawerActiveTintColor: customColors.text,
        drawerInactiveTintColor: customColors.textSecondary,
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "600",
        },
        drawerItemStyle: {
          marginHorizontal: 8,
          borderRadius: 8,
        },
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
