import type {
  TBaseModel,
  TBaseDependencies,
  TWrappedAction,
  InferDependencies,
} from "./types";

class Actions<
  TState = unknown,
  TModel extends TBaseModel<TState> | undefined =
    | TBaseModel<TState>
    | undefined,
  TActionFactories extends Record<
    string,
    TWrappedAction<TModel, TBaseDependencies>
  > = Record<string, TWrappedAction<TModel, TBaseDependencies>>,
  TDependencies extends TBaseDependencies = InferDependencies<TActionFactories>,
  TActions extends Record<
    string,
    (
      props?: Parameters<TActionFactories[keyof TActionFactories]>[1]
    ) => ReturnType<TActionFactories[keyof TActionFactories]>
  > = {
    [K in keyof TActionFactories]: (
      props?: Parameters<TActionFactories[K]>[1]
    ) => ReturnType<TActionFactories[K]>;
  }
> {
  private readonly model: TModel;

  private readonly wrappedActions: TActionFactories;

  private actions: TActions = {} as TActions;

  public constructor(
    model: TModel,
    {
      actions,
    }: {
      actions: TActionFactories;
    }
  ) {
    this.model = model;
    this.wrappedActions = actions;
  }

  public init(dependencies: TDependencies) {
    const preparedActions = {} as TActions;

    for (const key in this.wrappedActions) {
      const wrappedAction = this.wrappedActions[key];
      const action = (props: Parameters<typeof wrappedAction>[1]) => {
        return wrappedAction(
          {
            dependencies,
            state: this.model?.getState(),
          } as Parameters<typeof wrappedAction>[0],
          props
        );
      };

      preparedActions[key as keyof TActions] =
        action as TActions[keyof TActions];
    }

    this.actions = preparedActions;
  }

  public get(): TActions {
    return this.actions;
  }
}

export default Actions;
