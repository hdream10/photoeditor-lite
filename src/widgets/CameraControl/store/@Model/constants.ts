export const FRONT_FACING = "front" as const;
export const BACK_FACING = "back" as const;

export type TFacing = typeof FRONT_FACING | typeof BACK_FACING;
