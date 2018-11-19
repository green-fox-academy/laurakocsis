import { Plants } from "./plants"

export class Flower extends Plants {

  constructor(color: string) {
    super(color);
    this.needWaterFrom = 5;
    this.absorption = 0.75;
  }
}
