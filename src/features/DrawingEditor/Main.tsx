import { View } from "./ui";

type TProps = {
  photoSrc: string;
  onBack: () => void;
  onSave: (photoData: { uri: string }) => void;
};

const Main: React.FC<TProps> = ({ photoSrc, onBack, onSave }) => {
  return <View photoSrc={photoSrc} onBack={onBack} onSave={onSave} />;
};

export default Main;
