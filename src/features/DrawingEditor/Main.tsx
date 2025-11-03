import { View } from "./ui";

type TProps = {
  photoSrc: string;
};

const Main: React.FC<TProps> = ({ photoSrc }) => {
  return <View photoSrc={photoSrc} />;
};

export default Main;

