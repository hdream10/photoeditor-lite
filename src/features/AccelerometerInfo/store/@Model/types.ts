export type TPosition = {
  x: number;
  y: number;
  z: number;
};

export type TState = {
  position: TPosition | undefined;
  setPosition: (position: TPosition) => void;
};
