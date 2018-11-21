import { Printable } from "./printable"

export class Domino implements Printable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  printAllfields() {
    console.log(this.values);
  }
}
