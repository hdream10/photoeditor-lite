import type {
  TBaseModel,
  TBaseDependencies,
  TDisposer,
  TObserver,
} from "./types";

class Observers<
  TState = unknown,
  TModel extends TBaseModel<TState> = TBaseModel<TState>,
  TDependencies extends TBaseDependencies = TBaseDependencies
> {
  private readonly observers: TObserver<TDependencies, TState>[];

  private readonly disposers: TDisposer[] = [];

  private readonly model: TModel;

  public constructor(
    model: TModel,
    {
      observers,
    }: {
      observers: TObserver<TDependencies, TState>[];
    }
  ) {
    this.model = model;
    this.observers = observers;
  }

  public run(dependencies: TDependencies) {
    this.observers.forEach((observer) => {
      this.disposers.push(observer(dependencies, this.model.getState()));
    });
  }

  public stop() {
    this.disposers.forEach((dispose) => {
      dispose();
    });
    this.disposers.length = 0;
  }
}

export default Observers;
