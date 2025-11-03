import { View as ViewRN } from "react-native";
import { DrawingCanvas, DrawingToolbar } from "./components";
import { useDrawing } from "../hooks";

type TProps = {
  photoSrc: string;
  onBack?: () => void;
};

const View: React.FC<TProps> = ({ photoSrc, onBack }) => {
  const {
    paths,
    currentPath,
    startDrawing,
    continueDrawing,
    stopDrawing,
    undo,
    clearDrawing,
  } = useDrawing();

  return (
    <ViewRN style={{ flex: 1 }}>
      <DrawingCanvas
        photoSrc={photoSrc}
        paths={paths}
        currentPath={currentPath}
        onStartDrawing={startDrawing}
        onContinueDrawing={continueDrawing}
        onStopDrawing={stopDrawing}
      />
      <DrawingToolbar
        onUndo={undo}
        onClear={clearDrawing}
        onBack={onBack}
        canUndo={paths.length > 0}
      />
    </ViewRN>
  );
};

export default View;
