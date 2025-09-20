import { DrawerNavigationProp } from "@react-navigation/drawer";

export type TNavigation = {
  home: undefined;
  myPhotos: undefined;
  system: undefined;
};

export type TDrawerNavigationProp = DrawerNavigationProp<TNavigation>;

type TNavigationScreen = {
  name: keyof TNavigation;
  label: string;
};

export type TScreens = {
  [key in keyof TNavigation]: TNavigationScreen;
};
