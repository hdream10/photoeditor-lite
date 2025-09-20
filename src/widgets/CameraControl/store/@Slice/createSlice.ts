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
