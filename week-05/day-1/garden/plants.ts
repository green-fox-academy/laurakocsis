export class Plants {
  protected color: string;
  protected waterAmount: number;
  protected needWaterFrom: number;
  protected absorption: number;

  constructor(color: string) {
    this.color = color;
    this.waterAmount = 0;
  }

  needWater(): boolean {
    return this.waterAmount <= this.needWaterFrom;
  }

  getColor() {
    return this.color;
  }

  setWaterAmount(amount) {
    return this.waterAmount += amount;
  }

  getAbsorption() {
    return this.absorption;
  }
}
