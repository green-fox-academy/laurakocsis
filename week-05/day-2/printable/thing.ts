import { Printable } from "./printable";

class Thing implements Printable {
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

  printAllfields() {
    console.log(this);
  }
}

export { Thing };
