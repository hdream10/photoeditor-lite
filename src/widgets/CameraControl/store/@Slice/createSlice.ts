import { createStore } from "zustand/vanilla";
import { createActor } from "xstate";
import cameraMachine, { EState, EEvents } from "./stateMachine";
import type { TState } from "./types";
import { BACK_FACING, FRONT_FACING } from "./constants";

const createSlice = () => {
  return createStore<TState>((set) => {
    const actor = createActor(cameraMachine);

    actor.start();

    actor.subscribe((snapshot) => {
      set({ status: snapshot.value as EState });
    });

    return {
      status: actor.getSnapshot().value as EState,
      facing: BACK_FACING,
      photoSrc: undefined,

      // views
      get isPermissionDenied() {
        return this.status === EState.PERMISSION_DENIED;
      },
      get isPermissionFailed() {
        return this.status === EState.PERMISSION_FAILED;
      },
      get isPermissionGranted() {
        return this.status === EState.PERMISSION_GRANTED;
      },
      get isPermissionInProgress() {
        return this.status === EState.PERMISSION_IN_PROGRESS;
      },

      // actions
      toggleFacing: () => {
        set((state) => ({
          facing: state.facing === BACK_FACING ? FRONT_FACING : BACK_FACING,
        }));
      },
      setPhotoSrc: (photoSrc) => {
        set({ photoSrc });
      },
      reset: () => {
        set({ photoSrc: undefined });
      },

      // status
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
      startTakePhoto: () => {
        actor.send({ type: EEvents.START_TAKE_PHOTO });
      },
      setTakePhotoSuccess: () => {
        actor.send({ type: EEvents.SET_TAKE_PHOTO_SUCCESS });
      },
      setTakePhotoFailed: () => {
        actor.send({ type: EEvents.SET_TAKE_PHOTO_FAILED });
      },
    };
  });
};

export default createSlice;
