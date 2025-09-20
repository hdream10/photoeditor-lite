import { StoreApi } from "zustand/vanilla";

export type TBaseSlice<TState> = StoreApi<TState>;

export type TBaseDependencies =
  | Partial<Record<"serverApi" | "coreApi", unknown>>
  | undefined;

export type TDisposer = () => void;

export type TObserver<TDependencies, TState> = (
  dependencies: TDependencies,
  state: ReturnType<TBaseSlice<TState>["getState"]>
) => TDisposer;
