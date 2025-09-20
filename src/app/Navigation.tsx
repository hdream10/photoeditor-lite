import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Home } from '../pages/Home';
import { MyPhotos } from '../pages/MyPhotos';
import { System } from '../pages/System';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (
  routeName: string,
  focused: boolean,
  color: string,
  size: number,
) => {
  let iconName: keyof typeof Ionicons.glyphMap;

  if (routeName === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (routeName === 'MyPhotos') {
    iconName = focused ? 'images' : 'images-outline';
  } else if (routeName === 'System') {
    iconName = focused ? 'settings' : 'settings-outline';
  } else {
    iconName = 'help-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) =>
            getTabBarIcon(route.name, focused, color, size),
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ title: 'Главная' }}
        />
        <Tab.Screen
          name="MyPhotos"
          component={MyPhotos}
          options={{ title: 'Мои фото' }}
        />
        <Tab.Screen
          name="System"
          component={System}
          options={{ title: 'Система' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
