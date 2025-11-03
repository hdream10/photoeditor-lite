import { View as ViewRN } from "react-native";

type TProps = {
  height?: number;
};

const Spacer: React.FC<TProps> = ({ height = 32 }) => {
  return <ViewRN style={[{ height }]} />;
};

export default Spacer;
