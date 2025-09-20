export type TNavigation = {
  Home: undefined;
  MyPhotos: undefined;
  System: undefined;
};

export type TNavigationScreen = {
  name: keyof TNavigation;
  component: React.ComponentType;
  label: string;
};
