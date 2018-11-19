import { Plants } from "./plants"

export class Tree extends Plants {

  constructor(color: string) {
    super(color);
    this.needWaterFrom = 10;
    this.absorption = 0.4;
  }
}
