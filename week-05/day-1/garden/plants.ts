export class Plants {
  color: string;
  waterAmount: number;
  needWaterFrom: number;
  absorption: number;

  constructor(color: string) {
    this.color = color;
    this.waterAmount = 0;
  }

  needWater(): boolean {
    return this.waterAmount <= this.needWaterFrom;
  }
}
