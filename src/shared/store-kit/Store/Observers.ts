import type {
  TBaseModel,
  TBaseDependencies,
  TBaseState,
  TDisposer,
  TObserver,
} from "./types";

class Observers<
  TState,
  TModel extends TBaseModel<TState> | undefined,
  TDependencies extends TBaseDependencies
> {
  private readonly observers: TObserver<TDependencies, TBaseState<TModel>>[];

  private readonly disposers: TDisposer[] = [];

  private readonly model: TModel;

  public constructor(
    model: TModel,
    {
      observers,
    }: {
      observers: TObserver<TDependencies, TBaseState<TModel>>[];
    }
  ) {
    this.model = model;
    this.observers = observers;
  }

  public run(dependencies: TDependencies) {
    this.observers.forEach((observer) => {
      this.disposers.push(
        observer(dependencies, this.model?.getState() as TBaseState<TModel>)
      );
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
