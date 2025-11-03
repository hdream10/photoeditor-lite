import { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";

const UPDATE_INTERVAL = 500;

type TPosition = {
  x: number;
  y: number;
  z: number;
};

const useAccelerometerPosition = () => {
  const [position, setPosition] = useState<TPosition | undefined>(undefined);

  useEffect(() => {
    Accelerometer.setUpdateInterval(UPDATE_INTERVAL);

    const subscription = Accelerometer.addListener((data) => {
      setPosition(data);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return position;
};

export default useAccelerometerPosition;
