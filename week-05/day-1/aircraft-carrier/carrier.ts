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

  addAircraft(aircraft: F16 | F35): void {
    this.aircrafts.push(aircraft);
  }

  fill(): void {
    let allAmmosNeeded: number = 0;
    this.aircrafts.forEach(e => {
      allAmmosNeeded += e.getmaxAmmo();
    });
    if (this.carrierAmmoStore === 0) {
      throw console.log('There is no ammo in the store.');
    }
    else {
      if (allAmmosNeeded <= this.carrierAmmoStore) {
        this.aircrafts.forEach(e => {
          this.carrierAmmoStore = e.refill(this.carrierAmmoStore);
        });
      } else {
        this.aircrafts.forEach(e => {
          if (e.isPriority() && this.carrierAmmoStore > 0) {
            this.carrierAmmoStore = e.refill(this.carrierAmmoStore);
          }
        });
        this.aircrafts.forEach(e => {
          if (!(e.isPriority()) && this.carrierAmmoStore > 0) {
            this.carrierAmmoStore = e.refill(this.carrierAmmoStore);
          }
        });
      }
    }
  }


  getStatus(): void {
    if (this.healthPoint === 0) {
      console.log('It\'s dead Jim :(');
    }
    else {
      console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.carrierAmmoStore}, Total damage: ${this.totalDamage()}`);
      this.aircrafts.forEach(e => {
        console.log(e.getStatus());
      });
    }
  }

  totalDamage(): number {
    let totalDamage: number = 0;
    this.aircrafts.forEach(e => {
      totalDamage += e.getammoStore() * e.getbaseDamage();
    });
    return totalDamage;
  }
}
