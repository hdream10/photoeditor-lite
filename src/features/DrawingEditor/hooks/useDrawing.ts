import { useState, useCallback } from "react";
import { customColors } from "@/shared/theme";

const PEN_COLOR = customColors.error;
const PEN_STROKE_WIDTH = 4;

export type TPoint = {
  x: number;
  y: number;
};

export type TPath = {
  points: TPoint[];
  color: string;
  strokeWidth: number;
};

const useDrawing = () => {
  const [paths, setPaths] = useState<TPath[]>([]);
  const [currentPath, setCurrentPath] = useState<TPath | null>(null);

  const startDrawing = useCallback((point: TPoint) => {
    const newPath: TPath = {
      points: [point],
      color: PEN_COLOR,
      strokeWidth: PEN_STROKE_WIDTH,
    };
    setCurrentPath(newPath);
  }, []);

  const continueDrawing = useCallback((point: TPoint) => {
    setCurrentPath((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        points: [...prev.points, point],
      };
    });
  }, []);

  const stopDrawing = useCallback(() => {
    if (currentPath && currentPath.points.length > 0) {
      setPaths((prev) => [...prev, currentPath]);
    }
    setCurrentPath(null);
  }, [currentPath]);

  const undo = useCallback(() => {
    setPaths((prev) => {
      if (prev.length === 0) return prev;
      return prev.slice(0, -1);
    });
  }, []);

  const clearDrawing = useCallback(() => {
    setPaths([]);
    setCurrentPath(null);
  }, []);

  return {
    paths,
    currentPath,
    startDrawing,
    continueDrawing,
    stopDrawing,
    undo,
    clearDrawing,
  };
};

export default useDrawing;
