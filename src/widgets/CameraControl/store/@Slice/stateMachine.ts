import { createMachine } from "xstate";

export enum EState {
  IDLE = "IDLE",
  PERMISSION_IN_PROGRESS = "PERMISSION_IN_PROGRESS",
  PERMISSION_GRANTED = "PERMISSION_GRANTED",
  PERMISSION_DENIED = "PERMISSION_DENIED",
  PERMISSION_FAILED = "PERMISSION_FAILED",
  TAKING_PHOTO = "TAKING_PHOTO",
  TAKING_PHOTO_SUCCESS = "TAKING_PHOTO_SUCCESS",
  TAKING_PHOTO_FAILED = "TAKING_PHOTO_FAILED",
}

export enum EEvents {
  START_GET_PERMISSION = "START_GET_PERMISSION",
  SET_PERMISSION_GRANTED = "SET_PERMISSION_GRANTED",
  SET_PERMISSION_DENIED = "SET_PERMISSION_DENIED",
  SET_PERMISSION_FAILED = "SET_PERMISSION_FAILED",
  START_TAKE_PHOTO = "START_TAKE_PHOTO",
  SET_TAKE_PHOTO_SUCCESS = "SET_TAKE_PHOTO_SUCCESS",
  SET_TAKE_PHOTO_FAILED = "SET_TAKE_PHOTO_FAILED",
}

const MACHINE_ID = "camera";

const stateMachine = createMachine({
  types: {} as {
    events:
      | { type: typeof EEvents.START_GET_PERMISSION }
      | { type: typeof EEvents.SET_PERMISSION_GRANTED }
      | { type: typeof EEvents.SET_PERMISSION_DENIED }
      | { type: typeof EEvents.SET_PERMISSION_FAILED }
      | { type: typeof EEvents.START_TAKE_PHOTO }
      | { type: typeof EEvents.SET_TAKE_PHOTO_SUCCESS }
      | { type: typeof EEvents.SET_TAKE_PHOTO_FAILED };
  },
  id: MACHINE_ID,
  initial: EState.IDLE,
  states: {
    [EState.IDLE]: {
      on: {
        [EEvents.START_GET_PERMISSION]: {
          target: EState.PERMISSION_IN_PROGRESS,
        },
      },
    },
    [EState.PERMISSION_IN_PROGRESS]: {
      on: {
        [EEvents.SET_PERMISSION_GRANTED]: {
          target: EState.PERMISSION_GRANTED,
        },
        [EEvents.SET_PERMISSION_DENIED]: {
          target: EState.PERMISSION_DENIED,
        },
        [EEvents.SET_PERMISSION_FAILED]: {
          target: EState.PERMISSION_FAILED,
        },
      },
    },
    [EState.PERMISSION_GRANTED]: {
      on: {
        [EEvents.START_TAKE_PHOTO]: {
          target: EState.TAKING_PHOTO,
        },
      },
    },
    [EState.PERMISSION_DENIED]: {},
    [EState.PERMISSION_FAILED]: {
      on: {
        [EEvents.START_GET_PERMISSION]: {
          target: EState.PERMISSION_IN_PROGRESS,
        },
      },
    },
    [EState.TAKING_PHOTO]: {
      on: {
        [EEvents.SET_TAKE_PHOTO_SUCCESS]: {
          target: EState.TAKING_PHOTO_SUCCESS,
        },
        [EEvents.SET_TAKE_PHOTO_FAILED]: {
          target: EState.TAKING_PHOTO_FAILED,
        },
      },
    },
    [EState.TAKING_PHOTO_SUCCESS]: {},
    [EState.TAKING_PHOTO_FAILED]: {
      on: {
        [EEvents.START_TAKE_PHOTO]: {
          target: EState.TAKING_PHOTO,
        },
      },
    },
  },
});

export default stateMachine;
