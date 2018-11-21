import { Comparable } from "./compare"

class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  compareTo(domino: Domino): number {
    return this.values[0] - domino.values[0];
  }
}

export { Domino };
