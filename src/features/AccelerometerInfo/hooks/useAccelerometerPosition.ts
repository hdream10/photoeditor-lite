import { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";

export type TPosition = {
  x: number;
  y: number;
  z: number;
};

const useAccelerometerPosition = () => {
  const [position, setPosition] = useState<TPosition | undefined>(undefined);

  useEffect(() => {
    Accelerometer.setUpdateInterval(500);

    const subscription = Accelerometer.addListener((data) => {
      setPosition({
        x: data.x,
        y: data.y,
        z: data.z,
      });
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return position;
};

export default useAccelerometerPosition;

