import type {
  TBaseModel,
  TBaseDependencies,
  TActions,
  TWrappedActions,
} from "./types";

class Actions<
  TState = unknown,
  TProps = unknown,
  TModel extends TBaseModel<TState> = TBaseModel<TState>,
  TDependencies extends TBaseDependencies = TBaseDependencies
> {
  private readonly model: TModel;

  private readonly wrappedActions: TWrappedActions<
    TDependencies,
    TState,
    TProps
  >;

  private readonly actions: TActions<TProps> = {};

  public constructor(
    model: TModel,
    {
      actions,
    }: {
      actions: TWrappedActions<TDependencies, TState, TProps>;
    }
  ) {
    this.model = model;
    this.wrappedActions = actions;
  }

  public init(dependencies: TDependencies) {
    Object.entries(this.wrappedActions).forEach(([key, wrappedAction]) => {
      this.actions[key] = wrappedAction(dependencies, this.model.getState());
    });
  }

  public get api() {
    return this.actions;
  }
}

export default Actions;
