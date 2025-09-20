import { Home } from "../../pages/Home";
import { MyPhotos } from "../../pages/MyPhotos";
import { System } from "../../pages/System";
import { TNavigationScreen } from "./types";

export const SCREENS: TNavigationScreen[] = [
  {
    name: "Home",
    component: Home,
    label: "Главная",
  },
  {
    name: "MyPhotos",
    component: MyPhotos,
    label: "Мои фото",
  },
  {
    name: "System",
    component: System,
    label: "Система",
  },
];
