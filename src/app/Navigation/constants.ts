import { SCREENS } from "@/core/Navigation";
import { Home } from "@/pages/Home";
import { MyPhotos } from "@/pages/MyPhotos";
import { System } from "@/pages/System";

export const SCREENS_WITH_COMPONENT = [
  {
    ...SCREENS.home,
    component: Home,
  },
  {
    ...SCREENS.myPhotos,
    component: MyPhotos,
  },
  {
    ...SCREENS.system,
    component: System,
  },
];
