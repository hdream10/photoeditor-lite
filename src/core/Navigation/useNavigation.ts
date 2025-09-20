import { useNavigation as useReactNativeNavigation } from "@react-navigation/native";
import { TDrawerNavigationProp } from "./types";

const useNavigation = () => {
  return useReactNativeNavigation<TDrawerNavigationProp>();
};

export default useNavigation;
