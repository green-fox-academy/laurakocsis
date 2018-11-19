import { Aircrafts } from "./aircrafts"

export class F35 extends Aircrafts {

  constructor() {
    super();
    this.maxAmmo = 12;
    this.baseDamage = 50;
  }
}
