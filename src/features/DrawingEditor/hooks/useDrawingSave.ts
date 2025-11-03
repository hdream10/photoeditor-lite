import { useCallback } from "react";
import { captureRef } from "react-native-view-shot";
import { View as ViewRN } from "react-native";

type TPhotoData = {
  uri: string;
};

type TUseDrawingSave = (
  canvasRef: React.RefObject<ViewRN | null>,
  onSave: (photoData: TPhotoData) => void
) => {
  save: () => void;
};

const useDrawingSave: TUseDrawingSave = (canvasRef, onSave) => {
  const save = useCallback(() => {
    if (!canvasRef.current) {
      return;
    }

    captureRef(canvasRef, {
      format: "png",
      quality: 1,
    })
      .then((uri) => {
        onSave({ uri });
      })
      .catch((error) => {
        console.error("Failed to capture drawing", error);
      });
  }, [canvasRef, onSave]);

  return {
    save,
  };
};

export default useDrawingSave;
