import Actions from "./Actions";
import Observers from "./Observers";
import type {
  TBaseModel,
  TBaseDependencies,
  TObserver,
  TWrappedActions,
} from "./types";

class Store<
  TState = unknown,
  TProps = unknown,
  TModel extends TBaseModel<TState> = TBaseModel<TState>,
  TDependencies extends TBaseDependencies = TBaseDependencies
> {
  private readonly _model: TModel;

  private readonly _actions: Actions<TState, TProps, TModel, TDependencies>;

  private readonly _observers: Observers<TState, TModel, TDependencies>;

  public constructor(
    model: TModel,
    {
      observers = [],
      actions = {},
    }: {
      observers?: TObserver<TDependencies, TState>[];
      actions?: TWrappedActions<TDependencies, TState, TProps>;
    }
  ) {
    this._model = model;

    this._observers = new Observers(model, { observers });
    this._actions = new Actions(model, { actions });
  }

  public get model() {
    return this._model;
  }

  public get observers() {
    return this._observers;
  }

  public get actions() {
    return this._actions.api;
  }
}

export default Store;
