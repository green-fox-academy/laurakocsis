class Thing {
  private _name: string;
  private completed: boolean;

  constructor(_name: string) {
    this._name = _name;
  }

  public complete() {
    this.completed = true;
    return this;
  }

  name() {
    return this._name;
  }

  isCompleted() {
    return this.completed;
  }
}

export { Thing };
