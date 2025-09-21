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

export type TAction<TProps = unknown> = (props: TProps) => void;

export type TActions = Record<string, TAction>;

export type TWrappedAction<TDependencies, TState, TProps = unknown> = (
  dependencies: TDependencies,
  state: ReturnType<TBaseSlice<TState>["getState"]>
) => TAction<TProps>;

export type TWrappedActions<TDependencies, TState> = Record<
  string,
  TWrappedAction<TDependencies, TState, unknown>
>;
