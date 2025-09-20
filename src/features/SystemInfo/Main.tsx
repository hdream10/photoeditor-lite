import useStore from "./useStore";
import { View } from "./ui";

const Main = () => {
  const { state } = useStore();

  return <View {...state} />;
};

export default Main;
