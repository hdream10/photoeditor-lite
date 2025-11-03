import { StoreApi } from "zustand/vanilla";

export type TBaseModel<TState = unknown> = StoreApi<TState>;

export type TBaseDependencies = Partial<
  Record<"serverApi" | "coreApi", unknown>
>;

export type TBaseState<TModel> = TModel extends TBaseModel<infer TState>
  ? TState
  : undefined;

export type TDisposer = () => void;

export type TObserver<TDependencies, TState> = (
  dependencies: TDependencies,
  state: TState
) => TDisposer;

export type TContext<
  TModel extends TBaseModel | undefined,
  TDependencies extends TBaseDependencies
> = {
  dependencies: TDependencies;
  state: TBaseState<TModel>;
};

export type TWrappedAction<
  TModel extends TBaseModel | undefined,
  TDependencies extends TBaseDependencies,
  TProps = any,
  TResult = void
> = (context: TContext<TModel, TDependencies>, props: TProps) => TResult;

export type InferDependencies<
  TActionFactories extends Record<
    string,
    TWrappedAction<TBaseModel | undefined, TBaseDependencies, unknown, unknown>
  >
> = TActionFactories[keyof TActionFactories] extends TWrappedAction<
  TBaseModel | undefined,
  infer D
>
  ? D extends TBaseDependencies
    ? D
    : TBaseDependencies
  : TBaseDependencies;
