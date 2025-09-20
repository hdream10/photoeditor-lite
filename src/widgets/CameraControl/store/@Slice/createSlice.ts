import { createStore } from "zustand/vanilla";
import { createActor } from "xstate";
import cameraMachine, { EState, EEvents } from "./stateMachine";
import type { TState } from "./types";

const createSlice = () => {
  return createStore<TState>((set) => {
    const actor = createActor(cameraMachine);

    actor.start();

    actor.subscribe((snapshot) => {
      set({ status: snapshot.value as EState });
    });

    return {
      status: actor.getSnapshot().value as EState,

      // views
      get isPermissionDenied() {
        return actor.getSnapshot().value === EState.PERMISSION_DENIED;
      },
      get isPermissionFailed() {
        return actor.getSnapshot().value === EState.PERMISSION_FAILED;
      },
      get isPermissionGranted() {
        return actor.getSnapshot().value === EState.PERMISSION_GRANTED;
      },
      get isPermissionInProgress() {
        return actor.getSnapshot().value === EState.PERMISSION_IN_PROGRESS;
      },

      // actions
      startGetPermission: () => {
        actor.send({ type: EEvents.START_GET_PERMISSION });
      },
      setPermissionGranted: () => {
        actor.send({ type: EEvents.SET_PERMISSION_GRANTED });
      },
      setPermissionDenied: () => {
        actor.send({ type: EEvents.SET_PERMISSION_DENIED });
      },
      setPermissionFailed: () => {
        actor.send({ type: EEvents.SET_PERMISSION_FAILED });
      },
    };
  });
};

export default createSlice;
