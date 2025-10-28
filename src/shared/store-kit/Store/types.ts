import { StoreApi } from "zustand/vanilla";

export type TBaseModel<TState> = StoreApi<TState>;

export type TBaseDependencies =
  | Partial<Record<"serverApi" | "coreApi", unknown>>
  | undefined;

export type TDisposer = () => void;

export type TObserver<TDependencies, TState> = (
  dependencies: TDependencies,
  state: TState
) => TDisposer;

export type TAction<TProps> = (props: TProps) => void;

export type TActions<TProps> = Record<string, TAction<TProps>>;

export type TWrappedAction<TDependencies, TState, TProps> = (
  dependencies: TDependencies,
  state: TState
) => TAction<TProps>;

export type TWrappedActions<TDependencies, TState, TProps> = Record<
  string,
  TWrappedAction<TDependencies, TState, TProps>
>;
