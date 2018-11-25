export class Aircrafts {
  protected maxAmmo: number;
  protected baseDamage: number;
  protected ammoStore: number;

  constructor() {
    this.ammoStore = 0;
  }

  fight(): number {
    let damage = this.ammoStore * this.baseDamage;
    this.ammoStore = 0;
    return damage;
  }

  refill(ammoNumber: number): number {
    let ammoNeeded: number = this.maxAmmo - this.ammoStore;
    if (ammoNumber >= ammoNeeded) {
      this.ammoStore = this.maxAmmo;
      ammoNumber -= ammoNeeded;
    } else {
      this.ammoStore += ammoNumber;
      ammoNumber = 0;
    }
    return ammoNumber;
  }

  getType(): string {
    return this.constructor.name;
  }

  getStatus(): string {
    return (`Type ${this.getType()}, Ammo: ${this.ammoStore}, Base Damage: ${this.baseDamage}, All Damage: ${this.ammoStore * this.baseDamage}`);
  }

  isPriority(): boolean {
    if (this.constructor.name === 'F35') {
      return true;
    } else if (this.constructor.name === 'F16') {
      return false;
    }
  }

  getmaxAmmo(): number {
    return this.maxAmmo;
  }

  getbaseDamage(): number {
    return this.baseDamage;
  }

  getammoStore(): number {
    return this.ammoStore;
  }
}
