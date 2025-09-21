import type {
  TBaseSlice,
  TBaseDependencies,
  TDisposer,
  TObserver,
  TWrappedActions,
  TActions,
} from "./types";

class Store<
  TState = unknown,
  TSlice extends TBaseSlice<TState> = TBaseSlice<TState>,
  TDependencies extends TBaseDependencies = TBaseDependencies
> {
  private readonly slice: TSlice;

  private readonly actions: TActions = {};

  private disposers: TDisposer[] = [];

  public constructor(
    slice: TSlice,
    {
      dependencies,
      observers = [],
      actions = {},
    }: {
      dependencies: TDependencies;
      observers?: TObserver<TDependencies, TState>[];
      actions?: TWrappedActions<TDependencies, TState>;
    }
  ) {
    this.slice = slice;

    this.initActions(actions, dependencies);
    this.initObservers(observers, dependencies);
  }

  public get() {
    return {
      slice: this.slice,
      actions: this.actions,
      destroy: this.destroy,
    };
  }

  private initActions(
    actions: TWrappedActions<TDependencies, TState>,
    dependencies: TDependencies
  ) {
    Object.entries(actions).forEach(([key, action]) => {
      this.actions[key] = action(dependencies, this.slice.getState());
    });
  }

  private initObservers(
    observers: TObserver<TDependencies, TState>[],
    dependencies: TDependencies
  ) {
    observers.forEach((observer) => {
      this.disposers.push(observer(dependencies, this.slice.getState()));
    });
  }

  private destroy() {
    this.disposers.forEach((disposer) => {
      disposer();
    });
    this.disposers = [];
  }
}

export default Store;
