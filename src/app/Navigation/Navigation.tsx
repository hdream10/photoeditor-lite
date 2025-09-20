import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TNavigation } from "./types";
import { SCREENS } from "./config";

const Tab = createBottomTabNavigator<TNavigation>();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#E5E5EA",
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#8E8E93",
      }}
    >
      {SCREENS.map((screen) => (
        <Tab.Screen
          name={screen.name}
          component={screen.component}
          options={{
            tabBarLabel: screen.label,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Navigation;
