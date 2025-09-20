import type {
  TBaseSlice,
  TBaseDependencies,
  TDisposer,
  TObserver,
} from "./types";

class Store<
  TState = unknown,
  TSlice extends TBaseSlice<TState> = TBaseSlice<TState>,
  TDependencies extends TBaseDependencies = TBaseDependencies
> {
  private readonly slice: TSlice;

  private readonly dependencies: TDependencies;

  private disposers: TDisposer[] = [];

  public constructor(
    slice: TSlice,
    {
      dependencies,
      observers = [],
    }: {
      dependencies: TDependencies;
      observers?: TObserver<TDependencies, TState>[];
    }
  ) {
    this.slice = slice;
    this.dependencies = dependencies;

    this.initObservers(observers);
  }

  public get() {
    return {
      slice: this.slice,
      destroy: this.destroy,
    };
  }

  private initObservers(observers: TObserver<TDependencies, TState>[]) {
    observers.forEach((observer) => {
      this.disposers.push(observer(this.dependencies, this.slice.getState()));
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
