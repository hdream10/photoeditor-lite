import { createMachine } from "xstate";

export enum EState {
  IDLE = "IDLE",
  PERMISSION_IN_PROGRESS = "PERMISSION_IN_PROGRESS",
  PERMISSION_GRANTED = "PERMISSION_GRANTED",
  PERMISSION_DENIED = "PERMISSION_DENIED",
  PERMISSION_FAILED = "PERMISSION_FAILED",
}

export enum EEvents {
  START_GET_PERMISSION = "START_GET_PERMISSION",
  SET_PERMISSION_GRANTED = "SET_PERMISSION_GRANTED",
  SET_PERMISSION_DENIED = "SET_PERMISSION_DENIED",
  SET_PERMISSION_FAILED = "SET_PERMISSION_FAILED",
}

const MACHINE_ID = "camera";

const stateMachine = createMachine({
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
    [EState.PERMISSION_FAILED]: {
      on: {
        [EEvents.START_GET_PERMISSION]: {
          target: EState.PERMISSION_IN_PROGRESS,
        },
      },
    },
  },
});

export default stateMachine;
