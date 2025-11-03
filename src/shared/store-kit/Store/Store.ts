import Actions from "./Actions";
import Observers from "./Observers";
import type {
  TBaseModel,
  TBaseDependencies,
  TBaseState,
  TObserver,
  TWrappedAction,
} from "./types";

class Store<
  TState = unknown,
  TModel extends TBaseModel<TState> | undefined =
    | TBaseModel<TState>
    | undefined,
  TActionFactories extends Record<string, TWrappedAction<TModel, any>> = Record<
    string,
    TWrappedAction<TModel, any>
  >,
  TObserverDependencies extends TBaseDependencies = TBaseDependencies
> {
  private readonly _model: TModel;

  private readonly _actions: Actions<TState, TModel, TActionFactories>;

  private readonly _observers: Observers<TState, TModel, TObserverDependencies>;

  public constructor(
    model: TModel,
    {
      actions,
      observers = [],
    }: {
      actions: TActionFactories;
      observers?: TObserver<TObserverDependencies, TBaseState<TModel>>[];
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
    return this._actions;
  }
}

export default Store;
