import { F16 } from "./F16"
import { F35 } from "./F35"

export class Carrier {
  protected aircrafts: F16[] | F35[];
  protected carrierAmmoStore: number;
  protected healthPoint: number;

  constructor(initialAmmo: number, healthPoint: number) {
    this.aircrafts = [];
    this.carrierAmmoStore = initialAmmo;
    this.healthPoint = healthPoint;
  }

  addAircraft(aircraft: F16 | F35) {
    this.aircrafts.push(aircraft);
  }

  fill() {
    let allAmmosNeeded: number;
    this.aircrafts.forEach(e => {
      return allAmmosNeeded += e.getammoStore()
    });
    if (allAmmosNeeded >= this.carrierAmmoStore) {
      this.aircrafts.forEach(e => {
        e.refill(this.carrierAmmoStore)
      })
    } else if (allAmmosNeeded < this.carrierAmmoStore) {
      
    }
  }
}