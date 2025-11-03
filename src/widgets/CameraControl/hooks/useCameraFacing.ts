import { useState, useCallback } from "react";

type TFacing = "front" | "back";

const useCameraFacing = (initialFacing: TFacing = "back") => {
  const [facing, setFacing] = useState<TFacing>(initialFacing);

  const toggleFacing = useCallback(() => {
    setFacing((prev) => (prev === "back" ? "front" : "back"));
  }, []);

  return {
    facing,
    toggleFacing,
  };
};

export default useCameraFacing;
