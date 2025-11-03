import { View } from "./ui";

type TProps = {
  photoSrc: string;
  onBack?: () => void;
};

const Main: React.FC<TProps> = ({ photoSrc, onBack }) => {
  return <View photoSrc={photoSrc} onBack={onBack} />;
};

export default Main;

