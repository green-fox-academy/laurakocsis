'use strict'
export { }

class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, howWide: number, ink: number = 100) {
    this.color = color;
    this.width = howWide;
    this.inkAmount = ink;
  }
  use(): void {
    this.inkAmount -= 1;
  }
}
let sharpie1 = new Sharpie('green', 99);
sharpie1.use()

console.log(sharpie1.inkAmount);