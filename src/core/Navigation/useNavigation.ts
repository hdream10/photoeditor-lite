import { useNavigation as useNavigationRN } from "@react-navigation/native";
import { TDrawerNavigationProp } from "./types";

const useNavigation = () => {
  return useNavigationRN<TDrawerNavigationProp>();
};

export default useNavigation;
