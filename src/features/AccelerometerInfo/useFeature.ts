import { useEffect } from "react";
import { store } from "./store";
import { coreApi } from "./api";

const { observers } = store;

const useFeature = () => {
  useEffect(() => {
    observers.run({ coreApi });

    return () => {
      observers.stop();
    };
  }, []);
};

export default useFeature;
