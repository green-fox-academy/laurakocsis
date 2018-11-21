import { Comparable } from "./compare";

class Thing implements Comparable {
  private _name: string;
  private completed: boolean;

  constructor(_name: string) {
    this._name = _name;
    this.completed = false;
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

  compareTo(thing: Thing): number {
    if (this.completed > thing.completed) {
      return -1;
    } else if (this.completed < thing.completed) {
      return 1;
    } else {
      return 0;
    }
  }
}

export { Thing };
