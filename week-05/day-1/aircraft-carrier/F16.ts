import { Aircrafts } from "./aircrafts"

export class F16 extends Aircrafts {

  constructor() {
    super();
    this.maxAmmo = 8;
    this.baseDamage = 30;
  }
}
