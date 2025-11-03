import { useRef } from "react";
import { View as ViewRN } from "react-native";
import { DrawingCanvas, DrawingToolbar } from "./components";
import { useDrawing, useDrawingSave } from "../hooks";

type TProps = {
  photoSrc: string;
  onBack: () => void;
  onSave: (photoData: { uri: string }) => void;
};

const View: React.FC<TProps> = ({ photoSrc, onBack, onSave }) => {
  const canvasRef = useRef<ViewRN | null>(null);

  const {
    paths,
    currentPath,
    startDrawing,
    continueDrawing,
    stopDrawing,
    undo,
    clearDrawing,
  } = useDrawing();

  const { save } = useDrawingSave(canvasRef, onSave);

  return (
    <ViewRN style={{ flex: 1 }}>
      <DrawingCanvas
        ref={canvasRef}
        photoSrc={photoSrc}
        paths={paths}
        currentPath={currentPath}
        onStartDrawing={startDrawing}
        onContinueDrawing={continueDrawing}
        onStopDrawing={stopDrawing}
      />
      <DrawingToolbar
        onUndo={undo}
        onSave={save}
        onClear={clearDrawing}
        onBack={onBack}
        canUndo={paths.length > 0}
      />
    </ViewRN>
  );
};

export default View;
